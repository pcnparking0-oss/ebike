import React, { useState, useMemo } from 'react';
import { Product, EbikeCategory, MotorLocation, WaterResistance } from '../types';
import { 
  Zap, 
  ShieldCheck, 
  CloudRain, 
  Mountain, 
  Briefcase, 
  BatteryCharging, 
  Gauge, 
  Weight, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  SlidersHorizontal,
  Info,
  Layers,
  MapPin
} from 'lucide-react';

interface StoreFrontProps {
  products: Product[];
  selectedCity: string;
  searchQuery: string;
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenSchemaModal: (product: Product) => void;
  onNavigateToView: (view: any) => void;
}

export const StoreFront: React.FC<StoreFrontProps> = ({
  products,
  selectedCity,
  searchQuery,
  onOpenProductDetail,
  onAddToCart,
  onOpenSchemaModal,
  onNavigateToView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedMotorType, setSelectedMotorType] = useState<string>('All');
  const [maxWeight, setMaxWeight] = useState<number>(130);
  const [minTorque, setMinTorque] = useState<number>(0);
  const [cycleToWorkOnly, setCycleToWorkOnly] = useState<boolean>(false);
  const [waterproofOnly, setWaterproofOnly] = useState<boolean>(false);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = [
    'All',
    'Electric Dirt Bikes',
    'Road-Legal Electric Dirt Bikes',
    'Kids & Youth Electric Dirt Bikes',
    'Electric Quads & UTVs',
    'Accessories & Gear'
  ];

  const brands = [
    'All',
    'Sur-Ron',
    'Talaria',
    'Stark Varg',
    'KTM',
    'E Ride Pro',
    'RFN',
    'Revvi',
    'FunBikes',
    'Razor',
    'Segway',
    'Eco Rider'
  ];

  // Filtering logic
  const filteredProducts = useMemo(() => {
    const list = products.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'All') {
        const itemLower = item.name.toLowerCase();
        const brandLower = selectedBrand.toLowerCase();
        if (!itemLower.includes(brandLower) && !item.sku.toLowerCase().includes(brandLower.slice(0, 3))) {
          return false;
        }
      }

      // City filter
      if (selectedCity !== 'All UK' && !item.idealForCities.includes(selectedCity) && !item.idealForCities.includes('All UK')) {
        return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesCategory && !matchesDesc) {
          return false;
        }
      }

      // Motor Type filter
      if (selectedMotorType !== 'All' && item.technicalSpecs.motorType !== selectedMotorType) {
        return false;
      }

      // Weight filter
      if (item.technicalSpecs.weightKg > 0 && item.technicalSpecs.weightKg > maxWeight) {
        return false;
      }

      // Torque filter
      if (item.technicalSpecs.torqueNm > 0 && item.technicalSpecs.torqueNm < minTorque) {
        return false;
      }

      // Cycle to Work
      if (cycleToWorkOnly && !item.technicalSpecs.cycleToWorkEligible) {
        return false;
      }

      // Waterproof rating
      if (waterproofOnly && !['IPX6', 'IPX7', 'IP65', 'IP67'].includes(item.technicalSpecs.waterResistanceRating)) {
        return false;
      }

      return true;
    });

    // Sorting
    return list.sort((a, b) => {
      if (sortBy === 'price-low') return a.priceGBP - b.priceGBP;
      if (sortBy === 'price-high') return b.priceGBP - a.priceGBP;
      if (sortBy === 'power') return b.technicalSpecs.motorPowerW - a.technicalSpecs.motorPowerW;
      if (sortBy === 'torque') return b.technicalSpecs.torqueNm - a.technicalSpecs.torqueNm;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    products, 
    selectedCategory, 
    selectedBrand,
    sortBy,
    selectedCity, 
    searchQuery, 
    selectedMotorType, 
    maxWeight, 
    minTorque, 
    cycleToWorkOnly, 
    waterproofOnly
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in text-slate-800">
      {/* Category & Brand Filter Pills */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select
              aria-label="Sort products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 text-slate-800 text-xs rounded-lg px-3 py-1.5 shadow-2xs focus:outline-none focus:border-blue-600 cursor-pointer font-medium"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="power">Motor Power (kW)</option>
              <option value="torque">Torque (Nm)</option>
              <option value="rating">Top Rated</option>
            </select>

            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs text-slate-700 shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Brand Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 shrink-0">Brand:</span>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedBrand === brand
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Main Layout: Sidebar Filters + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Faceted Sidebar Filters */}
        <div className={`space-y-6 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-5 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                VoltTrail UK Filters
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedMotorType('All');
                  setMaxWeight(130);
                  setMinTorque(0);
                  setCycleToWorkOnly(false);
                  setWaterproofOnly(false);
                }}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Weather Proofing Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={waterproofOnly}
                  onChange={(e) => setWaterproofOnly(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span className="flex items-center gap-1.5 font-medium">
                  <CloudRain className="w-3.5 h-3.5 text-sky-600" />
                  Heavy Weatherproof (IP65 / IP67 / IPX6)
                </span>
              </label>
            </div>

            {/* Cycle to Work Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                <input
                  type="checkbox"
                  checked={cycleToWorkOnly}
                  onChange={(e) => setCycleToWorkOnly(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span className="font-semibold text-emerald-700">Cycle to Work Eligible (Save 47%)</span>
              </label>
            </div>

            {/* Motor Location Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-700">
                Motor Architecture
              </label>
              <select
                aria-label="Filter by Motor Architecture"
                value={selectedMotorType}
                onChange={(e) => setSelectedMotorType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-blue-600 focus:bg-white"
              >
                <option value="All">All Motor Types</option>
                <option value="Mid-Drive Motor">Mid-Drive PMSM & Gearbox</option>
                <option value="Direct Drive Motor">Direct Drive & Brushless</option>
                <option value="Hub Motor">Hub Motor</option>
              </select>
            </div>

            {/* Minimum Torque (Nm) Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium">Minimum Wheel Torque</span>
                <span className="font-bold text-blue-600 font-mono">{minTorque > 0 ? `${minTorque} Nm` : 'Any'}</span>
              </div>
              <input
                aria-label="Minimum Wheel Torque"
                type="range"
                min="0"
                max="1000"
                step="50"
                value={minTorque}
                onChange={(e) => setMinTorque(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>0 Nm</span>
                <span>250 Nm (Sur-Ron)</span>
                <span>500 Nm (MX5)</span>
                <span>900+ Nm (Alpha)</span>
              </div>
            </div>

            {/* Max Weight (kg) Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium">Maximum Weight</span>
                <span className="font-bold text-blue-600 font-mono">{maxWeight} kg</span>
              </div>
              <input
                aria-label="Maximum Weight"
                type="range"
                min="20"
                max="130"
                step="5"
                value={maxWeight}
                onChange={(e) => setMaxWeight(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>20kg (MTB)</span>
                <span>50kg (Light Bee)</span>
                <span>120kg (Motocross)</span>
              </div>
            </div>

            {/* UK Authorized Dealer Trust Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-[11px] text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Authorized UK Distributor</span>
              </div>
              <p>Official UK stock with 2-year warranty, genuine manufacturer parts supply, and nationwide tracked delivery.</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-600">
              Showing <strong className="text-slate-900 font-bold">{filteredProducts.length}</strong> bikes & products
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Free Tracked UK Delivery • Official UK Warranties
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
              <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 font-heading">No products match your filter criteria</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Try widening your weight or torque filters to browse our full lineup.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
                  ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
                  : `${product.technicalSpecs.motorPowerW}W`;

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200/90 hover:border-blue-400/80 rounded-xl overflow-hidden transition-all flex flex-col group shadow-xs hover:shadow-md"
                  >
                    {/* Product Image Box */}
                    <div className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onOpenProductDetail(product)}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                        <span className="bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                          <ShieldCheck className="w-3 h-3 text-blue-600" />
                          {product.eapcCompliance.ukRoadLegalStatus.includes('Road-Legal') ? 'Road-Legal' : product.eapcCompliance.ukRoadLegalStatus.includes('100%') ? 'EAPC 250W' : 'Off-Road MX'}
                        </span>
                        <span className="bg-white/95 backdrop-blur-md border border-sky-200 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-2xs">
                          <CloudRain className="w-3 h-3 text-sky-600" />
                          {product.technicalSpecs.waterResistanceRating}
                        </span>
                      </div>

                      {/* Bottom Key Spec Badges */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5">
                        {product.technicalSpecs.torqueNm > 0 && (
                          <span className="bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] px-2 py-0.5 rounded font-mono font-semibold shadow-2xs">
                            ⚡ {product.technicalSpecs.torqueNm} Nm
                          </span>
                        )}
                        {product.technicalSpecs.weightKg > 0 && (
                          <span className="bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] px-2 py-0.5 rounded font-mono font-semibold shadow-2xs">
                            ⚖️ {product.technicalSpecs.weightKg} kg
                          </span>
                        )}
                        {product.technicalSpecs.maxRangeMiles > 0 && (
                          <span className="bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 text-[10px] px-2 py-0.5 rounded font-mono font-semibold shadow-2xs">
                            🔋 {product.technicalSpecs.maxRangeMiles} mi
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                          <span className="text-blue-600 font-bold">{product.category}</span>
                          <span className="font-semibold text-amber-600">★ {product.rating} ({product.reviewCount})</span>
                        </div>

                        <h3 
                          onClick={() => onOpenProductDetail(product)}
                          className="font-bold text-slate-900 text-sm group-hover:text-blue-600 cursor-pointer transition-colors line-clamp-1 font-heading"
                        >
                          {product.name}
                        </h3>

                        <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                          {product.tagline}
                        </p>
                      </div>

                      {/* Pricing & Installments */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-extrabold text-slate-900 font-heading">
                              £{product.priceGBP.toLocaleString()}
                            </span>
                            {product.rrpGBP > product.priceGBP && (
                              <span className="text-xs text-slate-400 line-through">
                                £{product.rrpGBP.toLocaleString()}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-500 font-medium">UK VAT Incl.</span>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-between text-[11px]">
                          <span className="text-slate-600 font-medium">4x Installments:</span>
                          <span className="text-blue-700 font-bold">
                            £{(product.priceGBP / 4).toFixed(2)}/mo
                          </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <button
                            onClick={() => onOpenProductDetail(product)}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2 px-2.5 rounded-lg transition-colors text-center cursor-pointer shadow-2xs"
                          >
                            View Specs
                          </button>
                          <button
                            onClick={() => onAddToCart(product)}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-2.5 rounded-lg transition-colors text-center flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                          >
                            Add to Basket
                          </button>
                        </div>

                        {/* Schema Inspector Link */}
                        <button
                          onClick={() => onOpenSchemaModal(product)}
                          className="w-full text-center text-[10px] text-slate-500 hover:text-blue-600 flex items-center justify-center gap-1 pt-1 font-medium cursor-pointer"
                        >
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>View Live Product JSON-LD Schema</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
