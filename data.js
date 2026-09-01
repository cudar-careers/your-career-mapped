const ORGANISATION_NAME = "University of Cambridge Development and Alumni Relations";

const MASTER_CAPABILITIES = [
  {
    "name": "Relationship & Stakeholder Management",
    "definition": "Building trust, developing productive relationships and managing different stakeholder needs."
  },
  {
    "name": "Communication & Storytelling",
    "definition": "Communicating information clearly and compellingly through written, verbal or visual formats."
  },
  {
    "name": "Translating Complexity",
    "definition": "Taking complex information, ideas or data and making them understandable and relevant to a particular audience."
  },
  {
    "name": "Influencing & Negotiation",
    "definition": "Building support, persuading others, making an effective case and reaching agreements."
  },
  {
    "name": "Strategic Thinking",
    "definition": "Understanding the bigger picture, identifying priorities and connecting activity to longer-term organisational objectives."
  },
  {
    "name": "Planning & Prioritisation",
    "definition": "Organising work, resources and competing priorities to achieve desired outcomes."
  },
  {
    "name": "Project & Programme Management",
    "definition": "Coordinating activities, stakeholders, timelines and deliverables to successfully deliver a defined outcome."
  },
  {
    "name": "Data & Analytical Thinking",
    "definition": "Interpreting information, identifying patterns and using evidence to reach conclusions or make decisions."
  },
  {
    "name": "Research & Synthesis",
    "definition": "Finding, evaluating and combining information into useful insight."
  },
  {
    "name": "Systems & Digital Fluency",
    "definition": "Confidently working with databases, software, digital tools and new technology."
  },
  {
    "name": "Problem-Solving",
    "definition": "Identifying problems, evaluating options and implementing practical solutions."
  },
  {
    "name": "Operational & Process Management",
    "definition": "Managing processes efficiently, consistently and at scale."
  },
  {
    "name": "Risk & Compliance Awareness",
    "definition": "Working within policies, regulations and agreed standards while identifying and managing risk."
  },
  {
    "name": "Attention to Detail & Quality Assurance",
    "definition": "Maintaining accuracy, consistency and quality in information, processes and outputs."
  },
  {
    "name": "Financial & Commercial Awareness",
    "definition": "Understanding financial information, resources, costs or commercial implications."
  },
  {
    "name": "Leadership, Advocacy & Mobilisation",
    "definition": "Building support for an idea, motivating others and creating momentum around shared objectives."
  },
  {
    "name": "Audience & User Understanding",
    "definition": "Understanding the motivations, behaviours and needs of different audiences and designing activity accordingly."
  },
  {
    "name": "Programme & Experience Design",
    "definition": "Creating activities, programmes or experiences that meet audience and organisational needs."
  }
];

