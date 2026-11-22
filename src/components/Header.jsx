import React from 'react';
import { projectLinks } from '../config/projectLinks';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Header() {
  const { candidate } = projectLinks;

  return (
    <header className="border-b border-slate-200 bg-white/95 sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {candidate.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {candidate.role} • Featured Analytics Projects Showcase
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <a 
            href={`mailto:${candidate.email}`}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{candidate.email}</span>
          </a>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <a 
            href={`tel:${candidate.phone}`}
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>{candidate.phone}</span>
          </a>

          <span className="text-slate-300 hidden sm:inline">•</span>

          <a 
            href={candidate.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-slate-900 font-medium transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a 
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
