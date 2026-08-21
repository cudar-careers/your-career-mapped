
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const functionNames = Object.keys(FUNCTIONS);
const typeLabels = {
  close: "Close match",
  adjacent: "Adjacent move",
  stretch: "Stretch move",
  multi: "Multi-step route",
  same: "Current function"
};
const typeExplanations = {
  close: "You already possess many of the capabilities required. The main development need is learning the new functional context.",
  adjacent: "Several important capabilities transfer, but the move also needs new knowledge and some applied experience.",
  stretch: "There is a transferable foundation, but significant technical or specialist development would be required.",
  multi: "There is no single direct route in the map, but the network shows a credible sequence of cross-functional moves.",
  same: "You selected the same function. Use the skill set below to think about deepening rather than moving."
};

const DEVELOPMENT_MODES = {
  punt: {
    icon: "🚣",
    mode: "Punting",
    title: "Explore & discover",
    description: "Low-commitment ways to understand another function, reflect on your interests and discover possible routes.",
    activities: [
      "Career conversations",
      "Networking",
      "Industry knowledge",
      "Reflection time",
      "LinkedIn Learning",
      "Online courses",
      "Drop-ins",
      "Forums",
      "Podcasts / books / articles",
      "Career pathway exploration using these tools"
    ]
  },
  walk: {
    icon: "🚶",
    mode: "Walking",
    title: "Build capability",
    description: "Structured learning and exposure that develops confidence, knowledge and credibility before a bigger stretch.",
    activities: [
      "Workshops",
      "Conferences",
      "Job swaps / visits",
      "Action learning / peer learning",
      "Communities of practice",
      "Cross-team working groups",
      "Skills clinics",
      "Volunteering",
      "Lunch & learns",
      "Professional qualifications"
    ]
  },
  cycle: {
    icon: "🚲",
    mode: "Cycling",
    title: "Stretch & broaden",
    description: "Practise transferable capabilities in a new context and take on work that gives you evidence of readiness.",
    activities: [
      "Stretch projects",
      "Extra responsibilities",
      "Mentoring",
      "Shadowing",
      "Coaching",
      "Cross-functional projects",
      "Presenting / leading work",
      "Mentoring others"
    ]
  },
  train: {
    icon: "🚆",
    mode: "Train",
    title: "Experience another role",
    description: "Formal or substantial opportunities to work inside another role or function and make a more significant career move.",
    activities: [
      "Rotations",
      "Internal secondments",
      "FTCs / temporary assignments",
      "Apprenticeship",
      "Internal moves",
      "External secondments"
    ]
  }
};

const DEVELOPMENT_RECOMMENDATIONS = {
  close: {mode: "walk", text: "This is a close match. Start by building destination-specific context, then use a stretch experience if you want evidence before moving."},
  adjacent: {mode: "cycle", text: "This is an adjacent move. A cross-functional project, stretch assignment or shadowing experience can help you apply your existing capabilities in the new context."},
  stretch: {mode: "walk", text: "This is a stretch move. Build the technical or specialist foundation first, then progress into supervised stretch work before a formal move."},
  multi: {mode: "punt", text: "This route has more than one bridge. Start by exploring the first adjacent function, then build experience one movement at a time."},
  same: {mode: "cycle", text: "You can use the same framework to deepen or broaden within your current function through stretch work, leadership and specialist experiences."}
};

let currentComparison = null;
let currentMapFilter = "all";
let selectedNode = null;
let selectedRoute = null;
let highlightedPath = [];
let skillView = "transferable";
let activeDevelopmentMode = "punt";
const selectedDevelopmentActivities = new Set();

function populateSelects() {
  const current = $("#currentFunction");
  const dream = $("#dreamFunction");
  const filter = $("#skillFunctionFilter");

  functionNames.forEach(name => {
    const a = new Option(name, name);
    const b = new Option(name, name);
    const c = new Option(name, name);
    current.add(a);
    dream.add(b);
    filter.add(c);
  });
}

function findDirectEdge(source, target) {
  const matches = EDGES.filter(e => e.source === source && e.target === target);
  if (!matches.length) return null;
  const rank = {close: 0, adjacent: 1, stretch: 2};
  return [...matches].sort((a,b) => rank[a.type] - rank[b.type])[0];
}

