import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ViewMode } from '../types';
import { 
  Home,
  Users,
  FileText,
  ShieldCheck,
  Phone,
  Bike, 
  Search, 
  ShoppingBag, 
  MapPin, 
  Zap, 
  CheckCircle2,
  BookOpen,
  ChevronDown,
  Folder,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  X
} from 'lucide-react';

export interface QuadNavFilter {
  folderId?: string;
  category?: string;
  brand?: string;
  search?: string;
}

interface HeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
  onSelectQuadFilter?: (filter: QuadNavFilter) => void;
  cartCount: number;
  onOpenCart: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onSelectView,
  onSelectQuadFilter,
  cartCount,
  onOpenCart,
  selectedCity,
  onSelectCity,
  searchQuery,
  onSearchChange,
}) => {
  const [isQuadsOpen, setIsQuadsOpen] = useState(false);
  const quadsDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDrawerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        quadsDropdownRef.current && 
        !quadsDropdownRef.current.contains(target) &&
        (!mobileDrawerRef.current || !mobileDrawerRef.current.contains(target))
      ) {
        setIsQuadsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Lock body scroll on mobile when drawer is open
  useEffect(() => {
    if (isQuadsOpen && typeof window !== 'undefined' && window.innerWidth < 640) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isQuadsOpen]);

  const handleQuadItemClick = (filter: QuadNavFilter) => {
    setIsQuadsOpen(false);
    if (onSelectQuadFilter) {
      onSelectQuadFilter(filter);
    } else {
      onSelectView('shop');
    }
  };
  const UK_CITIES = [
    'All UK',
    'London',
    'Birmingham',
    'Manchester',
    'Leeds',
    'Glasgow',
    'Bristol',
    'Sheffield',
    'Liverpool',
    'Edinburgh',
    'Cardiff',
    'Belfast',
    'Newcastle',
    'Nottingham'
  ];

  const NAV_ITEMS: { id: ViewMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home page', icon: Home },
    { id: 'about-us', label: 'About Us', icon: Users },
    { id: 'shop', label: 'Shop', icon: ShoppingBag },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'terms-and-conditions', label: 'Terms and Condition', icon: FileText },
    { id: 'privacy-policy', label: 'Privacy Policy', icon: ShieldCheck },
    { id: 'contact-us', label: 'Contact Us', icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
      {/* UK Trust & Regulatory Top Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-tight">
              <span className="text-sm">🇬🇧</span> Free UK Mainland 24-48h Delivery & In-Stock Guarantee
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Official UK Dealer: Sur-Ron • Talaria • Stark Varg • E-Ride Pro
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-amber-300 font-medium">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              0% Finance & Klarna Available • 2-Year UK Warranty
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-medium text-slate-400">Local Hub:</span>
              <select
                id="city-switcher-select"
                aria-label="Filter by UK City"
                value={selectedCity}
                onChange={(e) => onSelectCity(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 text-slate-100 text-xs rounded-md px-2.5 py-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-colors"
              >
                {UK_CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
              UK VAT: GB 894 1209 44
            </span>
          </div>
        </div>
      </div>

      {/* Main Brand Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0" onClick={() => onSelectView('home')}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300 shrink-0">
            <img
              src="/images/site-icon.png"
              alt="DirtVolt Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-950 font-heading">
                DIRT<span className="text-blue-600">VOLT</span>
              </span>
            </div>
            <p className="text-[9.5px] sm:text-[11px] text-slate-500 font-medium tracking-tight leading-tight block">
              Official Electric Dirt Bikes, Motocross & High-Performance e-MTB Store
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            id="global-search-input"
            type="text"
            placeholder="Search Talaria MX5, Sur-Ron Ultra Bee, Stark Varg, E-Ride Pro..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-100/80 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all shadow-2xs"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Actions & Basket */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            id="open-basket-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-blue-400" />
            <span>Basket</span>
            {cartCount > 0 && (
              <span className="bg-blue-500 text-white font-extrabold text-[10px] min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Switcher Tabs */}
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 flex items-center overflow-x-auto sm:overflow-visible no-scrollbar gap-1 sm:gap-1.5 py-2 bg-white relative">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          if (item.id === 'shop') {
            return (
              <React.Fragment key="shop-and-quads">
                <button
                  id={`nav-tab-${item.id}`}
                  onClick={() => onSelectView(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive && !isQuadsOpen
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>

                {/* Electric Quads Menu Folder with Dropdown */}
                <div 
                  ref={quadsDropdownRef}
                  className="relative shrink-0"
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 640) {
                      setIsQuadsOpen(true);
                    }
                  }}
                >
                  <button
                    id="nav-tab-quads-menu"
                    type="button"
                    aria-expanded={isQuadsOpen}
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsQuadsOpen((prev) => !prev);
                    }}
                    className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isQuadsOpen
                        ? 'bg-slate-950 text-amber-400 shadow-sm ring-1 ring-slate-800'
                        : 'text-amber-900 bg-amber-50 hover:bg-amber-100/80 border border-amber-300/80'
                    }`}
                  >
                    <span className="text-sm">🚜</span>
                    <span>Electric Quads</span>
                    <span className="bg-amber-200 text-amber-900 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">9</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isQuadsOpen ? 'rotate-180 text-amber-400' : 'text-amber-700'}`} />
                  </button>

                  {/* Desktop Mega Menu Dropdown (hidden on mobile) */}
                  {isQuadsOpen && (
                    <div 
                      className="hidden sm:block absolute top-full left-0 mt-2 w-[600px] md:w-[680px] max-w-[calc(100vw-2rem)] bg-slate-950 text-slate-100 border border-slate-800 border-t-2 border-t-amber-500 rounded-2xl shadow-2xl p-4 sm:p-6 z-50"
                      onMouseLeave={() => {
                        if (typeof window !== 'undefined' && window.innerWidth >= 640) {
                          setIsQuadsOpen(false);
                        }
                      }}
                    >
                      {/* Top Bar Label / Reference indicator */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold text-xs tracking-wider uppercase flex items-center gap-1">
                            ⚡ Electric Quads
                          </span>
                          <span className="hidden sm:inline-block text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
                            volttrail.org Dropdown Menu Spec
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleQuadItemClick({ folderId: 'quads-folder', category: 'Electric Quads & UTVs' })}
                          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>All 9 Quads</span>
                          <ArrowRight className="w-3 h-3 text-amber-400" />
                        </button>
                      </div>

                      {/* 3 Columns exact layout from volttrail.org */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                        {/* Col 1: By Rider */}
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 pb-2 border-b border-slate-800">
                            By Rider
                          </h4>
                          <div className="space-y-1.5">
                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-adult', category: 'Electric Quads & UTVs' })}
                              className="w-full text-left p-2 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer block"
                            >
                              <div className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex items-center justify-between">
                                <span>Adult & Utility Quads</span>
                                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">4 Models</span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                High-torque farm, estate & off-road 4x4
                              </p>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-kids', category: 'Electric Quads & UTVs' })}
                              className="w-full text-left p-2 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer block"
                            >
                              <div className="text-xs font-semibold text-slate-200 group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex items-center justify-between">
                                <span>Kids Electric Quads</span>
                                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">5 Models</span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                Parental speed limiters & disc brakes
                              </p>
                            </button>
                          </div>
                        </div>

                        {/* Col 2: Quad Brands */}
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 pb-2 border-b border-slate-800">
                            Quad Brands
                          </h4>
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-folder', brand: 'Segway' })}
                              className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white"
                            >
                              <span className="group-hover:translate-x-1 transition-transform group-hover:text-amber-300">Segway Powersports</span>
                              <span className="text-[10px] font-mono text-slate-500">2 Models</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'brand-ecorider', brand: 'Eco Rider' })}
                              className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white"
                            >
                              <span className="group-hover:translate-x-1 transition-transform group-hover:text-amber-300">Eco Rider</span>
                              <span className="text-[10px] font-mono text-slate-500">3 Models</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-folder', brand: 'FunBikes' })}
                              className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white"
                            >
                              <span className="group-hover:translate-x-1 transition-transform group-hover:text-amber-300">FunBikes</span>
                              <span className="text-[10px] font-mono text-slate-500">3 Models</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-folder', brand: 'Razor' })}
                              className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-900 group transition-all cursor-pointer flex items-center justify-between text-xs text-slate-300 hover:text-white"
                            >
                              <span className="group-hover:translate-x-1 transition-transform group-hover:text-amber-300">Razor</span>
                              <span className="text-[10px] font-mono text-slate-500">1 Model</span>
                            </button>
                          </div>
                        </div>

                        {/* Col 3: Browse */}
                        <div className="space-y-3">
                          <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 pb-2 border-b border-slate-800">
                            Browse
                          </h4>
                          <div className="space-y-2">
                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'quads-folder', category: 'Electric Quads & UTVs' })}
                              className="w-full text-left p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 group transition-all cursor-pointer block"
                            >
                              <div className="text-xs font-bold text-amber-300 flex items-center justify-between">
                                <span>All Electric Quads →</span>
                                <span className="text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded-full font-extrabold">9</span>
                              </div>
                              <p className="text-[10px] text-amber-200/70 mt-1">
                                Complete electric quad collection & specs
                              </p>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleQuadItemClick({ folderId: 'all' })}
                              className="w-full text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 group transition-all cursor-pointer block"
                            >
                              <div className="text-xs font-bold text-slate-200 group-hover:text-white flex items-center justify-between">
                                <span>All Brands Directory →</span>
                                <span className="text-[10px] text-slate-400">11 Brands</span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-1">
                                Sur-Ron, Talaria, Stark Varg & more
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Footer guarantee bar matching UK stock guarantees */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Next-Day UK Dispatch Available on In-Stock Quads
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          0% Interest-Free Finance via Klarna & Clearpay
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Mobile Touch Drawer Portal (escapes header & nav overflow-x-auto constraints) */}
                  {isQuadsOpen && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-50 sm:hidden flex flex-col justify-end">
                      {/* Dark backdrop */}
                      <div 
                        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
                        onClick={() => setIsQuadsOpen(false)}
                        aria-label="Close Electric Quads Menu"
                      />

                      {/* Mobile Bottom Sheet */}
                      <div 
                        ref={mobileDrawerRef}
                        className="relative z-10 bg-slate-950 text-slate-100 border-t-2 border-amber-500 rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-250"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Drag Handle Bar */}
                        <div className="pt-3 pb-1 flex justify-center shrink-0">
                          <div className="w-12 h-1 bg-slate-700 rounded-full" />
                        </div>

                        {/* Sheet Header */}
                        <div className="px-5 py-3 border-b border-slate-800/90 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-2">
                            <span className="text-base">🚜</span>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm font-extrabold text-white font-heading">
                                  Electric Quads & ATVs
                                </span>
                                <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded-full font-mono font-bold">
                                  9 Models
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400">Adult 4x4, Utility Workhorses & Youth Quads</p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => setIsQuadsOpen(false)}
                            className="w-8 h-8 rounded-full bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700/60 active:scale-95"
                            aria-label="Close menu"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Scrollable Body Content */}
                        <div className="px-5 py-4 overflow-y-auto space-y-4 flex-1 overscroll-contain">
                          {/* View All Quads Quick Action Card */}
                          <button
                            type="button"
                            onClick={() => handleQuadItemClick({ folderId: 'quads-folder', category: 'Electric Quads & UTVs' })}
                            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-600/20 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs transition-all cursor-pointer group shadow-xs active:scale-[0.99]"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                                <Zap className="w-4 h-4" />
                              </div>
                              <div className="text-left">
                                <span className="text-white font-extrabold block text-xs">Browse All 9 Electric Quads</span>
                                <span className="text-[10.5px] text-amber-200/80 font-normal">Full specifications, battery ranges & pricing</span>
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                          </button>

                          {/* By Rider Sub-categories */}
                          <div>
                            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-2">
                              By Rider Type
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              <button
                                type="button"
                                onClick={() => handleQuadItemClick({ folderId: 'quads-adult', category: 'Electric Quads & UTVs' })}
                                className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-all cursor-pointer flex items-center justify-between active:scale-[0.99]"
                              >
                                <div>
                                  <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
                                    <span>Adult & Utility Quads</span>
                                    <span className="text-[10px] bg-slate-800 text-amber-300 font-mono px-1.5 py-0.2 rounded border border-slate-700">4 Models</span>
                                  </div>
                                  <p className="text-[11px] text-slate-400 mt-0.5">High-torque estate, farm & 4x4 off-roaders with winches</p>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                              </button>

                              <button
                                type="button"
                                onClick={() => handleQuadItemClick({ folderId: 'quads-kids', category: 'Electric Quads & UTVs' })}
                                className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-all cursor-pointer flex items-center justify-between active:scale-[0.99]"
                              >
                                <div>
                                  <div className="text-xs font-bold text-slate-100 flex items-center gap-2">
                                    <span>Kids & Youth Electric Quads</span>
                                    <span className="text-[10px] bg-slate-800 text-amber-300 font-mono px-1.5 py-0.2 rounded border border-slate-700">5 Models</span>
                                  </div>
                                  <p className="text-[11px] text-slate-400 mt-0.5">Key parental speed limiters, enclosed footwells & safety brakes</p>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                              </button>
                            </div>
                          </div>

                          {/* Quad Brands Grid */}
                          <div>
                            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 mb-2">
                              Quad Brands
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { name: 'Segway', brand: 'Segway', count: '2 Models', desc: 'Snarler & Junior' },
                                { name: 'Eco Rider', brand: 'Eco Rider', count: '3 Models', desc: 'Explorer GT 4x4' },
                                { name: 'FunBikes', brand: 'FunBikes', count: '3 Models', desc: '500W-1500W Beast' },
                                { name: 'Razor', brand: 'Razor', count: '1 Model', desc: 'Dirt Quad 4-Wheeler' },
                              ].map((qb) => (
                                <button
                                  key={qb.brand}
                                  type="button"
                                  onClick={() => handleQuadItemClick({ 
                                    folderId: qb.brand === 'Eco Rider' ? 'brand-ecorider' : 'quads-folder', 
                                    brand: qb.brand 
                                  })}
                                  className="text-left p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 transition-all cursor-pointer active:scale-[0.98]"
                                >
                                  <div className="text-xs font-bold text-slate-200">{qb.name}</div>
                                  <div className="text-[10px] font-mono text-amber-400 mt-0.5">{qb.count}</div>
                                  <div className="text-[9.5px] text-slate-400 mt-0.5 line-clamp-1">{qb.desc}</div>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Store-wide Brand Directory Link */}
                          <button
                            type="button"
                            onClick={() => handleQuadItemClick({ folderId: 'all' })}
                            className="w-full text-left p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                          >
                            <div>
                              <div className="font-bold text-slate-200">View All 11 Brands Directory</div>
                              <div className="text-[10px] text-slate-400 mt-0.5">Sur-Ron, Talaria, Stark Varg, Segway, KTM & more</div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-2" />
                          </button>

                          {/* Trust guarantees bar */}
                          <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-400">
                            <div className="flex items-center gap-2 text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>Next-Day UK Dispatch on In-Stock Quads</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>0% Finance with Klarna & Clearpay</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>,
                    document.body
                  )}
                </div>
              </React.Fragment>
            );
          }

          return (
            <button
              key={item.id}
              id={`nav-tab-${item.id}`}
              onClick={() => onSelectView(item.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};
