import { KeywordEntry, BlogPillar } from '../types';

export interface UrlHierarchyNode {
  path: string;
  type: 'page' | 'collection' | 'product' | 'article' | 'hub';
  title: string;
  intent: 'Commercial' | 'Transactional' | 'Informational' | 'Brand/Trust';
  description: string;
  children?: UrlHierarchyNode[];
}

export const UK_URL_HIERARCHY: UrlHierarchyNode[] = [
  {
    path: '/',
    type: 'page',
    title: 'DirtVolt Netherlands Homepage',
    intent: 'Commercial',
    description: 'Hero, Dutch RDW & EN 15194 Trust Badges, Fietsplan WKR calculator preview, featured collections, NL city hubs.',
    children: [
      {
        path: '/collections/commuter-ebikes',
        type: 'collection',
        title: 'Electric Commuter Bikes Netherlands',
        intent: 'Commercial',
        description: 'Mid-drive & hub urban commuters with full mudguards, lights, and 65-110 km range.',
        children: [
          {
            path: '/products/apex-metro-urban-pro-commuter-ebike',
            type: 'product',
            title: 'DirtVolt Metro Pro Commuter (PDP)',
            intent: 'Transactional',
            description: '80Nm mid-drive, 540Wh battery, IPX6 waterproof, Fietsplan WKR & iDEAL / Klarna finance.',
          },
          {
            path: '/products/apex-citylite-step-through-urban-ebike',
            type: 'product',
            title: 'DirtVolt Citylite Step-Through (PDP)',
            intent: 'Transactional',
            description: '17.2kg lightweight Dutch-style comfort commuter with Mivice hub motor.',
          }
        ]
      },
      {
        path: '/collections/folding-ebikes',
        type: 'collection',
        title: 'Folding Electric Bikes Netherlands',
        intent: 'Commercial',
        description: 'Lightweight compact e-bikes approved for NS trains, Amsterdam Metro, tram racks, and office desks.',
        children: [
          {
            path: '/products/apex-foldway-ultra-folding-commuter-ebike',
            type: 'product',
            title: 'DirtVolt Foldway Ultra 20" (PDP)',
            intent: 'Transactional',
            description: '15.8kg magnesium frame, Gates belt drive, 8-sec magnetic fold, NS Intercity approved.',
          }
        ]
      },
      {
        path: '/collections/electric-mountain-bikes-emtb',
        type: 'collection',
        title: 'Electric Dirt & Mountain Bikes (e-MTB) Netherlands',
        intent: 'Commercial',
        description: 'Full-suspension e-MTBs and electric dirt bikes for Utrechtse Heuvelrug, Veluwe, and private MX tracks.',
        children: [
          {
            path: '/products/apex-summit-x-electric-mountain-bike-emtb',
            type: 'product',
            title: 'DirtVolt Summit-X Full-Suspension e-MTB (PDP)',
            intent: 'Transactional',
            description: 'Shimano EP801 85Nm motor, 720Wh battery, 160mm Fox suspension.',
          }
        ]
      },
      {
        path: '/collections/cargo-ebikes',
        type: 'collection',
        title: 'Electric Cargo Bikes (Bakfiets & Longtail) Netherlands',
        intent: 'Commercial',
        description: 'Longtail & cargo e-bikes for Dutch family school runs and last-mile urban logistics.',
        children: [
          {
            path: '/products/apex-hauler-longtail-electric-cargo-bike',
            type: 'product',
            title: 'DirtVolt Hauler Longtail Cargo (PDP)',
            intent: 'Transactional',
            description: '200kg payload, Bosch Cargo Line 85Nm motor, dual battery ready.',
          }
        ]
      },
      {
        path: '/collections/accessories-parts',
        type: 'collection',
        title: 'E-Bike Accessories & Waterproof Gear Netherlands',
        intent: 'Commercial',
        description: 'Ortlieb waterproof panniers, StVZO lights, ART-2+ locks, smart fast chargers.',
      },
      {
        path: '/pages/cycle-to-work-scheme',
        type: 'page',
        title: 'Dutch Fietsplan (WKR) - Save up to 49.5%',
        intent: 'Transactional',
        description: 'Interactive Dutch Box 1 & WKR tax calculator, proforma quote generator, and employer guides.',
      },
      {
        path: '/pages/uk-eapc-regulations-legal-guide',
        type: 'page',
        title: 'Netherlands E-Bike Laws & RDW / EN 15194 Compliance',
        intent: 'Informational',
        description: 'Comprehensive legal breakdown of 250W power limits, 25 km/h cutoffs, L1e-B speed pedelecs, and fietspad laws.',
      },
      {
        path: '/hub',
        type: 'hub',
        title: 'Netherlands E-Bike Commuter & Tech Advice Hub',
        intent: 'Informational',
        description: 'Topical authority resource centre targeting high-volume Dutch e-mobility search queries.',
      }
    ]
  }
];

