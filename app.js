const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const functionNames = Object.keys(FUNCTIONS);
const typeLabels = {
  close: "Close match",
  adjacent: "Adjacent move",
  multi: "Multi-step route",
  same: "Current function"
};

const typeExplanations = {
  close: "There is strong capability overlap. The main development need is learning the target function's specialist context.",
  adjacent: "Several capabilities transfer directly, with a more substantial specialist-knowledge gap to build.",
  multi: "This is one of the small number of moves where an intermediary function may be a more realistic bridge into the specialist work.",
  same: "You selected the same function. Use the profile below to think about deepening, broadening or specialising within it."
};

const developmentRecommendations = {
  close: "Start with targeted exposure to the new functional context; you may not need a long development sequence.",
  adjacent: "Combine practical exposure with a stretch opportunity that lets you use existing capabilities in the new context.",
  multi: "Build the technical or specialist layer deliberately, using the suggested bridge function only where it adds genuinely useful experience.",
  same: "Choose development that deepens expertise, broadens responsibility or builds a new specialism."
};

const suggestedDevelopmentModes = {
  close: ["punt", "walk"],
  adjacent: ["walk", "cycle"],
  multi: ["cycle", "train"],
  same: ["cycle"]
};

let currentComparison = null;
let currentMapFilter = "all";
let selectedNode = null;
let selectedRoute = null;
let highlightedPath = [];
let skillView = "transferable";
let selectedDevelopmentActivities = [];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function routeKey(a, b) {
  return [a, b].sort().join("::");
}

function routeBetween(source, target) {
  return ROUTES.find(route => routeKey(route.a, route.b) === routeKey(source, target)) || null;
}

function otherEnd(route, source) {
  return route.a === source ? route.b : route.a;
}

function pathForRoute(route, source, target) {
  if (!route || route.type !== "multi") return [source, target];
  const via = route.a === source ? route.via : [...route.via].reverse();
  return [source, ...via, target];
}

function sharedCapabilities(source, target) {
  const targetSet = new Set(FUNCTIONS[target].capabilities);
  return FUNCTIONS[source].capabilities.filter(capability => targetSet.has(capability));
}

function populateSelects() {
  const current = $("#currentFunction");
  const dream = $("#dreamFunction");
  const filter = $("#skillFunctionFilter");

  functionNames.forEach(name => {
    current.add(new Option(name, name));
    dream.add(new Option(name, name));
    filter.add(new Option(name, name));
  });
}

function comparisonFor(source, target) {
  if (source === target) {
    return {
      source,
      target,
      type: "same",
      route: null,
      path: [source],
      transfers: FUNCTIONS[source].capabilities,
      specialist: FUNCTIONS[source].specialist
    };
  }

  const route = routeBetween(source, target);
  return {
    source,
    target,
    type: route ? route.type : "adjacent",
    route,
    path: route ? pathForRoute(route, source, target) : [source, target],
    transfers: sharedCapabilities(source, target),
    specialist: FUNCTIONS[target].specialist
  };
}

function renderChips(target, items) {
  target.innerHTML = items.length
    ? items.map(item => `<span class="chip">${escapeHTML(item)}</span>`).join("")
    : `<span class="chip">No direct capability overlap listed</span>`;
}

function renderSkillList(target, items) {
  target.innerHTML = items.length
    ? items.map(item => `<div class="skill-list__item">${escapeHTML(item)}</div>`).join("")
    : `<div class="skill-list__item">No items listed.</div>`;
}

function renderSpecialistList(target, items) {
  target.innerHTML = items.length
    ? items.map(item => `
        <div class="knowledge-item">
          <strong>${escapeHTML(item.name)}</strong>
          <p>${escapeHTML(item.description)}</p>
        </div>
      `).join("")
    : `<div class="knowledge-item"><strong>No specialist knowledge listed</strong></div>`;
}

function updateMapButton() {
  const ready = Boolean($("#currentFunction").value && $("#dreamFunction").value);
  $("#showOnMapBtn").disabled = !ready;
}

