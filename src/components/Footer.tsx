import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Wrench, Bike } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onSelectView: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      {/* 4 Core UK Trust Signals */}
      <div className="bg-slate-50/80 border-b border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
              <Truck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Free UK Mainland Delivery</h4>
              <p className="text-slate-600 text-xs mt-0.5">Tracked 24-48h courier dispatch directly from our UK warehouse.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Official Authorized UK Dealer</h4>
              <p className="text-slate-600 text-xs mt-0.5">Genuine Sur-Ron, Talaria, Stark Future & E-Ride Pro distributor.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
              <RotateCcw className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">30-Day Guarantee</h4>
              <p className="text-slate-600 text-xs mt-0.5">Full return and replacement guarantee on all unused bikes.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-2xs">
              <Wrench className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">2-Year UK Warranty & Spares</h4>
              <p className="text-slate-600 text-xs mt-0.5">Full UK spare parts inventory, technical support, and workshop backup.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
              <img
                src="/images/site-icon.png"
                alt="Electric Dirt Bikes Site Icon"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-base font-extrabold text-slate-900 font-heading tracking-tight">ELECTRIC DIRT BIKES</span>
          </div>
          <p className="text-slate-600 text-xs max-w-sm mb-4 leading-relaxed">
            The UK's premier official dealer for electric dirt bikes, motocross, road-legal mopeds, e-MTB, and youth quads. Providing unparalleled performance, manufacturer warranties, and dedicated UK servicing.
          </p>
          <div className="space-y-1 text-[11px] text-slate-400">
            <p>Electric Dirt Bikes Ltd • Registered in England & Wales #14289012</p>
            <p>UK VAT Registration Number: GB 894 1209 44</p>
            <p>Official Distributor: Sur-Ron | Talaria | Stark Future | E-Ride Pro | RFN</p>
          </div>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            Categories
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Electric Dirt Bikes (Sur-Ron & Talaria)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Road-Legal Electric Dirt Bikes (L1e-B)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Electric Mountain Bikes (e-MTB)
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Kids & Youth Electric Dirt Bikes
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Electric Quads & Buggies
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('shop')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Accessories, Batteries & Fast Chargers
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            Finance & Support
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                0% Interest-Free Finance
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Klarna Pay in 3 & Pay Later
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Book a Test Ride Consultation
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Battery Maintenance & Care Guide
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Track Your UK Delivery
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            Company & Guides
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onSelectView('about-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                About Us & UK Workshop
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('blog')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Blog & UK Electric Dirt Bike Guides
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('contact-us')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Contact Specialists & Hotline
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('terms-and-conditions')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Terms & Conditions
              </button>
            </li>
            <li>
              <button onClick={() => onSelectView('privacy-policy')} className="hover:text-blue-600 transition-colors text-slate-600 text-left cursor-pointer">
                Privacy & UK GDPR Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Certifications & Payment Bar */}
      <div className="border-t border-slate-100 py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 flex-wrap">
            <span>© 2026 Electric Dirt Bikes Ltd. All rights reserved.</span>
            <span>•</span>
            <span>Official UK Distributor for Sur-Ron, Talaria, Stark Future & E-Ride Pro</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mr-1">Accepted:</span>
            {['Klarna', 'Visa', 'Mastercard', 'Apple Pay', 'Google Pay', 'Bank Transfer'].map(badge => (
              <span key={badge} className="bg-white border border-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded font-mono shadow-2xs">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