export const UK_KEYWORD_MAP: KeywordEntry[] = [
  {
    keyword: 'elektrische crossmotor kopen nederland',
    category: 'Electric Dirt Bikes',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 8100,
    keywordDifficulty: 42,
    targetUrl: '/collections/commuter-ebikes',
    priority: 'Core',
    sellingHook: 'Highlight Dutch weatherproofing (IPX6), official Amsterdam stock, and PostNL/DHL 24-48h tracked delivery.',
  },
  {
    keyword: 'vouwfiets elektrisch voor ns trein',
    category: 'Folding E-Bikes',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 3600,
    keywordDifficulty: 34,
    targetUrl: '/collections/folding-ebikes',
    priority: 'Core',
    sellingHook: 'Free NS train carriage during peak hours when folded, 8-sec fold, 15.8kg portability, and belt drive.',
    localCity: 'Amsterdam',
  },
  {
    keyword: 'fietsplan wkr elektrische fiets berekenen',
    category: 'Finance / Savings',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 5400,
    keywordDifficulty: 27,
    targetUrl: '/pages/cycle-to-work-scheme',
    priority: 'Core',
    sellingHook: 'Interactive Dutch Box 1 / WKR Fietsplan calculator showing exact monthly net salary exchange savings.',
  },
  {
    keyword: 'elektrische fiets regels 250w rdw nederland',
    category: 'Legal / Trust',
    searchIntent: 'Informational',
    monthlyUkSearchVolume: 6700,
    keywordDifficulty: 31,
    targetUrl: '/pages/uk-eapc-regulations-legal-guide',
    priority: 'Core',
    sellingHook: 'Clarify EN 15194 & Wegenverkeerswet 1994 laws, 25 km/h cutoff, and RDW L1e-B yellow plate rules.',
  },
  {
    keyword: 'sur ron licht bee straatlegaal kopen nl',
    category: 'Road-Legal Dirt Bikes',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 4800,
    keywordDifficulty: 36,
    targetUrl: '/collections/electric-mountain-bikes-emtb',
    priority: 'Core',
    sellingHook: 'Official COC homologation papers ready for RDW kenteken registration across the Netherlands.',
  },
  {
    keyword: 'talaria sting r mx4 nederland dealer',
    category: 'Electric Dirt Bikes',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 3200,
    keywordDifficulty: 33,
    targetUrl: '/collections/electric-mountain-bikes-emtb',
    priority: 'High',
    sellingHook: 'Official Netherlands stock in Amsterdam, iDEAL & Klarna checkout, plus 2-year NL & EU warranty.',
  },
  {
    keyword: 'waterdichte e-bike nederlandse regen wind',
    category: 'Commuter E-Bikes',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 1900,
    keywordDifficulty: 26,
    targetUrl: '/collections/commuter-ebikes',
    priority: 'Medium',
    sellingHook: 'IPX6 / IPX7 waterproof harnesses for coastal headwinds and Dutch rain, plus sealed bottom brackets.',
    localCity: 'Rotterdam',
  },
  {
    keyword: 'elektrische mountainbike veluwe utrechtse heuvelrug',
    category: 'Electric Mountain Bikes (e-MTB)',
    searchIntent: 'Local',
    monthlyUkSearchVolume: 1600,
    keywordDifficulty: 22,
    targetUrl: '/collections/electric-mountain-bikes-emtb',
    priority: 'High',
    sellingHook: '80Nm-85Nm mid-drive torque conquering sandy forest climbs across Utrecht & Gelderland MTB trails.',
    localCity: 'Utrecht',
  },
  {
    keyword: 'bakfiets of longtail e-bike fietsplan',
    category: 'Cargo E-Bikes',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 2400,
    keywordDifficulty: 29,
    targetUrl: '/collections/cargo-ebikes',
    priority: 'High',
    sellingHook: 'WKR Fietsplan & Lease a Bike Nederland savings up to 49.5% with 200kg cargo payload.',
    localCity: 'Eindhoven',
  }
];

