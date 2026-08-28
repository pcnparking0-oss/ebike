import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  BookOpen,
  FileText,
  BadgeAlert,
  Info
} from 'lucide-react';

export const EapcValidator: React.FC = () => {
  const [motorWatts, setMotorWatts] = useState<number>(250);
  const [cutoffSpeedMph, setCutoffSpeedMph] = useState<number>(15.5);
  const [throttleMode, setThrottleMode] = useState<'pedal-only' | 'walk-assist' | 'full-throttle'>('walk-assist');
  const [riderAge, setRiderAge] = useState<number>(28);

  // UK EAPC Validation Logic
  const isPowerLegal = motorWatts <= 250;
  const isSpeedLegal = cutoffSpeedMph <= 15.5;
  const isThrottleLegal = throttleMode !== 'full-throttle';
  const isAgeLegal = riderAge >= 14;

  const is100PercentLegalEapc = isPowerLegal && isSpeedLegal && isThrottleLegal && isAgeLegal;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border border-teal-500/30 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" />
            UK EAPC Statutory Validator
          </span>
          <span className="bg-slate-800 text-slate-300 text-xs font-mono px-2 py-0.5 rounded">
            SI 1983/1168 (Amended 2015)
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-2">
          UK E-Bike Legal Compliance & EAPC Regulations Hub
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Test any e-bike specifications against UK Electrically Assisted Pedal Cycles (EAPC) law and the Road Traffic Act 1988 to verify whether it can be ridden legally on UK roads and cycle paths with zero road tax, licence, or insurance.
        </p>
      </div>

      {/* Main Interactive Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Parameters (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <h2 className="text-base font-bold text-white font-heading flex items-center gap-2">
              <Scale className="w-5 h-5 text-teal-400" />
              Configure E-Bike Specifications
            </h2>

            {/* Motor Wattage Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-300 font-medium">Motor Continuous Rated Output:</span>
                <span className={`font-mono font-bold text-sm ${isPowerLegal ? 'text-emerald-400' : 'text-red-400'}`}>
                  {motorWatts} Watts {isPowerLegal ? '(UK Legal)' : '(Exceeds 250W limit)'}
                </span>
              </div>
              <input
                aria-label="Motor Continuous Rated Output"
                type="range"
                min="200"
                max="1000"
                step="50"
                value={motorWatts}
                onChange={(e) => setMotorWatts(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span className="text-emerald-400 font-bold">250W (UK EAPC Max)</span>
                <span>500W</span>
                <span>750W (US Class 2)</span>
                <span>1000W</span>
              </div>
            </div>

            {/* Cutoff Speed Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-300 font-medium">Maximum Assisted Cutoff Speed:</span>
                <span className={`font-mono font-bold text-sm ${isSpeedLegal ? 'text-emerald-400' : 'text-red-400'}`}>
                  {cutoffSpeedMph} mph ({Math.round(cutoffSpeedMph * 1.609)} km/h)
                </span>
              </div>
              <input
                aria-label="Maximum Assisted Cutoff Speed"
                type="range"
                min="10"
                max="32"
                step="0.5"
                value={cutoffSpeedMph}
                onChange={(e) => setCutoffSpeedMph(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 mph</span>
                <span className="text-emerald-400 font-bold">15.5 mph / 25 km/h (UK Limit)</span>
                <span>20 mph (US Class 1/2)</span>
                <span>28 mph (S-Pedelec)</span>
              </div>
            </div>

            {/* Throttle Configuration */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200">
                Throttle / Propulsion Method:
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setThrottleMode('pedal-only')}
                  className={`w-full p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                    throttleMode === 'pedal-only'
                      ? 'bg-teal-950/50 border-teal-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div>
                    <span className="font-bold block text-slate-200">1. Pure Pedal Assist (Torque / Cadence sensor only)</span>
                    <span className="text-[11px] text-slate-400">Motor only operates while rider is turning pedals</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </button>

                <button
                  onClick={() => setThrottleMode('walk-assist')}
                  className={`w-full p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                    throttleMode === 'walk-assist'
                      ? 'bg-teal-950/50 border-teal-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div>
                    <span className="font-bold block text-slate-200">2. Walk Assist Button (Capped at 3.7 mph / 6 km/h)</span>
                    <span className="text-[11px] text-slate-400">Helps push loaded bike up ramps without pedalling (100% UK Legal)</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </button>

                <button
                  onClick={() => setThrottleMode('full-throttle')}
                  className={`w-full p-3 rounded-xl border text-left transition-all text-xs flex items-center justify-between ${
                    throttleMode === 'full-throttle'
                      ? 'bg-red-950/50 border-red-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div>
                    <span className="font-bold block text-red-300">3. Independent "Twist & Go" Throttle (over 3.7 mph)</span>
                    <span className="text-[11px] text-slate-400">Requires GB Type Approval or L1e-A registration to be road legal</span>
                  </div>
                  <BadgeAlert className="w-4 h-4 text-red-400 shrink-0" />
                </button>
              </div>
            </div>

            {/* Rider Age Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-slate-300 font-medium">Rider Age:</span>
                <span className={`font-mono font-bold text-sm ${isAgeLegal ? 'text-emerald-400' : 'text-red-400'}`}>
                  {riderAge} Years Old {isAgeLegal ? '(Legal in UK)' : '(Under legal age of 14)'}
                </span>
              </div>
              <input
                aria-label="Rider Age"
                type="range"
                min="10"
                max="75"
                step="1"
                value={riderAge}
                onChange={(e) => setRiderAge(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>10 (Illegal)</span>
                <span className="text-emerald-400 font-bold">14 (UK Minimum Age)</span>
                <span>25</span>
                <span>75</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verdict & Legal Analysis (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Verdict Card */}
          <div className={`border-2 rounded-2xl p-6 space-y-5 transition-all shadow-xl ${
            is100PercentLegalEapc
              ? 'bg-gradient-to-b from-slate-900 to-emerald-950/40 border-emerald-500/60 shadow-emerald-950/40'
              : 'bg-gradient-to-b from-slate-900 to-red-950/40 border-red-500/60 shadow-red-950/40'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                is100PercentLegalEapc ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {is100PercentLegalEapc ? <CheckCircle2 className="w-7 h-7" /> : <XCircle className="w-7 h-7" />}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                  UK ROAD LEGALITY VERDICT
                </span>
                <h3 className={`text-lg font-bold font-heading ${
                  is100PercentLegalEapc ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {is100PercentLegalEapc
                    ? '100% UK Road-Legal EAPC (Electrically Assisted Pedal Cycle)'
                    : 'Restricted / Classified as Motor Vehicle (Speed Pedelec or Illegal)'}
                </h3>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2 border-t border-slate-800/80 pt-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Motor Power ≤ 250W:</span>
                <span className={isPowerLegal ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-red-400 font-bold flex items-center gap-1'}>
                  {isPowerLegal ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  {motorWatts}W ({isPowerLegal ? 'Pass' : 'Exceeds 250W limit'})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Assisted Cutoff ≤ 15.5 mph:</span>
                <span className={isSpeedLegal ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-red-400 font-bold flex items-center gap-1'}>
                  {isSpeedLegal ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  {cutoffSpeedMph} mph ({isSpeedLegal ? 'Pass' : 'Exceeds 15.5mph limit'})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Pedal Assist & Throttle Rules:</span>
                <span className={isThrottleLegal ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-red-400 font-bold flex items-center gap-1'}>
                  {isThrottleLegal ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  {throttleMode === 'full-throttle' ? 'Twist throttle over 3.7mph (Non-compliant)' : 'Compliant'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-300">Minimum Rider Age 14+:</span>
                <span className={isAgeLegal ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-red-400 font-bold flex items-center gap-1'}>
                  {isAgeLegal ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                  {riderAge} yrs old ({isAgeLegal ? 'Pass' : 'Under 14 years old'})
                </span>
              </div>
            </div>

            {/* Legal Privilege Summary */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
              <h4 className="font-semibold text-slate-200">Legal Rights & Privileges on UK Infrastructure:</h4>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="text-slate-300">
                  <span className="text-slate-500 block">Driving Licence:</span>
                  <span className="font-semibold text-white">{is100PercentLegalEapc ? 'None Required' : 'CBT / Category AM Required'}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 block">Road Tax (VED):</span>
                  <span className="font-semibold text-white">{is100PercentLegalEapc ? '£0 (Exempt)' : 'Subject to VED'}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 block">Cycle Lanes & Towpaths:</span>
                  <span className="font-semibold text-white">{is100PercentLegalEapc ? '100% Permitted' : 'Strictly Prohibited'}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 block">Motorcycle Helmet:</span>
                  <span className="font-semibold text-white">{is100PercentLegalEapc ? 'Standard Cycle Helmet (Optional)' : 'Compulsory Full Face / Dot Helmet'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Statutory Reference Explainer */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              UK Legislation Reference & Penalties
            </h3>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Under Section 32 of the Road Traffic Act 1988 and the Electrically Assisted Pedal Cycles Regulations 1983 (as amended by SI 2015/24), an electric bicycle that meets EAPC standards is not treated as a motor vehicle in England, Scotland, or Wales.
            </p>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Riding a non-compliant e-bike (e.g. 500W+ or full twist throttle) on a public road without registration, tax, or third-party insurance risks <strong>6 penalty points on your driving licence, a £300 fixed penalty notice, and vehicle seizure under Section 165A</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