function runComparison() {
  const source = $("#currentFunction").value;
  const target = $("#dreamFunction").value;
  updateMapButton();

  if (!source || !target) {
    currentComparison = null;
    $("#matchEmpty").hidden = false;
    $("#matchResults").hidden = true;
    updateDevelopmentContext();
    return;
  }

  currentComparison = comparisonFor(source, target);
  $("#matchEmpty").hidden = true;
  $("#matchResults").hidden = false;

  $("#matchTitle").textContent = `${source} → ${target}`;
  const badge = $("#matchBadge");
  badge.textContent = typeLabels[currentComparison.type];
  badge.dataset.type = currentComparison.type;
  $("#matchExplanation").textContent = typeExplanations[currentComparison.type];
  $("#developmentRecommendation").textContent = developmentRecommendations[currentComparison.type];

  renderChips($("#transferSkills"), currentComparison.transfers);
  renderSpecialistList($("#gapSkills"), currentComparison.specialist);

  $("#currentRoleName").textContent = source;
  $("#dreamRoleName").textContent = target;
  renderSkillList($("#currentCapabilities"), FUNCTIONS[source].capabilities);
  renderSkillList($("#dreamCapabilities"), FUNCTIONS[target].capabilities);
  renderSpecialistList($("#dreamSpecialist"), FUNCTIONS[target].specialist);
  updateDevelopmentContext();
}

function tryExample() {
  $("#currentFunction").value = "Alumni Engagement — Volunteering";
  $("#dreamFunction").value = "Development / Fundraising";
  runComparison();
}

/* -------------------- Movement map -------------------- */

function svgEl(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  return node;
}

function curvePath(sourcePos, targetPos, index = 0) {
  const [x1, y1] = sourcePos;
  const [x2, y2] = targetPos;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
  const offset = (index % 2 === 0 ? 1 : -1) * Math.min(16, length * 0.035);
  const cx = mx - (dy / length) * offset;
  const cy = my + (dx / length) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function buildMap() {
  const edgeLayer = $("#edgeLayer");
  const nodeLayer = $("#nodeLayer");
  edgeLayer.innerHTML = "";
  nodeLayer.innerHTML = "";

  ROUTES.forEach((route, index) => {
    if (route.type === "multi") return;
    const sourcePos = NODE_POSITIONS[route.a];
    const targetPos = NODE_POSITIONS[route.b];
    if (!sourcePos || !targetPos) return;

    edgeLayer.appendChild(svgEl("path", {
      d: curvePath(sourcePos, targetPos, index),
      class: "map-edge",
      "data-route-index": index,
      "data-type": route.type,
      fill: "none"
    }));
  });

  functionNames.forEach(name => {
    const [x, y] = NODE_POSITIONS[name];
    const group = svgEl("g", {
      class: "map-node",
      transform: `translate(${x} ${y})`,
      tabindex: "0",
      role: "button",
      "aria-label": `Select ${name}`,
      "data-node": name
    });

    group.appendChild(svgEl("circle", { cx: 0, cy: 0, r: 52 }));

    const lines = MAP_LABELS[name] || [name];
    const fontSize = lines.some(line => line.length > 13) ? 10 : 11;
    const lineHeight = 13;
    lines.forEach((line, index) => {
      const text = svgEl("text", {
        x: 0,
        y: (index - (lines.length - 1) / 2) * lineHeight + 4,
        "font-size": fontSize
      });
      text.textContent = line;
      group.appendChild(text);
    });

    group.addEventListener("click", () => selectMapNode(name));
    group.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectMapNode(name);
      }
    });
    nodeLayer.appendChild(group);
  });

  updateMapVisuals();
}

function routeMatchesFilter(route) {
  if (currentMapFilter === "all") return true;
  return route.type === currentMapFilter;
}

function routesForNode(name) {
  return ROUTES
    .filter(route => route.a === name || route.b === name)
    .filter(routeMatchesFilter)
    .sort((left, right) => {
      const order = { close: 0, adjacent: 1, multi: 2 };
      const typeDifference = order[left.type] - order[right.type];
      if (typeDifference) return typeDifference;
      return otherEnd(left, name).localeCompare(otherEnd(right, name));
    });
}

