import { Product } from '../../types';
import { VOLTTRAIL_ALL_PRODUCTS } from './volttrailProducts';

// Derived product arrays matching volttrail.org
export const ALL_QUAD_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.type === 'quad' || (p.tags && p.tags.includes('quad'))
);

export const ADULT_UTILITY_QUAD_PRODUCTS: Product[] = ALL_QUAD_PRODUCTS.filter(
  (p) => p.tags && (p.tags.includes('adult') || p.tags.includes('utility'))
);

export const KIDS_QUAD_PRODUCTS: Product[] = ALL_QUAD_PRODUCTS.filter(
  (p) => p.tags && p.tags.includes('kids')
);

export const BATTERY_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => (p.tags && (p.tags.includes('batteries') || p.tags.includes('chargers'))) || p.category === 'Batteries & Chargers'
);

export const KIDS_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.tags && p.tags.includes('kids')
);

export const ADULT_BIKE_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.type === 'bike' && (!p.tags || !p.tags.includes('kids'))
);

export const ROAD_LEGAL_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.tags && p.tags.includes('road')
);

export const PARTS_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.type === 'part'
);

export const SURRON_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'sur-ron' || (p.tags && p.tags.includes('surron'))
);

export const TALARIA_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'talaria' || (p.tags && p.tags.includes('talaria'))
);

export const STARK_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'stark varg' || (p.tags && p.tags.includes('stark'))
);

export const ERIDEPRO_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'e ride pro' || (p.tags && p.tags.includes('eride'))
);

export const RFN_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'rfn' || (p.tags && p.tags.includes('rfn'))
);

export const KTM_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'ktm' || (p.tags && p.tags.includes('ktm'))
);

export const REVVI_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'revvi' || (p.tags && p.tags.includes('revvi'))
);

export const FUNBIKES_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'funbikes' || (p.tags && p.tags.includes('funbikes'))
);

export const RAZOR_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'razor' || (p.tags && p.tags.includes('razor'))
);

export const SEGWAY_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'segway' || (p.tags && p.tags.includes('segway'))
);

export const ECORIDER_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'eco rider' || (p.tags && p.tags.includes('ecorider'))
);

export const ZERO_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'zero' || (p.tags && p.tags.includes('zero'))
);

export const GASGAS_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'gasgas' || (p.tags && p.tags.includes('gasgas'))
);

export const STACYC_PRODUCTS: Product[] = VOLTTRAIL_ALL_PRODUCTS.filter(
  (p) => p.brand.toLowerCase() === 'stacyc' || (p.tags && p.tags.includes('stacyc'))
);

// StoreFolder metadata interface
export interface StoreFolder {
  id: string;
  name: string;
  categoryType: 'all' | 'brand' | 'battery' | 'kids' | 'quads' | 'bikes' | 'parts';
  folderColor: string;
  badge: string;
  tagline: string;
  description: string;
  productCount: number;
  featuredProductIds: string[];
}

