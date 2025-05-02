import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Sachin<span className="text-cyan-400">Dev</span>
            </a>
            <p className="text-slate-400 mt-2">
              Frontend Developer & UI/UX Enthusiast
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/SachinCoder11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sachin-dinesh-dumbre-50a946313" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/sachin.dumbre.1105?igsh=MWFwZ2syMG44bHhlbQ==" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-all">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Sachin Dumbre © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;