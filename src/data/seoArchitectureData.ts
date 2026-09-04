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
    title: 'Apex Ebikes UK Homepage',
    intent: 'Commercial',
    description: 'Hero, UK EAPC Trust Badges, Cycle to Work calculator preview, featured collections, UK city hubs.',
    children: [
      {
        path: '/collections/commuter-ebikes',
        type: 'collection',
        title: 'Electric Commuter Bikes UK',
        intent: 'Commercial',
        description: 'Mid-drive & hub urban commuters with mudguards, lights, and 40-70 mile range.',
        children: [
          {
            path: '/products/apex-metro-urban-pro-commuter-ebike',
            type: 'product',
            title: 'Apex Metro Pro Commuter (PDP)',
            intent: 'Transactional',
            description: '80Nm mid-drive, 540Wh battery, IPX6 waterproof, Cycle to Work & Klarna finance.',
          },
          {
            path: '/products/apex-citylite-step-through-urban-ebike',
            type: 'product',
            title: 'Apex Citylite Step-Through (PDP)',
            intent: 'Transactional',
            description: '17.2kg lightweight Dutch-style comfort commuter with Mivice hub motor.',
          }
        ]
      },
      {
        path: '/collections/folding-ebikes',
        type: 'collection',
        title: 'Folding Electric Bikes UK',
        intent: 'Commercial',
        description: 'Lightweight compact e-bikes approved for London Underground, train racks, and office desks.',
        children: [
          {
            path: '/products/apex-foldway-ultra-folding-commuter-ebike',
            type: 'product',
            title: 'Apex Foldway Ultra 20" (PDP)',
            intent: 'Transactional',
            description: '15.8kg magnesium frame, Gates belt drive, 8-sec magnetic fold, TfL approved.',
          }
        ]
      },
      {
        path: '/collections/electric-mountain-bikes-emtb',
        type: 'collection',
        title: 'Electric Mountain Bikes (e-MTB) UK',
        intent: 'Commercial',
        description: 'Full-suspension and hardtail 250W e-MTBs for UK trail centres and bridleways.',
        children: [
          {
            path: '/products/apex-summit-x-electric-mountain-bike-emtb',
            type: 'product',
            title: 'Apex Summit-X Full-Suspension e-MTB (PDP)',
            intent: 'Transactional',
            description: 'Shimano EP801 85Nm motor, 720Wh battery, 160mm Fox suspension.',
          }
        ]
      },
      {
        path: '/collections/cargo-ebikes',
        type: 'collection',
        title: 'Electric Cargo Bikes UK',
        intent: 'Commercial',
        description: 'Longtail & box cargo e-bikes for family school runs and last-mile urban logistics.',
        children: [
          {
            path: '/products/apex-hauler-longtail-electric-cargo-bike',
            type: 'product',
            title: 'Apex Hauler Longtail Cargo (PDP)',
            intent: 'Transactional',
            description: '200kg payload, Bosch Cargo Line 85Nm motor, dual battery ready.',
          }
        ]
      },
      {
        path: '/collections/accessories-parts',
        type: 'collection',
        title: 'E-Bike Accessories & Waterproof Gear UK',
        intent: 'Commercial',
        description: 'Ortlieb waterproof panniers, StVZO lights, ABUS Gold locks, smart fast chargers.',
      },
      {
        path: '/pages/cycle-to-work-scheme',
        type: 'page',
        title: 'Cycle to Work Scheme UK - Save up to 47%',
        intent: 'Transactional',
        description: 'Interactive HMRC salary sacrifice calculator, voucher redemption form, and employer guides.',
      },
      {
        path: '/pages/uk-eapc-regulations-legal-guide',
        type: 'page',
        title: 'UK E-Bike Legal Regulations & EAPC Compliance',
        intent: 'Informational',
        description: 'Comprehensive legal breakdown of 250W power limits, 15.5mph cutoffs, throttles, and age 14+ laws.',
      },
      {
        path: '/hub',
        type: 'hub',
        title: 'UK E-Bike Commuter & Tech Advice Hub',
        intent: 'Informational',
        description: 'Topical authority resource centre targeting high-volume UK search queries.',
      }
    ]
  }
];

