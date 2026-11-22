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
            <span className="text-xs text-purple-700/80 font-medium">03 of 03</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Space Mission Exploratory Data Analysis & Imputation Audit
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Historical Space Flights (1957 to 2020) • Handling Missing Costs & Launch Price Segmentation
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
        <div className="w-fit max-w-full mx-auto space-y-2">
          <div 
            onClick={() => setModalOpen(true)}
            className="group relative w-fit max-w-full mx-auto rounded-lg overflow-hidden border border-purple-200/70 bg-white cursor-pointer shadow-xs hover:border-purple-400 transition-all"
          >
            <img 
              src={spaceMission.analysisChartImage} 
              alt="Space Mission Sparsity & Imputation Distortion Chart" 
              className="block w-auto max-w-full max-h-[360px] object-contain"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to Expand Analysis Charts</span>
              </span>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center font-medium">
            Launch volume and missing cost patterns across 4,324 space missions
          </p>
        </div>

        {/* Narrative & Statistical Explanation */}
        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* The Challenge */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-1">
              The Problem: Decades of Missing Budget Records
            </h3>
            <p>
              Looking at space missions between 1957 and 2020, financial data is missing for nearly 78% of all flights (<strong className="text-slate-900 font-semibold">3,360 out of 4,324 missions</strong>). This happens because many military missions were classified, commercial contracts were confidential, and older records simply were not published.
            </p>
          </div>

          {/* Solution & Imputation Audit */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-1">
              Why Filling in Missing Values with Averages Failed
            </h3>
            <p>
              Standard automated tools often fill in missing numbers with the overall average ($153.8M). When applied here, that created artificial cost spikes and distorted decade-over-decade trends by more than <strong className="text-rose-700 font-semibold">240%</strong>.
            </p>
            <p className="mt-2">
              Instead of guessing missing numbers, I grouped launches into <strong className="text-slate-900 font-semibold">price bands</strong> based on rocket capacity, destination orbit, and time period. This allowed us to study trends without letting missing values corrupt real numbers.
            </p>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-br from-purple-50/60 to-pink-50/30 rounded-lg p-4 border border-purple-200/80 space-y-2 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Key Takeaways & Findings</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>4,324 Missions Audited:</strong> 964 had disclosed budgets, while 3,360 were cleanly cataloged as missing.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Massive Cost Spread:</strong> Disclosed mission budgets ranged from $5.3M for small commercial rockets to $5,000M for Apollo/Saturn V launches.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Agency Trends:</strong> Tracked historical launch rates and budget patterns across NASA, Roscosmos, ISRO, SpaceX, and CASC.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Practical Takeaway:</strong> When more than half of a column is missing, automatic imputation distorts reality. Grouping and transparent segmentation give much more reliable results.</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-purple-800/80 font-semibold uppercase text-[11px]">Skills & Tools Used:</span>
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
