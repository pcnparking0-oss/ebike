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
  const [activeCategory, setActiveCategory] = React.useState<string>('All');
  const [selectedBrand, setSelectedBrand] = React.useState<string>('All');

  const categories = [
    'All',
    'Electric Dirt Bikes',
    'Road-Legal Electric Dirt Bikes',
    'Kids & Youth Electric Dirt Bikes',
    'Electric Quads & UTVs',
    'Accessories & Gear'
  ];

  const brands = React.useMemo(() => {
    const unique = Array.from(new Set(products.map(p => p.brand).filter(Boolean)));
    return ['All', ...unique];
  }, [products]);

  const featuredProducts = React.useMemo(() => {
    const featured = products.filter(p => p.featured);
    if (featured.length >= 4) {
      return featured.slice(0, 4);
    }
    return products.slice(0, 4);
  }, [products]);

  const filteredCatalog = React.useMemo(() => {
    return products.filter((product) => {
      const matchCat = activeCategory === 'All' || product.category === activeCategory;
      const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      return matchCat && matchBrand;
    });
  }, [products, activeCategory, selectedBrand]);

  return (
    <div className="space-y-12 pb-16 animate-fade-in text-slate-800">
      {/* 1. Hero Section - Full Screen Length with Cinematic Dark Hover Effect */}
      <section className="relative w-full h-[65vh] sm:h-[80vh] lg:h-[88vh] min-h-[500px] max-h-[920px] overflow-hidden bg-slate-950 border-b border-slate-800 shadow-2xl group cursor-pointer" onClick={() => onNavigateToView('shop')}>
        <picture className="w-full h-full block">
          {/* Ultra-high quality WebP for modern browsers */}
          <source
            type="image/webp"
            srcSet="/images/hero-cover-desktop.webp 2400w, /images/hero-cover-tablet.jpg 1500w, /images/hero-cover-mobile.jpg 900w"
            sizes="100vw"
          />
          {/* Progressive High-Res JPEG Fallbacks for all viewports */}
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero-cover-desktop.jpg 2400w, /images/hero-cover.jpg 1600w"
            sizes="100vw"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/images/hero-cover-tablet.jpg 1500w"
            sizes="100vw"
          />
          <img
            id="hero-cover-image"
            src="/images/hero-cover-desktop.jpg"
            srcSet="/images/hero-cover-mobile.jpg 900w, /images/hero-cover-tablet.jpg 1500w, /images/hero-cover-desktop.jpg 2400w"
            sizes="100vw"
            alt="DirtVolt Motocross and Rider on Mountain Trail"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-[1.02] transition-all duration-700 ease-out group-hover:brightness-90"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Dark Hover Overlay - Smooth darkening transition on hover */}
        <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-slate-950/55 transition-colors duration-500 pointer-events-none" />

        {/* Ambient bottom gradient to anchor the tagline & shop button */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Floating Tagline and Shop Button - Clean and responsive within max container */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-10 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-auto">
            <div className="bg-slate-950/70 group-hover:bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-white shadow-2xl transition-colors duration-300">
              <p className="text-xs sm:text-sm font-semibold tracking-wide font-heading flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Unleash The Trail • High Performance Electric Dirt Bikes</span>
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToView('shop');
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-xl hover:shadow-blue-600/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-xs active:scale-95 shrink-0 group/btn"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop All Bikes</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Featured Products - Exactly 4 Flagship Models */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Selection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              Featured Electric Dirt Bikes
            </h2>
          </div>
          <button
            onClick={() => onNavigateToView('shop')}
            className="hidden sm:flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-bold text-xs sm:text-sm cursor-pointer group"
          >
            <span>View All ({products.length} Models)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => {
            const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
              ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
              : `${product.technicalSpecs.motorPowerW}W`;

            const monthlyEstimate = Math.round(product.priceGBP / 12);

            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative"
              >
                {/* Product Image */}
                <div 
                  className="relative aspect-4/3 bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => onOpenProductDetail(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm backdrop-blur-xs font-mono uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="absolute top-2.5 right-2.5 bg-slate-900/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {product.technicalSpecs.waterResistanceRating}
                  </span>

                  {/* Quick specs overlay on hover */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-white/90 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 opacity-90">
                    <span className="font-semibold">{product.technicalSpecs.topSpeedMph} MPH</span>
                    <span className="text-slate-400">•</span>
                    <span className="font-semibold">{product.technicalSpecs.rangeMiles}</span>
                    <span className="text-slate-400">•</span>
                    <span className="font-semibold">{powerDisplay}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{product.technicalSpecs.motorType}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-slate-800">{product.rating}</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => onOpenProductDetail(product)}
                      className="font-extrabold text-slate-950 text-base font-heading line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Pricing & 0% Finance Teaser */}
                  <div className="pt-3 border-t border-slate-100 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-extrabold text-slate-950 text-lg sm:text-xl font-heading">
                          £{product.priceGBP.toLocaleString()}
                        </span>
                        {product.rrpGBP > product.priceGBP && (
                          <span className="text-[11px] text-slate-400 line-through ml-2 font-medium">
                            RRP £{product.rrpGBP.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                        In Stock UK
                      </span>
                    </div>
                    <p className="text-[11px] text-blue-600 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>From £{monthlyEstimate}/mo with 0% Finance</span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-1 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenProductDetail(product)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-2.5 rounded-xl transition-all text-center cursor-pointer active:scale-95"
                    >
                      Tech Specs
                    </button>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all text-center shadow-xs hover:shadow-blue-600/30 cursor-pointer active:scale-95 flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Basket</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All In Shop CTA */}
        <div className="text-center pt-3">
          <button
            onClick={() => onNavigateToView('shop')}
            className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <span>Advanced Filters in Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 2b. Complete Product Catalog & Lineup on Home Page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider font-mono">
                <Bike className="w-3.5 h-3.5" />
                <span>Full Inventory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                Explore All DirtVolt Models
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Browse our complete UK stock of high-power electric motocross, enduro, youth bikes, quads, and official accessories.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-slate-950 font-extrabold">{filteredCatalog.length}</strong> of {products.length} models
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Brand Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono mr-1 shrink-0">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedBrand === brand
                      ? 'bg-slate-950 text-white shadow-xs ring-1 ring-slate-800'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-950 hover:bg-slate-150 border border-slate-200/60'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {filteredCatalog.length === 0 ? (
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-10 text-center">
              <p className="text-sm font-semibold text-slate-700">No models match this category and brand selection.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSelectedBrand('All');
                }}
                className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
              {filteredCatalog.map((product) => {
                const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
                  ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
                  : `${product.technicalSpecs.motorPowerW}W`;

                const monthlyEstimate = Math.round(product.priceGBP / 12);

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200/90 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image Area */}
                    <div 
                      className="relative aspect-4/3 bg-slate-950 overflow-hidden cursor-pointer"
                      onClick={() => onOpenProductDetail(product)}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                        <span className="bg-slate-900/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                          <ShieldCheck className="w-3 h-3 text-blue-400" />
                          {product.eapcCompliance.ukRoadLegalStatus.includes('Road-Legal') ? 'Road-Legal' : product.eapcCompliance.ukRoadLegalStatus.includes('100%') ? 'EAPC 250W' : 'Off-Road MX'}
                        </span>
                        <span className="bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs">
                          <CloudRain className="w-3 h-3 text-emerald-400" />
                          {product.technicalSpecs.waterResistanceRating}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5">
                        {product.technicalSpecs.torqueNm > 0 && (
                          <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] px-2 py-0.5 rounded-md font-mono font-semibold shadow-xs">
                            ⚡ {product.technicalSpecs.torqueNm} Nm
                          </span>
                        )}
                        {product.technicalSpecs.weightKg > 0 && (
                          <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] px-2 py-0.5 rounded-md font-mono font-semibold shadow-xs">
                            ⚖️ {product.technicalSpecs.weightKg} kg
                          </span>
                        )}
                        {product.technicalSpecs.maxRangeMiles > 0 && (
                          <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[10px] px-2 py-0.5 rounded-md font-mono font-semibold shadow-xs">
                            🔋 {product.technicalSpecs.maxRangeMiles} mi
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                          <span className="text-blue-600 font-bold uppercase tracking-wider font-mono text-[10px]">{product.category}</span>
                          <span className="font-bold text-amber-500 flex items-center gap-1">★ {product.rating} <span className="text-slate-400 font-normal">({product.reviewCount})</span></span>
                        </div>

                        <h3 
                          onClick={() => onOpenProductDetail(product)}
                          className="font-extrabold text-slate-950 text-base group-hover:text-blue-600 cursor-pointer transition-colors line-clamp-1 font-heading"
                        >
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Pricing & Installments */}
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg sm:text-xl font-extrabold text-slate-950 font-heading">
                              £{product.priceGBP.toLocaleString()}
                            </span>
                            {product.rrpGBP > product.priceGBP && (
                              <span className="text-xs text-slate-400 line-through font-medium">
                                RRP £{product.rrpGBP.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                            In Stock UK
                          </span>
                        </div>

                        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-2 flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 font-medium">0% Finance:</span>
                          <span className="text-blue-600 font-bold">
                            From £{monthlyEstimate}/mo
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => onOpenProductDetail(product)}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-2.5 px-2.5 rounded-xl transition-colors text-center cursor-pointer active:scale-95"
                          >
                            Tech Specs
                          </button>
                          <button
                            onClick={() => onAddToCart(product)}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 shadow-xs hover:shadow-blue-600/30 cursor-pointer active:scale-95"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Basket</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. The Electric Dirt Bikes Engineering & Service Standard */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-8 relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              The DirtVolt Standard
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Why Riders Choose DirtVolt
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Authorized UK distributor for the world's most capable electric off-road and all-terrain machines with dedicated workshop support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-5 space-y-3 transition-all group hover:bg-slate-850">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                Extreme Power & Torque
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                From 6kW to 60kW (80hp) high-voltage powertrains with up to 938Nm of instantaneous wheel torque.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-5 space-y-3 transition-all group hover:bg-slate-850">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CloudRain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                IP65 / IP67 Weatherproofing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sealed battery enclosures and motor encasements built to tackle British mud, rain, and bog trails.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 space-y-3 transition-all group hover:bg-slate-850">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm font-heading">
                UK Workshop & Spares
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive UK inventory of original replacement parts, fast chargers, upgraded batteries, and factory servicing.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-5 space-y-3 transition-all group hover:bg-slate-850">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
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
      {/* 4. Flexible Finance & Express UK Delivery Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 text-white border border-blue-900/60 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30 font-mono">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>0% APR FINANCE • SPREAD THE COST</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Spread the Cost with 0% Finance & Free UK Delivery
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Split your purchase with Klarna in 3 interest-free payments or Novuna 0% APR finance over 12-36 months. All bikes are fully inspected and dispatched within 24-48 hours.
            </p>

            <div className="flex flex-wrap gap-4 text-xs text-slate-200 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Free 24-48h Tracked UK Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Pre-Delivery Inspection (PDI) Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Full UK Spares & Technical Support
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-blue-600/40 text-center cursor-pointer active:scale-95"
            >
              Browse Complete Catalog
            </button>
            <button
              onClick={() => onNavigateToView('contact-us')}
              className="bg-slate-800/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all border border-slate-700 text-center cursor-pointer active:scale-95"
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
            <span className="text-slate-900 font-bold ml-1">4.9 / 5 on Trustpilot (1,200+ UK Verified Reviews)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
            Trusted by UK Riders & Motocross Enthusiasts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "The Sur-Ron Ultra Bee MX arrived fully assembled and ready to rip in 48 hours. The power delivery is unreal, and the IP67 sealing took everything the wet Wales trails threw at it."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-950">Liam Henderson</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded">
                Cardiff • Verified Buyer
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "The Talaria Sting R MX4 with gearbox is so much better than belt-driven bikes. Zero maintenance worries on gritty woodland tracks, and DirtVolt's team answered all my battery care questions."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-950">Marcus Wright</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded">
                Sheffield • Verified Buyer
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "Got the GasGas MC-E 5 for my 7-year-old son. The adjustable power mode key lets him learn safely at low speed, with zero exhaust burns or carburettor headaches."
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-950">Dave Thornton</span>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded">
                Leeds • Verified Buyer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ready to Experience Electric Off-Road?
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl leading-relaxed">
              Order today with free express delivery, 2-year warranty protection, and full technical workshop support from DirtVolt.
            </p>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3 relative z-10">
            <button
              onClick={() => onNavigateToView('shop')}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              <span>Explore the Shop</span>
            </button>
            <button
              onClick={() => onNavigateToView('contact-us')}
              className="bg-blue-800/80 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl transition-all border border-blue-400/40 cursor-pointer active:scale-95"
            >
              Contact Specialists
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