function renderRouteOptions() {
  if (!selectedNode) return;
  const routes = routesForNode(selectedNode);
  $("#selectedNodeIntro").textContent = routes.length
    ? `${routes.length} movement${routes.length === 1 ? "" : "s"} match the current filter.`
    : "No movements match this filter.";

  $("#routeOptions").innerHTML = routes.map(route => {
    const target = otherEnd(route, selectedNode);
    const routeIndex = ROUTES.indexOf(route);
    return `
      <button class="route-option" type="button" data-route-index="${routeIndex}" data-route-target="${escapeHTML(target)}">
        <b>${escapeHTML(target)}</b>
        <span>${typeLabels[route.type]}</span>
      </button>
    `;
  }).join("");

  $$(".route-option", $("#routeOptions")).forEach(button => {
    button.addEventListener("click", () => {
      const route = ROUTES[Number(button.dataset.routeIndex)];
      selectRoute(route, button.dataset.routeTarget, button);
    });
  });
}

function selectMapNode(name) {
  selectedNode = name;
  selectedRoute = null;
  highlightedPath = [];
  $("#selectedNodeTitle").textContent = name;
  $("#selectedRouteDetail").hidden = true;
  renderRouteOptions();
  updateMapVisuals();
}

function selectRoute(route, target, button) {
  selectedRoute = { route, source: selectedNode, target };
  highlightedPath = pathForRoute(route, selectedNode, target);
  $$(".route-option").forEach(item => item.classList.remove("is-active"));
  if (button) button.classList.add("is-active");

  const badge = $("#routeDetailBadge");
  badge.textContent = typeLabels[route.type];
  badge.dataset.type = route.type;
  $("#routeDetailTitle").textContent = `${selectedNode} → ${target}`;

  const transfers = sharedCapabilities(selectedNode, target);
  $("#routeDetailTransfers").innerHTML = transfers.length
    ? transfers.map(item => `<li>${escapeHTML(item)}</li>`).join("")
    : `<li>No direct capability overlap listed</li>`;

  $("#routeDetailGap").innerHTML = FUNCTIONS[target].specialist
    .map(item => `<li><b>${escapeHTML(item.name)}</b><small>${escapeHTML(item.description)}</small></li>`)
    .join("");

  const note = $("#routeDetailNote");
  if (route.type === "multi") {
    note.hidden = false;
    note.textContent = `Suggested bridge: ${highlightedPath.join(" → ")}.`;
  } else {
    note.hidden = true;
    note.textContent = "";
  }

  $("#selectedRouteDetail").hidden = false;
  updateMapVisuals();
}

function pathHasLeg(a, b) {
  return highlightedPath.some((name, index) =>
    index < highlightedPath.length - 1 &&
    routeKey(name, highlightedPath[index + 1]) === routeKey(a, b)
  );
}

function updateMapVisuals() {
  const destinations = selectedNode ? routesForNode(selectedNode).map(route => otherEnd(route, selectedNode)) : [];

  $$(".map-node").forEach(node => {
    const name = node.dataset.node;
    node.classList.toggle("is-selected", name === selectedNode);
    node.classList.toggle("is-destination", destinations.includes(name));
    node.classList.toggle("is-path", highlightedPath.includes(name));
  });

  $$(".map-edge").forEach(path => {
    const route = ROUTES[Number(path.dataset.routeIndex)];
    const isPath = pathHasLeg(route.a, route.b);
    let visible;

    if (selectedNode) {
      const touchesSelected = route.a === selectedNode || route.b === selectedNode;
      visible = (touchesSelected && routeMatchesFilter(route)) || isPath;
    } else if (currentMapFilter === "all") {
      visible = route.type === "close";
    } else {
      visible = route.type === currentMapFilter;
    }

    path.classList.toggle("is-hidden", !visible);
    path.classList.toggle("is-path", isPath);
    path.classList.toggle("is-active", Boolean(
      selectedRoute &&
      selectedRoute.route.type !== "multi" &&
      routeKey(route.a, route.b) === routeKey(selectedRoute.source, selectedRoute.target)
    ));
  });
}

function showComparisonOnMap() {
  if (!currentComparison) return;
  currentMapFilter = "all";
  $$(".filter-btn[data-map-filter]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.mapFilter === "all");
  });

  selectMapNode(currentComparison.source);
  if (currentComparison.source !== currentComparison.target && currentComparison.route) {
    const button = $$(".route-option").find(item => item.dataset.routeTarget === currentComparison.target);
    selectRoute(currentComparison.route, currentComparison.target, button || null);
  }
  $("#movement-map").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetMap() {
  selectedNode = null;
  selectedRoute = null;
  highlightedPath = [];
  currentMapFilter = "all";
  $("#selectedNodeTitle").textContent = "Choose a function";
  $("#selectedNodeIntro").textContent = "Its possible movements will appear here.";
  $("#routeOptions").innerHTML = "";
  $("#selectedRouteDetail").hidden = true;
  $$(".filter-btn[data-map-filter]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.mapFilter === "all");
  });
  updateMapVisuals();
}

