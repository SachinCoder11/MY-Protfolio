/**
 * Central Configuration for Project Links & Verified Deliverables
 * All URLs verified against genuine GitHub repositories and Google Drive files.
 */

export const projectLinks = {
  globalTrade: {
    title: "Global Trade Analytics & Data Quality Intelligence",
    downloadUrl: "/Global_Trade_Analytics_Executive_Portfolio.xlsx",
    googleDriveUrl: "https://drive.google.com/file/d/1ip_tRdOFyG1Dw4vJVIr_Q_Y5NKsf50KB/view?usp=sharing",
    googleDriveFolderUrl: "https://drive.google.com/drive/folders/1KazbyrJMVOgLwSqdtVvQPJPKlrERm-sT?usp=sharing",
    excelFileName: "Global_Trade_Analytics_Executive_Portfolio.xlsx",
    fileSize: "171 KB",
    previewImage: "/images/01_Global_Trade_Dashboard_Preview.png",
    parts: [
      {
        id: "part-1",
        label: "Part 1: Executive Dashboard & Insights",
        sheets: "01_Overview, 09_Dashboard, 10_Insights",
        driveUrl: "https://drive.google.com/file/d/1Dx5tNjjzfkBwfbFLON-g7871B-WF9C4p/view?usp=sharing",
        downloadUrl: "/Part_1_Executive_Dashboard_and_Insights.xlsx",
        size: "107 KB"
      },
      {
        id: "part-2",
        label: "Part 2: Raw & Clean Trade Data",
        sheets: "01_Overview, 02_Raw, 03_Clean, 04_Enrichment",
        driveUrl: "https://drive.google.com/file/d/1Wbea23-1fLYT9PCc1fv0LvqJ0eDNPWYf/view?usp=sharing",
        downloadUrl: "/Part_2_Trade_Data_and_Enrichment.xlsx",
        size: "142 KB"
      },
      {
        id: "part-3",
        label: "Part 3: Quality Audit & Performance",
        sheets: "05_Audit, 06_Metrics, 07_Performance, 08_Pivots",
        driveUrl: "https://drive.google.com/file/d/1wLhnVkvugPF4w08gHtPgaJallcCZx9lD/view?usp=sharing",
        downloadUrl: "/Part_3_Quality_Audit_and_Analytics.xlsx",
        size: "113 KB"
      }
    ]
  },
  financialPipeline: {
    title: "Automated Financial Intelligence Pipeline",
    githubUrl: "https://github.com/SachinCoder11/Automated_Financial_Intelligence_Pipeline",
    repoName: "SachinCoder11/Automated_Financial_Intelligence_Pipeline",
    distributionImage: "/images/profit_margin_distribution.png",
    debtBurdenImage: "/images/finance_cost_burden.png"
  },
  spaceMission: {
    title: "Space Mission Exploratory Data Analysis & Imputation Audit",
    githubUrl: "https://github.com/SachinCoder11/Space_Mission_EDA_Project",
    repoName: "SachinCoder11/Space_Mission_EDA_Project",
    analysisChartImage: "/images/space_mission_imputation_audit.png"
  },
  candidate: {
    name: "Sachin Dinesh Dumbre",
    role: "AI & Data Science Professional",
    email: "sdineshdumbre@gmail.com",
    phone: "+91 8855077289",
    location: "Navi Mumbai, Maharashtra, India",
    github: "https://github.com/SachinCoder11",
    linkedin: "https://linkedin.com/in/sachin-dumbre"
  }
};