export const UK_KEYWORD_MAP: KeywordEntry[] = [
  {
    keyword: 'best electric commuter bike uk',
    category: 'Commuter E-Bikes',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 8100,
    keywordDifficulty: 42,
    targetUrl: '/collections/commuter-ebikes',
    priority: 'Core',
    sellingHook: 'Highlight British weatherproofing (IPX6), high torque for hills, and Cycle to Work scheme savings.',
  },
  {
    keyword: 'folding ebike for london tube',
    category: 'Folding E-Bikes',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 3600,
    keywordDifficulty: 34,
    targetUrl: '/collections/folding-ebikes',
    priority: 'Core',
    sellingHook: 'TfL conditions of carriage compliance, 8-sec fold, 15.8kg stair portability, and grease-free belt drive.',
    localCity: 'London',
  },
  {
    keyword: 'cheap cargo ebike tax-free scheme',
    category: 'Cargo E-Bikes',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 2400,
    keywordDifficulty: 29,
    targetUrl: '/collections/cargo-ebikes',
    priority: 'High',
    sellingHook: 'Green Commute Initiative & Cyclescheme tax-free salary sacrifice saving up to 47% + 200kg payload.',
  },
  {
    keyword: 'uk ebike laws 250w throttle',
    category: 'Legal / Trust',
    searchIntent: 'Informational',
    monthlyUkSearchVolume: 6700,
    keywordDifficulty: 31,
    targetUrl: '/pages/uk-eapc-regulations-legal-guide',
    priority: 'Core',
    sellingHook: 'Clarify EAPC SI 1983/1168 laws, 15.5mph motor cutoff, why twist-throttles require DVLA registration.',
  },
  {
    keyword: 'cycle to work scheme ebike calculator',
    category: 'Finance / Savings',
    searchIntent: 'Transactional',
    monthlyUkSearchVolume: 5400,
    keywordDifficulty: 27,
    targetUrl: '/pages/cycle-to-work-scheme',
    priority: 'Core',
    sellingHook: 'Interactive HMRC tax tier calculator showing exact monthly net take-home salary sacrifice for basic & higher rate.',
  },
  {
    keyword: 'electric mountain bike 0 percent finance uk',
    category: 'Electric Mountain Bikes (e-MTB)',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 2900,
    keywordDifficulty: 38,
    targetUrl: '/collections/electric-mountain-bikes-emtb',
    priority: 'High',
    sellingHook: 'Novuna / Klarna 0% APR monthly breakdown with instant UK credit decision at checkout.',
  },
  {
    keyword: 'best ebike for bristol hills',
    category: 'Commuter / Local',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 1600,
    keywordDifficulty: 22,
    targetUrl: '/products/apex-metro-urban-pro-commuter-ebike',
    priority: 'High',
    sellingHook: '80Nm-85Nm mid-drive torque comparison conquering steep 15%+ UK city gradients.',
    localCity: 'Bristol',
  },
  {
    keyword: 'waterproof electric bike for british rain',
    category: 'Commuter E-Bikes',
    searchIntent: 'Commercial',
    monthlyUkSearchVolume: 1900,
    keywordDifficulty: 26,
    targetUrl: '/collections/commuter-ebikes',
    priority: 'Medium',
    sellingHook: 'IPX6 / IPX7 waterproof electrical harnesses, sealed bottom brackets, and full-wrap SKS mudguards.',
  },
  {
    keyword: 'electric bike edinburgh commute',
    category: 'Commuter / Local',
    searchIntent: 'Local',
    monthlyUkSearchVolume: 1200,
    keywordDifficulty: 19,
    targetUrl: '/collections/commuter-ebikes',
    priority: 'Medium',
    sellingHook: 'High torque mid-drive climbing over cobbled streets and Arthur\'s Seat ascents with hydraulic disc brakes.',
    localCity: 'Edinburgh',
  }
];

