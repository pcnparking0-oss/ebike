import { Product } from '../../types';
import { BATTERY_PRODUCTS } from './battery/batteriesAndChargers';
import { KIDS_PRODUCTS } from './kids/kidsAndYouth';
import { SURRON_PRODUCTS } from './brands/surron';
import { TALARIA_PRODUCTS } from './brands/talaria';
import { STARK_PRODUCTS } from './brands/stark';
import { ERIDEPRO_PRODUCTS } from './brands/eridepro';
import { RFN_PRODUCTS } from './brands/rfn';
import { KTM_PRODUCTS } from './brands/ktm';
import { REVVI_PRODUCTS } from './brands/revvi';
import { FUNBIKES_PRODUCTS } from './brands/funbikes';
import { RAZOR_PRODUCTS } from './brands/razor';
import { SEGWAY_PRODUCTS } from './brands/segway';
import { ECORIDER_PRODUCTS } from './brands/ecorider';

// Export all individual folders
export {
  BATTERY_PRODUCTS,
  KIDS_PRODUCTS,
  SURRON_PRODUCTS,
  TALARIA_PRODUCTS,
  STARK_PRODUCTS,
  ERIDEPRO_PRODUCTS,
  RFN_PRODUCTS,
  KTM_PRODUCTS,
  REVVI_PRODUCTS,
  FUNBIKES_PRODUCTS,
  RAZOR_PRODUCTS,
  SEGWAY_PRODUCTS,
  ECORIDER_PRODUCTS
};

