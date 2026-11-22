import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, onOpenChatbot }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'Featured Projects', icon: Layers },
    { id: 'demos', label: 'Interactive Demos', icon: Terminal },
    { id: 'skills', label: 'Technical Skills', icon: Code2 },
    { id: 'experience', label: 'Experience & Education', icon: Briefcase },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#hero" 
          onClick={() => setActiveSection('hero')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="font-bold text-lg font-sans">SD</span>
          </div>
          <div>
            <div className="font-bold text-slate-900 tracking-tight text-base group-hover:text-blue-600 transition-colors">
              {personalInfo.name}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              AI Professional & Systems Specialist
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'text-blue-700 bg-blue-50/80 shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {link.label}
              </button>
            );
          })}

          <button
            onClick={onOpenChatbot}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium text-amber-700 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 transition-all ml-1 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-amber-600" />
            <span>AI Discovery Bot</span>
            <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-semibold bg-amber-200/80 text-amber-800 rounded-full">
              Demo
            </span>
          </button>
        </nav>

        {/* Contact Links & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenChatbot}
            className="p-2 text-amber-700 bg-amber-50 border border-amber-200 rounded-lg"
            title="Chatbot"
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-4 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 text-left"
              >
                <Icon className="w-4 h-4 text-slate-400" />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-slate-900 bg-slate-50 rounded-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-600 bg-blue-50 rounded-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