const FUNCTIONS = {
  "Development / Fundraising": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Translating Complexity",
      "Influencing & Negotiation",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Leadership, Advocacy & Mobilisation",
      "Audience & User Understanding"
    ],
    "specialist": [
      {
        "name": "Fundraising and philanthropy landscape",
        "description": "How higher-education fundraising operates, including sector trends, philanthropic practice and common fundraising approaches."
      },
      {
        "name": "Donor motivations and giving behaviours",
        "description": "The factors that influence why, when and how donors choose to give and remain engaged."
      },
      {
        "name": "Cultivation and solicitation cycle",
        "description": "The stages involved in developing a donor relationship from early engagement through an ask and follow-up."
      },
      {
        "name": "Institutional fundraising priorities",
        "description": "The University priorities and cases for support that shape fundraising activity and donor conversations."
      },
      {
        "name": "Gift types and mechanisms",
        "description": "The main ways philanthropic support can be structured, recorded and fulfilled."
      },
      {
        "name": "Fundraising ethics and regulations",
        "description": "The ethical, legal and regulatory expectations that govern responsible fundraising."
      }
    ],
    "appliedSkills": [
      {
        "name": "Authenticity",
        "definition": "Building genuine, trust-based relationships by showing sincerity and transparency with donors, alumni, and internal colleagues."
      },
      {
        "name": "Cultivation",
        "definition": "Strategically nurturing long-term relationships with prospects to deepen their engagement and alignment with the university's mission."
      },
      {
        "name": "Solicitation",
        "definition": "Confidently and compellingly asking for financial support, matching a donor’s philanthropic passions with institutional needs."
      },
      {
        "name": "Results Driven",
        "definition": "Maintaining a sharp focus on measurable outcomes, fundraising targets, and key performance indicators to advance institutional growth."
      },
      {
        "name": "Industry Knowledge",
        "definition": "Staying informed on philanthropic trends, tax laws, higher education benchmarks, and evolving sector best practices."
      },
      {
        "name": "Listening & Questioning Skills",
        "definition": "Asking insightful questions and listening actively to uncover a donor's true motivations, values, and giving capacity."
      },
      {
        "name": "Negotiation",
        "definition": "Navigating complex gift agreements and donor expectations to find mutually beneficial solutions for both the supporter and the university."
      },
      {
        "name": "Strategic Thinking",
        "definition": "Designing long-term pipelines and engagement plans that align individual donor journeys with overarching campaign goals."
      },
      {
        "name": "Translating Academic Priorities",
        "definition": "Transforming complex research projects or high-level strategic plans into powerful, emotionally resonant philanthropic narratives."
      }
    ]
  },
  "Alumni Engagement — Volunteering": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Influencing & Negotiation",
      "Planning & Prioritisation",
      "Data & Analytical Thinking",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Leadership, Advocacy & Mobilisation",
      "Audience & User Understanding",
      "Programme & Experience Design"
    ],
    "specialist": [
      {
        "name": "Volunteer-management principles",
        "description": "How to recruit, onboard, brief, support, recognise and retain alumni volunteers effectively."
      },
      {
        "name": "Alumni engagement strategy",
        "description": "The goals, audiences and approaches used to build sustained relationships with alumni."
      },
      {
        "name": "Alumni audiences",
        "description": "The different alumni groups, life stages, interests and needs that shape engagement activity."
      },
      {
        "name": "Volunteer motivations",
        "description": "The reasons alumni choose to volunteer, the barriers they may face and what supports continued participation."
      },
      {
        "name": "Relevant CRM structures and processes",
        "description": "How volunteer records, interactions, preferences and activity are captured and managed in engagement systems."
      }
    ],
    "appliedSkills": [
      {
        "name": "Diplomatic Volunteer Management",
        "definition": "Nurturing and guiding diverse volunteers with tact, balancing their enthusiasm with institutional guidelines and boundaries."
      },
      {
        "name": "Navigating Complex Databases",
        "definition": "Confidently tracking volunteer histories, touchpoints, and availability within sophisticated institutional CRM systems."
      },
      {
        "name": "Data Analysis",
        "definition": "Evaluating volunteer engagement metrics and feedback trends to continuously improve the volunteer pipeline."
      },
      {
        "name": "Advocacy",
        "definition": "Championing the value of volunteering internally while empowering volunteers to act as passionate, informed ambassadors for the university."
      },
      {
        "name": "Developing Innovative Opportunities",
        "definition": "Designing fresh, impactful volunteer roles that align with alumni skills and modern scheduling needs."
      }
    ]
  },
  "Alumni Engagement — Programming": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Data & Analytical Thinking",
      "Problem-Solving",
      "Audience & User Understanding",
      "Programme & Experience Design"
    ],
    "specialist": [
      {
        "name": "Alumni engagement strategy",
        "description": "The goals and approaches used to build meaningful, long-term relationships with alumni."
      },
      {
        "name": "Alumni audience segmentation",
        "description": "How alumni groups are differentiated by profile, behaviour, interests or life stage to shape relevant programming."
      },
      {
        "name": "Institutional programming context",
        "description": "How alumni programmes fit with wider University priorities, calendars, audiences and engagement objectives."
      },
      {
        "name": "Relevant CRM and engagement systems",
        "description": "The systems used to plan activity, manage audiences, record participation and understand engagement."
      }
    ],
    "appliedSkills": [
      {
        "name": "Events Program & Design",
        "definition": "Concepting and executing memorable, high-value experiences that drive lifelong alumni connection and loyalty."
      },
      {
        "name": "Data Analysis",
        "definition": "Interpreting post-event metrics and demographic data to measure engagement and justify programming investments."
      },
      {
        "name": "Communication & Storytelling",
        "definition": "Crafting emotional and compelling narratives that inspire alumni to attend, engage, and support university initiatives."
      },
      {
        "name": "Relationship Management",
        "definition": "Cultivating trusted partnerships with alumni leaders, affinity groups, and key campus stakeholders."
      },
      {
        "name": "Strategic Planning",
        "definition": "Aligning multi-year alumni initiatives with broader institutional goals to move graduates smoothly through the engagement pipeline."
      }
    ]
  },
  "Communications": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Translating Complexity",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Data & Analytical Thinking",
      "Systems & Digital Fluency",
      "Attention to Detail & Quality Assurance",
      "Audience & User Understanding"
    ],
    "specialist": [
      {
        "name": "Brand guidelines",
        "description": "The visual, verbal and reputational standards that keep communications consistent with the University brand."
      },
      {
        "name": "Editorial style",
        "description": "The house style, tone, language and quality standards applied across written communications."
      },
      {
        "name": "Channel-specific platforms",
        "description": "The tools and conventions used to publish effectively across web, email, social, print and other channels."
      },
      {
        "name": "Communications governance",
        "description": "The approval, ownership and risk processes that shape what can be communicated, when and by whom."
      },
      {
        "name": "Content-management systems",
        "description": "The platforms used to create, maintain, schedule and publish digital content."
      },
      {
        "name": "Campaign analytics",
        "description": "The measures used to understand reach, engagement, conversion and the effectiveness of communications activity."
      }
    ],
    "appliedSkills": [
      {
        "name": "Writing, Editorial & Proofreading",
        "definition": "Producing flawless, compelling, and brand-aligned written content across all print and digital mediums."
      },
      {
        "name": "Translating Complexity",
        "definition": "Stripping technical jargon out of high-level research and academic initiatives to make them universally accessible."
      },
      {
        "name": "Impact Storytelling",
        "definition": "Capturing human-centric narratives that vividly demonstrate the real-world power of philanthropy and research."
      },
      {
        "name": "Audience Tailoring",
        "definition": "Adapting the tone, style, and messaging of a single initiative to resonate with vastly different generations and demographics."
      },
      {
        "name": "Multi-Channel Deployment",
        "definition": "Seamlessly orchestrating campaigns across email, social media, web, video, and traditional print media."
      },
      {
        "name": "Project Management",
        "definition": "Driving complex content calendars and creative assets from initial brief to final delivery on time and on budget."
      },
      {
        "name": "AI & Digital Fluency",
        "definition": "Ethically leveraging generative AI and emergent digital tools to optimize content workflows and media scaling."
      },
      {
        "name": "Software Proficiency",
        "definition": "Navigating content management systems (CMS), design platforms, and advanced communication software with ease."
      }
    ]
  },
  "Donor Relations": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Data & Analytical Thinking",
      "Systems & Digital Fluency",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance",
      "Audience & User Understanding"
    ],
    "specialist": [
      {
        "name": "Stewardship cycle",
        "description": "The ongoing process of acknowledging, reporting to and engaging donors after a gift is made."
      },
      {
        "name": "Donor reporting",
        "description": "How to create accurate, meaningful updates that demonstrate the use and impact of philanthropic support."
      },
      {
        "name": "Gift restrictions",
        "description": "The conditions attached to gifts and how those conditions affect stewardship, reporting and use of funds."
      },
      {
        "name": "Gift agreements",
        "description": "The purpose, structure and obligations contained in formal agreements with donors."
      },
      {
        "name": "Recognition frameworks",
        "description": "The principles and processes used to acknowledge donors appropriately and consistently."
      },
      {
        "name": "Institutional stewardship policies",
        "description": "The University policies that govern donor recognition, reporting, engagement and stewardship activity."
      }
    ],
    "appliedSkills": [
      {
        "name": "Compelling Storytelling",
        "definition": "Showing donors the direct, personal impact of their giving through deeply moving stewardship reports and updates."
      },
      {
        "name": "Active Listening",
        "definition": "Discerning a donor's unspoken values, boundaries, and long-term legacy wishes through careful conversation."
      },
      {
        "name": "Stewardship Planning",
        "definition": "Designing highly personalized, creative acknowledgement plans that keep major donors feeling valued and close to the institution."
      },
      {
        "name": "CRM Proficiency",
        "definition": "Maintaining immaculate donor records, stewardship tracking steps, and recognition details within the central system."
      },
      {
        "name": "Data Analysis",
        "definition": "Auditing fund spending and recognition data to identify stewardship gaps and retention trends across donor pools."
      },
      {
        "name": "Compliance with Policies",
        "definition": "Ensuring all donor recognition, fund allocations, and naming opportunities strictly mirror university and legal guidelines."
      }
    ]
  },
  "Events": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Influencing & Negotiation",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Operational & Process Management",
      "Risk & Compliance Awareness",
      "Financial & Commercial Awareness",
      "Audience & User Understanding",
      "Programme & Experience Design"
    ],
    "specialist": [
      {
        "name": "Event production",
        "description": "The end-to-end planning and delivery of events, from brief and format through live operation and evaluation."
      },
      {
        "name": "Supplier and procurement processes",
        "description": "How venues, caterers and other suppliers are sourced, contracted, briefed and managed."
      },
      {
        "name": "Venue operations",
        "description": "The practical requirements of spaces, access, capacity, front-of-house activity and event flow."
      },
      {
        "name": "Event health and safety",
        "description": "The duties and controls required to protect attendees, staff and suppliers during event activity."
      },
      {
        "name": "Risk assessments",
        "description": "How event risks are identified, evaluated, documented and mitigated before delivery."
      },
      {
        "name": "Event-specific technology",
        "description": "The platforms and equipment used for registration, check-in, audio-visual delivery and hybrid participation."
      }
    ],
    "appliedSkills": [
      {
        "name": "Vendor Negotiation",
        "definition": "Securing high-quality services, venues, and catering contracts at the best possible financial value for the university."
      },
      {
        "name": "Risk Management",
        "definition": "Proactively identifying and mitigating logistical, health, financial, and reputational hazards before and during events."
      },
      {
        "name": "Organisation",
        "definition": "Managing immense logistical checklists, schedules, and floorplans without letting a single detail slip."
      },
      {
        "name": "Problem-Solving",
        "definition": "Resolving inevitable, last-minute venue or logistical crises smoothly and discreetly under high-pressure conditions."
      },
      {
        "name": "IT Skills",
        "definition": "Navigating event management tech, hybrid streaming setups, check-in apps, and audio-visual layouts confidently."
      },
      {
        "name": "Strategic Planning",
        "definition": "Engineering event layouts, flows, and guest lists to maximize high-value donor interactions and specific fundraising goals."
      }
    ]
  },
  "Campaign": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Translating Complexity",
      "Influencing & Negotiation",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Leadership, Advocacy & Mobilisation",
      "Audience & User Understanding"
    ],
    "specialist": [
      {
        "name": "Campaign structures",
        "description": "How major fundraising campaigns are organised across priorities, workstreams, governance and stakeholders."
      },
      {
        "name": "Campaign phases",
        "description": "The stages of a campaign from preparation and quiet activity through public launch, delivery and close."
      },
      {
        "name": "Campaign governance",
        "description": "The decision-making, reporting and accountability structures used to coordinate campaign activity."
      },
      {
        "name": "Fundraising strategy",
        "description": "How campaign objectives, audiences, propositions and activity combine to generate philanthropic support."
      },
      {
        "name": "Campaign reporting",
        "description": "The measures, dashboards and updates used to track progress, risks, activity and outcomes."
      },
      {
        "name": "Philanthropic proposition development",
        "description": "How institutional priorities are shaped into clear, persuasive cases for philanthropic support."
      }
    ],
    "appliedSkills": [
      {
        "name": "Strategic Planning",
        "definition": "Structuring comprehensive, multi-year campaign phases, timelines, and goal targets to elevate the university's financial baseline."
      },
      {
        "name": "Message & Mission Development",
        "definition": "Distilling the institutional vision into a crystalline, urgent, and highly persuasive campaign purpose statement."
      },
      {
        "name": "Communication & Story",
        "definition": "Creating the central emotional narrative that unites individual fundraising priorities under a singular campaign umbrella."
      },
      {
        "name": "Project Management",
        "definition": "Directing cross-functional campaign working groups, committees, and deliverables across rigid multi-year timelines."
      },
      {
        "name": "Public Speaking",
        "definition": "Delivery inspiring, high-impact presentations to large audiences, boards, and prospective transformational donors."
      },
      {
        "name": "Stakeholder Awareness",
        "definition": "Navigating the unique political, economic, and emotional priorities of internal leadership and external advocates."
      },
      {
        "name": "Motivational",
        "definition": "Energizing internal teams, academic staff, and volunteer boards to sustain momentum over long, demanding campaign cycles."
      },
      {
        "name": "Negotiation",
        "definition": "Aligning institutional campaign priorities with complex donor desires to finalize landmark, historic gifts."
      }
    ]
  },
  "Prospect Research": {
    "capabilities": [
      "Communication & Storytelling",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Data & Analytical Thinking",
      "Research & Synthesis",
      "Systems & Digital Fluency",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance"
    ],
    "specialist": [
      {
        "name": "Wealth indicators",
        "description": "The signals and evidence used to understand an individual or organisation's potential capacity to give."
      },
      {
        "name": "Prospect-rating methodologies",
        "description": "The frameworks used to assess and prioritise prospects consistently."
      },
      {
        "name": "Philanthropic giving signals",
        "description": "Patterns in interests, affiliations and previous giving that may indicate philanthropic propensity."
      },
      {
        "name": "Research sources",
        "description": "The reliable public and internal sources used to build accurate prospect insight."
      },
      {
        "name": "Prospect research ethics",
        "description": "The ethical boundaries and professional standards that govern responsible prospect research."
      },
      {
        "name": "Data-protection requirements",
        "description": "The privacy, data-handling and lawful-use requirements that apply to prospect information."
      }
    ],
    "appliedSkills": [
      {
        "name": "Navigating Complex Databases",
        "definition": "Uncovering deeply hidden philanthropic records, corporate affiliations, and biographical details across specialized platforms."
      },
      {
        "name": "Wealth Indicator Analysis",
        "definition": "Evaluating asset data, stock holdings, and real estate to accurately estimate a prospect's true giving capacity."
      },
      {
        "name": "Briefing Curation",
        "definition": "Synthesizing dense raw data into concise, strategic, and highly actionable briefing profiles for frontline fundraisers."
      },
      {
        "name": "Connection Mapping",
        "definition": "Tracing social, corporate, and philanthropic networks to find organic pathways from warm prospects to the university."
      },
      {
        "name": "Ethical Data Handling",
        "definition": "Protecting sensitive personal and financial data with absolute confidentiality and strict compliance with privacy laws."
      },
      {
        "name": "Pipeline Management",
        "definition": "Moving discovered leads smoothly into active discovery tracks to keep the major gift pipeline consistently fed."
      }
    ]
  },
  "Gift Processing": {
    "capabilities": [
      "Planning & Prioritisation",
      "Data & Analytical Thinking",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Operational & Process Management",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance",
      "Financial & Commercial Awareness"
    ],
    "specialist": [
      {
        "name": "Gift-processing procedures",
        "description": "The steps used to receive, verify, record, allocate and reconcile philanthropic income accurately."
      },
      {
        "name": "Relevant tax regulations",
        "description": "The tax rules that affect the treatment, eligibility and documentation of different gifts."
      },
      {
        "name": "Gift coding",
        "description": "How gifts are categorised and coded correctly so records, reporting and allocation remain accurate."
      },
      {
        "name": "Financial processes",
        "description": "The finance controls, reconciliations and hand-offs that support accurate gift administration."
      },
      {
        "name": "Receipting rules",
        "description": "The requirements for producing appropriate acknowledgements, receipts and supporting records."
      },
      {
        "name": "Gift classifications",
        "description": "The distinctions between gift types and how those classifications affect processing and reporting."
      }
    ],
    "appliedSkills": [
      {
        "name": "Navigating Complex Databases",
        "definition": "Executing highly specialized, intricate transaction records within the CRM to ensure flawless accounting."
      },
      {
        "name": "High-Volume Management",
        "definition": "Processing massive numbers of cheques, online donations, and recurring direct debits swiftly and accurately during peak appeals."
      },
      {
        "name": "Tax Regulation Literacy",
        "definition": "Applying nuanced knowledge of Gift Aid, tax-efficient vehicles, and international gift routing rules perfectly."
      },
      {
        "name": "Rapid Receipting",
        "definition": "Generating and issuing official donor receipts at high speeds to kickstart the stewardship process immediately."
      },
      {
        "name": "Precise Data Entry",
        "definition": "Guaranteeing absolute zero-error typing when logging gift designations, restrictions, and appeal codes."
      }
    ]
  },
  "Settlement": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Influencing & Negotiation",
      "Strategic Thinking",
      "Research & Synthesis",
      "Problem-Solving",
      "Operational & Process Management",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance",
      "Financial & Commercial Awareness"
    ],
    "specialist": [
      {
        "name": "Charity law",
        "description": "The legal principles that shape how charitable gifts can be accepted, structured and used."
      },
      {
        "name": "University policies",
        "description": "The internal rules and approval requirements that apply to complex gifts and formal agreements."
      },
      {
        "name": "Gift agreements",
        "description": "How formal donor agreements are drafted, interpreted, negotiated and managed."
      },
      {
        "name": "Gift restrictions",
        "description": "How legally or operationally binding conditions on gifts are identified and handled."
      },
      {
        "name": "Legal and regulatory frameworks",
        "description": "The wider legal, compliance and regulatory context affecting philanthropic transactions."
      },
      {
        "name": "Complex gift structures",
        "description": "The features and implications of gifts that involve unusual assets, terms, entities or arrangements."
      }
    ],
    "appliedSkills": [
      {
        "name": "University Policy Compliance",
        "definition": "Ensuring complex gift allocations, endowments, and trust foundations strictly honor internal fiscal governance rules."
      },
      {
        "name": "Charity Law Understanding",
        "definition": "Applying up-to-date knowledge of national charity regulations, restricted fund laws, and statutory gift boundaries."
      },
      {
        "name": "Drafting Legal Documentation",
        "definition": "Writing ironclad Gift Agreements, Memorandums of Understanding, and legacy pledges with absolute legal precision."
      },
      {
        "name": "Negotiating Terms",
        "definition": "Working directly with donors and legal representatives to refine gift clauses so they protect both donor intent and university flexibility."
      },
      {
        "name": "Financial Data Analysis",
        "definition": "Deconstructing complex financial profiles, asset allocations, and investment structures to safely settle multifaceted gifts."
      }
    ]
  },
  "Information Services — Software": {
    "capabilities": [
      "Translating Complexity",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Research & Synthesis",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance"
    ],
    "specialist": [
      {
        "name": "Specific programming languages",
        "description": "The programming languages used to build, maintain and extend the relevant software environment."
      },
      {
        "name": "Specific software platforms",
        "description": "The applications, frameworks and platforms used by the software function in day-to-day delivery."
      },
      {
        "name": "University systems architecture",
        "description": "How core University systems connect, exchange data and support business processes."
      },
      {
        "name": "Security requirements",
        "description": "The technical and organisational controls required to keep systems, code and data secure."
      },
      {
        "name": "Technical standards",
        "description": "The coding, testing, documentation and engineering standards expected in software delivery."
      },
      {
        "name": "Integration architecture",
        "description": "How systems and services are connected through interfaces, data flows and integration patterns."
      }
    ],
    "appliedSkills": [
      {
        "name": "Systems Design & Integration",
        "definition": "Architecting and connecting disparate university software tools to ensure seamless data flow across the ecosystem."
      },
      {
        "name": "Programming Language Proficiency",
        "definition": "Writing clean, sustainable script (SQL, Python, etc.) to query, manipulate, and automate complex database processes."
      },
      {
        "name": "Working with Complex Code",
        "definition": "Diagnosing, refactoring, and maintaining deeply layered legacy codebase frameworks within core operations systems."
      },
      {
        "name": "Problem-Solving",
        "definition": "Rapidly debugging system failures, data drops, or sync errors to minimize downtime for frontline advancement teams."
      }
    ]
  },
  "Information Services — Operations": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Operational & Process Management",
      "Risk & Compliance Awareness",
      "Financial & Commercial Awareness"
    ],
    "specialist": [
      {
        "name": "Facilities procedures",
        "description": "The operational processes used to manage workplaces, facilities issues and service continuity."
      },
      {
        "name": "Health and safety legislation",
        "description": "The statutory duties and practical controls that shape safe workplace and facilities management."
      },
      {
        "name": "Internal infrastructure",
        "description": "The physical and operational infrastructure that supports day-to-day organisational activity."
      },
      {
        "name": "Operational systems",
        "description": "The tools used to manage requests, assets, facilities information, incidents and operational reporting."
      },
      {
        "name": "Estates and facilities requirements",
        "description": "The University requirements, contacts and procedures that govern estates and facilities activity."
      }
    ],
    "appliedSkills": [
      {
        "name": "Report Production",
        "definition": "Building, running, and refining standard and bespoke operational reports to support day-to-day administrative needs."
      },
      {
        "name": "Facilities Management",
        "definition": "Overseeing the physical safety, layout, functionality, and asset tracking of the organisation's office footprint."
      },
      {
        "name": "Health & Safety Legislation",
        "definition": "Implementing and auditing workplace protocols to guarantee absolute compliance with modern statutory safety laws."
      },
      {
        "name": "Problem-Solving",
        "definition": "Resolving unexpected physical infrastructure, building, or logistics issues efficiently to keep operations running smoothly."
      }
    ]
  },
  "Business Intelligence": {
    "capabilities": [
      "Communication & Storytelling",
      "Translating Complexity",
      "Strategic Thinking",
      "Planning & Prioritisation",
      "Data & Analytical Thinking",
      "Research & Synthesis",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Attention to Detail & Quality Assurance"
    ],
    "specialist": [
      {
        "name": "Business Intelligence software",
        "description": "The reporting, analysis and dashboard tools used to turn organisational data into usable insight."
      },
      {
        "name": "Data models",
        "description": "How data is structured, related and defined so it can be analysed consistently."
      },
      {
        "name": "Institutional datasets",
        "description": "The key organisational data sources, their meaning, ownership and appropriate uses."
      },
      {
        "name": "Reporting architecture",
        "description": "How data moves from source systems into reports, dashboards and recurring management information."
      },
      {
        "name": "KPI definitions",
        "description": "The agreed meaning, calculation and interpretation of key performance indicators."
      },
      {
        "name": "Data visualisation methodologies",
        "description": "The principles used to present data clearly, accurately and in a form that supports decisions."
      }
    ],
    "appliedSkills": [
      {
        "name": "Report Writing Abilities",
        "definition": "Creating highly visual, automated dashboards and analytical summaries that make intricate data trends simple to read."
      },
      {
        "name": "Critical Thinking",
        "definition": "Looking past superficial metrics to identify systemic patterns, blockages, or hidden opportunities in fundraising trends."
      },
      {
        "name": "Interpreting Data & Drawing Conclusions",
        "definition": "Turning raw behavioral analytics into clear, data-driven strategy recommendations for executive leadership."
      },
      {
        "name": "BI Software Knowledge",
        "definition": "Mastering specialized data visualization and analytics suites (Tableau, PowerBI, etc.) to push operational insights forward."
      }
    ]
  },
  "Administration — Across Functions": {
    "capabilities": [
      "Relationship & Stakeholder Management",
      "Communication & Storytelling",
      "Planning & Prioritisation",
      "Project & Programme Management",
      "Systems & Digital Fluency",
      "Problem-Solving",
      "Operational & Process Management",
      "Risk & Compliance Awareness",
      "Attention to Detail & Quality Assurance",
      "Financial & Commercial Awareness"
    ],
    "specialist": [
      {
        "name": "Function-specific terminology",
        "description": "The vocabulary and concepts used by the function being supported."
      },
      {
        "name": "Function-specific systems",
        "description": "The databases, tools and workflows used in the particular area of administration."
      },
      {
        "name": "Relevant policies",
        "description": "The internal rules and procedures that govern work in the function being supported."
      },
      {
        "name": "Subject knowledge",
        "description": "A practical understanding of the function's purpose, stakeholders, priorities and recurring work."
      },
      {
        "name": "Technical processes",
        "description": "The specialist operational steps that need to be followed accurately within the host function."
      }
    ],
    "appliedSkills": [
      {
        "name": "Standard Software Proficiency",
        "definition": "Operating daily office tools, word processors, spreadsheets, and calendar software with expert speed."
      },
      {
        "name": "Database Navigation",
        "definition": "Finding, verifying, and basic updating of records within the central CRM system accurately."
      },
      {
        "name": "Organisational & Planning Skills",
        "definition": "Building watertight administrative systems, keeping files orderly, and scheduling complex multi-party meetings smoothly."
      },
      {
        "name": "Attention to Detail",
        "definition": "Ensuring absolute accuracy in spelling, dates, data entry, and procedural forms before submission."
      },
      {
        "name": "Time Management",
        "definition": "Prioritizing a constantly shifting list of incoming requests from multiple team members without missing deadlines."
      },
      {
        "name": "Problem-Solving",
        "definition": "Tackling daily administrative bottlenecks, schedule conflicts, or technical snags with resourcefulness and autonomy."
      }
    ]
  }
};