// Brand folder collection definition
export interface StoreFolder {
  id: string;
  name: string;
  categoryType: 'all' | 'brand' | 'battery' | 'kids';
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
    tagline: '57 UK Stock Units',
    description: 'Explore the full showroom of electric dirt bikes, road-legal mopeds, youth bikes, quads, and official OEM batteries & chargers.',
    productCount: 57,
    featuredProductIds: ['ultra-bee', 'talaria-sting-r', 'stark-mx', 'eride-ss']
  },
  {
    id: 'battery-folder',
    name: 'Battery & Power Systems',
    categoryType: 'battery',
    folderColor: 'from-emerald-600 to-teal-700',
    badge: 'Official OEM Hardware',
    tagline: '15 Batteries & Fast Chargers',
    description: 'Genuine factory replacement lithium-ion batteries and high-amperage smart fast chargers for Sur-Ron, Talaria, and Stark Varg.',
    productCount: BATTERY_PRODUCTS.length,
    featuredProductIds: ['bat-surron-lightbee', 'chg-surron-lightbee', 'bat-talaria-stingr', 'bat-stark-varg']
  },
  {
    id: 'kids-folder',
    name: 'Kids & Youth Products',
    categoryType: 'kids',
    folderColor: 'from-amber-500 to-orange-600',
    badge: 'Ages 3 to 16',
    tagline: '22 Youth Bikes & Quads',
    description: 'Purpose-built junior electric motocross, electric balance bikes, and safe low-maintenance youth ATVs with parent speed restrictors.',
    productCount: KIDS_PRODUCTS.length,
    featuredProductIds: ['sur-ron-hyper-bee', 'ktm-sxe5', 'revvi-16', 'funbikes-1400']
  },
  {
    id: 'brand-surron',
    name: 'Sur-Ron',
    categoryType: 'brand',
    folderColor: 'from-slate-800 to-slate-950',
    badge: 'Official UK Distributor',
    tagline: '13 Bikes & Hardware',
    description: 'World-renowned electric enduro and motocross icons including the Light Bee X, Ultra Bee MX, Storm Bee, and Hyper Bee.',
    productCount: SURRON_PRODUCTS.length,
    featuredProductIds: ['ultra-bee', 'lbx', 'storm-bee', 'hyper-bee']
  },
  {
    id: 'brand-talaria',
    name: 'Talaria',
    categoryType: 'brand',
    folderColor: 'from-red-600 to-rose-800',
    badge: 'Direct Gearbox Tech',
    tagline: '10 Bikes & Hardware',
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
    tagline: '4 Machines & Chargers',
    description: 'The world’s fastest motocross machine with 80hp, customizable engine maps, carbon sleeve motor, and magnesium honeycomb battery casing.',
    productCount: STARK_PRODUCTS.length,
    featuredProductIds: ['stark-mx', 'stark-ex', 'bat-stark-varg', 'chg-stark-varg']
  },
  {
    id: 'brand-eridepro',
    name: 'E-Ride Pro',
    categoryType: 'brand',
    folderColor: 'from-cyan-600 to-blue-700',
    badge: '72V Hyper Powertrain',
    tagline: '2 Flagship Models',
    description: 'Ultra-high-output 72V electric off-road bikes pushing up to 12kW peak power and 60mph top speed straight out of the crate.',
    productCount: ERIDEPRO_PRODUCTS.length,
    featuredProductIds: ['eride-ss', 'eride-s']
  },
  {
    id: 'brand-rfn',
    name: 'RFN (Ares & Warrior)',
    categoryType: 'brand',
    folderColor: 'from-orange-600 to-amber-700',
    badge: 'Modular Enduro Platform',
    tagline: '5 Models (Adult & Youth)',
    description: 'Transformable off-road dirt bike architecture with quick-release trial and enduro seat modes, plus certified youth models.',
    productCount: RFN_PRODUCTS.length,
    featuredProductIds: ['rfn-ares', 'rfn-ares-rally-pro', 'rfn-warrior-sxe5', 'rfn-warrior-sxe8']
  },
  {
    id: 'brand-ktm',
    name: 'KTM Electric',
    categoryType: 'brand',
    folderColor: 'from-orange-500 to-amber-600',
    badge: 'Ready to Race',
    tagline: '3 Competition Minis',
    description: 'Championship-grade youth electric competition dirt bikes: SX-E 5, SX-E 3, and SX-E 2 with WP XACT suspension and adjustable ergonomics.',
    productCount: KTM_PRODUCTS.length,
    featuredProductIds: ['ktm-sxe5', 'ktm-sxe3', 'ktm-sxe2']
  },
  {
    id: 'brand-revvi',
    name: 'Revvi',
    categoryType: 'brand',
    folderColor: 'from-emerald-500 to-teal-700',
    badge: 'First Ride Masters',
    tagline: '5 Kids Balance Bikes',
    description: 'The UK benchmark for balance and throttle control training for toddlers to juniors (12in, 16in, 16in Plus, 18in, and 20in).',
    productCount: REVVI_PRODUCTS.length,
    featuredProductIds: ['revvi-12', 'revvi-16', 'revvi-18', 'revvi-20']
  },
  {
    id: 'brand-funbikes',
    name: 'FunBikes',
    categoryType: 'brand',
    folderColor: 'from-blue-600 to-indigo-800',
    badge: 'Affordable Youth Power',
    tagline: '7 Bikes & Quads',
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
    tagline: '3 Models',
    description: 'Accessible steel-frame electric dirt rockets (MX350, MX400) and rugged four-wheel Dirt Quad for garden and open field adventures.',
    productCount: RAZOR_PRODUCTS.length,
    featuredProductIds: ['razor-mx350', 'razor-mx400', 'razor-quad']
  },
  {
    id: 'brand-segway',
    name: 'Segway Powersports',
    categoryType: 'brand',
    folderColor: 'from-slate-700 to-slate-900',
    badge: 'Smart All-Terrain',
    tagline: '2 Electric Quads',
    description: 'Next-generation smart electric quad bikes featuring telemetry connectivity, high ground clearance, and robust dual A-arm suspension.',
    productCount: SEGWAY_PRODUCTS.length,
    featuredProductIds: ['quad-segway-snarler', 'quad-segway-kids']
  },
  {
    id: 'brand-ecorider',
    name: 'Eco Rider',
    categoryType: 'brand',
    folderColor: 'from-teal-600 to-cyan-700',
    badge: 'Agricultural & Sport ATVs',
    tagline: '3 Electric Quads',
    description: 'Heavy-torque electric utility and sport quad bikes designed for estate management, farm runs, and off-road trail riding.',
    productCount: ECORIDER_PRODUCTS.length,
    featuredProductIds: ['quad-ecorider-gt', 'quad-ecorider-2100', 'quad-ecorider-shredder']
  }
];

// Helper to get products for a specific folder
export function getProductsForFolder(folderId: string, allProducts: Product[]): Product[] {
  if (folderId === 'all') return allProducts;
  if (folderId === 'battery-folder') return BATTERY_PRODUCTS;
  if (folderId === 'kids-folder') return KIDS_PRODUCTS;
  if (folderId === 'brand-surron') return SURRON_PRODUCTS;
  if (folderId === 'brand-talaria') return TALARIA_PRODUCTS;
  if (folderId === 'brand-stark') return STARK_PRODUCTS;
  if (folderId === 'brand-eridepro') return ERIDEPRO_PRODUCTS;
  if (folderId === 'brand-rfn') return RFN_PRODUCTS;
  if (folderId === 'brand-ktm') return KTM_PRODUCTS;
  if (folderId === 'brand-revvi') return REVVI_PRODUCTS;
  if (folderId === 'brand-funbikes') return FUNBIKES_PRODUCTS;
  if (folderId === 'brand-razor') return RAZOR_PRODUCTS;
  if (folderId === 'brand-segway') return SEGWAY_PRODUCTS;
  if (folderId === 'brand-ecorider') return ECORIDER_PRODUCTS;
  return allProducts;
}
