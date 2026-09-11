import React, { useState } from 'react';
import { UK_CYCLE_SCHEMES, calculateCycleToWorkSavings } from '../data/schemesData';
import { submitCycleToWorkQuote } from '../services/formApi';
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
  Info,
  X,
  Mail,
  User,
  Phone,
  Send,
  AlertCircle
} from 'lucide-react';

export const CycleToWorkCalculator: React.FC = () => {
  const [bikePrice, setBikePrice] = useState<number>(1899);
  const [accessoriesPrice, setAccessoriesPrice] = useState<number>(189);
  const [taxBand, setTaxBand] = useState<'basic' | 'higher' | 'additional'>('higher');
  const [termMonths, setTermMonths] = useState<12 | 18 | 24 | 36>(12);
  const [selectedScheme, setSelectedScheme] = useState<string>('cyclescheme');

  // Official Quote Modal & Form State (Zoho Mail & Vercel)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteFullName, setQuoteFullName] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteEmployer, setQuoteEmployer] = useState('');
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);
  const [quoteSubmittedRef, setQuoteSubmittedRef] = useState<string | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  const totalPrice = bikePrice + accessoriesPrice;
  const result = calculateCycleToWorkSavings(totalPrice, taxBand, termMonths);

  const activeSchemeObj = UK_CYCLE_SCHEMES.find(s => s.id === selectedScheme) || UK_CYCLE_SCHEMES[0];

  const handleGenerateQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteEmail.trim()) {
      setQuoteError('Please enter your work or personal email address.');
      return;
    }

    setIsSubmittingQuote(true);
    setQuoteError(null);

    const taxBandLabels: Record<string, string> = {
      basic: 'Basic Rate (20%)',
      higher: 'Higher Rate (40%)',
      additional: 'Additional Rate (45%)',
    };

    try {
      const response = await submitCycleToWorkQuote({
        fullName: quoteFullName.trim() || 'UK Employee',
        email: quoteEmail.trim(),
        phone: quotePhone.trim(),
        employerName: quoteEmployer.trim() || 'UK Employer',
        schemeName: activeSchemeObj.name,
        totalPrice,
        bikePrice,
        accessoriesPrice,
        taxBand: taxBandLabels[taxBand] || taxBand,
        monthlyNetCost: result.monthlyNetCostGBP,
        totalSaved: result.totalCashSavedGBP,
        termMonths,
      });

      if (response.success) {
        setQuoteSubmittedRef(response.quoteRef || `C2W-UK-${Math.floor(10000 + Math.random() * 90000)}`);
      } else {
        setQuoteError(response.error || 'Failed to dispatch quote. Please try again.');
      }
    } catch (err: any) {
      console.error('Quote error:', err);
      setQuoteError(err?.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmittingQuote(false);
    }
  };

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
                type="button"
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setQuoteSubmittedRef(null);
                  setQuoteError(null);
                }}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/60"
              >
                <FileCheck className="w-4 h-4" />
                <span>Generate Official Scheme Employer Quote</span>
              </button>
              <p className="text-[10px] text-slate-500 text-center">
                Dispatched directly to your inbox and registered with our UK fleet desk at sales@ebikessales.online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Cycle to Work Scheme Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
            {/* Modal Header */}
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white font-heading">
                    Official UK Cycle Scheme Employer Quote
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Scheme: {activeSchemeObj.name} • {termMonths}-Month Salary Sacrifice
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {quoteSubmittedRef ? (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-slate-950">
                      Quote Issued &amp; Dispatched!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Quote reference <strong className="font-mono text-emerald-700 font-bold">{quoteSubmittedRef}</strong> has been transmitted via Zoho Mail to:
                    </p>
                    <p className="text-xs font-semibold text-slate-900 bg-slate-100 py-1 px-2.5 rounded-md inline-block">
                      {quoteEmail}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                    <div className="flex justify-between text-slate-600">
                      <span>Package Value:</span>
                      <span className="font-semibold text-slate-900">£{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Net Monthly Salary Deduction:</span>
                      <span className="font-bold text-emerald-700">£{result.monthlyNetCostGBP.toFixed(2)}/mo</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Tax &amp; NI Saved:</span>
                      <span className="font-bold text-emerald-700">£{result.totalCashSavedGBP.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 border-t border-slate-200 pt-2">
                      <span>Fleet Desk Notification:</span>
                      <span className="font-mono text-blue-600">sales@ebikessales.online</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Submit this quote reference into your employer’s <strong>{activeSchemeObj.name}</strong> portal or forward directly to your HR/Payroll department.
                  </p>

                  <button
                    onClick={() => setIsQuoteModalOpen(false)}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Done / Return to Calculator
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGenerateQuoteSubmit} className="space-y-4 text-xs">
                  {quoteError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-800 p-2.5 rounded-lg flex items-center gap-2 text-xs">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{quoteError}</span>
                    </div>
                  )}

                  {/* Summary Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                    <div className="flex justify-between text-slate-600">
                      <span>Calculated Package:</span>
                      <span className="font-bold text-slate-900">£{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Estimated Net Cost:</span>
                      <span className="font-bold text-emerald-700">£{result.monthlyNetCostGBP.toFixed(2)} / month</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Total Government Savings:</span>
                      <span className="font-bold text-emerald-700">£{result.totalCashSavedGBP.toFixed(2)} ({result.totalSavingPercentage}%)</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Your Email (where quote will be sent) *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="work.email@company.co.uk"
                        value={quoteEmail}
                        onChange={(e) => setQuoteEmail(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Employee Full Name
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={quoteFullName}
                          onChange={(e) => setQuoteFullName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-700 block mb-1">
                        Employer / Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          placeholder="e.g. NHS, BBC, Deloitte"
                          value={quoteEmployer}
                          onChange={(e) => setQuoteEmployer(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Phone Number (optional)
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        placeholder="07xxx xxxxxx"
                        value={quotePhone}
                        onChange={(e) => setQuotePhone(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingQuote}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmittingQuote ? 'Generating & Transmitting Quote via Zoho Mail...' : 'Send Official Quote to My Email'}</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    Automated quote routed via Vercel &amp; Zoho Mail to sales@ebikessales.online and your inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
