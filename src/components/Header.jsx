import React from 'react';
import { projectLinks } from '../config/projectLinks';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Header() {
  const { candidate } = projectLinks;

  return (
    <header className="border-b border-slate-200/80 bg-white/95 sticky top-0 z-40 backdrop-blur-md">
      {/* Subtle top accent gradient */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {candidate.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
            {candidate.role} • Featured Projects & Code
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <a 
            href={`mailto:${candidate.email}`}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-blue-500" />
            <span>{candidate.email}</span>
          </a>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <a 
            href={`tel:${candidate.phone}`}
            className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{candidate.phone}</span>
          </a>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <a 
            href={candidate.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 font-semibold transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-slate-700" />
            <span>GitHub</span>
          </a>

          <a 
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-700 hover:text-blue-800 font-semibold transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
