import React, { useState } from 'react';
import { financeAuditData } from '../../data/portfolioData';
import { 
  Database, 
  TrendingDown, 
  Calculator, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  HelpCircle,
  Percent,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Activity
} from 'lucide-react';

export default function FinanceDemo() {
  const [selectedQuartileIdx, setSelectedQuartileIdx] = useState(0);
  const [simRevenue, setSimRevenue] = useState(1000000);
  const [simExpenses, setSimExpenses] = useState(880000);
  const [simFinanceCosts, setSimFinanceCosts] = useState(45000);

  // Financial calculations for sandbox
  const netProfit = simRevenue - simExpenses - simFinanceCosts;
  const profitMargin = simRevenue > 0 ? (netProfit / simRevenue) * 100 : 0;
  const expenseRatio = simRevenue > 0 ? (simExpenses / simRevenue) * 100 : 0;
  const financeCostRatio = simRevenue > 0 ? (simFinanceCosts / simRevenue) * 100 : 0;

  // Quartile classification for simulation
  let simulatedQuartile = "Q1 (Low Debt)";
  let riskBadge = "text-emerald-700 bg-emerald-50 border-emerald-300 ring-1 ring-emerald-400/30";
  if (financeCostRatio > 5.2) {
    simulatedQuartile = "Q4 (High Debt)";
    riskBadge = "text-rose-700 bg-rose-50 border-rose-200";
  } else if (financeCostRatio > 1.8) {
    simulatedQuartile = "Q3 (Elevated Debt)";
    riskBadge = "text-amber-700 bg-amber-50 border-amber-200";
  } else if (financeCostRatio > 0.4) {
    simulatedQuartile = "Q2 (Moderate Debt)";
    riskBadge = "text-blue-700 bg-blue-50 border-blue-200";
  }

  const activeQuartile = financeAuditData.debtQuartiles[selectedQuartileIdx];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Demo Header Bar */}
      <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              STATISTICAL FORENSIC CONSOLE
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-1 text-white flex items-center gap-2">
            <Database className="w-6 h-6 text-emerald-400" />
            <span>Corporate Financial Intelligence Dashboard</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Empirical analysis of 96,632 statutory corporate filings & debt-burden profit erosion
          </p>
        </div>

        {/* Provenance Badge */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-300 max-w-xs">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Deterministic Analytics</span>
          </div>
          <div className="mt-0.5 text-slate-400">
            Python/Pandas pipeline verified against MCA XBRL P&L dataset.
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Cleansing Pipeline Scorecard */}
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            ETL & Cleansing Pipeline Provenance (MCA Corporate Filings)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Raw Filing Rows</span>
              <span className="text-2xl font-bold text-slate-900 font-mono">96,632</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">130 statutory columns</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Pruned Null Columns</span>
              <span className="text-2xl font-bold text-amber-600 font-mono">16 Pruned</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">100% empty attributes</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Purged Missing Cells</span>
              <span className="text-2xl font-bold text-blue-600 font-mono">7,001,669</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Zero imputation bias</span>
            </div>
            <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
              <span className="text-xs text-emerald-800 font-medium block">Active Revenue Cohort</span>
              <span className="text-2xl font-bold text-emerald-700 font-mono">45,414</span>
              <span className="text-[11px] text-emerald-600 font-medium block mt-0.5">✓ 100% Verified Firms</span>
            </div>
          </div>
        </div>

        {/* Visual Graph Section: Debt Burden Quartile Visualizer */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Quantitative Finding</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Debt Burden vs. Profit Margin Collapse Across 45,414 Firms
              </h4>
              <p className="text-xs text-slate-600">
                Firms with higher finance cost obligations experience a dramatic 56.5% reduction in median profitability.
              </p>
            </div>

            <div className="text-xs text-emerald-800 font-medium bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>IQR Outliers Audited: <strong>11,410 Anomalies</strong></span>
            </div>
          </div>

          {/* Comparative Green Chart Bars */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              Median Operating Profit Margin by Debt Servicing Quartile (%):
            </span>

            <div className="space-y-3">
              {financeAuditData.debtQuartiles.map((q, idx) => {
                const isSelected = selectedQuartileIdx === idx;
                // Bar width scaling (max 3.04% is 100%)
                const barWidth = Math.round((q.medianMargin / 3.04) * 100);
                const barGradients = [
                  'from-emerald-600 to-green-500 shadow-sm shadow-emerald-500/20',
                  'from-emerald-500 to-teal-500',
                  'from-teal-600 to-blue-500',
                  'from-slate-400 to-slate-500'
                ];

                return (
                  <div 
                    key={idx}
                    onClick={() => setSelectedQuartileIdx(idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-emerald-50/50 border-emerald-400 ring-2 ring-emerald-500/20' 
                        : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100/60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 font-mono">{q.quartile}</span>
                        <span className="text-slate-500">({q.range})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-slate-900 font-mono text-sm">{q.medianMargin}%</span>
                        <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${
                          q.risk === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                          q.risk === 'Moderate' ? 'bg-blue-100 text-blue-800' :
                          q.risk === 'Elevated' ? 'bg-amber-100 text-amber-800' :
                          'bg-slate-200 text-slate-700'
                        }`}>
                          {q.risk} Risk
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-3.5 bg-slate-200/70 rounded-full overflow-hidden p-0.5">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${barGradients[idx]} transition-all duration-500`}
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Narrative for Active Quartile */}
          <div className="bg-emerald-50/40 p-5 rounded-xl border border-emerald-200/80 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{activeQuartile.quartile} Diagnostic Detail:</span>
              </span>
              <span className="text-xs font-mono text-emerald-800 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                Range: {activeQuartile.range}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeQuartile.description} Across 45,414 audited firms, interest servicing acts as an empirical drag on cash flows: median profitability drops from <strong className="text-emerald-700 font-bold">3.04% in Q1</strong> down to <strong className="text-rose-700 font-bold">1.32% in Q4</strong>.
            </p>
          </div>
        </div>

        {/* Deterministic Financial Ratio Simulator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Interactive Financial Health & Ratio Sandbox
              </h4>
              <p className="text-xs text-slate-500">
                Enter simulated corporate figures to test automated solvency and margin calculations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Annual Revenue ($ / ₹)
              </label>
              <input
                type="number"
                value={simRevenue}
                onChange={(e) => setSimRevenue(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Operating Expenses ($ / ₹)
              </label>
              <input
                type="number"
                value={simExpenses}
                onChange={(e) => setSimExpenses(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Finance & Debt Costs ($ / ₹)
              </label>
              <input
                type="number"
                value={simFinanceCosts}
                onChange={(e) => setSimFinanceCosts(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Real-Time Ratio Results with Green Accents */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold uppercase block">Net Profit</span>
              <span className={`text-lg font-bold font-mono ${netProfit >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                ${netProfit.toLocaleString()}
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold uppercase block">Profit Margin</span>
              <span className={`text-lg font-bold font-mono ${profitMargin >= 2 ? 'text-emerald-600' : profitMargin >= 0 ? 'text-amber-600' : 'text-rose-600'}`}>
                {profitMargin.toFixed(2)}%
              </span>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold uppercase block">Finance Cost Ratio</span>
              <span className="text-lg font-bold text-slate-900 font-mono">
                {financeCostRatio.toFixed(2)}%
              </span>
            </div>

            <div className={`p-3.5 rounded-xl border ${riskBadge}`}>
              <span className="text-[11px] font-semibold uppercase block">Solvency Tier</span>
              <span className="text-sm font-bold font-mono block mt-0.5">
                {simulatedQuartile}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
