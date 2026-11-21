/**
 * Verified Candidate Profile & Audited Project Datasets
 * Sourced directly from local machine files, SQLite registries, and forensic audits.
 */

export const personalInfo = {
  name: "Sachin Dinesh Dumbre",
  title: "AI Professional & Data Systems Specialist",
  tagline: "Bridging Generative AI, Quantitative Analytics & Scalable Software Systems",
  location: "Navi Mumbai, Maharashtra, India",
  phone: "+91 8855077289",
  email: "sdineshdumbre@gmail.com",
  github: "https://github.com/SachinCoder11",
  linkedin: "https://linkedin.com/in/sachin-dumbre",
  bio: "AI Professional with a Bachelor of Computer Applications background and postgraduate specialization in Data Science, Analytics, and Generative AI from Imarticus Learning. Experienced in building production-ready RAG platforms, analyzing high-volume statutory financial records, conducting forensic data quality audits, and developing reliable full-stack applications with MySQL, FastAPI, and React.",
  stats: [
    { label: "MCA XBRL Filings Cleaned", value: "96,632" },
    { label: "Active Revenue Firms Analyzed", value: "45,414" },
    { label: "Codebase Vectors & Chunks", value: "5,000+" },
    { label: "Excel Relational Formulas", value: "11,007" }
  ]
};

export const skillsData = {
  "AI / ML & Generative AI": [
    "RAG Pipeline Architecture",
    "AST-Based Code Parsing",
    "Semantic Chunking & Dense Retrieval",
    "Sentence Transformers (BAAI/bge-small)",
    "Vector Databases (ChromaDB)",
    "LLM API Integration & Prompt Engineering",
    "Supervised ML (Scikit-Learn, CatBoost, XGBoost)",
    "Probability Calibration & Model Evaluation"
  ],
  "Data Science & Analytics": [
    "Python (Pandas, NumPy)",
    "Statistical Data Modeling & Profiling",
    "IQR Outlier & Anomaly Detection",
    "Exploratory Data Analysis (EDA)",
    "Data Imputation & Forensics",
    "Advanced Excel (XLOOKUP, INDEX/MATCH, Dynamic Arrays)",
    "Financial Ratio & Profitability Modeling"
  ],
  "Software Engineering & Systems": [
    "FastAPI & RESTful APIs",
    "MySQL & Relational Schema Design",
    "CRUD Operations & Query Optimization",
    "Docker & Containerization",
    "Celery & Redis Worker Queues",
    "JavaScript & React 18 UI Development",
    "Tailwind CSS & Responsive Design",
    "Git & GitHub Workflows"
  ]
};

export const experienceData = [
  {
    role: "Software Development Intern — Business Applications & Data Operations",
    company: "Showstopper Technologies & Media Pvt Ltd",
    period: "Jun 2025 – Jan 2026 (Extended)",
    location: "Navi Mumbai, India",
    summary: "Engineered and maintained backend relational data pipelines and REST API endpoints for two core business management platforms.",
    highlights: [
      "Maintained MySQL relational data workflows for two live business platforms: PropPoints CRM (lead and sales pipeline) and Jivan Blood Bank (inventory and donor records).",
      "Developed and tested structured REST API endpoints executing CRUD operations, validating request payloads and ensuring transactional consistency.",
      "Implemented relational schema constraints, foreign keys, and validation triggers across lead and inventory tables to eliminate duplicate records and enforce data integrity.",
      "Investigated and resolved reporting discrepancies between front-end dashboards and MySQL databases by optimizing query joins and aggregation logic."
    ]
  }
];

export const educationData = [
  {
    degree: "Postgraduate Program in Data Science & Analytics with Generative AI",
    institution: "Imarticus Learning",
    year: "2026",
    specialization: "Applied Statistics, Predictive Modeling, Machine Learning & Generative AI"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bakliwal Foundation College of Arts, Commerce & Science",
    year: "2023 – 2026",
    location: "Navi Mumbai, Maharashtra",
    specialization: "Database Management Systems, Data Structures, Computer Networks, Software Engineering"
  }
];