export const UK_BLOG_PILLARS: BlogPillar[] = [
  {
    id: 'pillar-1-eapc-laws',
    title: 'UK E-Bike Laws Explained: 250W Limits, Throttle Legality & EAPC Regulations',
    slug: 'uk-ebike-laws-explained-eapc-regulations',
    targetQuery: 'are electric bikes legal in uk 250w rules',
    searchIntent: 'Informational & Authority',
    estimatedVolume: 9900,
    wordCountTarget: '2,400 words',
    summary: 'A definitive guide to UK Electrically Assisted Pedal Cycle (EAPC) legislation under the Electrically Assisted Pedal Cycles Regulations 1983 and 2015 amendments. Covers 250W continuous rated output, 15.5mph (25km/h) motor cutoff, age 14 restrictions, and why unregulated throttle bikes risk points on your driving licence.',
    targetCategoryLink: '/collections/commuter-ebikes',
    internalLinks: [
      { anchorText: '100% UK EAPC compliant commuter e-bikes', targetUrl: '/collections/commuter-ebikes', reason: 'High-intent commercial transfer' },
      { anchorText: 'lightweight folding e-bikes for public transport', targetUrl: '/collections/folding-ebikes', reason: 'Multi-modal commuter cross-link' },
      { anchorText: 'official EAPC compliance certificate check', targetUrl: '/pages/uk-eapc-regulations-legal-guide', reason: 'Trust verification link' }
    ],
    schemaType: 'Article + FAQPage (with 6 targeted PAA schema objects)',
    keyTakeaways: [
      'Motor must not exceed 250W maximum continuous rated power',
      'Assistance must cut out when cycling speed reaches 15.5 mph (25 km/h)',
      'Pedals must be in motion for motor to assist (except walk-assist up to 3.7mph / 6km/h)',
      'No road tax, V5C registration, MOT or insurance required in England, Scotland, or Wales',
      'Minimum rider age is strictly 14 years old'
    ]
  },
  {
    id: 'pillar-2-cycle-to-work',
    title: 'Cycle to Work Scheme Guide 2026: How to Save Up to 47% on a Tax-Free E-Bike',
    slug: 'cycle-to-work-scheme-guide-ebike-tax-savings',
    targetQuery: 'how does cycle to work scheme work for ebikes uk',
    searchIntent: 'Commercial / Transactional Bridge',
    estimatedVolume: 7800,
    wordCountTarget: '2,800 words',
    summary: 'A step-by-step walkthrough of HMRC salary sacrifice for electric bikes with no £1,000 cap under FCA guidelines. Includes live saving charts for 20%, 40%, and 45% UK taxpayers, employer approval guides, and instructions for major providers (Cyclescheme, Green Commute Initiative, Vivup).',
    targetCategoryLink: '/pages/cycle-to-work-scheme',
    internalLinks: [
      { anchorText: 'Cycle to Work E-Bike Tax Calculator', targetUrl: '/pages/cycle-to-work-scheme', reason: 'Direct CRO calculator funnel' },
      { anchorText: 'Apex Metro Pro Commuter', targetUrl: '/products/apex-metro-urban-pro-commuter-ebike', reason: 'Top-selling commuter conversion' },
      { anchorText: 'cargo e-bikes eligible for tax-free scheme', targetUrl: '/collections/cargo-ebikes', reason: 'High ticket item tax saving' }
    ],
    schemaType: 'HowTo + FAQPage + FinancialProduct',
    keyTakeaways: [
      'Save between 32% (Basic Rate 20%) and 42-47% (Higher & Additional Rates 40-45%)',
      'No £1,000 price cap when using Green Commute Initiative or FCA authorized providers',
      'Payments spread over 12, 18, 24, or 36 months deducted from gross salary before tax',
      'Safety accessories, waterproof panniers, locks, and helmets are 100% tax-free eligible'
    ]
  },
  {
    id: 'pillar-3-british-weather',
    title: 'Best Electric Bikes for British Rain & Winter: IP Ratings, Mudguards & Battery Care',
    slug: 'best-electric-bikes-british-weather-winter-rain',
    targetQuery: 'can you ride an electric bike in heavy rain uk',
    searchIntent: 'Informational & Commercial',
    estimatedVolume: 4200,
    wordCountTarget: '1,900 words',
    summary: 'Essential guide explaining IPX5, IPX6, and IPX7 ingress protection ratings on UK e-bikes. Covers cold-weather lithium-ion battery chemistry, preventing salt corrosion, optimal tyre pressure for greasy wet leaves, and the importance of full-wrap mudguards.',
    targetCategoryLink: '/collections/commuter-ebikes',
    internalLinks: [
      { anchorText: 'IPX6 and IPX7 waterproof commuter e-bikes', targetUrl: '/collections/commuter-ebikes', reason: 'Weather-ready feature category' },
      { anchorText: 'All-Weather Waterproof Pannier & Light Bundle', targetUrl: '/products/apex-british-weatherproof-pannier-light-bundle', reason: 'Essential accessory upsell' }
    ],
    schemaType: 'Article + FAQPage',
    keyTakeaways: [
      'Quality UK e-bikes must feature at least IPX5 (water jet) or IPX6 (heavy torrential downpours)',
      'Lithium battery capacity temporarily decreases by 10-15% in freezing temperatures (<0°C)',
      'Always bring removable batteries indoors to warm to room temperature before recharging',
      'Wash road grit and salt off drivetrains with low-pressure water, avoiding jet washes on bearings'
    ]
  },
  {
    id: 'pillar-4-london-commute',
    title: 'London Commuting by E-Bike: Navigating the Tube, Train Restrictions & ULEZ Zones',
    slug: 'london-commuting-ebike-tube-train-rules-ulez',
    targetQuery: 'can i take electric bike on london underground',
    searchIntent: 'Local / Commercial',
    estimatedVolume: 5100,
    wordCountTarget: '2,200 words',
    summary: 'A comprehensive urban survival guide for London cyclists. Detailed breakdown of Transport for London (TfL) policies across the Underground, Elizabeth Line, Overground, DLR, and National Rail. Explains how folding e-bikes bypass peak restrictions and save up to £2,500 annually on Zone 1-4 travelcards.',
    targetCategoryLink: '/collections/folding-ebikes',
    internalLinks: [
      { anchorText: 'TfL approved folding electric bikes', targetUrl: '/collections/folding-ebikes', reason: 'Direct product category match' },
      { anchorText: 'Apex Foldway Ultra 15.8kg e-bike', targetUrl: '/products/apex-foldway-ultra-folding-commuter-ebike', reason: 'Direct product conversion' }
    ],
    schemaType: 'Article + LocalBusiness + FAQPage',
    keyTakeaways: [
      'Full-size e-bikes are restricted on deep-level Tube lines and during peak hours (07:30-09:30 & 16:00-19:00)',
      'Folded e-bikes are classified as folded luggage and permitted on ALL TfL services at ANY time',
      'Saves £12.50 daily London ULEZ charges and Congestion Charge for vehicle drivers',
      'Protected cycle superhighways (CS3, C1, C6) enable fast cross-London transit without traffic delays'
    ]
  },
  {
    id: 'pillar-5-torque-hills',
    title: 'Hub Motor vs Mid-Drive on UK Hills: Torque (Nm) Comparison for Edinburgh & Bristol',
    slug: 'hub-motor-vs-mid-drive-ebike-torque-uk-hills',
    targetQuery: 'hub motor vs mid drive for steep hills uk',
    searchIntent: 'Commercial / Technical',
    estimatedVolume: 3900,
    wordCountTarget: '2,100 words',
    summary: 'In-depth engineering analysis comparing Newton Metres (Nm) torque curves between rear hub motors and crank mid-drive systems on steep UK terrain (Park Street Bristol, Dundas Street Edinburgh, Sheffield hills). Explains why mid-drives leverage bicycle gearing for 300% more climbing mechanical advantage.',
    targetCategoryLink: '/collections/electric-mountain-bikes-emtb',
    internalLinks: [
      { anchorText: 'high torque 85Nm mid-drive mountain bikes', targetUrl: '/collections/electric-mountain-bikes-emtb', reason: 'High performance category' },
      { anchorText: '80Nm mid-drive urban commuter bikes', targetUrl: '/collections/commuter-ebikes', reason: 'Urban hill-climbing solution' }
    ],
    schemaType: 'TechArticle + FAQPage',
    keyTakeaways: [
      'Mid-drive motors drive the bike chain directly, allowing motor torque to multiply through low rear gears',
      'Hub motors spin at wheel RPM, making them less efficient on steep sustained gradients under 8 mph',
      'For flat city commuting (London, Cambridge), a 45Nm hub motor provides quiet, maintenance-free riding',
      'For hilly UK cities (Bristol, Sheffield, Bath, Edinburgh), 70Nm - 85Nm mid-drive motors prevent stalling'
    ]
  }
];