/* -------------------- Skills bank -------------------- */

function masterCapabilityDefinition(name) {
  return MASTER_CAPABILITIES.find(item => item.name === name)?.definition || "";
}

function bankItems() {
  const selectedFunction = $("#skillFunctionFilter").value;
  const functions = selectedFunction === "all" ? functionNames : [selectedFunction];

  if (skillView === "transferable") {
    const allowed = selectedFunction === "all" ? null : new Set(FUNCTIONS[selectedFunction].capabilities);
    return MASTER_CAPABILITIES
      .filter(item => !allowed || allowed.has(item.name))
      .map(item => ({
        name: item.name,
        definition: item.definition,
        meta: "Transferable capability",
        functionName: selectedFunction === "all" ? "Shared capability language" : selectedFunction
      }));
  }

  if (skillView === "specialist") {
    return functions.flatMap(functionName => FUNCTIONS[functionName].specialist.map(item => ({
      name: item.name,
      definition: item.description,
      meta: "Specialist knowledge",
      functionName
    })));
  }

  return functions.flatMap(functionName => FUNCTIONS[functionName].appliedSkills.map(item => ({
    name: item.name,
    definition: item.definition,
    meta: "Applied by function",
    functionName
  })));
}

function renderSkillsBank() {
  const query = $("#skillSearch").value.trim().toLowerCase();
  let items = bankItems();

  if (query) {
    items = items.filter(item =>
      `${item.name} ${item.definition} ${item.functionName}`.toLowerCase().includes(query)
    );
  }

  const grid = $("#skillsBankGrid");
  if (!items.length) {
    grid.innerHTML = `<div class="no-results card">No skills matched that search. Try a broader term or switch views.</div>`;
    return;
  }

  grid.innerHTML = items.map((item, index) => `
    <article class="skill-card">
      <div class="skill-card__meta">
        <span>${escapeHTML(item.meta)}</span>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.definition)}</p>
      <div class="function-name">${escapeHTML(item.functionName)}</div>
    </article>
  `).join("");
}

/* -------------------- Development route -------------------- */

function updateDevelopmentContext() {
  $$('[data-mode-card]').forEach(card => card.classList.remove("is-suggested"));

  if (!currentComparison) {
    $("#developmentContextTitle").textContent = "Explore development options";
    $("#developmentContextText").textContent = "Choose the experiences that make sense for your role, goals and circumstances. You do not need to complete every stage.";
    return;
  }

  $("#developmentContextTitle").textContent = `${currentComparison.source} → ${currentComparison.target}`;
  const specialistNames = currentComparison.specialist.slice(0, 3).map(item => item.name);
  $("#developmentContextText").textContent = specialistNames.length
    ? `You are building towards: ${specialistNames.join(" · ")}. The highlighted modes are possible places to start, not required stages.`
    : "Use the options below to choose experiences that support your next step.";

  (suggestedDevelopmentModes[currentComparison.type] || []).forEach(mode => {
    const card = $(`[data-mode-card="${mode}"]`);
    if (card) card.classList.add("is-suggested");
  });
}

function developmentKey(button) {
  return `${button.dataset.mode}::${button.dataset.activity}`;
}

function renderSelectedDevelopmentActivities() {
  const target = $("#selectedDevelopmentActivities");
  if (!selectedDevelopmentActivities.length) {
    target.innerHTML = '<span class="selected-activities__empty">No activities selected yet.</span>';
    return;
  }

  target.innerHTML = selectedDevelopmentActivities.map(item => `
    <button class="selected-activity" type="button" data-selected-key="${escapeHTML(item.key)}" title="Remove from route">
      ${escapeHTML(item.activity)} ×
    </button>
  `).join("");

  $$('[data-selected-key]', target).forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.selectedKey;
      selectedDevelopmentActivities = selectedDevelopmentActivities.filter(item => item.key !== key);
      $$(".development-activity").forEach(source => {
        if (developmentKey(source) === key) source.classList.remove("is-selected");
      });
      renderSelectedDevelopmentActivities();
    });
  });
}