export const featuredProjects = [
  {
    id: "rag-platform",
    title: "Codebase RAG Platform",
    subtitle: "AI-Powered Repository Due Diligence & Code Search",
    badge: "AI / GenAI & Software Engineering",
    category: "Generative AI",
    github: "https://github.com/SachinCoder11/Codebase_RAG_Platform",
    liveDemoType: "interactive-rag",
    summary: "A local-first Retrieval-Augmented Generation (RAG) platform that indexes codebases, parses abstract syntax trees (AST), generates dense embeddings with BAAI/bge-small-en-v1.5, and enables grounded architectural queries with exact file citations.",
    problem: "Understanding large, unfamiliar multi-language codebases is slow and error-prone. Standard keyword search misses contextual relationships between routes, models, and services, while generic LLMs hallucinate non-existent files without grounded repository context.",
    solution: "Engineered an end-to-end local-first RAG pipeline using FastAPI, ChromaDB, and Sentence Transformers. Extracted structural code components (functions, classes, routes, models) using language-specific AST parsers, generated semantic embeddings, and built a contextual retriever that pairs user queries with verified file citations.",
    technologies: ["FastAPI", "Python", "ChromaDB", "Sentence Transformers", "BAAI/bge-small-en-v1.5", "Docker", "Celery", "Redis", "SQLite", "AST Parsing"],
    metrics: [
      { label: "Indexed Repositories", value: "4 Pre-Indexed" },
      { label: "Vector DB Chunks", value: "5,000+ Chunks" },
      { label: "Parser Coverage", value: "Python, JS/TS, Dart" },
      { label: "Retrieval Grounding", value: "Exact File & Line Citations" }
    ],
    architectureSteps: [
      { step: "01. Ingestion", title: "Repo Clone & Unpack", desc: "Clones HTTPS Git repositories or extracts uploaded ZIP archives into an isolated local workspace." },
      { step: "02. Parsing", title: "AST Structural Extraction", desc: "Parses source code into syntactic hierarchies to detect classes, methods, endpoints, and dependencies without regex fragility." },
      { step: "03. Chunking", title: "Semantic Boundary Chunking", desc: "Segments code along logical class/function boundaries to avoid splitting execution contexts." },
      { step: "04. Vector DB", title: "Dense Embeddings in Chroma", desc: "Computes 384-dimensional vector embeddings with BAAI/bge-small and writes them to ChromaDB." },
      { step: "05. Retrieval", title: "Grounded Query Engine", desc: "Matches developer questions against semantic vectors, ranking top-k snippets and formulating citation-backed answers." }
    ]
  },
  {
    id: "financial-pipeline",
    title: "Automated Financial Intelligence Pipeline",
    subtitle: "Corporate P&L Analysis & Statistical Forensic Auditing",
    badge: "Big Data & Quantitative Analytics",
    category: "Financial Analytics",
    github: "https://github.com/SachinCoder11/Finance",
    liveDemoType: "interactive-finance",
    summary: "Large-scale statutory financial filing ETL and statistical risk pipeline analyzing 96,632 corporate records from the Ministry of Corporate Affairs (MCA), uncovering 11,410 margin anomalies and quantifying debt-burden profit erosion.",
    problem: "Regulatory XBRL filings contained over 7 million missing cells across 130 columns, coupled with severe reporting outliers that distort macro-economic industry benchmarking and corporate solvency assessments.",
    solution: "Built a deterministic Python and MySQL data cleansing pipeline. Pruned 16 all-null attributes, filtered 45,414 revenue-active firms for FY 2024–25, calculated key solvency ratios, and implemented IQR anomaly detection revealing how median profit margins collapse as debt obligations rise.",
    technologies: ["Python", "Pandas", "NumPy", "MySQL", "Statistical Modeling", "IQR Anomaly Detection", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Raw Records Cleaned", value: "96,632 Filings" },
      { label: "Missing Cells Resolved", value: "7,001,669 Cells" },
      { label: "Revenue Active Firms", value: "45,414 Companies" },
      { label: "IQR Profit Outliers", value: "11,410 Anomalies" }
    ],
    architectureSteps: [
      { step: "01. Ingestion", title: "XBRL Ingestion & Profiling", desc: "Processed 96,632 statutory filing rows across 130 financial statement columns from MCA filings." },
      { step: "02. Pruning", title: "Schema Cleansing", desc: "Identified and removed 16 100% null columns and resolved 7+ million empty cells without data loss." },
      { step: "03. Filtering", title: "Active Firm Cohort Isolation", desc: "Isolated 45,414 commercial enterprises demonstrating positive operating revenue in FY 2024–25." },
      { step: "04. Ratios", title: "Deterministic Metric Engine", desc: "Computed Profit Margin, Expense Ratio, Finance Cost Ratio, and R&D Intensity across all active firms." },
      { step: "05. Diagnostics", title: "IQR Outlier & Quartile Auditing", desc: "Segmented firms into 4 debt burden quartiles, discovering median profit margin falls from 3.04% (Q1) to 1.32% (Q4)." }
    ]
  },
  {
    id: "global-trade",
    title: "Global Trade Analytics & Data Intelligence",
    subtitle: "Executive Excel Portfolio & Forensic Data Quality Audit",
    badge: "Business Intelligence & Data Governance",
    category: "Data Integrity & BI",
    github: "https://github.com/SachinCoder11",
    liveDemoType: "interactive-trade",
    summary: "A 10-worksheet relational Excel model analyzing 500 international commercial shipments ($474.7K volume) that resolved an ingestion bug obscuring $86.2K and identified an estimated $1.36K regional freight cost gap.",
    problem: "Fragmented multi-region logistics records obscured continental margins, while an ETL ingestion bug misclassified the North American destination region code 'NA' as null/error, hiding $86,214.30 across 87 orders.",
    solution: "Constructed an audited relational model across 10 linked worksheets using 11,007 dynamic formula cells (INDEX/MATCH, SUMIFS, AVERAGEIFS, XLOOKUP). Remediated the 'NA' code failure, validated referential integrity across 10 products and 6 continents, and built an executive KPI dashboard.",
    technologies: ["Microsoft Excel", "Relational Modeling", "INDEX/MATCH", "XLOOKUP", "SUMIFS / AVERAGEIFS", "Data Validation", "KPI Dashboards"],
    metrics: [
      { label: "Portfolio Revenue", value: "$474,704.62" },
      { label: "Operating Margin", value: "28.14% ($133.6K)" },
      { label: "Formula Cells Engineered", value: "11,007 Cells" },
      { label: "Concealed Data Rescued", value: "$86,214.30 (87 Orders)" }
    ],
    architectureSteps: [
      { step: "01. Lineage", title: "Raw Transaction Baseline", desc: "Preserved 500 original transaction records in an immutable baseline sheet for 100% auditability." },
      { step: "02. Cleansing", title: "Text Normalization & Parsing", desc: "Extracted customer codes, normalized proper-case names, and sanitized date timestamps." },
      { step: "03. Enrichment", title: "Relational Lookups", desc: "Linked product specifications and regional attributes using 560+ INDEX/MATCH and XLOOKUP formulas." },
      { step: "04. Bug Audit", title: "ISO 'NA' Ingestion Rescue", desc: "Fixed null misclassification of North American region code, recovering $86.2K in obscured sales." },
      { step: "05. Dashboard", title: "Executive KPI Cockpit", desc: "Surfaced interactive continental margins, shipping cost spreads, and category volume breakdowns." }
    ]
  }
];

