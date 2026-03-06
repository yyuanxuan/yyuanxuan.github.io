/* ============================================================
   PUBLICATIONS DATA
   data/publications.js

   To add a new publication, copy one of the objects below
   and add it to the PUBLICATIONS array. Fields:
   - authors: string (use <em>Yang, Y.</em> to highlight your name)
   - year: number
   - title: string
   - venue: journal/conference name in full
   - venueShort: abbreviation (used internally; no longer shown as a badge)
   - volume, issue, pages: string (optional)
   - doi: string (optional, without "https://doi.org/")
   - url: direct link (optional, fallback if no doi)
   - type: "journal" | "conference"
   - tags: array of strings
   - award: string (optional, e.g. "Best Presentation")
   - featured: true (optional) — shown in "Selected Publications" on homepage
   ============================================================ */

const PUBLICATIONS = [

  /* ---- 2026 ------------------------------------------------ */
  {
    id: 19,
    authors: "<em>Yang, Y.</em>, Boussad, Y., Kandt, J., Mehran, B., Manley, E., & Grant-Muller, S.",
    year: 2026,
    title: "Identifying the recurring travel patterns among older people: A mobility motif analysis with smartphone track and trace data",
    venue: "Journal of Transport & Health",
    venueShort: "JTH",
    volume: "46",
    pages: "102222",
    doi: "10.1016/j.jth.2025.102222",
    type: "journal",
    tags: ["ageing", "mobility patterns", "GPS tracking", "travel behaviour"],
    featured: true
  },

  /* ---- 2025 ------------------------------------------------ */
  {
    id: 20,
    authors: "Chen, M.X., Song, W., <em>Yang, Y.</em>, Jiang, H., & Chen, L.",
    year: 2025,
    title: "Spatially compounding effects of cumulation and thresholds amplify urban inequality in megacities",
    venue: "npj Urban Sustainability",
    venueShort: "npj",
    type: "journal",
    tags: ["urban inequality", "spatial analysis", "cities", "sustainability"]
  },
  {
    id: 21,
    authors: "<em>Yang, Y.</em>, Saridakis, C., Wadud, Z., Kothawala, A., Jena, A., Ozbilen, B., Wang, K., et al.",
    year: 2025,
    title: "Understanding factors influencing user retention in shared e-scooter schemes: A comparative study of the UK/EU and the US",
    venue: "Travel Behaviour and Society",
    venueShort: "TBS",
    volume: "41",
    pages: "101067",
    doi: "10.1016/j.tbs.2025.101067",
    type: "journal",
    tags: ["e-scooter", "shared mobility", "user retention", "travel behaviour"],
    featured: true
  },
  {
    id: 22,
    authors: "Jena, A., Ozbilen, B., Kothawala, A., Lee, Y., Wang, K., Saridakis, C., Wadud, Z., <em>Yang, Y.</em>, et al.",
    year: 2025,
    title: "Identifying e-scooter rider profiles in the United States: A latent class cluster analysis",
    venue: "Journal of Cycling and Micromobility Research",
    venueShort: "JCMR",
    pages: "100088",
    type: "journal",
    tags: ["e-scooter", "rider profiles", "latent class", "United States"]
  },

  /* ---- 2024 ------------------------------------------------ */
  {
    id: 14,
    authors: "Tang, T., Gu, Z., <em>Yang, Y.</em>, Sun, H., Chen, S., & Chen, Y.",
    year: 2024,
    title: "A data-driven framework for natural feature profile of public transport ridership: Insights from Suzhou and Lianyungang, China",
    venue: "Transportation Research Part A: Policy and Practice",
    venueShort: "TRA",
    volume: "183",
    pages: "104049",
    doi: "10.1016/j.tra.2024.104049",
    type: "journal",
    tags: ["public transport", "data science", "ridership"]
  },
  {
    id: 13,
    authors: "Harrison, G., <em>Yang, Y.</em>, Suchak, K., Grant-Muller, S., Shepherd, S., et al.",
    year: 2024,
    title: "Influencing transport-health interactions through incentivised mode switch using new data and models",
    venue: "Journal of Transport & Health",
    venueShort: "JTH",
    volume: "37",
    pages: "101830",
    doi: "10.1016/j.jth.2024.101830",
    type: "journal",
    tags: ["transport equity", "health", "mode switch"]
  },
  {
    id: 12,
    authors: "Kothawala, A., Haddad, A., Ozbilen, B., Circella, G., Saridakis, C., Wadud, Z., <em>Yang, Y.</em>, Grant-Muller, S., et al.",
    year: 2024,
    title: "Investigating objective and subjective factors influencing the frequency and purpose of e-scooter trips",
    venue: "Transportation Research Record",
    venueShort: "TRR",
    volume: "2678",
    issue: "10",
    pages: "367–382",
    doi: "10.1177/03611981241233276",
    type: "journal",
    tags: ["e-scooter", "emerging mobility", "travel behaviour"]
  },
  {
    id: 11,
    authors: "Boussad, Y., <em>Yang, Y.</em>, Tomlinson, A., & Grant-Muller, S.",
    year: 2024,
    title: "McMatcher: A symbolic representation for matching random BLE MAC addresses",
    venue: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
    venueShort: "IEEE ICCE",
    pages: "1–6",
    type: "conference",
    tags: ["data methods", "Bluetooth", "pedestrian tracking"]
  },
  {
    id: 23,
    authors: "Boussad, Y., Tomlinson, A., <em>Yang, Y.</em>, Grant-Muller, S., Noakes, C., Pattinson, J.A., et al.",
    year: 2024,
    title: "Simulating Solar Radiation on Railway Networks using Free and Open-Source Tools",
    venue: "Proceedings of the Sixth International Conference on Railway Technology: Research, Development and Maintenance",
    venueShort: "CRT",
    type: "conference",
    tags: ["railway", "solar radiation", "open source", "simulation"]
  },

  /* ---- 2023 ------------------------------------------------ */
  {
    id: 10,
    authors: "Beecham, R., <em>Yang, Y.</em>, Tait, C., & Lovelace, R.",
    year: 2023,
    title: "Connected bikeability in London: Which localities are better connected by bike and does this matter?",
    venue: "Environment and Planning B: Urban Analytics and City Science",
    venueShort: "EPB",
    volume: "50",
    issue: "8",
    pages: "2103–2117",
    doi: "10.1177/23998083231165122",
    type: "journal",
    tags: ["cycling", "spatial analysis", "transport equity", "network analysis"]
  },
  {
    id: 9,
    authors: "Grant-Muller, S., <em>Yang, Y.</em>, Panter, J., & Woodcock, J.",
    year: 2023,
    title: "Does the Use of E-Scooters Bring Well-Being Outcomes for the User? A Study Based on UK Shared E-Scooter Trials",
    venue: "Active Travel Studies: An Interdisciplinary Journal",
    venueShort: "ATS",
    type: "journal",
    tags: ["e-scooter", "well-being", "active travel", "emerging mobility"]
  },
  {
    id: 8,
    authors: "<em>Yang, Y.</em>, & Grant-Muller, S.",
    year: 2023,
    title: "Analysing ride behaviours of shared e-scooter users — a case study of Liverpool",
    venue: "CARMA 2023 - 5th International Conference on Advanced Research Methods and Analytics",
    venueShort: "CARMA",
    type: "conference",
    tags: ["e-scooter", "shared mobility", "travel behaviour"]
  },

  /* ---- 2022 ------------------------------------------------ */
  {
    id: 7,
    authors: "<em>Yang, Y.</em>, Beecham, R., Heppenstall, A., Turner, A., & Comber, A.",
    year: 2022,
    title: "Understanding the impacts of public transit disruptions on bikeshare schemes and cycling behaviours using spatiotemporal and graph-based analysis: A case study of four London Tube strikes",
    venue: "Journal of Transport Geography",
    venueShort: "JTG",
    volume: "98",
    pages: "103255",
    doi: "10.1016/j.jtrangeo.2022.103255",
    type: "journal",
    tags: ["bike sharing", "network analysis", "spatial analysis", "London", "disruption"]
  },
  {
    id: 6,
    authors: "<em>Yang, Y.</em>, Dolega, L., & Darlington-Pollock, F.",
    year: 2022,
    title: "Ageing in Place Classification: Creating a geodemographic classification for the ageing population in England",
    venue: "Applied Spatial Analysis and Policy",
    venueShort: "ASAP",
    volume: "16",
    issue: "2",
    pages: "583–623",
    doi: "10.1007/s12061-022-09490-y",
    type: "journal",
    tags: ["geodemographics", "ageing", "spatial classification", "transport equity"]
  },

  /* ---- 2020 ------------------------------------------------ */
  {
    id: 5,
    authors: "<em>Yang, Y.</em>, Heppenstall, A., Turner, A., & Comber, A.",
    year: 2020,
    title: "Using graph structural information about flows to enhance short-term demand prediction in bike-sharing systems",
    venue: "Computers, Environment and Urban Systems",
    venueShort: "CEUS",
    volume: "83",
    pages: "101521",
    doi: "10.1016/j.compenvurbsys.2020.101521",
    type: "journal",
    tags: ["bike sharing", "graph analysis", "machine learning", "demand prediction"],
    featured: true
  },
  {
    id: 4,
    authors: "Lovelace, R., Beecham, R., Heinen, E., Tortosa, E.V., <em>Yang, Y.</em>, Slade, C., & Roberts, A.",
    year: 2020,
    title: "Is the London Cycle Hire Scheme becoming more inclusive? An evaluation of the shifting spatial distribution of uptake based on 70 million trips",
    venue: "Transportation Research Part A: Policy and Practice",
    venueShort: "TRA",
    volume: "140",
    pages: "1–15",
    doi: "10.1016/j.tra.2020.07.017",
    type: "journal",
    tags: ["cycling", "transport equity", "bike sharing", "London", "inclusivity"]
  },

  /* ---- 2019 ------------------------------------------------ */
  {
    id: 3,
    authors: "<em>Yang, Y.</em>, Heppenstall, A., Turner, A., & Comber, A.",
    year: 2019,
    title: "A spatiotemporal and graph-based analysis of dockless bike sharing patterns to understand urban flows over the last mile",
    venue: "Computers, Environment and Urban Systems",
    venueShort: "CEUS",
    volume: "77",
    pages: "101361",
    doi: "10.1016/j.compenvurbsys.2019.101361",
    type: "journal",
    tags: ["dockless bike sharing", "graph analysis", "last mile", "spatial analysis"],
    featured: true
  },
  {
    id: 2,
    authors: "<em>Yang, Y.</em>, Heppenstall, A., Turner, A., & Comber, A.",
    year: 2019,
    title: "Who, where, why and when? Using smart card and social media data to understand urban mobility",
    venue: "ISPRS International Journal of Geo-Information",
    venueShort: "ISPRS",
    volume: "8",
    issue: "6",
    pages: "271",
    doi: "10.3390/ijgi8060271",
    type: "journal",
    tags: ["smart card", "social media", "urban mobility"]
  },

  /* ---- 2018 ------------------------------------------------ */
  {
    id: 18,
    authors: "<em>Yang, Y.</em>, Heppenstall, A., Turner, A., & Comber, A.",
    year: 2018,
    title: "Examination of metro service impacts on bike-sharing patterns",
    venue: "AGILE International Conference on Geographic Information Science, Lund, Sweden",
    venueShort: "AGILE",
    type: "conference",
    tags: ["bike sharing", "metro", "spatial analysis"]
  },

  /* ---- 2017 ------------------------------------------------ */
  {
    id: 17,
    authors: "<em>Yang, Y.</em>, Comber, A., Heppenstall, A., & Turner, A.",
    year: 2017,
    title: "Exploration of station-free bike-sharing trip patterns: Shenzhen case study",
    venue: "GeoComputation 2017, Leeds, UK",
    venueShort: "GeoComp",
    type: "conference",
    award: "Best Presentation Award",
    tags: ["bike sharing", "trip patterns", "Shenzhen"]
  },

  /* ---- 2016 ------------------------------------------------ */
  {
    id: 16,
    authors: "<em>Yang, Y.</em>, Comber, A., & Heppenstall, A.",
    year: 2016,
    title: "Analysis of spatiotemporal mobility patterns using transit card data: Shenzhen case study",
    venue: "GISRUK 2016, Manchester, UK",
    venueShort: "GISRUK",
    type: "conference",
    tags: ["smart card", "mobility", "Shenzhen"]
  },

  /* ---- 2015 ------------------------------------------------ */
  {
    id: 15,
    authors: "<em>Yang, Y.</em>, & Yan, Z.",
    year: 2015,
    title: "Monitoring wetland land use changes using remote sensing and GIS",
    venue: "Geo-Informatics in Resource Management and Sustainable Ecosystem, pp. 213–221",
    venueShort: "LISS",
    type: "conference",
    tags: ["remote sensing", "GIS", "land use"]
  }
];
