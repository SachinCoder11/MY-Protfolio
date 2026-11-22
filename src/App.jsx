import React, { useEffect } from 'react';
import Header from './components/Header';
import ProjectOneExcel from './components/ProjectOneExcel';
import ProjectTwoFinance from './components/ProjectTwoFinance';
import ProjectThreeSpace from './components/ProjectThreeSpace';
import Footer from './components/Footer';
import { FileSpreadsheet, Database, Rocket, Sparkles } from 'lucide-react';

export default function App() {
  useEffect(() => {
    // Direct project URLs use native hash links. Wait until React has mounted
    // the project sections before scrolling to the requested section.
    const hash = window.location.hash;
    if (!hash) return;

    const timer = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 via-indigo-50/20 to-transparent pointer-events-none" />
      
      {/* Clean Header */}
      <Header />

      {/* Main Content Area */}
      <main className="relative flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full space-y-8">
        
        {/* Showcase Intro Banner */}
        <div className="bg-gradient-to-br from-white via-white to-blue-50/30 rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Featured Portfolio Work</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Selected Analytics & Data Projects
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            A practical look at three core analytics and engineering projects from my background, spanning advanced financial modeling in Excel, large-scale statutory corporate data pipelines in Python and SQL, and deep exploratory data audits. Each section includes working deliverables, source code repositories, and real takeaways.
          </p>

          {/* Quick Jump Links with Color-Coordinated Accents */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <a
              href="#project-excel"
              className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100/80 text-emerald-900 border border-emerald-200/90 font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>01. Global Trade Excel Model</span>
            </a>

            <a
              href="#project-finance"
              className="px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100/80 text-blue-900 border border-blue-200/90 font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>02. Corporate Financial Pipeline</span>
            </a>

            <a
              href="#project-space"
              className="px-3 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100/80 text-purple-900 border border-purple-200/90 font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Rocket className="w-3.5 h-3.5 text-purple-600" />
              <span>03. Space Mission Imputation Audit</span>
            </a>
          </div>
        </div>

        {/* PROJECT 1: Global Trade Analytics & Data Quality Intelligence */}
        <section id="project-excel" className="scroll-mt-24">
          <ProjectOneExcel />
        </section>

        {/* PROJECT 2: Automated Financial Intelligence Pipeline */}
        <section id="project-finance" className="scroll-mt-24">
          <ProjectTwoFinance />
        </section>

        {/* PROJECT 3: Space Mission Exploratory Data Analysis & Imputation Audit */}
        <section id="project-space" className="scroll-mt-24">
          <ProjectThreeSpace />
        </section>

      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
