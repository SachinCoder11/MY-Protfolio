import React from 'react';
import { Code2, BookOpen, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-lg">
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I am a BCA student currently in my second year at Bakliwal Foundation. I am passionate about front-end development and love building clean, user-friendly, and visually appealing web experiences. I continuously explore new technologies and aim to design immersive interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Code2 className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Front-End Dev</h3>
                <p className="text-slate-400">Building responsive and interactive user interfaces with modern frameworks</p>
              </div>
              
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                  <Cpu className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                <p className="text-slate-400">Creating intuitive and appealing user experiences with attention to detail</p>
              </div>
              
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <BookOpen className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Continuous Learner</h3>
                <p className="text-slate-400">Always exploring new technologies and improving my development skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;