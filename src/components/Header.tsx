import React from 'react';
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
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onSelectView: (view: ViewMode) => void;
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
  cartCount,
  onOpenCart,
  selectedCity,
  onSelectCity,
  searchQuery,
  onSearchChange,
}) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onSelectView('home')}>
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300 shrink-0">
            <img
              src="/images/site-icon.png"
              alt="DirtVolt Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-950 font-heading">
                DIRT<span className="text-blue-600">VOLT</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium tracking-tight hidden sm:block">
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
        <div className="flex items-center gap-2.5">
          <button
            id="open-basket-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
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
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 flex items-center overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 py-2 bg-white">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
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