export const ragRepositoriesData = [
  {
    id: "fastapi_test",
    name: "FastAPI Core",
    owner: "tiangolo",
    source: "github.com/tiangolo/fastapi",
    vectors: 5000,
    files: 148,
    lines: 24500,
    primaryLang: "Python",
    languages: { Python: 88, Markdown: 8, YAML: 4 },
    frameworks: ["Starlette", "Pydantic", "Uvicorn"],
    qualityScore: 92,
    keyComponents: {
      routes: 42,
      services: 12,
      models: 28,
      middlewares: 6
    },
    sampleQueries: [
      {
        question: "How are path parameters validated against Pydantic schemas?",
        answer: "FastAPI uses `Param` wrappers (`Path`, `Query`, `Header`) that inspect endpoint function signatures via Python's `inspect` module. The incoming HTTP request parameters are fed directly into Pydantic models for recursive validation and type coercion before hitting the route logic.",
        citations: [
          { file: "fastapi/routing.py", lines: "L142-L188", score: 0.94 },
          { file: "fastapi/params.py", lines: "L45-L82", score: 0.91 }
        ]
      },
      {
        question: "Where is dependency injection evaluated in the request lifecycle?",
        answer: "Dependency injection is handled within `solve_dependencies` in `fastapi/dependencies/utils.py`. It constructs a directed acyclic graph (DAG) of `Depends()` sub-dependencies, resolves async/sync dependencies concurrently, and manages yield-based cleanup contexts.",
        citations: [
          { file: "fastapi/dependencies/utils.py", lines: "L510-L580", score: 0.96 }
        ]
      }
    ]
  },
  {
    id: "square_pos_app",
    name: "Square POS Application",
    owner: "RohanPrasad007",
    source: "github.com/RohanPrasad007/square-pos-app",
    vectors: 31,
    files: 19,
    lines: 1713,
    primaryLang: "JavaScript",
    languages: { JavaScript: 79, Markdown: 10, JSON: 5, CSS: 3, HTML: 3 },
    frameworks: ["React", "Electron", "TailwindCSS", "MUI"],
    qualityScore: 78,
    keyComponents: {
      routes: 0,
      services: 2,
      models: 0,
      middlewares: 0
    },
    sampleQueries: [
      {
        question: "How is the invoice PDF generated for retail transactions?",
        answer: "The application uses `jspdf` and `jspdf-autotable` in the invoice print service. It formats itemized table rows, calculates GST breakdowns, and prints formatted text representation of total amounts with `num-words`.",
        citations: [
          { file: "src/services/pdfService.js", lines: "L34-L95", score: 0.93 },
          { file: "src/components/Checkout.jsx", lines: "L112-L140", score: 0.88 }
        ]
      },
      {
        question: "How does the desktop app interact with local printer hardware?",
        answer: "Electron's main process handles IPC calls (`ipcRenderer.send('print-to-pdf')`) triggered by the React frontend, allowing silent hardware receipt printing via system spooler APIs.",
        citations: [
          { file: "public/electron.js", lines: "L42-L78", score: 0.92 }
        ]
      }
    ]
  },
  {
    id: "rag_analysis_api",
    name: "RAG Analysis API",
    owner: "local",
    source: "local-workspace/zip",
    vectors: 41,
    files: 30,
    lines: 1719,
    primaryLang: "TypeScript",
    languages: { TypeScript: 83, Markdown: 9, JSON: 6, YAML: 2 },
    frameworks: ["Express", "Node.js", "Jest"],
    qualityScore: 84,
    keyComponents: {
      routes: 10,
      services: 4,
      models: 3,
      middlewares: 3
    },
    sampleQueries: [
      {
        question: "What security auditing rules are executed during repository scans?",
        answer: "The scanning service iterates over AST token nodes checking for high-entropy strings, AWS/OpenAI credential patterns in `.env` or configuration files, and unpinned dependencies in package manifests.",
        citations: [
          { file: "src/services/securityAnalyzer.ts", lines: "L22-L68", score: 0.95 }
        ]
      }
    ]
  }
];

