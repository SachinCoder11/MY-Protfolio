import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Sparkles, 
  Terminal, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  FileText,
  Database,
  BrainCircuit,
  Bot
} from 'lucide-react';

export default function Hero({ onExploreDemos, onOpenChatbot }) {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background radial gradients for subtle tech feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for AI / ML, Data Science & Full-Stack Roles</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{personalInfo.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Specialized in building end-to-end <strong className="text-slate-800 font-semibold">Retrieval-Augmented Generation (RAG)</strong> systems, 
            executing forensic data audits across millions of records, and delivering high-performance full-stack applications with 
            <strong className="text-slate-800 font-semibold"> Python, FastAPI, SQL, and React</strong>.
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>{personalInfo.location}</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>BCA + Postgraduate in Data Science & GenAI</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span>Ex-Software Dev Intern @ Showstopper Technologies</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onExploreDemos}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg shadow-blue-500/25 transition-all group"
            >
              <Terminal className="w-5 h-5 text-blue-200 group-hover:scale-110 transition-transform" />
              <span>Explore Live Project Demos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenChatbot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <Bot className="w-5 h-5 text-amber-500" />
              <span>Test AI Discovery Chatbot</span>
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Verified Technical Metric Badges */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-200 transition-all text-left"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
