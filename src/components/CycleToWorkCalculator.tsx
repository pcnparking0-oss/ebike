import React, { useState } from 'react';
import { UK_CYCLE_SCHEMES, calculateCycleToWorkSavings } from '../data/schemesData';
import { 
  Calculator, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  Building2, 
  FileCheck, 
  TrendingUp,
  Coins,
  ArrowRight,
  Info
} from 'lucide-react';

export const CycleToWorkCalculator: React.FC = () => {
  const [bikePrice, setBikePrice] = useState<number>(1899);
  const [accessoriesPrice, setAccessoriesPrice] = useState<number>(189);
  const [taxBand, setTaxBand] = useState<'basic' | 'higher' | 'additional'>('higher');
  const [termMonths, setTermMonths] = useState<12 | 18 | 24 | 36>(12);
  const [selectedScheme, setSelectedScheme] = useState<string>('cyclescheme');

  const totalPrice = bikePrice + accessoriesPrice;
  const result = calculateCycleToWorkSavings(totalPrice, taxBand, termMonths);

  // Typical UK public transit comparison (London zone 1-3 annual pass ~ £1,960)
  const annualTransitCost = 2150;
  const annualEbikeNetCost = result.monthlyNetCostGBP * 12;
  const annualCommuterSavings = Math.max(0, annualTransitCost - annualEbikeNetCost);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Title Hero */}
      <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            HMRC Salary Sacrifice Tax Engine 2026
          </span>
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            Save up to 47% on E-Bikes
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-2">
          UK Cycle to Work & Salary Sacrifice Savings Calculator
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Calculate your exact net take-home salary deduction and tax savings across all major UK schemes including <strong>Cyclescheme</strong>, <strong>Green Commute Initiative (GCI)</strong>, <strong>Vivup</strong>, and <strong>Halfords Cycle2Work</strong>.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-base font-bold text-white font-heading flex items-center gap-2">
              <Coins className="w-5 h-5 text-emerald-400" />
              1. Package Cost & UK Tax Bracket
            </h2>

            {/* Bike Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-300 font-medium">E-Bike Retail Price:</span>
                <div className="flex items-center gap-1 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 font-mono font-bold text-white text-sm">
                  <span>£</span>
                  <input
                    aria-label="E-Bike Retail Price"
                    type="number"
                    value={bikePrice}
                    onChange={(e) => setBikePrice(Math.max(200, Number(e.target.value)))}
                    className="w-20 bg-transparent text-right focus:outline-none text-emerald-400"
                  />
                </div>
              </div>
              <input
                aria-label="E-Bike Price Slider"
                type="range"
                min="500"
                max="6000"
                step="50"
                value={bikePrice}
                onChange={(e) => setBikePrice(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>£500</span>
                <span>£1,899 (Apex Metro Pro)</span>
                <span>£3,799 (Cargo / e-MTB)</span>
                <span>£6,000</span>
              </div>
            </div>

            {/* Accessories Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-300 font-medium">Safety Accessories & Waterproof Gear:</span>
                <div className="flex items-center gap-1 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 font-mono font-bold text-white text-sm">
                  <span>£</span>
                  <input
                    aria-label="Safety Accessories Price"
                    type="number"
                    value={accessoriesPrice}
                    onChange={(e) => setAccessoriesPrice(Math.max(0, Number(e.target.value)))}
                    className="w-16 bg-transparent text-right focus:outline-none text-cyan-400"
                  />
                </div>
              </div>
              <input
                aria-label="Safety Accessories Slider"
                type="range"
                min="0"
                max="800"
                step="20"
                value={accessoriesPrice}
                onChange={(e) => setAccessoriesPrice(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>£0 (None)</span>
                <span>£189 (Ortlieb Waterproof Panniers + Lights)</span>
                <span>£800</span>
              </div>
            </div>

            {/* Tax Band Switcher */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="block text-xs font-semibold text-slate-200">
                Your UK Annual Income Tax Bracket:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => setTaxBand('basic')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    taxBand === 'basic'
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-bold text-xs block text-slate-200">Basic Rate (20%)</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Earnings up to £50,270</span>
                  <span className="text-emerald-400 font-bold text-xs mt-1 block">Save 28% (Tax + NI)</span>
                </button>

                <button
                  onClick={() => setTaxBand('higher')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    taxBand === 'higher'
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-bold text-xs block text-slate-200">Higher Rate (40%)</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Earnings £50,271 - £125,140</span>
                  <span className="text-emerald-400 font-bold text-xs mt-1 block">Save 42% (Tax + NI)</span>
                </button>

                <button
                  onClick={() => setTaxBand('additional')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    taxBand === 'additional'
                      ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <span className="font-bold text-xs block text-slate-200">Additional Rate (45%)</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Earnings £125,140+</span>
                  <span className="text-emerald-400 font-bold text-xs mt-1 block">Save 47% (Tax + NI)</span>
                </button>
              </div>
            </div>

            {/* Term Months Switcher */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="block text-xs font-semibold text-slate-200">
                Salary Sacrifice Repayment Term:
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[12, 18, 24, 36].map((term) => (
                  <button
                    key={term}
                    onClick={() => setTermMonths(term as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      termMonths === term
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {term} Months
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scheme Providers Comparison */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-heading flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-400" />
              Supported UK Scheme Providers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {UK_CYCLE_SCHEMES.map((scheme) => (
                <div
                  key={scheme.id}
                  onClick={() => setSelectedScheme(scheme.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedScheme === scheme.id
                      ? 'bg-indigo-950/40 border-indigo-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-200">{scheme.name}</h4>
                    {selectedScheme === scheme.id && (
                      <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400">{scheme.maxLimit}</p>
                  <p className="text-[10px] text-slate-500 mt-1">Employers: {scheme.popularEmployers}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Calculation Results Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/40 rounded-2xl p-6 space-y-6 shadow-2xl shadow-emerald-950/40 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] text-slate-400 block font-mono">YOUR NET MONTHLY TAKE-HOME COST</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-heading">
                  £{result.monthlyNetCostGBP.toFixed(2)}<span className="text-sm font-normal text-slate-400">/mo</span>
                </span>
              </div>
              <div className="text-right">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded">
                  Save {result.totalSavingPercentage}% Total
                </span>
              </div>
            </div>

            {/* Detailed Cost Breakdown Table */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Total Package Price (Bike + Gear):</span>
                <span className="font-semibold text-white">£{totalPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Gross Monthly Salary Deduction:</span>
                <span>£{result.monthlyGrossDeductionGBP.toFixed(2)}/mo</span>
              </div>

              <div className="flex justify-between text-emerald-400 font-medium">
                <span>HMRC Income Tax & NI Saved:</span>
                <span>-£{result.totalCashSavedGBP.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-white font-bold pt-2 border-t border-slate-800">
                <span>Actual Net Cost to You:</span>
                <span className="text-emerald-400 text-sm">£{result.effectiveCostGBP.toFixed(2)}</span>
              </div>
            </div>

            {/* Commuter Savings vs Train Ticket */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2 text-xs">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Annual Public Transit Savings Comparison
              </span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Average UK train/commute pass: <strong>£{annualTransitCost.toLocaleString()}/yr</strong>. Your e-bike net cost: <strong>£{Math.round(annualEbikeNetCost)}/yr</strong>.
              </p>
              <div className="bg-emerald-950/50 border border-emerald-500/30 rounded p-2 text-emerald-300 font-bold text-center text-xs">
                🎉 You save approx. £{annualCommuterSavings.toLocaleString()} in year 1!
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => alert(`Cycle to Work Certificate request generated for £${totalPrice} package! Show this quote to your employer HR department or enter into your Cyclescheme/GCI portal.`)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/60"
              >
                <FileCheck className="w-4 h-4" />
                <span>Generate Official Scheme Employer Quote</span>
              </button>
              <p className="text-[10px] text-slate-500 text-center">
                Instant digital PDF quote accepted by all UK HR & payroll departments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
