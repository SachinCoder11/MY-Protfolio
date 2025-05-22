import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 py-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left space-y-6">
            <div className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-slate-800/80 text-cyan-400 border border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-transform">
              <span className="animate-pulse mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
              Available for hire
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-gradient-x">Sachin Dumbre</span>
            </h1>
            
            <div className="h-12 md:h-14">
              <TypewriterEffect 
                texts={[
                  "Aspiring Front-End Developer",
                  "UI/UX Enthusiast", 
                  "Aspiring React Developer",
                  "Web Designer"
                ]}
              />
            </div>
            
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Creating clean, user-friendly web experiences with modern technologies. Currently studying BCA at Bakliwal Foundation.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <a 
                href="#contact" 
                className="group relative px-8 py-4 font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Get in Touch</span>
              </a>
              <a 
                href="https://github.com/SachinCoder11/Resume-/blob/main/README.md" 
                className="group relative px-8 py-4 font-medium border border-slate-700 text-white rounded-xl hover:border-cyan-500/50 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 group-hover:w-full transition-all duration-300"></span>
                <span className="relative">View Resume</span>
              </a>
            </div>
            
            <div className="pt-8 space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone size={16} className="animate-bounce" />
                <span>+91-8855077289</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={16} className="animate-bounce animation-delay-200" />
                <span>sdineshdumbre@gmail.com</span>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start mt-8">
              <a 
                href="https://github.com/SachinCoder11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/80 backdrop-blur-sm text-slate-300 hover:text-cyan-400 transition-all overflow-hidden border border-slate-700/50"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 group-hover:w-full transition-all duration-300"></span>
                <Github size={22} className="relative" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sachin-dinesh-dumbre-50a946313" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/80 backdrop-blur-sm text-slate-300 hover:text-cyan-400 transition-all overflow-hidden border border-slate-700/50"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 group-hover:w-full transition-all duration-300"></span>
                <Linkedin size={22} className="relative" />
              </a>
              <a 
                href="https://www.instagram.com/sachin.dumbre.1105?igsh=MWFwZ2syMG44bHhlbQ==" 
                className="group relative w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800/80 backdrop-blur-sm text-slate-300 hover:text-cyan-400 transition-all overflow-hidden border border-slate-700/50"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 group-hover:w-full transition-all duration-300"></span>
                <Instagram size={22} className="relative" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/5 relative group">
            <div className="relative w-64 h-64 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl animate-gradient-x"></div>
              
              {/* Inner container with glass effect */}
              <div className="absolute inset-[2px] bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden">
                {/* Terminal-style header */}
                <div className="h-6 bg-slate-800 flex items-center px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                {/* Code-like content */}
                <div className="p-4 font-mono text-xs">
                  <div className="text-green-400">{'> '}<span className="text-purple-400">user</span>.profile</div>
                  <div className="text-slate-400 mt-2">{'{'}</div>
                  <div className="pl-4">
                    <div className="text-cyan-400">name: <span className="text-green-400">"Sachin Dumbre"</span>,</div>
                    <div className="text-cyan-400">role: <span className="text-green-400">"Aspiring Front-End Developer"</span>,</div>
                    <div className="text-cyan-400">status: <span className="text-yellow-400">"Coding..."</span></div>
                  </div>
                  <div className="text-slate-400">{'}'}</div>
                  <div className="mt-2 flex items-center">
                    <span className="text-green-400">{'> '}</span>
                    <span className="w-2 h-4 bg-cyan-400 animate-blink"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