export const financeAuditData = {
  summary: {
    rawRows: 96632,
    rawColumns: 130,
    emptyColumnsPruned: 16,
    missingCellsPurged: 7001669,
    activeFirmsAnalyzed: 45414,
    medianProfitMargin: 1.81,
    outliersIdentified: 11410
  },
  debtQuartiles: [
    { quartile: "Q1 (Low Debt)", range: "0.0% – 0.4% Finance Cost", medianMargin: 3.04, risk: "Low", description: "Healthy operating leverage; negligible interest servicing drag." },
    { quartile: "Q2 (Moderate)", range: "0.4% – 1.8% Finance Cost", medianMargin: 2.08, risk: "Moderate", description: "Controlled leverage; sustainable profit preservation." },
    { quartile: "Q3 (Elevated)", range: "1.8% – 5.2% Finance Cost", medianMargin: 1.62, risk: "Elevated", description: "Significant debt service beginning to compress retained earnings." },
    { quartile: "Q4 (High Debt)", range: "> 5.2% Finance Cost", medianMargin: 1.32, risk: "Severe", description: "Heavy debt servicing burdens; median profitability falls by 56.5% vs Q1." }
  ],
  profitabilityDistribution: [
    { label: "Profitable Entities", count: 35697, percent: 78.6, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { label: "Loss-Making Entities", count: 12119, percent: 26.7, color: "text-rose-600 bg-rose-50 border-rose-200" },
    { label: "Zero Profit / Breakeven", count: 252, percent: 0.6, color: "text-amber-600 bg-amber-50 border-amber-200" }
  ],
  statisticalCorrelations: [
    { pair: "Revenue vs Expenses", value: 0.9986, interpretation: "Extremely high deterministic tie; cost structures scale linearly with top-line receipts." },
    { pair: "Finance Cost Ratio vs Profit Margin", value: -0.1685, interpretation: "Statistically verified inverse correlation; debt servicing acts as a direct drag on margins." },
    { pair: "Revenue vs Profit After Tax", value: 0.0009, interpretation: "Absence of linear correlation proves higher turnover does not inherently guarantee profitability." }
  ]
};

export const tradeAuditData = {
  kpis: {
    totalRevenue: 474704.62,
    operatingProfit: 133570.40,
    weightedMargin: 28.14,
    totalOrders: 500,
    unweightedAvgMargin: 27.27,
    marginRange: "9.36% – 42.02%"
  },
  regions: [
    { region: "Asia", orders: 179, revenue: 171168.40, profit: 47915.86, margin: 27.99, avgShipping: 47.46, share: 36.1 },
    { region: "Europe", orders: 118, revenue: 106858.90, profit: 31185.34, margin: 29.18, avgShipping: 38.92, share: 22.5 },
    { region: "North America", orders: 87, revenue: 86214.30, profit: 23948.12, margin: 27.78, avgShipping: 42.15, share: 18.2, isRescued: true },
    { region: "South America", orders: 45, revenue: 43120.50, profit: 12084.10, margin: 28.02, avgShipping: 44.20, share: 9.1 },
    { region: "Africa", orders: 42, revenue: 38910.20, profit: 10812.50, margin: 27.79, avgShipping: 46.10, share: 8.2 },
    { region: "Oceania", orders: 29, revenue: 28432.32, profit: 7624.48, margin: 26.82, avgShipping: 45.80, share: 6.0 }
  ],
  naBugImpact: {
    concealedOrders: 87,
    concealedRevenue: 86214.30,
    rootCause: "Excel/Python CSV parser treated the two-letter ISO country code 'NA' (North America region code) as a null string (#N/A missing value).",
    resolution: "Replaced raw auto-type conversion with strict string literal matching and secondary reference joins against Region Lookup table.",
    freightDisparity: "Asia shipments incurred an average freight cost of $47.46 vs Europe at $38.92 — producing an estimated $1.36K margin leak across 179 Asia shipments."
  },
  sampleOrders: [
    { id: "ORD_2025_0001", date: "2025-01-20", customer: "Emily Smith", country: "USA", region: "North America", product: "Travel Backpack", category: "Accessories", qty: 20, price: 55.22, total: 1104.40, margin: 28.4 },
    { id: "ORD_2025_0002", date: "2025-01-22", customer: "Zhang Wei", country: "China", region: "Asia", product: "Wireless Earbuds", category: "Electronics", qty: 35, price: 82.50, total: 2887.50, margin: 31.2 },
    { id: "ORD_2025_0003", date: "2025-01-25", customer: "Hans Müller", country: "Germany", region: "Europe", product: "Smart Watch", category: "Electronics", qty: 15, price: 145.00, total: 2175.00, margin: 34.8 },
    { id: "ORD_2025_0004", date: "2025-02-02", customer: "Sophie Dubois", country: "France", region: "Europe", product: "Leather Jacket", category: "Apparel", qty: 8, price: 210.00, total: 1680.00, margin: 26.5 },
    { id: "ORD_2025_0005", date: "2025-02-10", customer: "Kenji Sato", country: "Japan", region: "Asia", product: "Fitness Tracker", category: "Electronics", qty: 40, price: 48.00, total: 1920.00, margin: 29.0 },
    { id: "ORD_2025_0006", date: "2025-02-18", customer: "Liam Johnson", country: "Canada", region: "North America", product: "Hiking Boots", category: "Footwear", qty: 12, price: 120.00, total: 1440.00, margin: 25.8 },
    { id: "ORD_2025_0007", date: "2025-03-01", customer: "Priya Sharma", country: "India", region: "Asia", product: "Cotton Hoodie", category: "Apparel", qty: 50, price: 32.00, total: 1600.00, margin: 27.1 }
  ]
};

export const chatbotCatalog = [
  {
    id: "cat-rag",
    title: "Codebase RAG Platform",
    category: "AI & GenAI",
    tags: ["rag", "llm", "vector search", "ast", "fastapi", "embeddings", "code analysis", "generative ai"],
    bestFor: "Teams wanting to understand, query, or audit large software repositories using grounded semantic retrieval without hallucinations.",
    technologies: "FastAPI, ChromaDB, Sentence Transformers, Python, Docker",
    explanation: "Matches your query because it demonstrates production-grade Retrieval-Augmented Generation, vector similarity search, and automated AST code parsing."
  },
  {
    id: "cat-finance",
    title: "Automated Financial Intelligence Pipeline",
    category: "Data Science & Statistics",
    tags: ["financial", "finance", "data science", "statistics", "etl", "python", "mysql", "anomaly detection", "pandas", "ratios"],
    bestFor: "Enterprises needing robust quantitative data cleaning, statutory financial profiling, and empirical risk modeling on high-volume datasets.",
    technologies: "Python, Pandas, MySQL, Statistical Modeling, IQR Anomaly Detection",
    explanation: "Matches your requirement for rigorous statistical data science, handling 96,632 corporate records, schema cleaning, and deterministic financial ratios."
  },
  {
    id: "cat-trade",
    title: "Global Trade Analytics & Data Intelligence",
    category: "Business Intelligence & Excel",
    tags: ["excel", "data quality", "bi", "analytics", "dashboard", "reconciliation", "logistics", "audit", "forensics"],
    bestFor: "Organizations seeking forensic data reconciliation, commercial margin analysis, and bulletproof spreadsheet modeling with dynamic formulas.",
    technologies: "Microsoft Excel, 11,007 Dynamic Formulas, Relational Modeling, KPI Cockpit",
    explanation: "Directly solves data reconciliation challenges, featuring a verified 10-sheet model that rescued $86.2K from null-ingestion bugs."
  },
  {
    id: "cat-backend",
    title: "Relational Data Systems & Business APIs",
    category: "Backend & Systems",
    tags: ["backend", "sql", "mysql", "rest api", "crud", "relational", "database", "crm", "inventory"],
    bestFor: "Recruiters looking for proven software engineering background in relational schema integrity, CRUD API endpoints, and production business apps.",
    technologies: "MySQL, REST APIs, CRUD, Relational Constraints, PropPoints CRM, Jivan Blood Bank",
    explanation: "Demonstrates practical production experience from Showstopper Technologies maintaining schema integrity and eliminating data discrepancies."
  }
];
