import React from 'react';
import TechIcon from './TechIcon'; // Import the TechIcon component

interface TechCardProps {
  name: string;
  
  delay: number;
}

const TechCard: React.FC<TechCardProps> = ({ name,  delay }) => {
  return (
    <div
      className="group relative bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-700/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className={`absolute inset-x-0 bottom-0 h-1  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
      <div className="p-6 text-center relative z-10">
        <div className="mb-3 flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-lg  shadow-lg shadow-/20 flex items-center justify-center text-white font-bold text-xl opacity-90 group-hover:scale-110 transition-transform duration-300`}
          >
            {/* Here, use the TechIcon component */}
            <TechIcon name={name} className="text-white" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TechCard;
