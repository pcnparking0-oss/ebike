import React from 'react';
import { ViewMode } from '../types';
import { 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Award, 
  CloudRain, 
  Bike, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Truck
} from 'lucide-react';

interface AboutUsProps {
  onNavigateToView: (view: ViewMode) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigateToView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-slate-800">
      {/* Hero Header */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
            <span className="text-sm">🇬🇧</span> Official UK Authorized Electric Dirt Bike Distributor
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
            Powering the Future of Electric Off-Road & Motocross in the UK
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            VoltTrail UK was established to provide British riders with authorized access to the world's most cutting-edge electric dirt bikes, motocross machines, road-legal electric enduro, e-MTB, and youth quads—complete with factory warranties, express UK dispatch, and professional workshop support.
          </p>

          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Bike className="w-4 h-4" />
              <span>Explore Our Full Lineup</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToView('contact-us')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all border border-slate-200 cursor-pointer"
            >
              Book a Test Ride
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading block">10,000+</span>
            <span className="text-xs text-slate-500 font-medium">Bikes Delivered Across UK</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-heading block">100%</span>
            <span className="text-xs text-slate-500 font-medium">Official UK Stock & Parts</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading block">4.9 / 5</span>
            <span className="text-xs text-slate-500 font-medium">Verified Rider TrustScore</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-heading block">2 Years</span>
            <span className="text-xs text-slate-500 font-medium">Official UK Warranty</span>
          </div>
        </div>
      </div>

      {/* 3 Core Pillars Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-2xs">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Official Authorized Brands
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We are official certified distributors for Sur-Ron, Talaria, Stark Future, E-Ride Pro, GasGas, RFN, Drill One, and MotoTec. Every bike includes authentic serial numbers, latest firmware, and factory warranty backing.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs">
            <Wrench className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            UK Workshop & Spares Depot
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our UK technical workshop stocks replacement controllers, high-output lithium batteries, fast chargers, upgraded sprockets, and brake kits. Never wait weeks for overseas parts.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-2xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 font-heading">
            Pre-Delivery Inspection (PDI)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every bike is precision-checked, battery-conditioned, torqued to manufacturer specifications, and packaged in protective crating before expedited courier dispatch straight to your door.
          </p>
        </div>
      </div>

      {/* Our Story & Facilities */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
            VoltTrail UK Service & Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Dedicated to High-Performance Electric Riding
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            VoltTrail UK was founded by motocross racers, enduro enthusiasts, and electric powertrain engineers passionate about quiet, high-torque off-road riding. We understand the performance, battery management, and trail durability needed for British terrain.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you are hitting off-road trails, private motocross tracks, farming estates, or commuting on a road-legal Sur-Ron Light Bee L1e, our team is here to support you at every stage.
          </p>
          
          <ul className="space-y-2 text-xs text-slate-700 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full compliance with UK Consumer Rights Act 2015 & 30-Day Guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Flexible payment options with 0% interest and Klarna installments</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>2-Year Comprehensive UK Warranty with domestic technical hotline support</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="aspect-16/10 rounded-xl overflow-hidden bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
              alt="VoltTrail UK Technical Facility"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>VoltTrail UK Distribution Hub & Technical Workshop</span>
            </div>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold text-[10px]">
              Open Mon-Sat
            </span>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Expert Advice & Nationwide Delivery
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading">
            Need Help Choosing the Right Electric Dirt Bike?
          </h2>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Our UK technical specialists are on hand to advise on road-legal registration, power ratings, battery sizing, and youth models.
          </p>
        </div>
        
        <div className="shrink-0 flex gap-3">
          <button
            onClick={() => onNavigateToView('contact-us')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            Speak to a Specialist
          </button>
        </div>
      </div>
    </div>
  );
};