function toggleDevelopmentActivity(button) {
  const key = developmentKey(button);
  const existing = selectedDevelopmentActivities.find(item => item.key === key);
  if (existing) {
    selectedDevelopmentActivities = selectedDevelopmentActivities.filter(item => item.key !== key);
    button.classList.remove("is-selected");
  } else {
    selectedDevelopmentActivities.push({ key, mode: button.dataset.mode, activity: button.dataset.activity });
    button.classList.add("is-selected");
  }
  renderSelectedDevelopmentActivities();
}

function openDevelopmentRoute() {
  updateDevelopmentContext();
  $("#development-route").scrollIntoView({ behavior: "smooth", block: "start" });
}

function clearDevelopmentRoute() {
  selectedDevelopmentActivities = [];
  $$(".development-activity").forEach(button => button.classList.remove("is-selected"));
  renderSelectedDevelopmentActivities();
}

/* -------------------- Journey examples -------------------- */

function renderJourneys() {
  $("#journeyList").innerHTML = JOURNEYS.map((journey, index) => `
    <article class="journey" id="${escapeHTML(journey.id)}">
      <button class="journey__button" type="button" aria-expanded="false">
        <span class="journey__number">${String(index + 1).padStart(2, "0")}</span>
        <span class="journey__route">
          ${journey.route.map((stop, stopIndex) =>
            `<span>${escapeHTML(stop)}</span>${stopIndex < journey.route.length - 1 ? "<i>→</i>" : ""}`
          ).join("")}
        </span>
        <span class="journey__toggle" aria-hidden="true">+</span>
      </button>
      <div class="journey__body">
        <h3>${escapeHTML(journey.title)}</h3>
        <p>${escapeHTML(journey.story)}</p>
        <div class="journey__insights">
          <div><span>What carried across</span><ul>${journey.transfers.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
          <div><span>What was built</span><ul>${journey.built.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
        </div>
        <div class="value-callout"><b>Why it matters</b><span>${escapeHTML(journey.value)}</span></div>
      </div>
    </article>
  `).join("");

  $$(".journey__button").forEach(button => {
    button.addEventListener("click", () => {
      const journey = button.closest(".journey");
      const wasOpen = journey.classList.contains("is-open");
      $$(".journey").forEach(item => {
        item.classList.remove("is-open");
        $(".journey__button", item).setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        journey.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function bindEvents() {
  $("#showOnMapBtn").addEventListener("click", showComparisonOnMap);
  $("#exampleBtn").addEventListener("click", tryExample);

  ["#currentFunction", "#dreamFunction"].forEach(selector => {
    $(selector).addEventListener("change", runComparison);
  });

  $$(".filter-btn[data-map-filter]").forEach(button => {
    button.addEventListener("click", () => {
      currentMapFilter = button.dataset.mapFilter;
      $$(".filter-btn[data-map-filter]").forEach(item => item.classList.toggle("is-active", item === button));
      selectedRoute = null;
      highlightedPath = [];
      $("#selectedRouteDetail").hidden = true;
      if (selectedNode) renderRouteOptions();
      updateMapVisuals();
    });
  });
  $("#resetMapBtn").addEventListener("click", resetMap);

  $("#skillSearch").addEventListener("input", renderSkillsBank);
  $("#skillFunctionFilter").addEventListener("change", renderSkillsBank);
  $$('[data-skill-view]').forEach(button => {
    button.addEventListener("click", () => {
      skillView = button.dataset.skillView;
      $$('[data-skill-view]').forEach(item => item.classList.toggle("is-active", item === button));
      renderSkillsBank();
    });
  });

  $("#buildRouteBtn").addEventListener("click", openDevelopmentRoute);
  $$(".development-activity").forEach(button => {
    button.addEventListener("click", () => toggleDevelopmentActivity(button));
  });
  $("#clearDevelopmentRoute").addEventListener("click", clearDevelopmentRoute);
}

populateSelects();
buildMap();
renderSkillsBank();
renderJourneys();
renderSelectedDevelopmentActivities();
updateDevelopmentContext();
updateMapButton();
bindEvents();
