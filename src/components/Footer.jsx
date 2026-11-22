import React from 'react';
import { projectLinks } from '../config/projectLinks';
import { Mail, Phone, MapPin, Github, Linkedin, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const { candidate } = projectLinks;

  return (
    <footer className="border-t border-slate-200 bg-white mt-16 py-8 text-xs text-slate-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-800">
            {candidate.name}
          </div>
          <div className="mt-0.5">
            Navi Mumbai, Maharashtra, India • {candidate.email}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a
            href={candidate.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub Profile
          </a>
          <span>•</span>
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            LinkedIn Profile
          </a>
          <span>•</span>
          <a
            href={`mailto:${candidate.email}`}
            className="hover:text-blue-700 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Every number and deliverable audited against original project files and statutory records.</span>
        </div>
        <div>
          Resume Featured Analytics Projects Showcase
        </div>
      </div>
    </footer>
  );
}
