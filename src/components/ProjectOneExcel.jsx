import React, { useState } from 'react';
import { projectLinks } from '../config/projectLinks';
import { 
  FileSpreadsheet, 
  Download, 
  ExternalLink, 
  ZoomIn, 
  CheckCircle2, 
  AlertCircle, 
  Layers,
  TrendingUp,
  Table,
  FolderOpen,
  Info
} from 'lucide-react';
import ImageModal from './ImageModal';

export default function ProjectOneExcel() {
  const [modalOpen, setModalOpen] = useState(false);
  const { globalTrade } = projectLinks;

  return (
    <article className="bg-gradient-to-b from-white via-white to-emerald-50/20 rounded-xl border border-emerald-900/10 shadow-xs hover:border-emerald-500/30 transition-all p-6 sm:p-8 space-y-6">
      <ImageModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        imageSrc={globalTrade.previewImage}
        imageAlt="Executive Excel Dashboard Preview"
        title="Global Trade Analytics — Audited 11-Sheet Executive Excel Model"
      />

      {/* Project Header & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-2xs">
              Microsoft Excel Deliverable
            </span>
            <span className="text-xs text-emerald-700/70 font-mono font-semibold">01 of 03</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Global Trade Analytics & Data Quality Intelligence
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Executive Excel Portfolio • Relational Modeling, Data Governance & Financial Auditing
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href={globalTrade.downloadUrl}
            download="Global_Trade_Analytics_Executive_Portfolio.xlsx"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Master (.xlsx)</span>
          </a>

          <a
            href={globalTrade.googleDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors border border-slate-200/80 shadow-2xs"
          >
            <span>Open in Google Drive</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={globalTrade.googleDriveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 transition-colors border border-emerald-200/80 shadow-2xs"
          >
            <FolderOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Browse Drive Folder</span>
          </a>
        </div>
      </div>

      {/* Helpful Drive Navigation & Access Notice */}
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-3 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-emerald-900">Drive Viewing Note:</strong> When inspecting in Google Drive web preview, use the <strong>worksheet tabs along the bottom bar</strong> to switch sheets. Download the file to open natively in Microsoft Excel with interactive formulas and VBA macros.
          </span>
        </div>
        <a 
          href={globalTrade.googleDriveFolderUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-bold text-emerald-700 hover:text-emerald-900 underline shrink-0 whitespace-nowrap text-xs"
        >
          View All Drive Parts →
        </a>
      </div>

      {/* Main Grid: Visual Screenshot Preview & Analytical Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Genuine Screenshot Preview */}
        <div className="lg:col-span-5 space-y-2">
          <div 
            onClick={() => setModalOpen(true)}
            className="group relative rounded-lg overflow-hidden border border-emerald-200/70 bg-slate-50 cursor-pointer shadow-xs hover:border-emerald-400 transition-all"
          >
            <img 
              src={globalTrade.previewImage} 
              alt="Global Trade Analytics Dashboard Preview" 
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-opacity shadow">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to Expand Dashboard Preview</span>
              </span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 text-center font-mono">
            Actual dashboard screenshot from Sheet 09_Executive_Dashboard
          </p>
        </div>

        {/* Concise Explanation */}
        <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
          
          {/* Problem */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Business Problem & Data Flaw
            </h3>
            <p>
              Fragmented international logistics records obscured regional profitability, while an automated ETL ingestion bug misclassified the North America destination region code <strong className="font-mono text-slate-900">"NA"</strong> as a null/missing value (<strong className="font-mono text-rose-600">#N/A</strong>). This silently dropped <strong className="text-slate-900 font-semibold">$86,214.30 across 87 orders</strong> from executive reporting.
            </p>
          </div>

          {/* Solution & Implementation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              What Was Implemented in Excel
            </h3>
            <p>
              Engineered a complete relational Excel workbook across <strong className="text-slate-900 font-semibold">11 linked worksheets</strong> analyzing 500 commercial transactions ($474,704.62 total sales, 28.14% operating margin). Sourced from an immutable baseline sheet (<strong className="font-mono text-xs text-slate-800">02_Raw_Trade_Data</strong>), normalized text, linked master dimension tables via <strong className="text-emerald-800 font-semibold">11,000+ dynamic formula cells</strong> (INDEX/MATCH, SUMIFS, AVERAGEIFS, XLOOKUP, tiered pricing logic), and remediated the NA bug without data loss.
            </p>
          </div>

          {/* Key Findings */}
          <div className="bg-gradient-to-br from-emerald-50/60 to-teal-50/30 rounded-lg p-4 border border-emerald-200/80 space-y-2 shadow-2xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Audited Findings & Commercial Outputs</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>500 Transactions Audited:</strong> $474.7K gross sales, $133.6K operating profit.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>$86,214.30 Rescued:</strong> Restored 87 North American orders from null misclassification.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Regional Logistics Disparity:</strong> Asia incurred $47.46 shipping/order vs Europe at $38.92.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>$1.36K Margin Gap:</strong> Quantified continental shipping surcharge leakage across 179 Asia shipments.</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-emerald-800/80 font-semibold uppercase text-[11px]">Technologies Used:</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-200/70">Microsoft Excel</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-200/70">Dynamic Formulas (INDEX/MATCH, XLOOKUP)</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-200/70">SUMIFS & AVERAGEIFS</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-200/70">Relational Data Modeling</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 font-medium border border-emerald-200/70">KPI Dashboard</span>
          </div>

        </div>

      </div>

      {/* Divided Modular Chunks for Easy Drive Viewing */}
      <div className="border-t border-emerald-100 pt-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Divided Project Workbooks (Modular Google Drive Chunks)
            </h3>
            <p className="text-xs text-slate-500">
              For lightweight inspection, the full project is organized into three dedicated modular workbooks on Google Drive:
            </p>
          </div>
          <a
            href={globalTrade.googleDriveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 shrink-0"
          >
            <span>Open All in Google Drive</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {globalTrade.parts.map((part) => (
            <div 
              key={part.id}
              className="p-3 rounded-lg border border-emerald-200/70 bg-gradient-to-b from-white to-emerald-50/30 hover:border-emerald-300 transition-colors flex flex-col justify-between space-y-2.5 shadow-2xs"
            >
              <div>
                <div className="font-semibold text-xs text-slate-800">
                  {part.label}
                </div>
                <div className="text-[11px] text-emerald-800/80 mt-0.5">
                  Sheets: {part.sheets}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs">
                <a
                  href={part.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 px-2 rounded bg-white hover:bg-emerald-50/50 text-slate-700 font-medium border border-slate-200/80 shadow-2xs transition-colors flex items-center justify-center gap-1"
                >
                  <span>Drive Preview</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={part.downloadUrl}
                  download
                  className="py-1.5 px-2 rounded bg-emerald-100/70 hover:bg-emerald-200 text-emerald-800 font-medium transition-colors"
                  title="Download .xlsx file"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </article>
  );
}
