import React, { useState } from 'react';
import { projectLinks } from '../config/projectLinks';
import { 
  Rocket, 
  Github, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2, 
  AlertTriangle,
  PieChart,
  BarChart2
} from 'lucide-react';
import ImageModal from './ImageModal';

export default function ProjectThreeSpace() {
  const [modalOpen, setModalOpen] = useState(false);
  const { spaceMission } = projectLinks;

  return (
    <article className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
      <ImageModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        imageSrc={spaceMission.analysisChartImage}
        imageAlt="Space Mission Imputation Audit Chart"
        title="Space Mission Exploratory Data Analysis & Imputation Risk Audit"
      />

      {/* Project Header & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
              Forensic EDA & Statistical Governance
            </span>
            <span className="text-xs text-slate-400 font-mono">03 of 03</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Space Mission Exploratory Data Analysis & Imputation Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Historical Aerospace Analytics (1957–2020) • Missing Data Forensics & Price-Band Segmentation
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="shrink-0">
          <a
            href={spaceMission.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Main Grid: Visuals & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Genuine Analysis Chart Preview */}
        <div className="lg:col-span-5 space-y-2">
          <div 
            onClick={() => setModalOpen(true)}
            className="group relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-xs hover:border-blue-400 transition-all"
          >
            <img 
              src={spaceMission.analysisChartImage} 
              alt="Space Mission Sparsity & Imputation Distortion Chart" 
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to Expand Analysis Charts</span>
              </span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 text-center font-mono">
            Audit chart computed directly from 4,324 space mission records
          </p>
        </div>

        {/* Narrative & Statistical Explanation */}
        <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* Problem */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              The Missing Data Challenge in Historical Aerospace Records
            </h3>
            <p>
              Historical aerospace records spanning seven decades (1957–2020) across <strong className="text-slate-900 font-semibold">4,324 space missions</strong> suffered from severe financial attribute sparsity: <strong className="text-slate-900 font-semibold">3,360 records (77.7%) lacked cost documentation</strong> due to classified military programs, proprietary commercial filings, and unstandardized historical disclosures.
            </p>
          </div>

          {/* Solution & Imputation Audit */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Why Naive Imputation Failed & How Price-Band Segmentation Solved It
            </h3>
            <p>
              Standard automated pipeline routines frequently substitute missing quantitative fields with the global arithmetic mean ($153.79M). Proved mathematically that naive mean substitution created a <strong className="text-rose-700 font-semibold">false $5,000M cost cluster artifact</strong>, distorting decade-by-decade variance analyses by over 240%.
            </p>
            <p className="mt-2">
              Remediated this distortion by establishing <strong className="text-slate-900 font-semibold">price-band segmentation</strong> based on payload mass, orbit class, and launcher propulsion families, quarantining sparse subsets into transparent audit partitions without corrupting ground-truth descriptive metrics.
            </p>
          </div>

          {/* Key Findings */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200/80 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Statistical & Governance Findings</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>4,324 Total Missions Audited:</strong> 964 reported costs (22.3%) vs. 3,360 missing (77.7%).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Extreme Skewness Diagnosed:</strong> Recorded costs span $5.3M to $5,000M (Apollo/Saturn V).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Agency Expenditure Profiling:</strong> Evaluated NASA, Roscosmos, ISRO, SpaceX, and CASC patterns cleanly.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Data Governance Standard:</strong> Formulated SOP requiring records with &gt;50% attribute sparsity be flagged.</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-slate-500 font-semibold uppercase text-[11px]">Technologies Used:</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Microsoft Excel (Pivot Tables, Distribution Modeling)</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Python (Pandas, NumPy)</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Descriptive Statistics</span>
            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">Matplotlib & Seaborn</span>
          </div>

        </div>

      </div>
    </article>
  );
}