export const UK_BLOG_PILLARS: BlogPillar[] = [
  {
    id: 'pillar-1-eapc-laws',
    title: 'Netherlands E-Bike Laws Explained: 250W Limits, RDW L1e-B Plates & Fietspad Rules',
    slug: 'netherlands-ebike-laws-rdw-regulations-explained',
    targetQuery: 'are electric dirt bikes street legal in netherlands rdw rules',
    searchIntent: 'Informational & Authority',
    estimatedVolume: 9900,
    wordCountTarget: '2,400 words',
    summary: 'A definitive guide to Dutch Wegenverkeerswet 1994 & EU EN 15194 e-bike regulations. Covers 250W continuous output with 25 km/h assist cutoff on fietspaden, versus RDW L1e-B speed pedelecs and mopeds (45 km/h yellow plate, AM licence, and NTA 8776 / ECE helmet requirements).',
    targetCategoryLink: '/collections/commuter-ebikes',
    internalLinks: [
      { anchorText: '100% EU EN 15194 & NL fietspad compliant e-bikes', targetUrl: '/collections/commuter-ebikes', reason: 'High-intent commercial transfer' },
      { anchorText: 'RDW homologated L1e-B road-legal dirt bikes', targetUrl: '/collections/road-legal', reason: 'Street-legal enduro cross-link' },
      { anchorText: 'official NL & EU compliance validator tool', targetUrl: '/pages/uk-eapc-regulations-legal-guide', reason: 'Trust verification link' }
    ],
    schemaType: 'Article + FAQPage (with 6 targeted PAA schema objects)',
    keyTakeaways: [
      'Standard fietspad e-bikes (pedelecs) must not exceed 250W continuous rated motor output',
      'Pedal assistance must cut out cleanly at 25 km/h with pedals in motion',
      'L1e-B road-legal electric dirt bikes require RDW kenteken registration, WA insurance, and an approved helmet',
      'High-power MX dirt bikes (Stark Varg MX, Sur-Ron Storm Bee) are strictly for closed MX tracks and private terrain',
      'Always use an ART-2 or ART-3 rated chain/ring lock required by Dutch bike insurers'
    ]
  },
  {
    id: 'pillar-2-cycle-to-work',
    title: 'Dutch Fietsplan & WKR Guide 2026: How to Save Up to 49.5% Tax on Your E-Bike',
    slug: 'dutch-fietsplan-wkr-ebike-tax-savings-guide',
    targetQuery: 'how does fietsplan wkr work for ebikes netherlands',
    searchIntent: 'Commercial / Transactional Bridge',
    estimatedVolume: 7800,
    wordCountTarget: '2,800 words',
    summary: 'A complete walkthrough of the Dutch Werkkostenregeling (WKR) Fietsplan and corporate lease (Lease a Bike / Hellorider / 7% fiscal bijtelling). Includes Box 1 income tax savings calculations (36.97% and 49.50%) and proforma invoicing for employers.',
    targetCategoryLink: '/pages/cycle-to-work-scheme',
    internalLinks: [
      { anchorText: 'Dutch Fietsplan & WKR Tax Calculator', targetUrl: '/pages/cycle-to-work-scheme', reason: 'Direct CRO calculator funnel' },
      { anchorText: 'DirtVolt Road-Legal Commuter Collection', targetUrl: '/collections/commuter-ebikes', reason: 'Top-selling commuter conversion' },
      { anchorText: 'cargo & longtail e-bikes eligible for WKR', targetUrl: '/collections/cargo-ebikes', reason: 'High ticket item tax saving' }
    ],
    schemaType: 'HowTo + FAQPage + FinancialProduct',
    keyTakeaways: [
      'Save 36.97% to 49.50% through Dutch gross salary exchange or employer WKR vrije ruimte',
      'Corporate lease options operate with a simple 7% annual fiscal bijtelling on retail value',
      'Employers can deduct 21% Dutch BTW (VAT) when purchasing through a registered B.V. proforma invoice',
      'ART-2 locks, waterproof Ortlieb panniers, and helmets can be bundled onto the same Fietsplan invoice'
    ]
  },
  {
    id: 'pillar-3-british-weather',
    title: 'Best Electric Bikes for Dutch Rain & Coastal Headwinds: IP67 Protection & Winter Care',
    slug: 'best-electric-bikes-dutch-rain-coastal-wind',
    targetQuery: 'waterproof electric bike dutch rain wind ip67',
    searchIntent: 'Informational & Commercial',
    estimatedVolume: 4200,
    wordCountTarget: '1,900 words',
    summary: 'Essential engineering guide explaining IPX5, IPX6, and IP67 ingress protection against Dutch rain squalls, Randstad polder crosswinds, and winter road salt (pekel). Covers lithium battery care, belt drives, and hydraulic braking.',
    targetCategoryLink: '/collections/commuter-ebikes',
    internalLinks: [
      { anchorText: 'IPX6 and IP67 weather-sealed e-bikes', targetUrl: '/collections/commuter-ebikes', reason: 'Weather-ready feature category' },
      { anchorText: 'Genuine Waterproof Batteries & Chargers', targetUrl: '/shop?folder=battery-folder', reason: 'Essential winter backup upsell' }
    ],
    schemaType: 'Article + FAQPage',
    keyTakeaways: [
      'Dutch commuters need minimum IPX5–IP67 sealed controllers and harnesses for heavy year-round rain',
      'High-torque 75Nm–120Nm motors conquer coastal Randstad headwinds (Windkracht 5–7) effortlessly',
      'Bring removable lithium battery packs indoors to 15–20°C before charging during Dutch winter frosts',
      'Rinse winter road salt (pekel) with gentle low-pressure water after canal-side or dike rides'
    ]
  },
  {
    id: 'pillar-4-london-commute',
    title: 'Amsterdam, Rotterdam & NS Rail Commuting: Multi-Modal E-Bike & Fietspad Survival Guide',
    slug: 'amsterdam-rotterdam-ns-train-ebike-commuting',
    targetQuery: 'can i take folding electric bike on ns train netherlands',
    searchIntent: 'Local / Commercial',
    estimatedVolume: 5100,
    wordCountTarget: '2,200 words',
    summary: 'A practical commuter guide for the Randstad. Covers Nederlandse Spoorwegen (NS) fietskaart rules, why compact folding e-bikes travel free even in rush hour, Amsterdam ring-road cycle highways, and ART lock insurance requirements.',
    targetCategoryLink: '/collections/folding-ebikes',
    internalLinks: [
      { anchorText: 'NS train friendly folding e-bikes', targetUrl: '/collections/folding-ebikes', reason: 'Direct product category match' },
      { anchorText: 'Road-Legal Street Enduro Collection', targetUrl: '/shop?folder=road-legal', reason: 'Intercity commuter alternative' }
    ],
    schemaType: 'Article + LocalBusiness + FAQPage',
    keyTakeaways: [
      'Full-size bicycles require a €7.50 NS dagkaart fiets and are barred during peak hours (06:30–09:00 & 16:00–18:30)',
      'Folded compact e-bikes travel 100% FREE on all NS Intercity, Sprinter, and Metro services at all hours',
      'Bypass Amsterdam and Rotterdam bridge delays and parking fees (€7.50+/hr) year-round',
      'Pair your machine with an ART-2 / ART-3 lock for full ENRA or ANWB theft insurance coverage'
    ]
  },
  {
    id: 'pillar-5-torque-hills',
    title: 'Hub Motor vs Mid-Drive in the Netherlands: Torque for Headwinds, Viaducts & Veluwe Trails',
    slug: 'hub-motor-vs-mid-drive-torque-veluwe-headwinds',
    targetQuery: 'hub motor vs mid drive netherlands wind trails',
    searchIntent: 'Commercial / Technical',
    estimatedVolume: 3900,
    wordCountTarget: '2,100 words',
    summary: 'Engineering breakdown comparing rear hub motors versus high-torque mid-drive and direct gearbox systems (Talaria, Sur-Ron) against Dutch coastal headwinds, steep polder bridges, and sandy Limburg / Veluwe elevation tracks.',
    targetCategoryLink: '/collections/electric-mountain-bikes-emtb',
    internalLinks: [
      { anchorText: 'High torque mid-drive & gearbox electric dirt bikes', targetUrl: '/collections/electric-mountain-bikes-emtb', reason: 'High performance category' },
      { anchorText: 'Urban commuter e-bikes for Dutch cities', targetUrl: '/collections/commuter-ebikes', reason: 'Everyday city riding solution' }
    ],
    schemaType: 'TechArticle + FAQPage',
    keyTakeaways: [
      'Mid-drive and direct-gearbox motors multiply torque through gearing for deep Veluwe sand and Limburg hills',
      '45Nm–65Nm rear hub drives offer near-silent efficiency across flat Amsterdam and Utrecht canal paths',
      'Regenerative braking on Talaria & Sur-Ron drivetrains recovers range on long dyke descents and viaducts',
      '72V high-voltage packs resist voltage sag during sustained 25–45 km/h rides into coastal headwinds'
    ]
  }
];