function findShortestPath(source, target) {
  if (source === target) return [source];
  const queue = [[source]];
  const visited = new Set([source]);

  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    const neighbors = [...new Set(EDGES.filter(e => e.source === node).map(e => e.target))];
    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;
      const nextPath = [...path, neighbor];
      if (neighbor === target) return nextPath;
      visited.add(neighbor);
      queue.push(nextPath);
    }
  }
  return [];
}

function edgeForLeg(source, target) {
  return findDirectEdge(source, target);
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function comparisonFor(source, target) {
  if (source === target) {
    return {
      source, target, type: "same",
      path: [source],
      transfers: FUNCTIONS[source].capabilities,
      gaps: FUNCTIONS[source].specialist,
      edges: []
    };
  }

  const direct = findDirectEdge(source, target);
  if (direct) {
    return {
      source, target, type: direct.type,
      path: [source, target],
      transfers: direct.transfers,
      gaps: direct.gap,
      edges: [direct]
    };
  }

  const path = findShortestPath(source, target);
  if (!path.length) {
    return {
      source, target, type: "multi",
      path: [source, target],
      transfers: FUNCTIONS[source].capabilities.slice(0, 6),
      gaps: FUNCTIONS[target].specialist,
      edges: []
    };
  }

  const pathEdges = [];
  for (let i = 0; i < path.length - 1; i++) {
    const edge = edgeForLeg(path[i], path[i + 1]);
    if (edge) pathEdges.push(edge);
  }
  return {
    source, target, type: "multi",
    path,
    transfers: unique(pathEdges.flatMap(e => e.transfers)).slice(0, 12),
    gaps: unique(pathEdges.flatMap(e => e.gap)).slice(0, 14),
    edges: pathEdges
  };
}

function renderChips(target, items) {
  target.innerHTML = items.length
    ? items.map(item => `<span class="chip">${escapeHTML(item)}</span>`).join("")
    : `<span class="chip">No specific items listed</span>`;
}

function renderSkillList(target, items) {
  target.innerHTML = items.length
    ? items.map(item => `<div class="skill-list__item">${escapeHTML(item)}</div>`).join("")
    : `<div class="skill-list__item">No items listed in the source map.</div>`;
}

function renderPath(target, path) {
  target.innerHTML = path.map((name, i) => {
    const node = `<span class="route-path__node">${escapeHTML(SHORT_LABELS[name] || name)}</span>`;
    const arrow = i < path.length - 1 ? `<span class="route-path__arrow">→</span>` : "";
    return node + arrow;
  }).join("");
}

function renderDevelopmentMode(modeKey, {scroll = false} = {}) {
  const mode = DEVELOPMENT_MODES[modeKey] || DEVELOPMENT_MODES.punt;
  activeDevelopmentMode = modeKey in DEVELOPMENT_MODES ? modeKey : "punt";

  $$("[data-development-mode]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.developmentMode === activeDevelopmentMode);
  });

  $("#developmentPanelIcon").textContent = mode.icon;
  $("#developmentPanelMode").textContent = mode.mode;
  $("#developmentPanelTitle").textContent = mode.title;
  $("#developmentPanelDescription").textContent = mode.description;
  $("#developmentActivities").innerHTML = mode.activities.map(activity => `
    <button class="activity-card ${selectedDevelopmentActivities.has(activity) ? "is-selected" : ""}" type="button" data-development-activity="${escapeHTML(activity)}">
      <span>${escapeHTML(activity)}</span>
      <i aria-hidden="true">${selectedDevelopmentActivities.has(activity) ? "✓" : "+"}</i>
    </button>
  `).join("");

  $$("[data-development-activity]", $("#developmentActivities")).forEach(button => {
    button.addEventListener("click", () => {
      const activity = button.dataset.developmentActivity;
      if (selectedDevelopmentActivities.has(activity)) selectedDevelopmentActivities.delete(activity);
      else selectedDevelopmentActivities.add(activity);
      renderDevelopmentMode(activeDevelopmentMode);
      renderSelectedDevelopmentRoute();
    });
  });

  if (scroll) $("#development-route").scrollIntoView({behavior: "smooth", block: "start"});
}

