import React, { useState } from 'react';
import { Product } from '../types';
import { calculateCycleToWorkSavings, generateProductJsonLd } from '../data/schemesData';
import { 
  X, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Zap, 
  Battery, 
  Gauge, 
  CloudRain, 
  CreditCard, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  Share2, 
  Copy, 
  Sparkles,
  ShoppingBag,
  Clock,
  RotateCcw,
  Landmark
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onOpenSchemaModal: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSchemaModal,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinanceTab, setSelectedFinanceTab] = useState<'c2w' | 'novuna' | 'klarna' | 'bank_transfer'>('c2w');
  const [selectedTaxBand, setSelectedTaxBand] = useState<'basic' | 'higher' | 'additional'>('higher');
  const [selectedTerm, setSelectedTerm] = useState<12 | 18 | 24 | 36>(12);
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Compute live savings
  const c2wSavings = calculateCycleToWorkSavings(product.priceGBP, selectedTaxBand, selectedTerm);

  // Novuna 0% calculation
  const novunaMonthly = Math.round((product.priceGBP / 12) * 100) / 100;
  // Klarna Pay in 3
  const klarnaMonthly = Math.round((product.priceGBP / 3) * 100) / 100;

  const toggleFaq = (index: number) => {
    setExpandedFaqIndex(expandedFaqIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div className="bg-white border border-slate-200/90 w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-900">
        {/* Modal Header Bar */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="text-blue-600 font-bold">{product.category}</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenSchemaModal(product)}
              className="hidden sm:flex items-center gap-1 text-xs bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 px-2.5 py-1 rounded-lg font-semibold transition-colors shadow-2xs cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>JSON-LD Schema</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-8 flex-1">
          {/* Above-The-Fold CRO Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Gallery Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={product.images[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-white/95 backdrop-blur-md border border-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    250W EAPC UK Legal
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-blue-600 ring-2 ring-blue-100 scale-105' : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}

              {/* Mini Technical Spec Sheet Badge */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 text-[10px] block uppercase font-mono font-semibold">Motor Power</span>
                  <span className="font-bold text-slate-800">{product.eapcCompliance.continuousRatedPowerW}W Continuous (UK Capped)</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block uppercase font-mono font-semibold">Hill Torque</span>
                  <span className="font-bold text-blue-600">{product.technicalSpecs.torqueNm} Nm (High Climb)</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block uppercase font-mono font-semibold">Real-World Range</span>
                  <span className="font-bold text-slate-800">{product.technicalSpecs.rangeMiles}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block uppercase font-mono font-semibold">Waterproof Rating</span>
                  <span className="font-bold text-sky-700">{product.technicalSpecs.waterResistanceRating} Submersible</span>
                </div>
              </div>
            </div>

            {/* CRO Conversion Details Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Product Title & Stock Notification */}
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold px-2 py-0.5 rounded shadow-2xs">
                    ★ {product.rating} / 5.0 ({product.reviewCount} verified UK reviews)
                  </span>
                  <span className="text-slate-400 text-xs font-mono font-medium">SKU: {product.sku}</span>
                </div>

                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {product.subtitle}
                </p>
              </div>

              {/* Delivery Urgency Ticker */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 flex items-center gap-2.5 text-xs text-slate-800 shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong className="text-emerald-700 font-bold">Order within 2h 45m</strong> for Free UK Mainland Delivery Tomorrow via DPD
                </span>
              </div>

              {/* Main Price & Cash Breakdown */}
              <div className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-4 space-y-3">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                        £{product.priceGBP.toLocaleString()}
                      </span>
                      {product.rrpGBP > product.priceGBP && (
                        <span className="text-sm text-slate-400 line-through">
                          RRP £{product.rrpGBP.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Includes 20% UK VAT • Free Mainland Shipping</span>
                  </div>

                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded shadow-2xs">
                    In Stock ({product.stockCount} left)
                  </span>
                </div>

                {/* Interactive UK Finance & Scheme Calculator Switcher */}
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg text-xs font-medium mb-3 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => setSelectedFinanceTab('c2w')}
                      className={`py-1.5 px-2.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                        selectedFinanceTab === 'c2w'
                          ? 'bg-white text-slate-900 font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Cycle to Work (-47%)
                    </button>
                    <button
                      onClick={() => setSelectedFinanceTab('bank_transfer')}
                      className={`py-1.5 px-2.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                        selectedFinanceTab === 'bank_transfer'
                          ? 'bg-white text-blue-900 font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Landmark className="w-3 h-3 text-blue-600" />
                      <span>Bank Transfer</span>
                    </button>
                    <button
                      onClick={() => setSelectedFinanceTab('novuna')}
                      className={`py-1.5 px-2.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                        selectedFinanceTab === 'novuna'
                          ? 'bg-white text-slate-900 font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Novuna 0% APR
                    </button>
                    <button
                      onClick={() => setSelectedFinanceTab('klarna')}
                      className={`py-1.5 px-2.5 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                        selectedFinanceTab === 'klarna'
                          ? 'bg-white text-slate-900 font-bold shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Klarna Pay in 3
                    </button>
                  </div>

                  {/* Tab 1: Cycle to Work Live Calculation */}
                  {selectedFinanceTab === 'c2w' && (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2.5 shadow-2xs">
                      <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                        <span className="text-slate-700 font-medium">Select UK Income Tax Band:</span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setSelectedTaxBand('basic')}
                            className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                              selectedTaxBand === 'basic' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            Basic (20%)
                          </button>
                          <button
                            onClick={() => setSelectedTaxBand('higher')}
                            className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                              selectedTaxBand === 'higher' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            Higher (40%)
                          </button>
                          <button
                            onClick={() => setSelectedTaxBand('additional')}
                            className={`px-2 py-1 rounded text-[11px] font-semibold cursor-pointer ${
                              selectedTaxBand === 'additional' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            Additional (45%)
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-1">
                        <div className="bg-slate-50 rounded p-2 border border-slate-200">
                          <span className="text-[10px] text-slate-500 font-medium block">Monthly Net Cost</span>
                          <span className="font-bold text-emerald-700 text-sm">
                            £{c2wSavings.monthlyNetCostGBP.toFixed(2)}/mo
                          </span>
                        </div>
                        <div className="bg-slate-50 rounded p-2 border border-slate-200">
                          <span className="text-[10px] text-slate-500 font-medium block">Total Tax & NI Saved</span>
                          <span className="font-bold text-emerald-700 text-sm">
                            £{c2wSavings.totalCashSavedGBP.toFixed(2)} ({c2wSavings.totalSavingPercentage}%)
                          </span>
                        </div>
                        <div className="bg-slate-50 rounded p-2 border border-slate-200 col-span-2 sm:col-span-1">
                          <span className="text-[10px] text-slate-500 font-medium block">Effective Cost</span>
                          <span className="font-bold text-slate-900 text-sm">
                            £{c2wSavings.effectiveCostGBP.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <p className="text-[10px] text-slate-500 italic">
                        *Deducted from gross salary before income tax & NI via Cyclescheme, Green Commute Initiative or Vivup.
                      </p>
                    </div>
                  )}

                  {/* Tab 1b: Direct Bank Transfer (BACS / Faster Payments) */}
                  {selectedFinanceTab === 'bank_transfer' && (
                    <div className="bg-white border border-blue-200 rounded-lg p-3 space-y-2 text-xs shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-blue-950 font-bold flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-blue-600" />
                          <span>Direct Bank Transfer (BACS / Faster Payments)</span>
                        </span>
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-mono">0% Fee</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Pay directly via BACS or UK Faster Payments. An official HMRC-compliant VAT proforma invoice and payment reference will be issued upon placing your order.
                      </p>
                    </div>
                  )}

                  {/* Tab 2: Novuna 0% APR */}
                  {selectedFinanceTab === 'novuna' && (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2 text-xs shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 font-medium">12 Months Interest-Free (0% APR)</span>
                        <span className="font-bold text-indigo-700 text-sm">£{novunaMonthly.toFixed(2)}/month</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Spread the cost with £0 deposit. Instant online approval decision during checkout.
                      </p>
                    </div>
                  )}

                  {/* Tab 3: Klarna */}
                  {selectedFinanceTab === 'klarna' && (
                    <div className="bg-white border border-slate-200 rounded-lg p-3 space-y-2 text-xs shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700 font-medium">Pay in 3 Interest-Free Payments</span>
                        <span className="font-bold text-pink-700 text-sm">£{klarnaMonthly.toFixed(2)}/mo</span>
                      </div>
                      <p className="text-[11px] text-slate-600">
                        First payment today, remaining 2 payments every 30 days automatically. No fees when paid on time.
                      </p>
                    </div>
                  )}
                </div>

                {/* Primary Add to Basket & Voucher Button */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Basket • Free UK Delivery</span>
                  </button>

                  <div className="grid grid-cols-2 gap-2 text-center text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center justify-center gap-1 font-medium">
                      <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                      30-Day UK Test Ride
                    </span>
                    <span className="flex items-center justify-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      2-Year UK Warranty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* British Weather & Hill Climbing Specifications Section */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-4 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-sky-600" />
              British Climate Engineering & UK Hill Capability
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5">
                <span className="font-bold text-sky-700 flex items-center gap-1">
                  🌧️ {product.technicalSpecs.waterResistanceRating} Water Ingress Protection
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Conformal silicone-coated electronics and double-sealed O-ring wiring harnesses built to withstand relentless British rain, deep puddles, and winter road salt spray.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5">
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  ⛰️ {product.technicalSpecs.torqueNm} Nm Hill Torque
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Engineered to flatten tough UK gradients (Bristol's 15% Park Street, Edinburgh's Old Town, and Sheffield hills) without breaking a sweat or losing cadence.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 space-y-1.5">
                <span className="font-bold text-amber-700 flex items-center gap-1">
                  🔋 Removable Battery Fast-Charge
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Unlock the lithium pack with one key turn and charge directly at your office desk or apartment in {product.technicalSpecs.chargingTimeHours} hours via a standard UK 3-pin plug.
                </p>
              </div>
            </div>

            {/* UK Highlights Checklist */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                UK Specification Highlights:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.ukHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full Technical Specifications Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
            <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Full Technical Specifications
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">EN 15194 & ISO 4210 Certified</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 text-xs divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
              <div className="p-4 space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Motor Type & Brand:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.motorBrand}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Max Motor Assistance:</span>
                  <span className="text-emerald-700 font-semibold">15.5 mph (25 km/h) UK EAPC Limit</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Motor Torque:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.torqueNm} Nm</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Battery Capacity:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.batteryCapacityWh} Wh ({product.technicalSpecs.batteryBrand})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Estimated Range:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.rangeMiles}</span>
                </div>
              </div>

              <div className="p-4 space-y-2.5">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Total Weight:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.weightKg} kg</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Gearing System:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.gears}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Braking System:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.brakes}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Tyres:</span>
                  <span className="text-slate-800 font-semibold">{product.technicalSpecs.tyres}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">UK Road Legal:</span>
                  <span className="text-emerald-700 font-semibold">100% Yes (No Tax or Reg Needed)</span>
                </div>
              </div>
            </div>
          </div>

          {/* People Also Ask (PAA) UK SEO FAQ Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 font-heading flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                Frequently Asked Questions (UK Legal & Commuting)
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">Google PAA Structured Q&A</span>
            </div>

            <div className="space-y-2">
              {product.paaFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 py-3 text-left font-semibold text-xs text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {expandedFaqIndex === idx ? (
                      <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {expandedFaqIndex === idx && (
                    <div className="px-4 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
