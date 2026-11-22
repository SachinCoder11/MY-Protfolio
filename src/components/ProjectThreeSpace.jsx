import React, { useState } from 'react';
import { projectLinks } from '../config/projectLinks';
import { 
  Github, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2
} from 'lucide-react';
import ImageModal from './ImageModal';

export default function ProjectThreeSpace() {
  const [modalOpen, setModalOpen] = useState(false);
  const { spaceMission } = projectLinks;

  return (
    <article className="bg-gradient-to-b from-white via-white to-purple-50/20 rounded-xl border border-purple-900/10 shadow-xs hover:border-purple-500/30 transition-all p-6 sm:p-8 space-y-6">
      <ImageModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        imageSrc={spaceMission.analysisChartImage}
        imageAlt="Space Mission Imputation Audit Chart"
        title="Space Mission Exploratory Data Analysis & Imputation Audit"
      />

      {/* Project Header & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200/90 shadow-2xs">
              Exploratory Data Analysis & Quality
            </span>
            <span className="text-xs text-purple-700/70 font-mono font-semibold">03 of 03</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Space Mission Exploratory Data Analysis & Imputation Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Historical Aerospace Trends (1957–2020) • Missing Data Analysis & Launch Price Segmentation
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="shrink-0">
          <a
            href={spaceMission.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-xs"
          >
            <Github className="w-4 h-4" />
            <span>View Code on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
          </a>
        </div>
      </div>

      {/* Main Grid: Visuals & Narrative */}
      <div className="space-y-6">
        
        {/* Genuine Analysis Chart Preview */}
        <div className="w-full max-w-5xl mx-auto space-y-2">
          <div 
            onClick={() => setModalOpen(true)}
            className="group relative rounded-lg overflow-hidden border border-purple-200/70 bg-slate-50 cursor-pointer shadow-xs hover:border-purple-400 transition-all"
          >
            <img 
              src={spaceMission.analysisChartImage} 
              alt="Space Mission Sparsity & Imputation Distortion Chart" 
              className="w-full max-h-[360px] object-contain bg-slate-50 group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to Expand Analysis Charts</span>
              </span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 text-center font-mono">
            Launch frequency and budget missingness patterns across 4,324 space missions
          </p>
        </div>

        {/* Narrative & Statistical Explanation */}
        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* The Challenge */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-1">
              The Challenge: Massive Historical Data Gaps
            </h3>
            <p>
              Aerospace mission records spanning seven decades (1957–2020) have substantial financial gaps: <strong className="text-slate-900 font-semibold">77.7% of all missions (3,360 out of 4,324) lack published launch costs</strong> due to classified defense programs, proprietary commercial contracts, and unstandardized historical record-keeping.
            </p>
          </div>

          {/* Solution & Imputation Audit */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-1">
              Why Simple Mean Imputation Failed & How I Fixed It
            </h3>
            <p>
              Standard automated tools often fill missing numerical fields with the dataset's global mean ($153.8M). Here, doing that mathematically introduced <strong className="text-rose-700 font-semibold">false $5,000M cost cluster artifacts</strong>, distorting decade-by-decade variance calculations by over 240%.
            </p>
            <p className="mt-2">
              Instead of blindly guessing missing figures, I created a <strong className="text-slate-900 font-semibold">price-band segmentation model</strong> based on payload mass, target orbit, and launcher propulsion class—quarantining sparse records cleanly without corrupting true historical benchmarks.
            </p>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-br from-purple-50/60 to-pink-50/30 rounded-lg p-4 border border-purple-200/80 space-y-2 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Key Insights & Takeaways</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>4,324 Missions Analyzed:</strong> 964 had disclosed budgets, while 3,360 required dedicated missingness handling.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Extreme Cost Variance:</strong> Disclosed mission costs ranged from $5.3M (small commercial launchers) to $5,000M (Apollo/Saturn V).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Agency Trends:</strong> Tracked historical launch rates and budget patterns across NASA, Roscosmos, ISRO, SpaceX, and CASC.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Data Quality Rule:</strong> Proved that datasets with high sparsity (&gt;50% missing values) require transparent segmentation rather than automatic imputation.</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-purple-800/80 font-semibold uppercase text-[11px]">Core Tech & Tools:</span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 font-medium border border-purple-200/70">Microsoft Excel</span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 font-medium border border-purple-200/70">Python (Pandas, NumPy)</span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 font-medium border border-purple-200/70">Descriptive Statistics</span>
            <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-900 font-medium border border-purple-200/70">Matplotlib & Seaborn</span>
          </div>

        </div>

      </div>
    </article>
  );
}
