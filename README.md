# Sachin Dinesh Dumbre — AI & Data Intelligence Portfolio

> **Recruiter-Ready Web Portfolio with Interactive Project Demonstrations**  
> Candidate: **Sachin Dinesh Dumbre** | AI Professional & Data Systems Specialist  
> Contact: Navi Mumbai, Maharashtra | +91 8855077289 | sdineshdumbre@gmail.com  
> GitHub: [github.com/SachinCoder11](https://github.com/SachinCoder11) | LinkedIn: [linkedin.com/in/sachin-dumbre](https://linkedin.com/in/sachin-dumbre)

---

## 1. Executive Overview

This web portfolio was built specifically as a technical follow-up for recruiters and hiring managers in **AI/ML, Data Science, Quantitative Analytics, and Software Engineering**. 

Unlike standard portfolios with static text and mock statistics, this platform features **functional, browser-based interactive demonstrations** backed by real data models, persistent vector stores, and audited forensic calculations sourced directly from local development codebases.

---

## 2. Featured Projects & Interactive Demos

### A. Codebase RAG Platform (AI Repository Due Diligence)
* **Domain:** Generative AI & Software Engineering
* **GitHub Repository:** [`github.com/SachinCoder11/Codebase_RAG_Platform`](https://github.com/SachinCoder11/Codebase_RAG_Platform)
* **Architecture:** Ingestion $\to$ AST Structural Parser $\to$ Semantic Chunker $\to$ Dense Vector Embeddings (`BAAI/bge-small-en-v1.5`) $\to$ ChromaDB $\to$ Grounded Context Retriever.
* **Interactive Demo:**
  * Select from 3 indexed repositories: `FastAPI Core`, `Square POS App`, and `RAG Analysis API`.
  * Inspect AST code breakdowns (API route counts, service modules, data models, middleware interceptors).
  * Run semantic queries and receive grounded answers with exact file citations and line-range references.

### B. Automated Financial Intelligence Pipeline (Corporate P&L Analysis)
* **Domain:** Data Science, Big Data ETL & Quantitative Statistics
* **GitHub Repository:** [`github.com/SachinCoder11/Finance`](https://github.com/SachinCoder11/Finance)
* **Empirical Scale:** Cleaned 96,632 statutory corporate filings from the Ministry of Corporate Affairs (MCA), eliminating 16 all-null attributes and 7,001,669 empty cells to isolate 45,414 revenue-active firms for FY 2024–25.
* **Interactive Demo:**
  * Explore the empirical debt burden quartile distribution: reveals how median corporate profit margins collapse by **56.5%** from **3.04%** in Quartile 1 (low debt) down to **1.32%** in Quartile 4 (high debt).
  * Interquartile Range (IQR) outlier auditor: review 11,410 detected profit margin anomalies.
  * Real-time financial solvency sandbox: calculate custom Net Profit, Profit Margin, and Finance Cost Ratio.

### C. Global Trade Analytics & Data Quality Intelligence
* **Domain:** Business Intelligence, Data Reconciliation & Governance
* **Deliverable:** 10-worksheet relational Excel model (`01_Global_Trade_Analytics.xlsx`) with 11,007 dynamic formula cells (`INDEX/MATCH`, `SUMIFS`, `AVERAGEIFS`, `XLOOKUP`).
* **Commercial Scale:** 500 audited international shipments generating **$474,704.62** in revenue and **$133,570.40** in operating profit (28.14% margin).
* **Interactive Demo:**
  * **Interactive "NA" Ingestion Bug Switch:** Toggle between flawed pre-audit ingestion (where ISO country code "NA" was misclassified as null, concealing $86,214.30 across 87 orders) and the reconciled state.
  * Regional freight disparity analyzer: compare Asia ($47.46/order) vs Europe ($38.92/order) and audit the $1.36K margin leak.
  * Filterable transaction browser for 500 trade transactions.

---

## 3. Natural Language Requirement Discovery Chatbot (Prototype)

Built as an interactive proof-of-concept for intelligent visitor requirement discovery:
* **Natural Language Parsing:** Evaluates visitor inputs for keywords, domain intentions, and project scope (e.g., RAG, financial modeling, SQL, Excel, CatBoost).
* **Multi-Turn Discovery:** Prompts for clarification if requirements are ambiguous.
* **Explainable Recommendations:** Pairs visitors with matching portfolio offerings and provides an explicit explanation of *why* each project fits their criteria.
* **Transparent Architecture:** Implemented with deterministic client-side NLP parsing for reliable, local execution without requiring external paid API keys. Fully prepared for drop-in LLM API integration.

---

## 4. Local Run & Deployment Instructions

### Running Locally
```bash
# Clone or navigate to the repository
cd C:\Users\DELL\Desktop\SUPPORT

# Install dependencies (if not already cached)
npm install

# Start local Vite development server
npm run dev

# Or build and preview production bundle
npm run build
npm run preview
```

### Deploying to Vercel
1. Install Vercel CLI (optional): `npm install -g vercel`
2. Link & Deploy:
   ```bash
   vercel
   ```
3. For production promotion:
   ```bash
   vercel --prod
   ```
*(Alternatively, connect the GitHub repository directly in the Vercel Web Dashboard; the included `vercel.json` handles static routing automatically).*

---

## 5. Candidate Assurance & Forensic Traceability

Every dataset, formula count, row quantity, and architectural component referenced in this portfolio has been verified against the candidate's original files on disk. Zero mock metrics or fabricated credentials.