const ROUTES = [
  {
    "a": "Development / Fundraising",
    "b": "Alumni Engagement — Volunteering",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Alumni Engagement — Programming",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Communications",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Donor Relations",
    "type": "close"
  },
  {
    "a": "Development / Fundraising",
    "b": "Events",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Campaign",
    "type": "close"
  },
  {
    "a": "Development / Fundraising",
    "b": "Prospect Research",
    "type": "close"
  },
  {
    "a": "Development / Fundraising",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Development / Fundraising",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Development / Fundraising",
    "b": "Administration — Across Functions",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Alumni Engagement — Programming",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Communications",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Donor Relations",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Events",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Campaign",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Prospect Research",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Volunteering",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Communications",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Donor Relations",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Events",
    "type": "close"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Campaign",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Prospect Research",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Alumni Engagement — Programming",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Communications",
    "b": "Donor Relations",
    "type": "close"
  },
  {
    "a": "Communications",
    "b": "Events",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Campaign",
    "type": "close"
  },
  {
    "a": "Communications",
    "b": "Prospect Research",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Communications",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Communications",
    "b": "Administration — Across Functions",
    "type": "adjacent"
  },
  {
    "a": "Donor Relations",
    "b": "Events",
    "type": "close"
  },
  {
    "a": "Donor Relations",
    "b": "Campaign",
    "type": "close"
  },
  {
    "a": "Donor Relations",
    "b": "Prospect Research",
    "type": "adjacent"
  },
  {
    "a": "Donor Relations",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Donor Relations",
    "b": "Settlement",
    "type": "close"
  },
  {
    "a": "Donor Relations",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Donor Relations",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Donor Relations",
    "b": "Business Intelligence",
    "type": "close"
  },
  {
    "a": "Donor Relations",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Events",
    "b": "Campaign",
    "type": "adjacent"
  },
  {
    "a": "Events",
    "b": "Prospect Research",
    "type": "adjacent"
  },
  {
    "a": "Events",
    "b": "Gift Processing",
    "type": "close"
  },
  {
    "a": "Events",
    "b": "Settlement",
    "type": "close"
  },
  {
    "a": "Events",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Information Services — Operations"
    ]
  },
  {
    "a": "Events",
    "b": "Information Services — Operations",
    "type": "close"
  },
  {
    "a": "Events",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Events",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Campaign",
    "b": "Prospect Research",
    "type": "close"
  },
  {
    "a": "Campaign",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Campaign",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Campaign",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Business Intelligence"
    ]
  },
  {
    "a": "Campaign",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Campaign",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Campaign",
    "b": "Administration — Across Functions",
    "type": "adjacent"
  },
  {
    "a": "Prospect Research",
    "b": "Gift Processing",
    "type": "adjacent"
  },
  {
    "a": "Prospect Research",
    "b": "Settlement",
    "type": "adjacent"
  },
  {
    "a": "Prospect Research",
    "b": "Information Services — Software",
    "type": "adjacent"
  },
  {
    "a": "Prospect Research",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Prospect Research",
    "b": "Business Intelligence",
    "type": "close"
  },
  {
    "a": "Prospect Research",
    "b": "Administration — Across Functions",
    "type": "adjacent"
  },
  {
    "a": "Gift Processing",
    "b": "Settlement",
    "type": "close"
  },
  {
    "a": "Gift Processing",
    "b": "Information Services — Software",
    "type": "adjacent"
  },
  {
    "a": "Gift Processing",
    "b": "Information Services — Operations",
    "type": "close"
  },
  {
    "a": "Gift Processing",
    "b": "Business Intelligence",
    "type": "close"
  },
  {
    "a": "Gift Processing",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Settlement",
    "b": "Information Services — Software",
    "type": "multi",
    "via": [
      "Gift Processing",
      "Information Services — Operations"
    ]
  },
  {
    "a": "Settlement",
    "b": "Information Services — Operations",
    "type": "adjacent"
  },
  {
    "a": "Settlement",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Settlement",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Information Services — Software",
    "b": "Information Services — Operations",
    "type": "close"
  },
  {
    "a": "Information Services — Software",
    "b": "Business Intelligence",
    "type": "close"
  },
  {
    "a": "Information Services — Software",
    "b": "Administration — Across Functions",
    "type": "multi",
    "via": [
      "Information Services — Operations"
    ]
  },
  {
    "a": "Information Services — Operations",
    "b": "Business Intelligence",
    "type": "adjacent"
  },
  {
    "a": "Information Services — Operations",
    "b": "Administration — Across Functions",
    "type": "close"
  },
  {
    "a": "Business Intelligence",
    "b": "Administration — Across Functions",
    "type": "adjacent"
  }
];

