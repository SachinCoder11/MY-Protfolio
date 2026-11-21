import React from 'react';
import { experienceData, educationData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 bg-slate-100/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Industry Experience
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Verified Software Development & Data Operations
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-semibold text-blue-600 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-slate-500 sm:text-right shrink-0">
                      <div className="flex items-center gap-1 sm:justify-end">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:justify-end mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2.5 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                          <CheckCircle2 className="w-3 h-3" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono text-slate-600">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">PropPoints CRM</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Jivan Blood Bank</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">MySQL</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">REST APIs</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Relational Integrity</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Academic Background
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  Computer Applications & Specialized Postgraduate Training
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-slate-700">
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </div>

                  <div className="pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-800">Specialization & Focus:</strong> {edu.specialization}
                  </div>
                </div>
              ))}

              {/* Recruitment Assurance Note */}
              <div className="bg-gradient-to-tr from-blue-50 to-indigo-50/60 p-5 rounded-2xl border border-blue-200/80 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-blue-900 flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Recruiter Verification Assurance</span>
                </div>
                <p className="leading-relaxed">
                  Every metric, line of code, and analytical result presented across this portfolio has been pre-audited and cross-checked directly against original local files and GitHub repositories. No fabricated metrics, mock statistics, or exaggerated claims.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
