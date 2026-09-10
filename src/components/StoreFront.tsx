import React, { useState, useMemo, useEffect } from 'react';
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
  MapPin,
  ShoppingBag,
  Folder,
  FolderOpen,
  Battery,
  Tag,
  ChevronRight,
  X,
  Grid
} from 'lucide-react';
import { 
  STORE_FOLDERS, 
  StoreFolder, 
  getProductsForFolder,
  BATTERY_PRODUCTS,
  KIDS_PRODUCTS,
  ALL_QUAD_PRODUCTS,
  ADULT_UTILITY_QUAD_PRODUCTS,
  KIDS_QUAD_PRODUCTS
} from '../data/products/index';

interface StoreFrontProps {
  products: Product[];
  selectedCity: string;
  searchQuery: string;
  onOpenProductDetail: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenSchemaModal: (product: Product) => void;
  onNavigateToView: (view: any) => void;
  initialCategory?: string;
  initialBrand?: string;
  initialFolderId?: string;
}

export const StoreFront: React.FC<StoreFrontProps> = ({
  products,
  selectedCity,
  searchQuery,
  onOpenProductDetail,
  onAddToCart,
  onOpenSchemaModal,
  onNavigateToView,
  initialCategory,
  initialBrand,
  initialFolderId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrand || 'All');
  const [activeFolderId, setActiveFolderId] = useState<string>(initialFolderId || 'all');
  const [folderViewTab, setFolderViewTab] = useState<'all' | 'brands' | 'battery' | 'kids' | 'quads'>('all');
  const [showFolderDirectory, setShowFolderDirectory] = useState<boolean>(false);

  // Handler for selecting folder that safely resets conflicting filters
  const handleSelectFolder = (folderId: string) => {
    setActiveFolderId(folderId);
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedMotorType('All');
    setCycleToWorkOnly(false);
    setWaterproofOnly(false);
    setMinTorque(0);
    setMaxWeight(150);
  };

  const handleResetAllFilters = () => {
    setActiveFolderId('all');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setSelectedMotorType('All');
    setCycleToWorkOnly(false);
    setWaterproofOnly(false);
    setMinTorque(0);
    setMaxWeight(150);
  };

  // Sync props when updated from Header navigation
  useEffect(() => {
    if (initialFolderId) {
      setActiveFolderId(initialFolderId);
    }
  }, [initialFolderId]);

  useEffect(() => {
    if (initialCategory !== undefined) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (initialBrand !== undefined) {
      setSelectedBrand(initialBrand);
    }
  }, [initialBrand]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedMotorType, setSelectedMotorType] = useState<string>('All');
  const [maxWeight, setMaxWeight] = useState<number>(150);
  const [minTorque, setMinTorque] = useState<number>(0);
  const [cycleToWorkOnly, setCycleToWorkOnly] = useState<boolean>(false);
  const [waterproofOnly, setWaterproofOnly] = useState<boolean>(false);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  const categories = [
    'All',
    'Electric Dirt Bikes',
    'Kids & Youth Electric Dirt Bikes',
    'Road-Legal Electric Dirt Bikes',
    'Electric Quads & UTVs',
    'Batteries & Chargers',
    'Helmets & Protection',
    'Riding Gear & Clothing',
    'Parts & Upgrades',
    'Tyres & Wheels',
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
    'Eco Rider',
    'GasGas',
    'STACYC',
    'Zero'
  ];

  // Base products provided by currently active folder
  const baseFolderProducts = useMemo(() => {
    return getProductsForFolder(activeFolderId, products);
  }, [activeFolderId, products]);

  const currentFolderMeta = useMemo(() => {
    return STORE_FOLDERS.find((f) => f.id === activeFolderId) || null;
  }, [activeFolderId]);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    const list = baseFolderProducts.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All') {
        const cat = selectedCategory;
        const matchesCat =
          item.category === cat ||
          (cat === 'Electric Dirt Bikes' && item.type === 'bike' && (!item.tags || !item.tags.includes('kids'))) ||
          (cat === 'Kids & Youth Electric Dirt Bikes' && item.tags && item.tags.includes('kids')) ||
          (cat === 'Road-Legal Electric Dirt Bikes' && item.tags && item.tags.includes('road')) ||
          (cat === 'Electric Quads & UTVs' && (item.type === 'quad' || (item.tags && item.tags.includes('quad')))) ||
          (cat === 'Batteries & Chargers' && (item.tags && (item.tags.includes('batteries') || item.tags.includes('chargers')))) ||
          (cat === 'Helmets & Protection' && (item.tags && (item.tags.includes('protection') || item.tags.includes('helmets')))) ||
          (cat === 'Riding Gear & Clothing' && (item.tags && (item.tags.includes('gear') || item.tags.includes('clothing')))) ||
          (cat === 'Parts & Upgrades' && (item.tags && item.tags.includes('parts-upgrades'))) ||
          (cat === 'Tyres & Wheels' && (item.tags && item.tags.includes('tyres'))) ||
          (cat === 'Accessories & Gear' && item.type === 'part');
        if (!matchesCat) return false;
      }

      // Brand filter
      if (selectedBrand !== 'All') {
        const brandLower = selectedBrand.toLowerCase().trim();
        const itemBrandLower = (item.brand || '').toLowerCase().trim();
        const itemNameLower = item.name.toLowerCase();
        const brandTag = brandLower.replace(/[^a-z0-9]/g, '');
        const matchesBrand =
          itemBrandLower === brandLower ||
          itemBrandLower.includes(brandLower) ||
          brandLower.includes(itemBrandLower) ||
          itemNameLower.includes(brandLower) ||
          (item.tags && item.tags.some((t) => t.toLowerCase() === brandTag || t.toLowerCase() === brandLower));
        if (!matchesBrand) return false;
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
        const matchesBrand = (item.brand || '').toLowerCase().includes(q);
        if (!matchesName && !matchesTagline && !matchesCategory && !matchesDesc && !matchesBrand) {
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
    baseFolderProducts, 
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
      {/* Respective Folders Navigation Hub */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-100 pb-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Folder className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-extrabold text-slate-950 font-heading flex items-center gap-2">
                <span>Shop Directory Folders</span>
                <span className="text-[10px] font-mono text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-md hidden sm:inline">
                  Separated: Brands • Battery • Kids
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                Browse segregated collections categorized into individual Brand Folders, Battery Hardware, and Kids & Youth models.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowFolderDirectory(!showFolderDirectory)}
            className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showFolderDirectory ? 'Hide Folders Overview' : 'View All Folders Overview'}</span>
          </button>
        </div>

        {/* Primary Respective Folders Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => handleSelectFolder('all')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'all'
                ? 'bg-slate-950 text-white shadow-sm ring-1 ring-slate-800'
                : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>All Products Folder</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">{products.length}</span>
          </button>

          {/* Adult Bikes Folder */}
          <button
            onClick={() => handleSelectFolder('adult-bikes')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'adult-bikes'
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-500/30'
                : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-200/80'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-blue-500" />
            <span>📁 Adult Dirt Bikes</span>
            <span className="text-[10px] bg-blue-700/20 text-blue-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('adult-bikes', products).length}
            </span>
          </button>

          {/* Electric Quads Folder */}
          <button
            onClick={() => handleSelectFolder('quads-folder')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'quads-folder' || activeFolderId === 'quads-adult' || activeFolderId === 'quads-kids'
                ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-500/30'
                : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300/80'
            }`}
          >
            <span className="text-sm">🚜</span>
            <span>📁 Electric Quads</span>
            <span className="text-[10px] bg-amber-700/20 text-amber-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('quads-folder', products).length}
            </span>
          </button>

          {/* Road Legal Folder */}
          <button
            onClick={() => handleSelectFolder('road-legal')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'road-legal'
                ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30'
                : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200/80'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>📁 Road-Legal Bikes</span>
            <span className="text-[10px] bg-emerald-700/20 text-emerald-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('road-legal', products).length}
            </span>
          </button>

          {/* Kids Folder */}
          <button
            onClick={() => handleSelectFolder('kids-folder')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'kids-folder' || activeFolderId === 'kids-bikes'
                ? 'bg-orange-600 text-white shadow-sm ring-2 ring-orange-500/30'
                : 'bg-orange-50 text-orange-900 hover:bg-orange-100 border border-orange-200/80'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>📁 Kids & Youth Folder</span>
            <span className="text-[10px] bg-orange-700/20 text-orange-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('kids-folder', products).length}
            </span>
          </button>

          {/* Battery Folder */}
          <button
            onClick={() => handleSelectFolder('battery-folder')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'battery-folder'
                ? 'bg-teal-600 text-white shadow-sm ring-2 ring-teal-500/30'
                : 'bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200/80'
            }`}
          >
            <Battery className="w-3.5 h-3.5 text-teal-600" />
            <span>📁 Batteries & Chargers</span>
            <span className="text-[10px] bg-teal-700/20 text-teal-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('battery-folder', products).length}
            </span>
          </button>

          {/* Parts Folder */}
          <button
            onClick={() => handleSelectFolder('parts-folder')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeFolderId === 'parts-folder'
                ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-500/30'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200/80'
            }`}
          >
            <Tag className="w-3.5 h-3.5 text-purple-600" />
            <span>📁 Parts & Accessories</span>
            <span className="text-[10px] bg-purple-700/20 text-purple-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
              {getProductsForFolder('parts-folder', products).length}
            </span>
          </button>
        </div>

        {/* Dedicated Quads Sub-Types Quick Filter (volttrail.org Spec) */}
        {(activeFolderId.startsWith('quads') || selectedCategory === 'Electric Quads & UTVs') && (
          <div className="mt-3 p-3 bg-amber-500/10 border border-amber-400/30 rounded-xl flex flex-wrap items-center justify-between gap-2.5 animate-in fade-in">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-extrabold uppercase tracking-wider text-amber-900 text-[10px] flex items-center gap-1">
                ⚡ Quads Sub-Types:
              </span>
              <button
                onClick={() => {
                  setActiveFolderId('quads-folder');
                  setSelectedBrand('All');
                  setSelectedCategory('All');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFolderId === 'quads-folder' && selectedBrand === 'All'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-amber-100/50'
                }`}
              >
                All Quads ({getProductsForFolder('quads-folder', products).length})
              </button>
              <button
                onClick={() => {
                  setActiveFolderId('quads-adult');
                  setSelectedBrand('All');
                  setSelectedCategory('All');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFolderId === 'quads-adult'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-amber-100/50'
                }`}
              >
                Adult & Utility Quads ({getProductsForFolder('quads-adult', products).length})
              </button>
              <button
                onClick={() => {
                  setActiveFolderId('quads-kids');
                  setSelectedBrand('All');
                  setSelectedCategory('All');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFolderId === 'quads-kids'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-amber-100/50'
                }`}
              >
                Kids Electric Quads ({getProductsForFolder('quads-kids', products).length})
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-[10px] text-amber-800 font-bold uppercase tracking-wider mr-1">Quad Brands:</span>
              {[
                { brand: 'Segway', label: 'Segway' },
                { brand: 'Eco Rider', label: 'Eco Rider' },
                { brand: 'FunBikes', label: 'FunBikes' },
                { brand: 'Razor', label: 'Razor' },
              ].map((qb) => {
                const quadBrandCount = getProductsForFolder('quads-folder', products).filter((p) => (p.brand || '').toLowerCase() === qb.brand.toLowerCase() || p.name.toLowerCase().includes(qb.brand.toLowerCase())).length;
                return (
                  <button
                    key={qb.brand}
                    onClick={() => {
                      setSelectedBrand(qb.brand);
                      if (!activeFolderId.startsWith('quads')) {
                        setActiveFolderId('quads-folder');
                      }
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                      selectedBrand === qb.brand
                        ? 'bg-slate-900 text-amber-300'
                        : 'bg-white/80 text-slate-700 hover:bg-white'
                    }`}
                  >
                    {qb.label} ({quadBrandCount})
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Brand Folders Strip */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mr-1 shrink-0 font-mono flex items-center gap-1">
            <Tag className="w-3 h-3 text-blue-500" />
            Brand Folders:
          </span>
          {[
            { id: 'brand-surron', name: 'Sur-Ron' },
            { id: 'brand-talaria', name: 'Talaria' },
            { id: 'brand-stark', name: 'Stark Varg' },
            { id: 'brand-eridepro', name: 'E-Ride Pro' },
            { id: 'brand-rfn', name: 'RFN' },
            { id: 'brand-ktm', name: 'KTM' },
            { id: 'brand-revvi', name: 'Revvi' },
            { id: 'brand-funbikes', name: 'FunBikes' },
            { id: 'brand-razor', name: 'Razor' },
            { id: 'brand-segway', name: 'Segway' },
            { id: 'brand-ecorider', name: 'Eco Rider' },
            { id: 'brand-gasgas', name: 'GasGas' },
            { id: 'brand-stacyc', name: 'STACYC' },
            { id: 'brand-zero', name: 'Zero' },
          ].map((b) => {
            const isSelected = activeFolderId === b.id;
            const brandCount = getProductsForFolder(b.id, products).length;
            if (brandCount === 0) return null;
            return (
              <button
                key={b.id}
                onClick={() => {
                  handleSelectFolder(isSelected ? 'all' : b.id);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-2xs font-bold'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                <span>{b.name}</span>
                <span className={`text-[10px] px-1 rounded-full font-mono ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {brandCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable Folder Directory Grid */}
      {showFolderDirectory && (
        <div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-5 mb-8 space-y-4 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-600" />
                Respective Folders Directory (14 Dedicated Collections)
              </h3>
              <p className="text-[11px] text-slate-500">
                Click on any folder below to open its segregated models and hardware immediately.
              </p>
            </div>
            <button
              onClick={() => setShowFolderDirectory(false)}
              className="text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
            >
              Close Overview ✕
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {STORE_FOLDERS.map((folder) => {
              const isSelected = activeFolderId === folder.id;
              return (
                <div
                  key={folder.id}
                  onClick={() => {
                    handleSelectFolder(folder.id);
                    setShowFolderDirectory(false);
                  }}
                  className={`bg-white rounded-xl p-4 border transition-all cursor-pointer hover:shadow-md hover:-translate-y-0.5 group ${
                    isSelected
                      ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center text-slate-700 group-hover:text-blue-600 transition-colors">
                        {folder.categoryType === 'battery' ? (
                          <Battery className="w-4 h-4 text-emerald-600" />
                        ) : folder.categoryType === 'kids' ? (
                          <Sparkles className="w-4 h-4 text-amber-600" />
                        ) : folder.categoryType === 'quads' ? (
                          <span className="text-base leading-none">🚜</span>
                        ) : (
                          <Folder className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-xs font-heading">
                          {folder.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {folder.tagline}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {folder.productCount}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {folder.description}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-bold text-blue-600 group-hover:text-blue-700 pt-2 border-t border-slate-100">
                    <span>{isSelected ? 'Currently Selected' : 'Open Folder'}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Folder Header Banner */}
      {currentFolderMeta && activeFolderId !== 'all' && (
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800 animate-fade-in">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5">
                <FolderOpen className="w-3 h-3 text-blue-400" />
                Folder: {currentFolderMeta.badge}
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-300 font-medium">{currentFolderMeta.tagline}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {currentFolderMeta.name}
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              {currentFolderMeta.description}
            </p>
          </div>

          <button
            onClick={handleResetAllFilters}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border border-white/15"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset to All Folders</span>
          </button>
        </div>
      )}

      {/* Category & Brand Filter Pills */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/90 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <select
              aria-label="Sort products"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-slate-200 text-slate-900 text-xs rounded-xl px-3.5 py-2 shadow-2xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 cursor-pointer font-semibold"
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
              className="lg:hidden flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-2xs cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Brand Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 shrink-0 font-mono">Brand:</span>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedBrand === brand
                  ? 'bg-slate-950 text-white shadow-2xs ring-1 ring-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200'
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
          <div className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-5 space-y-6 sticky top-36">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-extrabold text-slate-950 text-xs uppercase tracking-wider flex items-center gap-2 font-heading">
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span>Filters & Performance</span>
              </h3>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedBrand('All');
                  setSelectedMotorType('All');
                  setMaxWeight(130);
                  setMinTorque(0);
                  setCycleToWorkOnly(false);
                  setWaterproofOnly(false);
                }}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Weather Proofing Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 hover:text-slate-950">
                <input
                  type="checkbox"
                  checked={waterproofOnly}
                  onChange={(e) => setWaterproofOnly(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span className="flex items-center gap-1.5 font-semibold">
                  <CloudRain className="w-3.5 h-3.5 text-blue-600" />
                  <span>IP65 / IP67 Weatherproof</span>
                </span>
              </label>
            </div>

            {/* Cycle to Work Filter */}
            <div className="space-y-2">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 hover:text-slate-950">
                <input
                  type="checkbox"
                  checked={cycleToWorkOnly}
                  onChange={(e) => setCycleToWorkOnly(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span className="font-bold text-emerald-700">Cycle to Work (Save up to 47%)</span>
              </label>
            </div>

            {/* Motor Architecture Filter */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800">
                Motor Architecture
              </label>
              <select
                aria-label="Filter by Motor Architecture"
                value={selectedMotorType}
                onChange={(e) => setSelectedMotorType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-blue-600 focus:bg-white font-medium"
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
                <span className="text-slate-800 font-bold">Min Torque</span>
                <span className="font-extrabold text-blue-600 font-mono">{minTorque > 0 ? `${minTorque} Nm` : 'Any'}</span>
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
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0 Nm</span>
                <span>250 Nm</span>
                <span>500 Nm</span>
                <span>900+ Nm</span>
              </div>
            </div>

            {/* Max Weight (kg) Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-800 font-bold">Max Weight</span>
                <span className="font-extrabold text-blue-600 font-mono">{maxWeight} kg</span>
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
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>20kg</span>
                <span>50kg</span>
                <span>120kg</span>
              </div>
            </div>

            {/* UK Authorized Dealer Trust Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Authorized UK Distributor</span>
              </div>
              <p>Official UK stock with 2-year manufacturer warranty, genuine spares, and 24-48h tracked courier delivery.</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-slate-600">
              Showing <strong className="text-slate-950 font-extrabold">{filteredProducts.length}</strong> electric models
            </span>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md hidden sm:inline">
              ✓ Free Tracked UK Delivery • 2-Year Warranty
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-heading">No products match your current filters</h3>
              <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto leading-relaxed">
                {activeFolderId !== 'all' 
                  ? `There are ${baseFolderProducts.length} items in the "${currentFolderMeta?.name || 'current'}" folder, but none matched the active brand/category or spec filters.`
                  : 'Try widening your category, brand, weight, or torque filters to view our full electric lineup.'
                }
              </p>
              <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
                {activeFolderId !== 'all' && (
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedBrand('All');
                      setSelectedMotorType('All');
                      setMinTorque(0);
                      setMaxWeight(150);
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    Clear Sub-Filters in this Folder ({baseFolderProducts.length} models)
                  </button>
                )}
                <button
                  onClick={handleResetAllFilters}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  View All Products ({products.length})
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const powerDisplay = product.technicalSpecs.motorPowerW >= 1000 
                  ? `${(product.technicalSpecs.motorPowerW / 1000).toFixed(product.technicalSpecs.motorPowerW % 1000 === 0 ? 0 : 1)}kW` 
                  : `${product.technicalSpecs.motorPowerW}W`;

                const monthlyEstimate = Math.round(product.priceGBP / 12);

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200/90 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col group shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Product Image Box */}
                    <a
                      href={`/shop?product=${product.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenProductDetail(product);
                      }}
                      className="relative aspect-4/3 bg-slate-950 overflow-hidden cursor-pointer block"
                      aria-label={`View full technical specifications for ${product.name}`}
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {/* Top Badges */}
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

                      {/* Bottom Key Spec Badges */}
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
                    </a>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                          <span className="text-blue-600 font-bold uppercase tracking-wider font-mono text-[10px]">{product.category}</span>
                          <span className="font-bold text-amber-500 flex items-center gap-1">★ {product.rating} <span className="text-slate-400 font-normal">({product.reviewCount})</span></span>
                        </div>

                        <a 
                          href={`/shop?product=${product.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenProductDetail(product);
                          }}
                          className="font-extrabold text-slate-950 text-base group-hover:text-blue-600 transition-colors line-clamp-1 font-heading block"
                        >
                          {product.name}
                        </a>

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
                              <span className="text-xs text-slate-400 line-through">
                                £{product.rrpGBP.toLocaleString()}
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

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-2 pt-1">
                          <a
                            href={`/shop?product=${product.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              onOpenProductDetail(product);
                            }}
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold py-2.5 px-2.5 rounded-xl transition-colors text-center cursor-pointer active:scale-95 block"
                          >
                            Tech Specs
                          </a>
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
      </div>
    </div>
  );
};