export const STORE_FOLDERS: StoreFolder[] = [
  {
    id: 'all',
    name: 'All Inventory',
    categoryType: 'all',
    folderColor: 'from-blue-600 to-indigo-700',
    badge: 'Complete Catalog',
    tagline: '155 Products Exact',
    description: 'Explore the full showroom of electric dirt bikes, road-legal bikes, youth bikes, quads, and official OEM parts & accessories.',
    productCount: VOLTTRAIL_ALL_PRODUCTS.length,
    featuredProductIds: ['ultra-bee', 'talaria-sting-r', 'stark-mx', 'segway-snarler']
  },
  {
    id: 'adult-bikes',
    name: 'Adult Electric Dirt Bikes',
    categoryType: 'bikes',
    folderColor: 'from-blue-700 to-sky-800',
    badge: 'High-Power Off-Road',
    tagline: '29 Pro Machines',
    description: 'Full-size high-voltage electric dirt bikes pushing from 6kW to 80HP across Sur-Ron, Talaria, Stark Varg, and E Ride Pro.',
    productCount: ADULT_BIKE_PRODUCTS.length,
    featuredProductIds: ['ultra-bee', 'lbx', 'talaria-sting-r', 'stark-mx']
  },
  {
    id: 'road-legal',
    name: 'Road-Legal Electric Dirt Bikes',
    categoryType: 'bikes',
    folderColor: 'from-emerald-700 to-teal-800',
    badge: 'L1e Road Approved',
    tagline: '8 DVLA Moped Spec',
    description: '100% UK road-legal electric dirt bikes with mirrors, indicators, lights, and registration readiness for daily commuting and trail riding.',
    productCount: ROAD_LEGAL_PRODUCTS.length,
    featuredProductIds: ['lbx-road', 'talaria-sting-road', 'stark-ex', 'rfn-ares-rs']
  },
  {
    id: 'quads-folder',
    name: 'Electric Quads Folder',
    categoryType: 'quads',
    folderColor: 'from-amber-600 to-yellow-700',
    badge: 'Adult & Youth ATVs',
    tagline: 'All Electric Quads',
    description: 'Heavy-duty 4-wheel electric quad bikes for adults, utility estate work, and junior riders across Segway, Eco Rider, FunBikes, and Razor.',
    productCount: ALL_QUAD_PRODUCTS.length,
    featuredProductIds: ['segway-snarler', 'ecorider-explorer-gt', 'funbikes-quad-1000', 'razor-quad']
  },
  {
    id: 'quads-adult',
    name: 'Adult & Utility Quads',
    categoryType: 'quads',
    folderColor: 'from-slate-800 to-amber-900',
    badge: 'Commercial & Estate ATVs',
    tagline: 'Adult Workhorses',
    description: 'Heavy-duty shaft-drive adult quad bikes with winches, tow-balls, and massive torque for farm, estate, and extreme off-road use.',
    productCount: ADULT_UTILITY_QUAD_PRODUCTS.length,
    featuredProductIds: ['segway-snarler', 'ecorider-explorer-gt', 'ecorider-explorer', 'ecorider-shredder']
  },
  {
    id: 'quads-kids',
    name: 'Kids Electric Quads',
    categoryType: 'quads',
    folderColor: 'from-orange-500 to-amber-600',
    badge: 'Ages 6 to Teens',
    tagline: 'Youth Electric Quads',
    description: 'Safe, low-maintenance 36V and 48V electric quad bikes equipped with key parental speed limiters, disc brakes, and enclosed footwells.',
    productCount: KIDS_QUAD_PRODUCTS.length,
    featuredProductIds: ['segway-kids-quad', 'funbikes-quad-500', 'funbikes-quad-1000', 'razor-quad']
  },
  {
    id: 'kids-bikes',
    name: 'Kids Electric Dirt Bikes',
    categoryType: 'kids',
    folderColor: 'from-amber-500 to-orange-600',
    badge: 'Ages 3 to 16',
    tagline: '24 Youth Dirt Bikes',
    description: 'Purpose-built junior electric motocross and balance bikes with adjustable speed controls from KTM, Revvi, FunBikes, Razor, and STACYC.',
    productCount: KIDS_PRODUCTS.filter(p => p.type === 'bike').length,
    featuredProductIds: ['ktm-sxe5', 'revvi-16', 'funbikes-1400', 'stacyc-16']
  },
  {
    id: 'battery-folder',
    name: 'Batteries & Chargers',
    categoryType: 'battery',
    folderColor: 'from-emerald-600 to-teal-700',
    badge: 'Official OEM & Upgrades',
    tagline: '49 Batteries & Fast Chargers',
    description: 'Genuine factory replacement lithium-ion batteries and upgrade packs (60V/72V) for Sur-Ron, Talaria, Stark Varg, and E Ride Pro.',
    productCount: BATTERY_PRODUCTS.length,
    featuredProductIds: ['bat-surron-lightbee', 'chg-surron-lightbee', 'bat-talaria-stingr', 'bat-stark-varg']
  },
  {
    id: 'parts-folder',
    name: 'Parts & Accessories',
    categoryType: 'parts',
    folderColor: 'from-indigo-600 to-purple-700',
    badge: 'Genuine Gear & Spares',
    tagline: '93 Parts & Accessories',
    description: 'Performance sprockets, brake pads, tyres, protective gear, helmets, and replacement parts to keep your electric ride in peak condition.',
    productCount: PARTS_PRODUCTS.length,
    featuredProductIds: ['part-brake-pads', 'part-sprocket', 'gear-helmet', 'part-tyre-shinko']
  },
  {
    id: 'brand-surron',
    name: 'Sur-Ron',
    categoryType: 'brand',
    folderColor: 'from-slate-800 to-slate-950',
    badge: 'Official UK Dealer',
    tagline: 'Sur-Ron Bikes & Spares',
    description: 'World-renowned electric enduro icons including the Light Bee X, Ultra Bee MX, Storm Bee, Hyper Bee, and genuine OEM parts.',
    productCount: SURRON_PRODUCTS.length,
    featuredProductIds: ['ultra-bee', 'lbx', 'storm-bee', 'hyper-bee']
  },
  {
    id: 'brand-talaria',
    name: 'Talaria',
    categoryType: 'brand',
    folderColor: 'from-red-600 to-rose-800',
    badge: 'Direct Gearbox Tech',
    tagline: 'Talaria Bikes & Hardware',
    description: 'High-torque enclosed gearbox machines including the benchmark Sting R MX4, 72V Sting MX5 Pro, lightweight X3, and Komodo TL6000.',
    productCount: TALARIA_PRODUCTS.length,
    featuredProductIds: ['talaria-sting-r', 'talaria-mx5', 'talaria-x3', 'talaria-komodo']
  },
  {
    id: 'brand-stark',
    name: 'Stark Future (Stark Varg)',
    categoryType: 'brand',
    folderColor: 'from-zinc-800 to-black',
    badge: '80hp Pro Motocross',
    tagline: 'Varg Machines & Parts',
    description: 'The world’s most powerful electric motocross bike with 80hp, customizable engine maps, and magnesium honeycomb battery casing.',
    productCount: STARK_PRODUCTS.length,
    featuredProductIds: ['stark-mx', 'stark-ex', 'bat-stark-varg', 'stark-sm']
  },
  {
    id: 'brand-eridepro',
    name: 'E-Ride Pro',
    categoryType: 'brand',
    folderColor: 'from-cyan-600 to-blue-700',
    badge: '72V Hyper Powertrain',
    tagline: 'SS 2.0 & SR Series',
    description: 'Ultra-high-output 72V electric off-road bikes pushing up to 12kW peak power and 60mph top speed straight out of the crate.',
    productCount: ERIDEPRO_PRODUCTS.length,
    featuredProductIds: ['eride-ss', 'eride-s', 'eride-sr']
  },
  {
    id: 'brand-rfn',
    name: 'RFN (Ares & Warrior)',
    categoryType: 'brand',
    folderColor: 'from-orange-600 to-amber-700',
    badge: 'Modular Enduro Platform',
    tagline: 'Ares & Youth Models',
    description: 'Transformable off-road dirt bike architecture with quick-release trial and enduro seat modes, plus certified youth models.',
    productCount: RFN_PRODUCTS.length,
    featuredProductIds: ['rfn-ares-rally', 'rfn-ares-rally-pro', 'rfn-ares-rs', 'rfn-warrior-sxe5']
  },
  {
    id: 'brand-ktm',
    name: 'KTM Electric',
    categoryType: 'brand',
    folderColor: 'from-orange-500 to-amber-600',
    badge: 'Ready to Race',
    tagline: 'SX-E Competition Minis',
    description: 'Championship-grade youth electric competition dirt bikes: SX-E 5, SX-E 3, and SX-E 2 with WP XACT suspension and adjustable ergonomics.',
    productCount: KTM_PRODUCTS.length,
    featuredProductIds: ['ktm-sxe5', 'ktm-sxe3', 'ktm-sxe2', 'ktm-freeride-e']
  },
  {
    id: 'brand-revvi',
    name: 'Revvi',
    categoryType: 'brand',
    folderColor: 'from-emerald-500 to-teal-700',
    badge: 'First Ride Masters',
    tagline: 'Revvi Balance Bikes',
    description: 'The UK benchmark for balance and throttle control training for toddlers to juniors (12in, 16in, 16in Plus, 18in, and 20in).',
    productCount: REVVI_PRODUCTS.length,
    featuredProductIds: ['revvi-12', 'revvi-16', 'revvi-16-plus', 'revvi-18']
  },
  {
    id: 'brand-funbikes',
    name: 'FunBikes',
    categoryType: 'brand',
    folderColor: 'from-blue-600 to-indigo-800',
    badge: 'Affordable Youth Power',
    tagline: 'Bikes & Quads',
    description: 'Rugged, high-value junior electric dirt bikes from 350W to 1800W brushless, alongside heavy-duty 36V/48V youth electric ATVs.',
    productCount: FUNBIKES_PRODUCTS.length,
    featuredProductIds: ['funbikes-mx350', 'funbikes-1400', 'funbikes-1800', 'funbikes-quad-1000']
  },
  {
    id: 'brand-razor',
    name: 'Razor Dirt Rocket',
    categoryType: 'brand',
    folderColor: 'from-red-500 to-rose-700',
    badge: 'Classic Starter Thrills',
    tagline: 'Rockets & Quads',
    description: 'Accessible steel-frame electric dirt rockets (MX350, MX400, MX650) and rugged four-wheel Dirt Quad for garden and open field adventures.',
    productCount: RAZOR_PRODUCTS.length,
    featuredProductIds: ['razor-mx350', 'razor-mx400', 'razor-mx650', 'razor-quad']
  },
  {
    id: 'brand-segway',
    name: 'Segway Powersports',
    categoryType: 'brand',
    folderColor: 'from-slate-700 to-slate-900',
    badge: 'Smart All-Terrain',
    tagline: 'Snarler & Junior Quads',
    description: 'Next-generation smart electric quad bikes featuring telemetry connectivity, high ground clearance, and robust dual A-arm suspension.',
    productCount: SEGWAY_PRODUCTS.length,
    featuredProductIds: ['segway-snarler', 'segway-kids-quad', 'segway-xaber', 'segway-xyber']
  },
  {
    id: 'brand-ecorider',
    name: 'Eco Rider',
    categoryType: 'brand',
    folderColor: 'from-teal-600 to-cyan-700',
    badge: 'Agricultural & Sport ATVs',
    tagline: 'High-Torque Quads',
    description: 'Heavy-torque electric utility and sport quad bikes designed for estate management, farm runs, and off-road trail riding.',
    productCount: ECORIDER_PRODUCTS.length,
    featuredProductIds: ['ecorider-explorer-gt', 'ecorider-explorer', 'ecorider-shredder']
  },
  {
    id: 'brand-zero',
    name: 'Zero Motorcycles',
    categoryType: 'brand',
    folderColor: 'from-zinc-700 to-zinc-900',
    badge: 'California Electric',
    tagline: 'XB & XE Dual Sport',
    description: 'Full-size street and dual-sport electric machines with massive torque and highway-capable battery architecture.',
    productCount: ZERO_PRODUCTS.length,
    featuredProductIds: ['zero-xb', 'zero-xe']
  },
  {
    id: 'brand-gasgas',
    name: 'GasGas',
    categoryType: 'brand',
    folderColor: 'from-red-700 to-rose-900',
    badge: 'Spanish Motocross',
    tagline: 'MC-E Minis',
    description: 'Competition youth electric motocross bikes with premium WP suspension and quick-swap battery tech.',
    productCount: GASGAS_PRODUCTS.length,
    featuredProductIds: ['gasgas-mce2', 'gasgas-mce5']
  },
  {
    id: 'brand-stacyc',
    name: 'STACYC',
    categoryType: 'brand',
    folderColor: 'from-amber-600 to-orange-700',
    badge: 'Kids Stability Drive',
    tagline: '12e to 20eDRIVE',
    description: 'The premier electric balance bikes helping young riders transition safely into two-wheel confidence.',
    productCount: STACYC_PRODUCTS.length,
    featuredProductIds: ['stacyc-12', 'stacyc-16', 'stacyc-18', 'stacyc-20']
  }
];

