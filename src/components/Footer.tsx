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
                alt="DirtVolt Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-base font-extrabold text-slate-900 font-heading tracking-tight">DIRTVOLT</span>
          </div>
          <p className="text-[11px] font-semibold text-blue-600 mb-2 tracking-tight">
            Official Electric Dirt Bikes, Motocross & High-Performance e-MTB Store
          </p>
          <p className="text-slate-600 text-xs max-w-sm mb-4 leading-relaxed">
            The premier official dealer for electric dirt bikes, motocross, road-legal mopeds, e-MTB, and youth quads. Providing unparalleled performance, manufacturer warranties, and dedicated servicing.
          </p>
          <div className="space-y-1 text-[11px] text-slate-400">
            <p>DirtVolt Ltd • Registered in England & Wales #14289012</p>
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
              <a 
                href="/shop?folder=dirt-bikes" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=dirt-bikes'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Electric Dirt Bikes (Sur-Ron &amp; Talaria)
              </a>
            </li>
            <li>
              <a 
                href="/shop?folder=road-legal" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=road-legal'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Road-Legal Electric Dirt Bikes (L1e-B)
              </a>
            </li>
            <li>
              <a 
                href="/shop?folder=dirt-bikes" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=dirt-bikes'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Electric Mountain Bikes (e-MTB)
              </a>
            </li>
            <li>
              <a 
                href="/shop?folder=kids-folder" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=kids-folder'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Kids &amp; Youth Electric Dirt Bikes
              </a>
            </li>
            <li>
              <a 
                href="/shop?folder=quads-folder" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=quads-folder'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Electric Quads &amp; Buggies
              </a>
            </li>
            <li>
              <a 
                href="/shop?folder=battery-folder" 
                onClick={(e) => { e.preventDefault(); onSelectView('shop'); window.history.pushState(null, '', '/shop?folder=battery-folder'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Accessories, Batteries &amp; Fast Chargers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            Finance &amp; Support
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a 
                href="/contact-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('contact-us'); window.history.pushState(null, '', '/contact-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                0% Interest-Free Finance
              </a>
            </li>
            <li>
              <a 
                href="/contact-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('contact-us'); window.history.pushState(null, '', '/contact-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Klarna Pay in 3 &amp; Pay Later
              </a>
            </li>
            <li>
              <a 
                href="/contact-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('contact-us'); window.history.pushState(null, '', '/contact-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Book a Test Ride Consultation
              </a>
            </li>
            <li>
              <a 
                href="/blog/best-electric-bikes-british-weather-winter-rain" 
                onClick={(e) => { e.preventDefault(); onSelectView('blog'); window.history.pushState(null, '', '/blog/best-electric-bikes-british-weather-winter-rain'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Battery Maintenance &amp; Care Guide
              </a>
            </li>
            <li>
              <a 
                href="/contact-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('contact-us'); window.history.pushState(null, '', '/contact-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Track Your UK Delivery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-3">
            Company &amp; Guides
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a 
                href="/about-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('about-us'); window.history.pushState(null, '', '/about-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                About Us &amp; UK Workshop
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                onClick={(e) => { e.preventDefault(); onSelectView('blog'); window.history.pushState(null, '', '/blog'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Blog &amp; UK Electric Dirt Bike Guides
              </a>
            </li>
            <li>
              <a 
                href="/contact-us" 
                onClick={(e) => { e.preventDefault(); onSelectView('contact-us'); window.history.pushState(null, '', '/contact-us'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Contact Specialists &amp; Hotline
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/447462268683"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 transition-colors text-emerald-700 font-semibold block"
              >
                WhatsApp: +44 7462 268683
              </a>
            </li>
            <li>
              <a 
                href="/terms-and-conditions" 
                onClick={(e) => { e.preventDefault(); onSelectView('terms-and-conditions'); window.history.pushState(null, '', '/terms-and-conditions'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a 
                href="/privacy-policy" 
                onClick={(e) => { e.preventDefault(); onSelectView('privacy-policy'); window.history.pushState(null, '', '/privacy-policy'); }} 
                className="hover:text-blue-600 transition-colors text-slate-600 block"
              >
                Privacy &amp; UK GDPR Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Certifications & Payment Bar */}
      <div className="border-t border-slate-100 py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 flex-wrap">
            <span>© 2026 DirtVolt Ltd. All rights reserved.</span>
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
