import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold font-mono">
                SD
              </span>
              <span className="text-lg font-bold text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md">
              AI Professional specialized in RAG pipelines, quantitative financial analysis, data quality forensics, and full-stack engineering.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm font-medium">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{personalInfo.phone}</span>
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legal / Provenance Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All project implementations and evidence grounded in verified local files.
          </div>
          <div className="font-mono text-[11px] text-slate-600">
            Portfolio v1.0.0 • Vite + React 18 + Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
