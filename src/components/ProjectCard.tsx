import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'Completed' | 'Under Development' | 'Coming Soon';
  githubLink: string;
  projectLink: string;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  status, 
  githubLink,
  projectLink,
  delay 
}) => {
  const statusColor = 
    status === 'Completed' 
      ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
      : status === 'Under Development' 
        ? 'bg-gradient-to-r from-yellow-500 to-orange-600' 
        : 'bg-gradient-to-r from-purple-500 to-pink-600';

  return (
    <div 
      className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <span className={`text-xs px-3 py-1 rounded-full text-white ${statusColor} shadow-lg`}>
            {status}
          </span>
        </div>
        
        <p className="text-slate-400 mb-6 min-h-[80px] group-hover:text-slate-300 transition-colors">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-all"
            >
              <ExternalLink size={20} />
            </a>
          </div>
          
          <div className="group-hover:translate-x-1 transition-transform">
            <a 
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              View Project
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