export const UK_LOCAL_STORES = [
  {
    id: 'london-flagship',
    city: 'London',
    name: 'DirtVolt - London Flagship Hub',
    streetAddress: '142-144 Old Street, Shoreditch',
    addressLocality: 'London',
    postalCode: 'EC1V 9BW',
    addressCountry: 'GB',
    telephone: '+44 20 7946 0888',
    email: 'sales@ebikessales.online',
    openingHours: 'Mo-Sa 09:00-18:00, Su 10:30-16:30',
    latitude: 51.5255,
    longitude: -0.0886,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
  {
    id: 'manchester-hub',
    city: 'Manchester',
    name: 'DirtVolt - Manchester Regional Hub',
    streetAddress: 'Unit 4, Great Ancoats Street',
    addressLocality: 'Manchester',
    postalCode: 'M4 5AB',
    addressCountry: 'GB',
    telephone: '+44 161 832 9400',
    email: 'sales@ebikessales.online',
    openingHours: 'Mo-Sa 09:30-18:00',
    latitude: 53.4839,
    longitude: -2.2289,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
  {
    id: 'bristol-centre',
    city: 'Bristol',
    name: 'DirtVolt - Bristol Hill-Test & Service Centre',
    streetAddress: '78 Gloucester Road, Bishopston',
    addressLocality: 'Bristol',
    postalCode: 'BS7 8BN',
    addressCountry: 'GB',
    telephone: '+44 117 942 5500',
    email: 'sales@ebikessales.online',
    openingHours: 'Tu-Sa 09:00-17:30',
    latitude: 51.4745,
    longitude: -2.5935,
    hasTestTrack: true,
    certifiedMechanics: true,
  },
];
