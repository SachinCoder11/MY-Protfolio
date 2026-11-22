import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Github, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  TrendingUp, 
  Sparkles,
  Award
} from 'lucide-react';

export default function ProjectsSection({ onSelectDemo }) {
  const projectIcons = {
    "rag-platform": Cpu,
    "financial-pipeline": Database,
    "global-trade": TrendingUp
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
              TECHNICAL PORTFOLIO AUDIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Verified Projects
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Audited against real local codebases, persistent databases, and verified mathematical calculations. No mock numbers or inflated claims.
            </p>
          </div>
          <div className="text-sm text-slate-500 font-medium">
            3 Core Systems + 1 ML Hackathon
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, idx) => {
            const Icon = projectIcons[project.id] || Layers;
            return (
              <div 
                key={project.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-800">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body & Summary */}
                  <div className="p-6 space-y-5">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-100">
                      {project.metrics.slice(0, 4).map((m, mIdx) => (
                        <div key={mIdx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                            {m.label}
                          </div>
                          <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((t, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-md text-xs font-medium text-slate-400">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 space-y-2.5">
                  <button
                    onClick={() => onSelectDemo(project.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all"
                  >
                    <Terminal className="w-4 h-4 text-blue-200" />
                    <span>Launch Interactive Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Inspect GitHub Repository</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4th Project Spotlight: Hackathon CatBoost Model */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 mb-1.5">
                <span>Machine Learning Hackathon Finalist</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Employee Performance Prediction (CatBoost & Random Forest Pipeline)
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Trained an end-to-end multi-class ML classification pipeline on 2,000 employee workforce signals. Achieved <strong className="text-slate-800">89.75% holdout accuracy</strong>, <strong className="text-slate-800">0.8484 Macro-F1</strong>, and 88.60% 5-fold cross-validation with zero data leakage.
              </p>
              <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-600 font-medium">
                <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">CatBoost Symmetric Trees</span>
                <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">Scikit-Learn Zero-Leakage Pipeline</span>
                <span className="bg-white/80 px-2.5 py-1 rounded border border-amber-200">10.4% Class Imbalance Handled</span>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="https://github.com/SachinCoder11/Hackthon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-amber-900 bg-amber-200/80 hover:bg-amber-300 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View Hackathon Repo</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
