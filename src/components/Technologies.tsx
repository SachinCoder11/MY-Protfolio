import React from 'react';
import TechCard from './TechCard';

const technologies = [
  { name: 'HTML'},
  { name: 'CSS', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' },
  { name: 'TailwindCSS', color: 'bg-cyan-500' },
  { name: 'ReactJS', color: 'bg-blue-400' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'NodeJS', color: 'bg-green-600' },
  { name: 'ExpressJS', color: 'bg-gray-500' },
  { name: 'NextJS', color: 'bg-black' },
];

const Technologies: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tech</span> Stack
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Technologies and tools I work with to create modern web applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index} 
              name={tech.name} 
             
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;