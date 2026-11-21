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
  ShieldCheck
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
  let riskBadge = "text-emerald-700 bg-emerald-50 border-emerald-200";
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
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              STATISTICAL FORENSIC CONSOLE
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-1 text-white flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-400" />
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
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Active Revenue Cohort</span>
              <span className="text-2xl font-bold text-emerald-600 font-mono">45,414</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">FY 2024–25 active firms</span>
            </div>
          </div>
        </div>

        {/* Core Finding: Debt Quartile vs Profit Margin Erosion */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-1.5">
                <span>Key Empirical Finding</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Debt Burden vs. Profit Margin Collapse Across 45,414 Firms
              </h4>
              <p className="text-xs text-slate-600">
                Firms with higher finance cost obligations experience a dramatic 56.5% reduction in median profitability.
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              IQR Outlier Threshold: <strong className="text-slate-800">11,410 Anomalies</strong>
            </div>
          </div>

          {/* Interactive Quartile Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {financeAuditData.debtQuartiles.map((q, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedQuartileIdx(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  selectedQuartileIdx === idx
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 font-mono">{q.quartile.split(' ')[0]}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    q.risk === 'Low' ? 'bg-emerald-100 text-emerald-800' :
                    q.risk === 'Moderate' ? 'bg-blue-100 text-blue-800' :
                    q.risk === 'Elevated' ? 'bg-amber-100 text-amber-800' :
                    'bg-rose-100 text-rose-800'
                  }`}>
                    {q.risk} Risk
                  </span>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 font-mono mt-2">
                  {q.medianMargin}%
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  Median Profit Margin
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Narrative for Active Quartile */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-slate-900">{activeQuartile.quartile} Detail:</span>
              <span className="text-xs font-mono text-slate-500">Finance Cost Range: {activeQuartile.range}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeQuartile.description} Across the analyzed sector, as finance expenses consume more than 5.2% of corporate receipts, median profit margin drops from <strong className="text-emerald-700">3.04%</strong> down to <strong className="text-rose-700">1.32%</strong>.
            </p>
          </div>
        </div>

        {/* Deterministic Financial Ratio Simulator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
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
              <div className="relative">
                <input
                  type="number"
                  value={simRevenue}
                  onChange={(e) => setSimRevenue(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                Operating Expenses ($ / ₹)
              </label>
              <input
                type="number"
                value={simExpenses}
                onChange={(e) => setSimExpenses(Math.max(0, Number(e.target.value)))}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Real-Time Ratio Results */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] text-slate-500 font-semibold uppercase block">Net Profit</span>
              <span className={`text-lg font-bold font-mono ${netProfit >= 0 ? 'text-slate-900' : 'text-rose-600'}`}>
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
