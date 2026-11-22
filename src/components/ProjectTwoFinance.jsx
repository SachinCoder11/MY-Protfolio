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
              <span>Data Pipeline: Complete</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200/90 flex items-center gap-1 shadow-2xs">
              <Clock className="w-3 h-3 text-amber-600" />
              <span>Next Phase: Outlier Explanations</span>
            </span>
            <span className="text-xs text-blue-700/80 font-medium">02 of 03</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Automated Financial Intelligence Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Corporate P&L Analysis • Ingesting 96,000+ MCA filings, profitability ratios, and anomaly checks
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

          <p className="md:col-span-2 text-xs text-slate-500 text-center font-medium">
            Charts showing profit margin distribution and debt burden across active operating companies
          </p>
        </div>

        {/* Narrative & Statistical Explanation */}
        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* Problem */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
              The Problem: Messy and Incomplete Regulatory Filings
            </h3>
            <p>
              Corporate financial returns from the Ministry of Corporate Affairs (MCA) were extremely noisy. Across 130 reported attributes, there were over <strong className="text-slate-900 font-semibold">7 million missing values</strong>, non-standard fiscal reporting periods, and extreme outliers that distort ordinary industry averages.
            </p>
          </div>

          {/* Solution & Completed Implementation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1">
              How I Cleaned and Analyzed the Data
            </h3>
            <p>
              I loaded 96,632 raw MCA records into <strong className="text-slate-900 font-semibold">Python (Pandas, NumPy) and MySQL</strong>. After dropping 16 columns that were completely blank, I isolated companies actively filing for FY 2024–25, calculated core profitability and expense ratios, and built an Interquartile Range (IQR) anomaly workflow to flag unusual numbers for audit.
            </p>
          </div>

          {/* Data Sourcing & Ingestion Lineage */}
          <div className="bg-slate-50/90 rounded-lg p-3.5 border border-slate-200/90 space-y-2 text-xs shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-200/70 pb-1.5">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                Where the Data Came From
              </span>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/70">
                Official MCA Filings
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">• Source:</span> Annual corporate Profit & Loss filings from the <strong>Ministry of Corporate Affairs (MCA)</strong> repository, matched with official company master records.
              </div>
              <div>
                <span className="font-semibold text-slate-800">• Processing:</span> Processed 96,632 raw filings in Python, dropped 16 empty columns, filtered to FY 2024–25 (48,068 records), and isolated 45,414 actively operating companies with positive revenue.
              </div>
            </div>
          </div>

          {/* The Financial Distribution Story */}
          <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/30 rounded-lg p-4 border border-blue-200/80 space-y-3 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>What the Data Showed</span>
            </h4>
            
            <p className="text-xs text-slate-600">
              Unlike theoretical bell curves, actual company profitability clusters heavily around zero with long tails on both ends:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs py-1">
              <div className="bg-emerald-50/80 p-2 sm:p-2.5 rounded-lg border border-emerald-200/80 shadow-2xs">
                <div className="font-bold text-emerald-800 text-sm tracking-tight">35,697</div>
                <div className="text-[11px] text-emerald-700 font-medium">Profitable Firms (74.3%)</div>
              </div>
              <div className="bg-rose-50/80 p-2 sm:p-2.5 rounded-lg border border-rose-200/80 shadow-2xs">
                <div className="font-bold text-rose-800 text-sm tracking-tight">12,119</div>
                <div className="text-[11px] text-rose-700 font-medium">Loss-Making Firms (25.2%)</div>
              </div>
              <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-700 text-sm tracking-tight">252</div>
                <div className="text-[11px] text-slate-500 font-medium">Exact Breakeven (0.5%)</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-600">
              The breakdown above includes all 48,068 filings for the year; ratio calculations and debt comparisons focus on the 45,414 companies with active revenue.
            </p>

            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Median vs. Mean:</strong> Because extreme outliers distort simple averages, the median gives a much truer picture. The actual median profit margin across operating businesses is <strong className="text-slate-900 font-semibold">1.81%</strong>.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Outliers (11,410 flagged):</strong> Flagged 11,410 companies outside 1.5× IQR fences. In financial auditing, extreme swings often represent real events like large write-downs or sharp debt increases, so flagging them for inspection is far safer than deleting them.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Debt Burden Impact:</strong> Splitting companies by borrowing costs revealed a clear impact on profitability. Median profit margin fell from <strong className="text-emerald-700 font-semibold">3.04% for low-debt companies (Q1)</strong> down to <strong className="text-rose-700 font-semibold">1.32% for high-debt companies (Q4)</strong>, a 56% reduction in operational margin.</span>
              </li>
            </ul>
          </div>

          {/* Current Status Note */}
          <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200/80 text-xs text-amber-950 shadow-2xs">
            <strong className="text-amber-900">Current Status:</strong> Ingestion, data cleaning, ratio calculations, and statistical anomaly detection are complete. Next, I plan to build an automated summarizer to explain why specific outliers occurred in plain language.
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-blue-800/80 font-semibold uppercase text-[11px]">Skills & Tools Used:</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Python (Pandas, NumPy)</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">MySQL</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Statistical Analysis</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">IQR Anomaly Detection</span>
            <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-900 font-medium border border-blue-200/70">Matplotlib & Seaborn</span>
          </div>

        </div>

      </div>
    </article>
  );
}
