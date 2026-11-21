import React, { useState } from 'react';
import { tradeAuditData } from '../../data/portfolioData';
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  DollarSign, 
  Package, 
  Percent, 
  Truck, 
  RefreshCw,
  Search,
  Filter
} from 'lucide-react';

export default function TradeDemo() {
  const [showPreAuditBug, setShowPreAuditBug] = useState(false);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { kpis, regions, naBugImpact, sampleOrders } = tradeAuditData;

  // Compute displayed numbers based on toggle state
  const displayedRevenue = showPreAuditBug 
    ? kpis.totalRevenue - naBugImpact.concealedRevenue 
    : kpis.totalRevenue;
  
  const displayedOrders = showPreAuditBug 
    ? kpis.totalOrders - naBugImpact.concealedOrders 
    : kpis.totalOrders;

  const displayedRegions = regions.map(r => {
    if (r.region === 'North America' && showPreAuditBug) {
      return { ...r, revenue: 0, orders: 0, isBugged: true };
    }
    return r;
  });

  const filteredOrders = sampleOrders.filter(order => {
    const matchesRegion = selectedRegionFilter === 'All' || order.region === selectedRegionFilter;
    const matchesSearch = searchQuery === '' || 
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (showPreAuditBug && order.region === 'North America') return false;
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Demo Header Bar */}
      <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              EXECUTIVE DATA RECONCILIATION
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-1 text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-400" />
            <span>Global Trade Analytics & Data Intelligence</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Auditing 500 cross-border transactions across 10 relational worksheets & 11,007 dynamic formula cells
          </p>
        </div>

        {/* Provenance Badge */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-slate-300 max-w-xs">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Audited Excel Workbook</span>
          </div>
          <div className="mt-0.5 text-slate-400">
            Reconciled from Global_Trade_Analytics.xlsx with 100% mathematical integrity.
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        
        {/* KPI Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium block">Total Commercial Volume</span>
            <div className="text-2xl font-extrabold text-slate-900 font-mono mt-0.5">
              ${displayedRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            {showPreAuditBug && (
              <span className="text-[11px] text-rose-600 font-semibold block mt-0.5">
                -$86,214.30 Obscured by Bug
              </span>
            )}
            {!showPreAuditBug && (
              <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                100% Reconciled Volume
              </span>
            )}
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium block">Operating Profit</span>
            <div className="text-2xl font-extrabold text-slate-900 font-mono mt-0.5">
              ${showPreAuditBug ? "109,622.28" : kpis.operatingProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <span className="text-[11px] text-slate-400 block mt-0.5">Weighted Operating Margin: 28.14%</span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium block">Total Trade Transactions</span>
            <div className="text-2xl font-extrabold text-slate-900 font-mono mt-0.5">
              {displayedOrders}
            </div>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              {showPreAuditBug ? "87 Orders Dropped as Null" : "Across 6 Continents"}
            </span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium block">Formula Density</span>
            <div className="text-2xl font-extrabold text-blue-600 font-mono mt-0.5">
              11,007
            </div>
            <span className="text-[11px] text-slate-400 block mt-0.5">INDEX/MATCH, SUMIFS, XLOOKUP</span>
          </div>
        </div>

        {/* Interactive "NA Bug" Forensic Toggle */}
        <div className={`p-6 rounded-2xl border transition-all ${
          showPreAuditBug 
            ? 'bg-rose-50/70 border-rose-200' 
            : 'bg-emerald-50/60 border-emerald-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  showPreAuditBug ? 'bg-rose-200 text-rose-800' : 'bg-emerald-200 text-emerald-800'
                }`}>
                  {showPreAuditBug ? 'FLAWED INGESTION STATE (BUG ACTIVE)' : 'RECONCILED AUDIT STATE (CORRECTED)'}
                </span>
                <span className="text-xs text-slate-500">Interactive Forensic Toggle</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mt-1">
                The ISO "NA" Region Code Ingestion Defect
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {showPreAuditBug 
                  ? 'Raw automated parser misclassified North America ("NA") as null/empty, masking 87 orders and $86,214.30 in revenue from executive view.'
                  : 'Forensic remediation identified the null misclassification, restored all 87 orders ($86,214.30), and reconciled regional margin performance.'
                }
              </p>
            </div>

            <button
              onClick={() => setShowPreAuditBug(!showPreAuditBug)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0 flex items-center gap-2 ${
                showPreAuditBug 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'bg-rose-600 hover:bg-rose-700 text-white'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{showPreAuditBug ? 'Apply Forensic Remediation' : 'Simulate Ingestion Bug'}</span>
            </button>
          </div>
        </div>

        {/* Regional Margin & Freight Variance Table */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Regional Commercial Performance & Freight Disparity
            </h4>
            <span className="text-xs text-slate-500 font-mono">
              Asia Freight Disparity: <strong className="text-amber-700">+$8.54/order (~$1.36K margin leak)</strong>
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Continental Region</th>
                  <th className="py-3 px-4">Order Volume</th>
                  <th className="py-3 px-4">Total Revenue</th>
                  <th className="py-3 px-4">Operating Margin</th>
                  <th className="py-3 px-4">Avg Shipping / Order</th>
                  <th className="py-3 px-4">Audit Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {displayedRegions.map((reg, idx) => (
                  <tr key={idx} className={reg.isBugged ? 'bg-rose-50/50 text-rose-900' : 'hover:bg-slate-50/70'}>
                    <td className="py-3 px-4 font-sans font-semibold text-slate-900 flex items-center gap-2">
                      <span>{reg.region}</span>
                      {reg.isRescued && !showPreAuditBug && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-sans font-medium">
                          Rescued
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-700">{reg.orders}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {reg.isBugged ? '$0.00 (Dropped)' : `$${reg.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {reg.isBugged ? 'N/A' : `${reg.margin}%`}
                    </td>
                    <td className="py-3 px-4 text-slate-700">
                      {reg.isBugged ? 'N/A' : `$${reg.avgShipping.toFixed(2)}`}
                    </td>
                    <td className="py-3 px-4 font-sans text-xs">
                      {reg.isBugged ? (
                        <span className="text-rose-600 font-bold">Corrupted as #N/A</span>
                      ) : (
                        <span className="text-emerald-600 font-medium">Reconciled</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction Lookup & Filter */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Audited Transaction Sample Explorer
              </h4>
              <p className="text-xs text-slate-500">
                Displaying individual transaction records from worksheet 03_Clean_Trade_Data
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter customer / product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                />
              </div>

              <select
                value={selectedRegionFilter}
                onChange={(e) => setSelectedRegionFilter(e.target.value)}
                className="py-1.5 px-3 text-xs rounded-lg border border-slate-300 bg-white text-slate-700"
              >
                <option value="All">All Regions</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/70 text-slate-600 uppercase text-[10px] font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Order ID</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Customer</th>
                  <th className="py-2.5 px-3">Country / Region</th>
                  <th className="py-2.5 px-3">Product</th>
                  <th className="py-2.5 px-3">Qty</th>
                  <th className="py-2.5 px-3">Total Sales</th>
                  <th className="py-2.5 px-3">Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 text-blue-600 font-semibold">{ord.id}</td>
                    <td className="py-2.5 px-3 text-slate-500">{ord.date}</td>
                    <td className="py-2.5 px-3 font-sans text-slate-800">{ord.customer}</td>
                    <td className="py-2.5 px-3 font-sans text-slate-600">{ord.country} ({ord.region})</td>
                    <td className="py-2.5 px-3 font-sans text-slate-800">{ord.product}</td>
                    <td className="py-2.5 px-3 text-slate-700">{ord.qty}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-900">${ord.total.toFixed(2)}</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-bold">{ord.margin}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
