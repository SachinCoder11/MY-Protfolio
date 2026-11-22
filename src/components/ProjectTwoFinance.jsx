import React, { useState } from 'react';
import { projectLinks } from '../config/projectLinks';
import { 
  Github, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2, 
  Clock, 
  BarChart3, 
  FileText
} from 'lucide-react';
import ImageModal from './ImageModal';

export default function ProjectTwoFinance() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const { financialPipeline } = projectLinks;

  const handleOpenImage = (src, title) => {
    setActiveImage({ src, title });
    setModalOpen(true);
  };

  return (
    <article className="bg-gradient-to-b from-white via-white to-blue-50/20 rounded-xl border border-blue-900/10 shadow-xs hover:border-blue-500/30 transition-all p-6 sm:p-8 space-y-6">
      {activeImage && (
        <ImageModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          imageSrc={activeImage.src}
          imageAlt={activeImage.title}
          title={activeImage.title}
        />
      )}

      {/* Project Header & Status Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/90 flex items-center gap-1 shadow-2xs">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Pipeline & Analytics: Complete</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/90 flex items-center gap-1 shadow-2xs">
              <Clock className="w-3 h-3 text-amber-600" />
              <span>Predictive Modeling: Next Phase</span>
            </span>
            <span className="text-xs text-blue-700/70 font-mono font-semibold">02 of 03</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Automated Financial Intelligence Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Corporate P&L Analysis • Statutory MCA Filing Ingestion, Ratio Modeling & Anomaly Detection
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="shrink-0">
          <a
            href={financialPipeline.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>View Code on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
          </a>
        </div>
      </div>

      {/* Main Grid: Visuals & Narrative */}
      <div className="space-y-6">
        
        {/* Genuine Charts from Python Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            onClick={() => handleOpenImage(financialPipeline.distributionImage, "Profit Margin Distribution & Skewness across 45,414 Firms")}
            className="group relative rounded-lg overflow-hidden border border-blue-200/70 bg-slate-50 cursor-pointer shadow-xs hover:border-blue-400 transition-all"
          >
            <img 
              src={financialPipeline.distributionImage} 
              alt="Profit Margin Distribution Chart" 
              className="w-full h-56 object-contain bg-white group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Expand Profit Margin Distribution</span>
              </span>
            </div>
          </div>

          <div 
            onClick={() => handleOpenImage(financialPipeline.debtBurdenImage, "Debt Burden Quartiles vs Median Profit Margin")}
            className="group relative rounded-lg overflow-hidden border border-blue-200/70 bg-slate-50 cursor-pointer shadow-xs hover:border-blue-400 transition-all"
          >
            <img 
              src={financialPipeline.debtBurdenImage} 
              alt="Debt Burden Quartile Chart" 
              className="w-full h-56 object-contain bg-white group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Expand Debt Quartile Chart</span>
              </span>
            </div>
          </div>

          <p className="md:col-span-2 text-[11px] text-slate-500 text-center font-mono">
            Distribution and debt burden charts generated from MCA corporate filings
          </p>
        </div>

        {/* Narrative & Statistical Explanation */}
        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* Problem */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
              The Challenge: Noisy Regulatory Filings
            </h3>
            <p>
              Corporate financial returns from the Ministry of Corporate Affairs (MCA) contained over <strong className="text-slate-900 font-semibold">7 million missing values across 130 attributes</strong>, combined with non-standard reporting periods and extreme reporting outliers that distort ordinary industry benchmarks.
            </p>
          </div>

          {/* Solution & Completed Implementation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
              Data Pipeline & Analytical Approach
            </h3>
            <p>
              Cleaned 96,632 raw MCA XBRL records using <strong className="text-slate-900 font-semibold">Python (Pandas, NumPy) and MySQL</strong>. Pruned 16 completely empty (100% null) attributes, isolated active companies for FY 2024–25, calculated deterministic financial ratios (Profit Margin, Expense Ratio, Finance Cost Ratio), and engineered an Interquartile Range (IQR) anomaly detection pipeline.
            </p>
          </div>

          {/* Data Sourcing & Ingestion Lineage */}
          <div className="bg-slate-50/90 rounded-lg p-3.5 border border-slate-200/90 space-y-2 text-xs shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-1.5">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                Data Source & Processing Lineage
              </span>
              <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/70">
                Official MCA Public Filings
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">• Source:</span> Annual corporate Profit & Loss XBRL returns from the <strong>Ministry of Corporate Affairs (MCA)</strong> repository, matched with official company master records.
              </div>
              <div>
                <span className="font-semibold text-slate-800">• Processing:</span> Cleaned 96,632 batch filings in Python, pruned 16 all-null columns, filtered for fiscal year 2024–25 (48,068 records), and removed inactive shell companies to isolate 45,414 revenue-generating firms.
              </div>
            </div>
          </div>

          {/* The Financial Distribution Story */}
          <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/30 rounded-lg p-4 border border-blue-200/80 space-y-3 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>What the Data Revealed</span>
            </h4>
            
            <p className="text-xs text-slate-600">
              Unlike textbook bell curves, actual statutory corporate profitability clusters tightly around zero with long positive and negative tails:
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-xs py-1">
              <div className="bg-emerald-50/80 p-2 rounded border border-emerald-200/80 shadow-2xs">
                <div className="font-bold text-emerald-800 text-sm font-mono">35,697</div>
                <div className="text-[10px] text-emerald-700">Profitable Firms (74.3%)</div>
              </div>
              <div className="bg-rose-50/80 p-2 rounded border border-rose-200/80 shadow-2xs">
                <div className="font-bold text-rose-800 text-sm font-mono">12,119</div>
                <div className="text-[10px] text-rose-700">Loss-Making Firms (25.2%)</div>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-700 text-sm font-mono">252</div>
                <div className="text-[10px] text-slate-500">Exact Breakeven (0.5%)</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600">
              Profitability counts use all 48,068 current-FY filings; financial-ratio and debt-burden analysis uses the 45,414 revenue-positive firms.
            </p>

            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Median vs. Mean:</strong> Extreme skewness makes averages deceptive. The true median profit margin across active operating companies is <strong className="font-mono text-slate-900">1.81%</strong>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Outlier Detection (11,410 flagged):</strong> Identified 11,410 companies beyond 1.5× IQR fences. In financial auditing, extreme swings often indicate one-time write-downs or sudden debt spikes, making it critical to flag rather than discard them.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Debt Burden Impact:</strong> Grouping companies by finance cost quartiles showed median profit margin drops from <strong className="text-emerald-700 font-mono">3.04% in Q1</strong> (low debt) down to <strong className="text-rose-700 font-mono">1.32% in Q4</strong> (high debt), representing a 56.5% decline in operational profit.</span>
              </li>
            </ul>
          </div>

          {/* Current Status Note */}
          <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200/80 text-xs text-amber-950 shadow-2xs">
            <strong className="text-amber-900">Current Status:</strong> Ingestion, data cleaning, financial ratio calculations, and statistical anomaly detection are complete. Next, I plan to build an automated summarizer to explain why specific outliers occurred in plain language.
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-blue-800/80 font-semibold uppercase text-[11px]">Core Tech & Tools:</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Python (Pandas, NumPy)</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">MySQL</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Statistical Modeling</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">IQR Anomaly Detection</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Matplotlib & Seaborn</span>
          </div>

        </div>

      </div>
    </article>
  );
}
