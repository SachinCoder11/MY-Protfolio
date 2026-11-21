import React, { useState } from 'react';
import RagDemo from './demos/RagDemo';
import FinanceDemo from './demos/FinanceDemo';
import TradeDemo from './demos/TradeDemo';
import { Cpu, Database, TrendingUp, Sparkles, Terminal } from 'lucide-react';

export default function DemosSection({ activeDemoId, onSelectDemo }) {
  const tabs = [
    {
      id: 'rag-platform',
      name: 'Codebase RAG Platform',
      icon: Cpu,
      tag: 'AI / GenAI',
      summary: 'Grounded AST code chunking, vector embeddings & semantic retrieval'
    },
    {
      id: 'financial-pipeline',
      name: 'Corporate Financial Intelligence',
      icon: Database,
      tag: 'Data Science & Statistics',
      summary: '96,632 filings, debt burden quartiles & IQR margin anomalies'
    },
    {
      id: 'global-trade',
      name: 'Global Trade Analytics',
      icon: TrendingUp,
      tag: 'Data Reconciliation & BI',
      summary: '10-sheet model, $86.2K null bug audit & freight cost gap'
    }
  ];

  return (
    <section id="demos" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>FUNCTIONAL BROWSER EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Interactive Project Demonstrations
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Experience real workflows rather than reading descriptions. Every demonstration executes deterministic logic, verified datasets, and genuine analytical methods.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeDemoId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectDemo(tab.id)}
                className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                  isActive
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 leading-tight">
                      {tab.name}
                    </span>
                  </div>
                  <span className={`inline-block text-[10px] font-semibold px-2 py-0.2 rounded-full mt-1 ${
                    isActive ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.tag}
                  </span>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">
                    {tab.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Demo Container */}
        <div className="transition-all">
          {activeDemoId === 'rag-platform' && <RagDemo />}
          {activeDemoId === 'financial-pipeline' && <FinanceDemo />}
          {activeDemoId === 'global-trade' && <TradeDemo />}
        </div>

      </div>
    </section>
  );
}