const JOURNEYS = [
  {
    "id": "journey-1",
    "route": [
      "Alumni Relations",
      "Donor Relations",
      "Fundraising",
      "Head of Development"
    ],
    "title": "Relationships become a bridge into fundraising",
    "story": "An employee began in Alumni Relations, then moved into Donor Relations before stepping into Fundraising and ultimately progressing to Head of Development. The early moves did not require them to abandon what they already knew: relationship management, stakeholder engagement and communication remained central. Donor Relations added stewardship processes and donor-specific knowledge; a later secondment then created direct fundraising exposure.",
    "transfers": [
      "Relationship management",
      "Stakeholder engagement",
      "Communication",
      "Understanding supporter motivations"
    ],
    "built": [
      "Stewardship processes",
      "Donor-specific knowledge",
      "Direct fundraising exposure",
      "Fundraising leadership"
    ],
    "value": "Cross-functional movement can be a deliberate bridge into a function that initially looks inaccessible."
  },
  {
    "id": "journey-2",
    "route": [
      "Gift Administration",
      "Senior Gift Administration",
      "Business Intelligence Analyst"
    ],
    "title": "Operational expertise becomes analytical expertise",
    "story": "An employee started in Gift Administration and became increasingly involved in automating giving processes. By working across the Gifts and Business Intelligence boundary, they were able to apply detailed systems knowledge, data accuracy and process-improvement skills in a more analytical context. An apprenticeship helped formalise the technical development, and the employee ultimately moved into a Grade 7 Business Intelligence Analyst role.",
    "transfers": [
      "Data accuracy",
      "Systems knowledge",
      "Process improvement",
      "Operational problem-solving"
    ],
    "built": [
      "Automation",
      "Analytical methods",
      "Business Intelligence tools",
      "Formal technical development"
    ],
    "value": "Seemingly operational skills can translate into an analytical career when employees get exposure and development opportunities."
  },
  {
    "id": "journey-3",
    "route": [
      "Fundraising Assistant",
      "Prospect Management",
      "Fundraising / Fundraising Assistant Team Management"
    ],
    "title": "A sideways move strengthens a return to the original function",
    "story": "An employee moved from a Fundraising Assistant role into Prospect Management and later returned to Fundraising, eventually managing the Fundraising Assistant team. The sideways move gave them a stronger view of the full fundraising pipeline, including how prospects are identified, prioritised and supported before frontline activity begins.",
    "transfers": [
      "Fundraising context",
      "Relationship awareness",
      "Organisation",
      "Pipeline understanding"
    ],
    "built": [
      "Prospect-management expertise",
      "Research context",
      "Whole-pipeline understanding",
      "People management"
    ],
    "value": "Moving sideways does not take someone off track. Experience in another function can make them stronger when they return."
  },
  {
    "id": "journey-4",
    "route": [
      "Fundraising",
      "Settlement"
    ],
    "title": "Frontline donor knowledge moves into specialist operations",
    "story": "A former senior fundraiser moved from a School-based fundraising role into a Settlement Associate position. The move changed the functional context, but not the value of their existing experience: donor understanding, negotiation, financial awareness and stakeholder management all remained relevant when working with gift terms, restrictions and formal agreements.",
    "transfers": [
      "Donor knowledge",
      "Negotiation",
      "Financial awareness",
      "Stakeholder management"
    ],
    "built": [
      "Charity-law context",
      "Gift agreements",
      "Formal documentation",
      "Settlement processes"
    ],
    "value": "Mobility is genuinely two-way between fundraising and non-fundraising functions."
  },
  {
    "id": "journey-5",
    "route": [
      "Donor Relations",
      "Campaign"
    ],
    "title": "Cross-functional breadth becomes an advantage in an integrator role",
    "story": "An employee with a Donor Relations background moved into Campaign. The Campaign role drew on experience that sits across several functions: communications, donor relations, alumni engagement and fundraising. Stakeholder mapping, adaptability and an ability to see the bigger picture became especially important because the role connected multiple parts of the organisation.",
    "transfers": [
      "Donor insight",
      "Storytelling",
      "Stakeholder management",
      "Project planning",
      "Strategic communication"
    ],
    "built": [
      "Campaign governance",
      "Institution-wide coordination",
      "Stakeholder mapping",
      "Campaign strategy"
    ],
    "value": "Cross-functional experience is particularly valuable in integrator roles, where understanding several parts of the organisation becomes an asset in itself."
  }
];