function renderSelectedDevelopmentRoute() {
  const target = $("#selectedDevelopmentActivities");
  if (!selectedDevelopmentActivities.size) {
    target.innerHTML = `<span class="selected-activities__empty">Nothing selected yet — choose any activity above.</span>`;
    return;
  }
  target.innerHTML = [...selectedDevelopmentActivities].map(activity => `
    <button type="button" class="selected-activity" data-remove-development="${escapeHTML(activity)}">
      ${escapeHTML(activity)} <span aria-hidden="true">×</span>
    </button>
  `).join("");
  $$('[data-remove-development]', target).forEach(button => {
    button.addEventListener("click", () => {
      selectedDevelopmentActivities.delete(button.dataset.removeDevelopment);
      renderSelectedDevelopmentRoute();
      renderDevelopmentMode(activeDevelopmentMode);
    });
  });
}

function updateDevelopmentContext(comparison) {
  const recommendation = DEVELOPMENT_RECOMMENDATIONS[comparison.type] || DEVELOPMENT_RECOMMENDATIONS.adjacent;
  $("#developmentRecommendation").textContent = recommendation.text;
  $("#developmentContextTitle").textContent = `${SHORT_LABELS[comparison.source] || comparison.source} → ${SHORT_LABELS[comparison.target] || comparison.target}`;
  $("#developmentContextText").textContent = recommendation.text;
}

function openDevelopmentForComparison() {
  if (!currentComparison) return;
  const recommendation = DEVELOPMENT_RECOMMENDATIONS[currentComparison.type] || DEVELOPMENT_RECOMMENDATIONS.adjacent;
  updateDevelopmentContext(currentComparison);
  renderDevelopmentMode(recommendation.mode, {scroll: true});
}

function runComparison() {
  const source = $("#currentFunction").value;
  const target = $("#dreamFunction").value;
  if (!source || !target) {
    $("#matchEmpty").hidden = false;
    $("#matchResults").hidden = true;
    return;
  }

  currentComparison = comparisonFor(source, target);
  $("#matchEmpty").hidden = true;
  $("#matchResults").hidden = false;

  $("#matchTitle").textContent = `${SHORT_LABELS[source] || source} → ${SHORT_LABELS[target] || target}`;
  const badge = $("#matchBadge");
  badge.textContent = typeLabels[currentComparison.type];
  badge.dataset.type = currentComparison.type;
  $("#matchExplanation").textContent = typeExplanations[currentComparison.type];

  renderPath($("#routePath"), currentComparison.path);
  renderChips($("#transferSkills"), currentComparison.transfers);
  renderChips($("#gapSkills"), currentComparison.gaps);

  $("#currentRoleName").textContent = source;
  $("#dreamRoleName").textContent = target;
  renderSkillList($("#currentCapabilities"), FUNCTIONS[source].capabilities);
  renderSkillList($("#dreamCapabilities"), FUNCTIONS[target].capabilities);
  renderSkillList($("#dreamSpecialist"), FUNCTIONS[target].specialist);
  updateDevelopmentContext(currentComparison);
}