export const UK_LOCAL_STORES = [
  {
    id: 'amsterdam-flagship',
    city: 'Amsterdam',
    name: 'DirtVolt - Amsterdam Flagship Hub',
    streetAddress: 'Keizersgracht 482',
    addressLocality: 'Amsterdam',
    postalCode: '1017 EG',
    addressCountry: 'NL',
    telephone: '+31 20 808 4410',
    email: 'sales@ebikessale.online',
    openingHours: 'Mo-Sa 09:00-18:00, Su 10:30-16:30',
    latitude: 52.3649,
    longitude: 4.8878,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
  {
    id: 'rotterdam-hub',
    city: 'Rotterdam',
    name: 'DirtVolt - Rotterdam Service & Logistics Hub',
    streetAddress: 'Schiedamsedijk 74',
    addressLocality: 'Rotterdam',
    postalCode: '3011 EN',
    addressCountry: 'NL',
    telephone: '+31 10 808 4412',
    email: 'sales@ebikessale.online',
    openingHours: 'Mo-Sa 09:30-18:00',
    latitude: 51.9154,
    longitude: 4.4819,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
  {
    id: 'eindhoven-centre',
    city: 'Eindhoven',
    name: 'DirtVolt - Eindhoven Tech & MX Depot',
    streetAddress: 'Torenallee 20',
    addressLocality: 'Eindhoven',
    postalCode: '5617 BC',
    addressCountry: 'NL',
    telephone: '+31 40 808 4415',
    email: 'sales@ebikessale.online',
    openingHours: 'Tu-Sa 09:00-17:30',
    latitude: 51.4487,
    longitude: 5.4567,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
];