// Helper to get products for a specific folder dynamically
export function getProductsForFolder(folderId: string, allProducts?: Product[]): Product[] {
  const source = allProducts && allProducts.length > 0 ? allProducts : VOLTTRAIL_ALL_PRODUCTS;

  switch (folderId) {
    case 'all':
      return source;
    case 'adult-bikes':
    case 'bikes-adult':
      return source.filter((p) => p.type === 'bike' && (!p.tags || !p.tags.includes('kids')));
    case 'kids-bikes':
      return source.filter((p) => p.type === 'bike' && p.tags && p.tags.includes('kids'));
    case 'kids-folder':
      return source.filter((p) => p.tags && p.tags.includes('kids'));
    case 'road-legal':
      return source.filter((p) => p.tags && p.tags.includes('road'));
    case 'quads-folder':
      return source.filter((p) => p.type === 'quad' || (p.tags && p.tags.includes('quad')) || p.category === 'Electric Quads & UTVs');
    case 'quads-adult':
      return source.filter((p) => (p.type === 'quad' || (p.tags && p.tags.includes('quad'))) && p.tags && (p.tags.includes('adult') || p.tags.includes('utility')));
    case 'quads-kids':
      return source.filter((p) => (p.type === 'quad' || (p.tags && p.tags.includes('quad'))) && p.tags && p.tags.includes('kids'));
    case 'battery-folder':
    case 'parts-batteries':
      return source.filter((p) => (p.tags && (p.tags.includes('batteries') || p.tags.includes('chargers'))) || p.category === 'Batteries & Chargers');
    case 'parts-folder':
      return source.filter((p) => p.type === 'part' || p.category.includes('Batteries') || p.category.includes('Protection') || p.category.includes('Gear') || p.category.includes('Upgrades') || p.category.includes('Tyres'));
    case 'parts-protection':
      return source.filter((p) => p.tags && (p.tags.includes('protection') || p.tags.includes('helmets')));
    case 'parts-gear':
      return source.filter((p) => p.tags && (p.tags.includes('gear') || p.tags.includes('clothing')));
    case 'parts-upgrades':
      return source.filter((p) => p.tags && p.tags.includes('parts-upgrades'));
    case 'parts-tyres':
      return source.filter((p) => p.tags && p.tags.includes('tyres'));
    case 'brand-surron':
      return source.filter((p) => p.brand.toLowerCase() === 'sur-ron' || (p.tags && p.tags.includes('surron')));
    case 'brand-talaria':
      return source.filter((p) => p.brand.toLowerCase() === 'talaria' || (p.tags && p.tags.includes('talaria')));
    case 'brand-stark':
      return source.filter((p) => p.brand.toLowerCase() === 'stark varg' || (p.tags && p.tags.includes('stark')));
    case 'brand-eridepro':
    case 'brand-eride':
      return source.filter((p) => p.brand.toLowerCase() === 'e ride pro' || (p.tags && p.tags.includes('eride')));
    case 'brand-rfn':
      return source.filter((p) => p.brand.toLowerCase() === 'rfn' || (p.tags && p.tags.includes('rfn')));
    case 'brand-ktm':
      return source.filter((p) => p.brand.toLowerCase() === 'ktm' || (p.tags && p.tags.includes('ktm')));
    case 'brand-revvi':
      return source.filter((p) => p.brand.toLowerCase() === 'revvi' || (p.tags && p.tags.includes('revvi')));
    case 'brand-funbikes':
      return source.filter((p) => p.brand.toLowerCase() === 'funbikes' || (p.tags && p.tags.includes('funbikes')));
    case 'brand-razor':
      return source.filter((p) => p.brand.toLowerCase() === 'razor' || (p.tags && p.tags.includes('razor')));
    case 'brand-segway':
      return source.filter((p) => p.brand.toLowerCase() === 'segway' || (p.tags && p.tags.includes('segway')));
    case 'brand-ecorider':
      return source.filter((p) => p.brand.toLowerCase() === 'eco rider' || (p.tags && p.tags.includes('ecorider')));
    case 'brand-zero':
      return source.filter((p) => p.brand.toLowerCase() === 'zero' || (p.tags && p.tags.includes('zero')));
    case 'brand-gasgas':
      return source.filter((p) => p.brand.toLowerCase() === 'gasgas' || (p.tags && p.tags.includes('gasgas')));
    case 'brand-stacyc':
      return source.filter((p) => p.brand.toLowerCase() === 'stacyc' || (p.tags && p.tags.includes('stacyc')));
    default:
      return source;
  }
}