function tryExample() {
  $("#currentFunction").value = "Alumni Engagement — Volunteering";
  $("#dreamFunction").value = "Development / Fundraising";
  runComparison();
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
  const length = Math.max(Math.sqrt(dx*dx + dy*dy), 1);
  const offset = (index % 2 === 0 ? 1 : -1) * Math.min(18, length * .035);
  const cx = mx - (dy / length) * offset;
  const cy = my + (dx / length) * offset;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function buildMap() {
  const edgeLayer = $("#edgeLayer");
  const nodeLayer = $("#nodeLayer");
  edgeLayer.innerHTML = "";
  nodeLayer.innerHTML = "";

  const pairCount = new Map();

  EDGES.forEach((edge, i) => {
    if (!NODE_POSITIONS[edge.source] || !NODE_POSITIONS[edge.target]) return;
    const pairKey = [edge.source, edge.target].sort().join("::");
    const pairIndex = pairCount.get(pairKey) || 0;
    pairCount.set(pairKey, pairIndex + 1);

    const path = svgEl("path", {
      d: curvePath(NODE_POSITIONS[edge.source], NODE_POSITIONS[edge.target], pairIndex),
      class: "map-edge",
      "data-source": edge.source,
      "data-target": edge.target,
      "data-type": edge.type,
      "data-edge-index": i,
      fill: "none"
    });
    edgeLayer.appendChild(path);
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

    const circle = svgEl("circle", {cx: 0, cy: 0, r: 42});
    group.appendChild(circle);

    const label = SHORT_LABELS[name] || name;
    const words = label.split(" ");
    const lines = [];
    let line = "";
    words.forEach(word => {
      if ((line + " " + word).trim().length > 16 && line) {
        lines.push(line);
        line = word;
      } else {
        line = (line + " " + word).trim();
      }
    });
    if (line) lines.push(line);

    lines.slice(0,3).forEach((text, idx) => {
      const t = svgEl("text", {x: 0, y: (idx - (Math.min(lines.length,3)-1)/2) * 13 + 4});
      t.textContent = text;
      group.appendChild(t);
    });

    group.addEventListener("click", () => selectMapNode(name));
    group.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectMapNode(name);
      }
    });
    nodeLayer.appendChild(group);
  });

  updateMapVisuals();
}

