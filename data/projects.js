/* ============================================================
   RESEARCH PROJECTS DATA
   data/projects.js

   To add a new project, copy one of the objects below.
   Fields:
   - name: project name
   - acronym: short name (optional)
   - role: your role on the project
   - funder: funding body (optional)
   - collaborators: array of names
   - partners: array of partner organisations (optional)
   - description: 1–2 sentence summary
   - tags: array of strings
   - active: true | false
   - url: project URL (optional)
   - dates: date range string (optional)
   ============================================================ */

const PROJECTS = [
  /* Active projects first */
  {
    id: 7,
    name: "McMatcher: Route Detection and Proximity Analysis",
    acronym: "McMatcher",
    role: "Co-investigator",
    funder: "EPSRC (£60,000)",
    collaborators: ["Susan Grant-Muller (PI)", "Andrew Tomlinson", "Yanis Boussad", "Katy-Anne Moseley"],
    partners: ["Bradford City Council", "West Yorkshire Combined Authority"],
    description: "Developing sensor technology to detect and track smart devices — overcoming MAC address randomisation — to monitor pedestrian movement patterns through transport interchanges without GPS or privacy breaches. Outputs support pedestrian flow data for transport planning and infrastructure design.",
    tags: ["pedestrian sensing", "Bluetooth", "route detection", "transport planning"],
    url: "https://environment.leeds.ac.uk/directories0/dir-record/research-projects/2082/mcmatcher-route-detection-and-proximity-analysis",
    dates: "Nov 2024 – Nov 2025",
    active: true
  },

  /* Past projects */
  {
    id: 1,
    name: "Responsible Automation for Inclusive Mobility",
    acronym: "RAIM",
    role: "Researcher",
    collaborators: ["Ed Manley", "Susan Grant-Muller", "Jens Kandt", "Babak Mehran", "Michelle Porter"],
    description: "Investigating how automated and autonomous transport systems can be designed to support, rather than undermine, inclusive access to mobility across diverse communities and social groups.",
    tags: ["transport equity", "automation", "inclusive mobility"],
    active: false
  },
  {
    id: 2,
    name: "Lifeband",
    acronym: "Lifeband",
    role: "Researcher",
    collaborators: ["Impli Ltd.", "University of Leeds", "Discovr Analytics Ltd."],
    description: "Developing new wearable data collection methods for transport and health research, enabling richer understanding of everyday mobility patterns and their health implications.",
    tags: ["wearable data", "transport health", "data collection"],
    active: false
  },
  {
    id: 3,
    name: "New data forms for transport policies",
    acronym: "KARMA",
    role: "Researcher",
    collaborators: ["Susan Grant-Muller", "Frances Hodgson"],
    description: "Exploring the potential of emerging and unconventional data sources — including incentivised mode-switch data — to support more effective and equitable transport policy evaluation.",
    tags: ["transport policy", "new data", "mode switch"],
    active: false
  },
  {
    id: 4,
    name: "Transport Risk Assessment for COVID Knowledge",
    acronym: "TRACK",
    role: "Researcher",
    collaborators: ["Susan Grant-Muller", "Andrew Tomlinson", "Simon Shepherd"],
    description: "Assessing transport-related COVID-19 transmission risks and informing policy responses, using detailed mobility data and epidemiological modelling.",
    tags: ["COVID-19", "transport risk", "public health"],
    active: false
  },
  {
    id: 5,
    name: "Older people in England: the geography of challenges and opportunities",
    acronym: "",
    role: "Researcher",
    collaborators: ["Frances Darlington-Pollock", "Les Dolega", "Alex Lord", "Rich Dunning"],
    description: "Developing the Ageing in Place Classification (AiPC) — a geodemographic tool for understanding spatial variation in the challenges and resources available to older populations in England.",
    tags: ["geodemographics", "ageing", "spatial classification"],
    active: false
  },
  {
    id: 8,
    name: "Understanding urban dynamics using graph-based analysis of public bike-sharing schemes",
    acronym: "PhD project",
    role: "Principal researcher (PhD)",
    collaborators: ["Lex Comber", "Alison Heppenstall", "Andy Turner"],
    description: "Doctoral research developing graph-based computational methods for analysing bike-sharing systems, focusing on spatiotemporal flow patterns, network resilience, and urban mobility dynamics.",
    tags: ["bike sharing", "graph analysis", "PhD", "urban mobility"],
    active: false
  }
];
