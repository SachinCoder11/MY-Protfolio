import React from 'react';
import Header from './components/Header';
import ProjectOneExcel from './components/ProjectOneExcel';
import ProjectTwoFinance from './components/ProjectTwoFinance';
import ProjectThreeSpace from './components/ProjectThreeSpace';
import Footer from './components/Footer';
import { Layers, FileSpreadsheet, Database, Rocket, ShieldCheck } from 'lucide-react';

export default function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Minimal Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full space-y-8">
        
        {/* Showcase Intro Banner */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Audited Resume Evidence Deliverables</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Selected Analytics Projects
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            This technical showcase provides direct access to the three projects listed under <strong className="text-slate-900 font-semibold">Featured Analytics Projects</strong> on my resume. Every metric, statistical finding, formula count, and code repository is audited directly against original project files.
          </p>

          {/* Quick Jump Links */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => scrollTo('project-excel')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1.5"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>01. Global Trade Excel Model</span>
            </button>

            <button
              onClick={() => scrollTo('project-finance')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>02. Corporate Financial Pipeline</span>
            </button>

            <button
              onClick={() => scrollTo('project-space')}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1.5"
            >
              <Rocket className="w-3.5 h-3.5 text-purple-600" />
              <span>03. Space Mission Imputation Audit</span>
            </button>
          </div>
        </div>

        {/* PROJECT 1: Global Trade Analytics & Data Quality Intelligence */}
        <section id="project-excel">
          <ProjectOneExcel />
        </section>

        {/* PROJECT 2: Automated Financial Intelligence Pipeline */}
        <section id="project-finance">
          <ProjectTwoFinance />
        </section>

        {/* PROJECT 3: Space Mission Exploratory Data Analysis & Imputation Audit */}
        <section id="project-space">
          <ProjectThreeSpace />
        </section>

      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