function outgoingEdges(name) {
  const seen = new Set();
  return EDGES.filter(edge => {
    if (edge.source !== name) return false;
    const key = `${edge.target}::${edge.type}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function selectMapNode(name) {
  selectedNode = name;
  selectedRoute = null;
  highlightedPath = [];
  $("#selectedNodeTitle").textContent = name;
  const routes = outgoingEdges(name);
  $("#selectedNodeIntro").textContent = routes.length
    ? `${routes.length} mapped movement${routes.length === 1 ? "" : "s"} leave this function.`
    : "No outgoing movements are listed from this function in the source map.";
  $("#selectedRouteDetail").hidden = true;

  $("#routeOptions").innerHTML = routes.map((edge, idx) => `
    <button class="route-option" type="button" data-route-target="${escapeHTML(edge.target)}" data-route-index="${EDGES.indexOf(edge)}">
      <b>${escapeHTML(SHORT_LABELS[edge.target] || edge.target)}</b>
      <span>${typeLabels[edge.type]} · source label: ${escapeHTML(edge.sourceDestinationLabel)}</span>
    </button>
  `).join("");

  $$(".route-option", $("#routeOptions")).forEach(btn => {
    btn.addEventListener("click", () => {
      const index = Number(btn.dataset.routeIndex);
      selectRoute(EDGES[index], btn);
    });
  });

  updateMapVisuals();
}

function selectRoute(edge, button) {
  selectedRoute = edge;
  highlightedPath = [];
  $$(".route-option").forEach(btn => btn.classList.remove("is-active"));
  if (button) button.classList.add("is-active");

  const badge = $("#routeDetailBadge");
  badge.textContent = typeLabels[edge.type];
  badge.dataset.type = edge.type;
  $("#routeDetailTitle").textContent = `${SHORT_LABELS[edge.source] || edge.source} → ${SHORT_LABELS[edge.target] || edge.target}`;
  $("#routeDetailTransfers").innerHTML = edge.transfers.map(x => `<li>${escapeHTML(x)}</li>`).join("");
  $("#routeDetailGap").innerHTML = edge.gap.map(x => `<li>${escapeHTML(x)}</li>`).join("");
  $("#selectedRouteDetail").hidden = false;
  updateMapVisuals();
}

function mapFilterMatches(edge) {
  return currentMapFilter === "all" || edge.type === currentMapFilter;
}

function updateMapVisuals() {
  $$(".map-node").forEach(node => {
    const name = node.dataset.node;
    node.classList.toggle("is-selected", name === selectedNode);
    const destination = selectedNode && EDGES.some(e => e.source === selectedNode && e.target === name && mapFilterMatches(e));
    node.classList.toggle("is-destination", Boolean(destination));
    node.classList.toggle("is-path", highlightedPath.includes(name));
    const isRelevant = !selectedNode || name === selectedNode || destination || highlightedPath.includes(name);
    node.classList.toggle("is-muted", !isRelevant);
  });

  $$(".map-edge").forEach(path => {
    const index = Number(path.dataset.edgeIndex);
    const edge = EDGES[index];
    const filteredOut = !mapFilterMatches(edge);
    path.classList.toggle("is-hidden", filteredOut);

    const activeFromNode = selectedNode && edge.source === selectedNode;
    const activeRoute = selectedRoute &&
      edge.source === selectedRoute.source &&
      edge.target === selectedRoute.target &&
      edge.type === selectedRoute.type;

    const isPathLeg = highlightedPath.length > 1 && highlightedPath.some((name, i) =>
      i < highlightedPath.length - 1 &&
      name === edge.source &&
      highlightedPath[i + 1] === edge.target
    );

    path.classList.toggle("is-active", Boolean(!filteredOut && (activeFromNode || activeRoute)));
    path.classList.toggle("is-path", Boolean(!filteredOut && isPathLeg));
  });
}

function showComparisonOnMap() {
  if (!currentComparison) return;
  const routeToSelect = currentComparison.edges.length === 1 ? currentComparison.edges[0] : null;
  selectedNode = currentComparison.source;
  highlightedPath = currentComparison.path;
  currentMapFilter = "all";
  $$(".filter-btn[data-map-filter]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.mapFilter === "all");
  });
  selectMapNode(selectedNode);
  highlightedPath = currentComparison.path;
  if (routeToSelect) {
    const matchingButton = $(`.route-option[data-route-target="${CSS.escape(routeToSelect.target)}"]`);
    selectRoute(routeToSelect, matchingButton);
    highlightedPath = currentComparison.path;
  }
  updateMapVisuals();
  $("#movement-map").scrollIntoView({behavior: "smooth", block: "start"});
}

/* -------------------- Skills bank -------------------- */

function bankItems() {
  const selectedFunction = $("#skillFunctionFilter").value;

  if (skillView === "transferable") {
    const coreNames = new Set(DEPARTMENT_SKILLS.map(item => item.name.toLowerCase()));
    const master = MASTER_SKILLS.map(item => ({
      ...item,
      meta: "Transferable capability",
      functionName: "Shared across functions",
      isCore: coreNames.has(item.name.toLowerCase())
    }));
    const departmentOnly = DEPARTMENT_SKILLS
      .filter(item => !MASTER_SKILLS.some(masterItem => masterItem.name.toLowerCase() === item.name.toLowerCase()))
      .map(item => ({
        ...item,
        meta: "Transferable capability",
        functionName: "Shared across CUDAR",
        isCore: true
      }));
    return [...master, ...departmentOnly];
  }

  const functions = selectedFunction === "all" ? functionNames : [selectedFunction];

  if (skillView === "specialist") {
    return functions.flatMap(fn => FUNCTIONS[fn].specialist.map(name => ({
      name,
      definition: `Function-specific knowledge, systems, legislation, techniques or terminology used in ${fn}.`,
      meta: "Specialist knowledge",
      functionName: fn,
      isCore: false
    })));
  }

  return functions.flatMap(fn => {
    const defined = FUNCTIONS[fn].definedSkills || [];
    if (defined.length) {
      return defined.map(item => ({
        ...item, meta: "Applied by function", functionName: fn, isCore: false
      }));
    }
    return FUNCTIONS[fn].capabilities.map(name => ({
      name,
      definition: `A transferable capability as it is applied within ${fn}.`,
      meta: "Applied by function",
      functionName: fn,
      isCore: false
    }));
  });
}

function renderSkillsBank() {
  const query = $("#skillSearch").value.trim().toLowerCase();
  const selectedFunction = $("#skillFunctionFilter").value;

  let items = bankItems();
  if (skillView === "transferable" && selectedFunction !== "all") {
    const fn = FUNCTIONS[selectedFunction];
    const relevant = new Set([
      ...fn.capabilities.map(x => x.toLowerCase()),
      ...(fn.definedSkills || []).map(x => x.name.toLowerCase()),
      ...fn.specialist.map(x => x.toLowerCase())
    ]);
    items = items.filter(item => {
      const text = `${item.name} ${item.definition}`.toLowerCase();
      return [...relevant].some(skill => text.includes(skill) || skill.includes(item.name.toLowerCase()));
    });
  }

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
      ${item.isCore ? `<span class="core-badge">Core across CUDAR</span>` : ""}
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.definition)}</p>
      <div class="function-name">${escapeHTML(item.functionName)}</div>
    </article>
  `).join("");
}

/* -------------------- Journey examples -------------------- */

function renderJourneys() {
  $("#journeyList").innerHTML = JOURNEYS.map((journey, i) => `
    <article class="journey" id="${journey.id}">
      <button class="journey__button" type="button" aria-expanded="false">
        <span class="journey__number">${String(i + 1).padStart(2, "0")}</span>
        <span class="journey__route">
          ${journey.route.map((stop, idx) =>
            `<span>${escapeHTML(stop)}</span>${idx < journey.route.length - 1 ? "<i>→</i>" : ""}`
          ).join("")}
        </span>
        <span class="journey__toggle" aria-hidden="true">+</span>
      </button>
      <div class="journey__body">
        <h3>${escapeHTML(journey.title)}</h3>
        <p>${escapeHTML(journey.story)}</p>
        <div class="journey__insights">
          <div>
            <span>What carried across</span>
            <ul>${journey.transfers.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
          </div>
          <div>
            <span>What was built</span>
            <ul>${journey.built.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>
          </div>
        </div>
        <div class="value-callout">
          <b>Why it matters</b>
          <span>${escapeHTML(journey.value)}</span>
        </div>
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

function resetMap() {
  selectedNode = null;
  selectedRoute = null;
  highlightedPath = [];
  currentMapFilter = "all";
  $("#selectedNodeTitle").textContent = "Choose a function";
  $("#selectedNodeIntro").textContent = "Its possible movements will appear here.";
  $("#routeOptions").innerHTML = "";
  $("#selectedRouteDetail").hidden = true;
  $$(".filter-btn[data-map-filter]").forEach(btn =>
    btn.classList.toggle("is-active", btn.dataset.mapFilter === "all")
  );
  updateMapVisuals();
}

function bindEvents() {
  $("#compareBtn").addEventListener("click", runComparison);
  $("#exampleBtn").addEventListener("click", tryExample);
  $("#showOnMapBtn").addEventListener("click", showComparisonOnMap);
  $("#buildRouteBtn").addEventListener("click", openDevelopmentForComparison);
  $$("[data-development-mode]").forEach(button => {
    button.addEventListener("click", () => renderDevelopmentMode(button.dataset.developmentMode));
  });
  $("#clearDevelopmentRoute").addEventListener("click", () => {
    selectedDevelopmentActivities.clear();
    renderSelectedDevelopmentRoute();
    renderDevelopmentMode(activeDevelopmentMode);
  });

  ["#currentFunction", "#dreamFunction"].forEach(selector => {
    $(selector).addEventListener("change", () => {
      if ($("#currentFunction").value && $("#dreamFunction").value) runComparison();
    });
  });

  $$(".filter-btn[data-map-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      currentMapFilter = btn.dataset.mapFilter;
      $$(".filter-btn[data-map-filter]").forEach(x => x.classList.toggle("is-active", x === btn));
      updateMapVisuals();
    });
  });
  $("#resetMapBtn").addEventListener("click", resetMap);

  $("#skillSearch").addEventListener("input", renderSkillsBank);
  $("#skillFunctionFilter").addEventListener("change", renderSkillsBank);
  $$("[data-skill-view]").forEach(btn => {
    btn.addEventListener("click", () => {
      skillView = btn.dataset.skillView;
      $$("[data-skill-view]").forEach(x => x.classList.toggle("is-active", x === btn));
      renderSkillsBank();
    });
  });
}

populateSelects();
buildMap();
renderSkillsBank();
renderJourneys();
renderDevelopmentMode("punt");
renderSelectedDevelopmentRoute();
bindEvents();