const NODE_POSITIONS = {
  "Development / Fundraising": [
    135,
    150
  ],
  "Donor Relations": [
    335,
    95
  ],
  "Campaign": [
    535,
    90
  ],
  "Communications": [
    740,
    150
  ],
  "Alumni Engagement — Programming": [
    865,
    270
  ],
  "Alumni Engagement — Volunteering": [
    860,
    445
  ],
  "Events": [
    720,
    595
  ],
  "Administration — Across Functions": [
    530,
    655
  ],
  "Information Services — Operations": [
    340,
    610
  ],
  "Information Services — Software": [
    160,
    515
  ],
  "Business Intelligence": [
    105,
    355
  ],
  "Prospect Research": [
    260,
    300
  ],
  "Gift Processing": [
    430,
    430
  ],
  "Settlement": [
    545,
    300
  ]
};

const MAP_LABELS = {
  "Development / Fundraising": [
    "Development /",
    "Fundraising"
  ],
  "Alumni Engagement — Volunteering": [
    "Alumni",
    "Engagement",
    "Volunteering"
  ],
  "Alumni Engagement — Programming": [
    "Alumni",
    "Engagement",
    "Programming"
  ],
  "Communications": [
    "Communications"
  ],
  "Donor Relations": [
    "Donor",
    "Relations"
  ],
  "Events": [
    "Events"
  ],
  "Campaign": [
    "Campaign"
  ],
  "Prospect Research": [
    "Prospect",
    "Research"
  ],
  "Gift Processing": [
    "Gift",
    "Processing"
  ],
  "Settlement": [
    "Settlement"
  ],
  "Information Services — Software": [
    "Information",
    "Services",
    "Software"
  ],
  "Information Services — Operations": [
    "Information",
    "Services",
    "Operations"
  ],
  "Business Intelligence": [
    "Business",
    "Intelligence"
  ],
  "Administration — Across Functions": [
    "Administration",
    "Across",
    "Functions"
  ]
};
