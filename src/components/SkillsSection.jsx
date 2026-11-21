import React from 'react';
import { skillsData } from '../data/portfolioData';
import { BrainCircuit, Database, Server, Check } from 'lucide-react';

export default function SkillsSection() {
  const categoryIcons = {
    "AI / ML & Generative AI": BrainCircuit,
    "Data Science & Analytics": Database,
    "Software Engineering & Systems": Server
  };

  const categoryColors = {
    "AI / ML & Generative AI": "from-purple-500/10 to-indigo-500/10 border-indigo-200 text-indigo-700",
    "Data Science & Analytics": "from-blue-500/10 to-cyan-500/10 border-blue-200 text-blue-700",
    "Software Engineering & Systems": "from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-700"
  };

  return (
    <section id="skills" className="py-16 bg-slate-100/60 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            TECHNICAL REPERTOIRE
          </div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Core Engineering & Analytical Capabilities
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Demonstrated across production RAG codebases, statutory XBRL cleansing pipelines, and enterprise relational applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], idx) => {
            const Icon = categoryIcons[category] || BrainCircuit;
            const style = categoryColors[category];
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-snug">
                        {category}
                      </h3>
                      <span className="text-xs text-slate-500">
                        {skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200/60">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500 flex items-center justify-between">
                  <span>Verified in projects</span>
                  <span className="text-blue-600 font-semibold">100% Provenance</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
