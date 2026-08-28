export type EbikeCategory = 
  | 'Electric Dirt Bikes'
  | 'Road-Legal Electric Dirt Bikes'
  | 'Electric Mountain Bikes'
  | 'Kids & Youth Electric Dirt Bikes'
  | 'Electric Quads & UTVs'
  | 'Accessories & Gear'
  | 'Commuter E-Bikes'
  | 'Folding E-Bikes'
  | 'Electric Mountain Bikes (e-MTB)'
  | 'Cargo E-Bikes'
  | 'Accessories & Parts';

export type MotorLocation = 'Mid-Drive Motor' | 'Hub Motor' | 'Direct Drive Motor' | 'Dual Motor';
export type WaterResistance = 'IPX5' | 'IPX6' | 'IPX7' | 'IP65' | 'IP67' | 'IP69K';

export interface TechnicalSpecs {
  batteryCapacityWh: number;
  batteryBrand: string;
  rangeMiles: string;
  maxRangeMiles: number;
  chargingTimeHours: number;
  removableBattery: boolean;
  motorType: MotorLocation;
  motorBrand: string;
  motorPowerW: number;
  torqueNm: number;
  weightKg: number;
  waterResistanceRating: WaterResistance;
  frameMaterial: string;
  gears: string;
  brakes: string;
  tyres: string;
  cycleToWorkEligible: boolean;
  foldedDimensions?: string;
  cargoCapacityKg?: number;
}

export interface EapcCompliance {
  continuousRatedPowerW: number;
  maxAssistedSpeedMph: number;
  pedalAssistRequired: boolean;
  throttleType: 'Walk Assist (up to 3.7mph)' | 'Full Throttle (Requires L1e-A registration)' | 'Full Twist Throttle (Off-Road / Competition)' | 'None' | string;
  minimumRiderAge: number;
  en15194Certified: boolean;
  ukRoadLegalStatus: '100% UK Road Legal (No Tax, Reg or Insurance Required)' | 'UK Road-Legal L1e-B / Moped (DVLA Registered)' | 'Restricted / Off-Road Only' | string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: EbikeCategory;
  priceGBP: number;
  rrpGBP: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  sku: string;
  gtin13: string;
  mpn: string;
  images: string[];
  ukHighlights: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
  technicalSpecs: TechnicalSpecs;
  eapcCompliance: EapcCompliance;
  paaFaqs: { question: string; answer: string }[];
  idealForCities: string[];
  featured?: boolean;
}

export interface KeywordEntry {
  keyword: string;
  category: string;
  searchIntent: 'Commercial' | 'Transactional' | 'Informational' | 'Local';
  monthlyUkSearchVolume: number;
  keywordDifficulty: number; // 1-100
  targetUrl: string;
  priority: 'High' | 'Medium' | 'Core';
  sellingHook: string;
  localCity?: string;
}

export interface BlogPillar {
  id: string;
  title: string;
  slug: string;
  targetQuery: string;
  searchIntent: string;
  estimatedVolume: number;
  wordCountTarget: string;
  summary: string;
  targetCategoryLink: string;
  internalLinks: { anchorText: string; targetUrl: string; reason: string }[];
  schemaType: string;
  keyTakeaways: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedFrameSize?: string;
}

export type ViewMode = 
  | 'home'
  | 'store' 
  | 'shop'
  | 'about-us' 
  | 'blog'
  | 'terms-and-conditions' 
  | 'privacy-policy' 
  | 'contact-us' 
  | 'seo-architecture' 
  | 'cycle-to-work' 
  | 'eapc-compliance' 
  | 'schema-hub';
