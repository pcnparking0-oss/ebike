import React from 'react';
import { Product, ViewMode } from '../types';
import { 
  Bike, 
  ShieldCheck, 
  CloudRain, 
  Zap, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Clock, 
  Truck, 
  RotateCcw, 
  Sparkles,
  ShoppingBag,
  MapPin,
  Calculator,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  products: Product[];
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onNavigateToView: (view: ViewMode) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onOpenProductDetail,
  onAddToCart,
  onNavigateToView,
}) => {
  const [activeHomeCategory, setActiveHomeCategory] = React.useState<string>('All');

  const homeCategories = [
    'All',
    'Electric Dirt Bikes',
    'Road-Legal Electric Dirt Bikes',
    'Kids & Youth Electric Dirt Bikes',
    'Electric Quads & UTVs',
    'Accessories & Gear'
  ];

  const featuredProducts = React.useMemo(() => {
    const featured = products.filter(p => p.featured);
    if (featured.length >= 4) {
      return featured.slice(0, 4);
    }
    return products.slice(0, 4);
  }, [products]);

  const displayedProducts = React.useMemo(() => {
    if (activeHomeCategory === 'All') {
      return products;
    }
    return products.filter(p => p.category === activeHomeCategory);
  }, [products, activeHomeCategory]);

  return (
    <div className="space-y-12 pb-16 animate-fade-in text-slate-800">
      {/* 1. Hero Section - Full Frame 3:2 Uncropped Cover Image Showing Full Rider & Bike */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950 aspect-[3/2] max-h-[640px] group">
          <picture className="w-full h-full block">
            {/* Ultra-high quality WebP for modern browsers */}
            <source
              type="image/webp"
              srcSet="/images/hero-cover-desktop.webp 2400w, /images/hero-cover-tablet.jpg 1500w, /images/hero-cover-mobile.jpg 900w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
            />
            {/* Progressive High-Res JPEG Fallbacks for all viewports */}
            <source
              media="(min-width: 1024px)"
              srcSet="/images/hero-cover-desktop.jpg 2400w, /images/hero-cover.jpg 1600w"
              sizes="1280px"
            />
            <source
              media="(min-width: 640px)"
              srcSet="/images/hero-cover-tablet.jpg 1500w"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
            <img
              id="hero-cover-image"
              src="/images/hero-cover-desktop.jpg"
              srcSet="/images/hero-cover-mobile.jpg 900w, /images/hero-cover-tablet.jpg 1500w, /images/hero-cover-desktop.jpg 2400w"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              alt="VoltTrail Electric Dirt Bike and Rider on Mountain Trail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain sm:object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Minimal soft gradient overlay at bottom edge to protect readability */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Floating Tagline and Shop Button - Clean and unobtrusive */}
          <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-6 right-3 sm:right-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 z-10">
            <div className="bg-slate-950/60 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/15 text-white shadow-lg">
              <p className="text-[11px] sm:text-xs font-semibold tracking-wide font-heading flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="truncate sm:whitespace-normal">Unleash The Trail • High Performance Electric Dirt Bikes</span>
              </p>
            </div>

            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs active:scale-95 shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Products - Exactly 4 Featured Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Featured Electric Dirt Bikes
            </h2>
          </div>
          <button
            onClick={() => onNavigateToView('shop')}
            className="hidden sm:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm cursor-pointer"
          >
            <span>View All ({products.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
              ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
              : `${product.technicalSpecs.motorPowerW}W`;

            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group relative"
              >
                {/* Product Image */}
                <div 
                  className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    Featured
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {product.technicalSpecs.waterResistanceRating}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{powerDisplay} • {product.technicalSpecs.torqueNm > 0 ? `${product.technicalSpecs.torqueNm}Nm` : 'Smart Drive'}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="font-bold text-slate-800">{product.rating}</span>
                      </div>
                    </div>
                    <h3 
                      onClick={() => onOpenProductDetail(product)}
                      className="font-bold text-slate-900 text-sm font-heading line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Specs Pill Summary */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-extrabold text-slate-900 text-base">
                        £{product.priceGBP.toLocaleString()}
                      </span>
                      {product.rrpGBP > product.priceGBP && (
                        <span className="text-[10px] text-slate-400 line-through block">
                          RRP £{product.rrpGBP.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.technicalSpecs.rangeMiles && (
                      <span className="text-[11px] text-slate-600 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                        {product.technicalSpecs.rangeMiles}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-1 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 rounded-xl transition-all text-center cursor-pointer"
                    >
                      Specs
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-xl transition-all text-center shadow-2xs cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Full VoltTrail Catalog Showcase with Tabs (All Rest of Products) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              VoltTrail Official Catalog
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Explore Our Complete Lineup ({products.length} Models)
            </h2>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {homeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveHomeCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeHomeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => {
            const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
              ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
              : `${product.technicalSpecs.motorPowerW}W`;

            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
              >
                {/* Product Image */}
                <div 
                  className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {product.category}
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {product.technicalSpecs.waterResistanceRating}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{powerDisplay} • {product.technicalSpecs.torqueNm > 0 ? `${product.technicalSpecs.torqueNm}Nm` : 'Smart Drive'}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="font-bold text-slate-800">{product.rating}</span>
                      </div>
                    </div>
                    <h3 
                      onClick={() => onOpenProductDetail(product)}
                      className="font-bold text-slate-900 text-sm font-heading line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Specs Pill Summary */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-extrabold text-slate-900 text-base">
                        £{product.priceGBP.toLocaleString()}
                      </span>
                      {product.rrpGBP > product.priceGBP && (
                        <span className="text-[10px] text-slate-400 line-through block">
                          RRP £{product.rrpGBP.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.technicalSpecs.rangeMiles && (
                      <span className="text-[11px] text-slate-600 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                        {product.technicalSpecs.rangeMiles}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-1 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 rounded-xl transition-all text-center cursor-pointer"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-xl transition-all text-center shadow-2xs cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The VoltTrail Engineering & Service Standard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
              The VoltTrail UK Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Why Riders Choose VoltTrail
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Authorized UK distributor for the world's most capable electric off-road and all-terrain machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                Extreme Power & Torque
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                From 6kW to 60kW (80hp) high-voltage powertrains with up to 938Nm of instantaneous wheel torque.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CloudRain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                IP65 / IP67 Weatherproofing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sealed battery enclosures and motor encasements built to tackle British mud, rain, and bog trails.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                UK Workshop & Spares
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive UK inventory of original replacement parts, fast chargers, upgraded batteries, and factory servicing.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                2-Year UK Warranty
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every bike is backed by official manufacturer warranty coverage with dedicated technical telephone and email support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flexible Finance & Delivery Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-slate-900 text-white border border-blue-800/50 rounded-3xl p-6 sm:p-10 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>0% Finance & Spread the Cost</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Flexible Payments & Free UK Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Split your purchase into 4 interest-free installments or spread payments over 12-36 months. All bikes in stock dispatched directly from our UK warehouse.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-blue-200 pt-2 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free 24-48h Tracked UK Delivery
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Pre-Delivery Inspection (PDI)
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Full Spares Inventory
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md text-center cursor-pointer"
            >
              Browse Complete Catalog
            </button>
            <button
              onClick={() => onNavigateToView('contact-us')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all border border-slate-700 text-center cursor-pointer"
            >
              Contact Specialists
            </button>
          </div>
        </div>
      </section>

      {/* 5. Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-amber-500 font-bold text-xs">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-800 font-semibold ml-1">4.9 / 5 on Trustpilot (1,200+ UK Reviews)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
            Trusted by UK Riders & Motocross Enthusiasts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "The Sur-Ron Ultra Bee MX arrived fully assembled and ready to rip in 48 hours. The power delivery is unreal, and the IP67 sealing took everything the wet Wales trails threw at it."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Liam Henderson</span>
              <span className="text-slate-400 text-[11px]">Cardiff • Verified Buyer</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "The Talaria Sting R MX4 with gearbox is so much better than belt-driven bikes. Zero maintenance worries on gritty woodland tracks, and VoltTrail's team answered all my battery care questions."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Marcus Wright</span>
              <span className="text-slate-400 text-[11px]">Sheffield • Verified Buyer</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "Got the GasGas MC-E 5 for my 7-year-old son. The adjustable power mode key lets him learn safely at low speed, with zero exhaust burns or carburettor headaches."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900">Dave Thornton</span>
              <span className="text-slate-400 text-[11px]">Leeds • Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ready to Experience Electric Off-Road?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
              Order today with free UK express delivery, 2-year warranty protection, and full technical support from VoltTrail.
            </p>
          </div>
          <div className="shrink-0 flex gap-3">
            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-white hover:bg-slate-100 text-blue-900 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Explore the Shop
            </button>
            <button
              onClick={() => onNavigateToView('contact-us')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border border-blue-500 cursor-pointer"
            >
              Contact Specialists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
