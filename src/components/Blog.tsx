import React, { useState } from 'react';
import { ViewMode } from '../types';
import { UK_BLOG_PILLARS } from '../data/seoArchitectureData';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Zap, 
  CloudRain, 
  MapPin, 
  HelpCircle, 
  Share2, 
  ChevronRight, 
  X, 
  Bike,
  Sparkles,
  BookmarkCheck,
  Send,
  ExternalLink
} from 'lucide-react';

interface BlogProps {
  onNavigateToView: (view: ViewMode) => void;
}

export interface DetailedArticle {
  id: string;
  title: string;
  slug: string;
  category: 'UK EAPC & Laws' | 'Cycle to Work & Tax' | 'British Weather & Care' | 'London & City Commutes' | 'Motor & Tech Guides';
  author: {
    name: string;
    role: string;
    avatar: string;
    verified: boolean;
  };
  publishedDate: string;
  readTime: string;
  targetQuery: string;
  searchVolume: number;
  featured?: boolean;
  heroImage: string;
  summary: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string[];
    callout?: {
      title: string;
      text: string;
      type: 'info' | 'warning' | 'tip';
    };
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProducts: {
    name: string;
    price: string;
    tag: string;
    slug: string;
  }[];
}

const ARTICLES_DATABASE: DetailedArticle[] = [
  {
    id: 'pillar-1-eapc-laws',
    title: 'UK E-Bike Laws 2026: 250W Limits, Throttle Legality & EAPC Regulations',
    slug: 'uk-ebike-laws-explained-eapc-regulations',
    category: 'UK EAPC & Laws',
    author: {
      name: 'James Thornton',
      role: 'Head of UK Regulatory Compliance & Cytech Master Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '14 February 2026',
    readTime: '8 min read',
    targetQuery: 'are electric bikes legal in uk 250w rules',
    searchVolume: 9900,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=80',
    summary: 'The definitive legal breakdown of UK Electrically Assisted Pedal Cycle (EAPC) legislation under the Electrically Assisted Pedal Cycles Regulations 1983 (SI 1983/1168) and 2015 amendments. Understand motor continuous rating, 15.5 mph assistance limits, throttle rules, and why non-compliant bikes risk driving licence points.',
    keyTakeaways: [
      'Motor continuous rated power must not exceed 250 Watts under UK law.',
      'Electrical assistance must automatically cease when road speed reaches 15.5 mph (25 km/h).',
      'Pedals must be in forward motion for motor assistance (twist-throttles over 3.7mph are classified as motorbikes).',
      'No road tax, DVLA registration, MOT, or compulsory insurance required in England, Scotland, or Wales.',
      'The rider must be at least 14 years of age.'
    ],
    sections: [
      {
        heading: '1. What Qualifies as a Legal Electrically Assisted Pedal Cycle (EAPC)?',
        content: [
          'In the United Kingdom, electric bicycles are legally categorized as Electrically Assisted Pedal Cycles (EAPCs). If an e-bike satisfies the strict statutory criteria set out under the Electrically Assisted Pedal Cycles Regulations 1983 (as amended in 2015) and European Standard EN 15194, it is treated under UK law exactly like a conventional pedal cycle.',
          'This means riders are legally permitted on all UK public roads, designated cycle lanes, bus lanes where cycling is permitted, and bridleways—all without needing a driving licence, road tax, V5C logbook registration, or compulsory motor insurance.'
        ],
        callout: {
          title: 'Official UK Statutory Reference',
          text: 'Electrically Assisted Pedal Cycles Regulations 1983 (SI 1983/1168), as amended by SI 2015/54. All Apex Ebikes are pre-certified with CE/UKCA and EN 15194 laser-etched frame plates.',
          type: 'info'
        }
      },
      {
        heading: '2. The Three Cardinal Technical Constraints',
        content: [
          'First, the electric motor must have a maximum continuous rated power of 250 Watts. Peak burst output during initial acceleration or hill climbing can momentarily exceed this, provided the certified continuous steady-state output remains at 250W.',
          'Second, electrical motor assistance must automatically cut off when the bicycle reaches 15.5 mph (25 km/h). You may pedal faster using your own leg strength, but the motor will not contribute assistance above this threshold.',
          'Third, the bicycle must have operable pedals that require progressive forward rotation to engage the motor assist sensor (torque or cadence).'
        ]
      },
      {
        heading: '3. The "Twist Throttle" Trap & Police Enforcement',
        content: [
          'One of the most frequent misconceptions among UK cyclists concerns full-speed twist throttles. Under UK rules, "walk-assist" throttles that propel the bike without pedalling up to 3.7 mph (6 km/h) are legal for pushing heavy bikes up ramps.',
          'However, any throttle that propels the bike over 3.7 mph without pedalling classifies the vehicle as an L1e-A / L1e-B motorized vehicle. Riding an unregistered throttle bike on UK roads or pavements risks 6 penalty points on your driving licence, a £300 fixed penalty notice, and vehicle confiscation under Section 165A of the Road Traffic Act.'
        ],
        callout: {
          title: 'Legal Warning',
          text: 'Never purchase unregulated kits or off-road throttles claiming to be road-legal without type approval. Apex Ebikes are 100% road-legal right out of the box.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        question: 'Do I need insurance or a driving licence to ride an e-bike in the UK?',
        answer: 'No. Provided the e-bike meets UK EAPC rules (250W continuous rated motor, 15.5mph cutoff, pedal-assist), no driving licence, CBT test, road tax, or compulsory insurance is required.'
      },
      {
        question: 'Can a 13-year-old legally ride an electric bike on UK public roads?',
        answer: 'No. The UK legal minimum age to ride an EAPC on public roads and cycle paths is strictly 14 years old under the Road Traffic Act.'
      },
      {
        question: 'Can I ride my 250W e-bike on UK canal towpaths and bridleways?',
        answer: 'Yes! EAPCs are permitted on all UK public bridleways and Canal & River Trust towpaths, subject to the pedestrian priority code.'
      }
    ],
    relatedProducts: [
      { name: 'Apex Metro Urban Pro Commuter', price: '£1,899', tag: 'Top Road Legal Commuter', slug: 'apex-metro-urban-pro-commuter-ebike' },
      { name: 'Apex Citylite Step-Through', price: '£1,649', tag: 'Lightweight Comfort', slug: 'apex-citylite-step-through-urban-ebike' }
    ]
  },
  {
    id: 'pillar-2-cycle-to-work',
    title: 'Cycle to Work Scheme Guide 2026: Save 32% to 47% on a Tax-Free E-Bike',
    slug: 'cycle-to-work-scheme-guide-ebike-tax-savings',
    category: 'Cycle to Work & Tax',
    author: {
      name: 'Eleanor Vance',
      role: 'UK Employee Benefits & Sustainable Transit Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '10 February 2026',
    readTime: '7 min read',
    targetQuery: 'how does cycle to work scheme work for ebikes uk',
    searchVolume: 7800,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80',
    summary: 'Everything you need to know about HMRC salary sacrifice for e-bikes. Discover how basic and higher-rate UK taxpayers save hundreds of pounds with no £1,000 cap, interest-free monthly repayments, and instant certificate redemption with Cyclescheme, GCI, and Vivup.',
    keyTakeaways: [
      'Basic rate taxpayers save ~32% on Income Tax and National Insurance.',
      'Higher rate (40%) and additional rate (45%) taxpayers save up to 42% - 47%.',
      'The previous £1,000 price ceiling has been removed under FCA-authorised schemes.',
      'Deductions are taken directly from gross salary before tax over 12, 18, 24, or 36 months.',
      'Safety equipment, locks, waterproof panniers, and helmets are 100% tax-deductible.'
    ],
    sections: [
      {
        heading: '1. How the HMRC Salary Sacrifice Mechanism Operates',
        content: [
          'The UK Government introduced the Cycle to Work initiative under the Finance Act to encourage greener, healthier commutes. It works through a gross salary sacrifice arrangement between you and your employer.',
          'Your employer pays for the e-bike and equipment upfront. You then hire the equipment from them over an agreed hire period (typically 12, 18, or 24 months), with monthly hire fees deducted from your gross pay before Income Tax and National Insurance Contributions (NIC) are calculated.'
        ],
        callout: {
          title: 'Key Benefit for Employees',
          text: 'Because your taxable salary is reduced by the cost of the bike, you pay significantly less PAYE Income Tax and Class 1 National Insurance every single month.',
          type: 'tip'
        }
      },
      {
        heading: '2. Real-World Savings Comparison Matrix',
        content: [
          'For a £2,000 electric commuter bike over a 12-month hire period:',
          '• Basic Rate (20% Tax + 8% NI): You save £560 overall, paying only £120.00 net per month.',
          '• Higher Rate (40% Tax + 2% NI): You save £840 overall, paying only £96.67 net per month.',
          '• Top Rate (45% Tax + 2% NI): You save £940 overall, paying only £88.33 net per month.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is there a £1,000 price limit on electric bikes through Cycle to Work?',
        answer: 'No. Following government updates, employers working with FCA-regulated scheme providers (such as Green Commute Initiative, Cyclescheme, and Vivup) can approve e-bikes of any value.'
      },
      {
        question: 'Can I include accessories like helmets, panniers, and locks in my voucher?',
        answer: 'Yes! Safety accessories, Gold-rated locks, high-visibility clothing, and waterproof pannier bags can all be bundled into your tax-free salary sacrifice certificate.'
      }
    ],
    relatedProducts: [
      { name: 'Apex Hauler Longtail Cargo', price: '£2,699', tag: 'C2W Favourite (£62/mo)', slug: 'apex-hauler-longtail-electric-cargo-bike' },
      { name: 'Apex Foldway Ultra 20"', price: '£1,499', tag: 'TfL Commuter (£38/mo)', slug: 'apex-foldway-ultra-folding-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-3-british-weather',
    title: 'Best Electric Bikes for British Rain & Winter: IPX6 Ratings, Road Salt & Battery Care',
    slug: 'best-electric-bikes-british-weather-winter-rain',
    category: 'British Weather & Care',
    author: {
      name: 'Marcus Bell',
      role: 'Master Workshop Lead & Cytech Level 3 Assessor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '02 February 2026',
    readTime: '6 min read',
    targetQuery: 'can you ride an electric bike in heavy rain uk',
    searchVolume: 4200,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80',
    summary: 'A technical guide to surviving UK downpours, salted winter tarmac, and freezing temperatures. Understand IPX5 vs IPX6 ingress ratings, cold-weather lithium battery chemistry, and essential weekly winter maintenance routines.',
    keyTakeaways: [
      'Look for IPX6 water ingress ratings on motors and battery housings for torrential UK downpours.',
      'Lithium-ion cells temporarily lose 10% - 15% range below 0°C—always charge batteries at room temperature.',
      'Never pressure-wash bottom brackets or motor hubs—use low-pressure water and soft bike brushes.',
      'Full-length 360° mudguards prevent salty spray from corroding drivetrain components and wiring looms.'
    ],
    sections: [
      {
        heading: '1. Ingress Protection (IP) Ratings Explained for Wet British Roads',
        content: [
          'The British climate is notorious for sudden rainfall, surface puddles, and heavily salted winter roads. Standard bicycles may rust, but on an e-bike, moisture ingress into motor controllers or battery pins can cause fatal shorts.',
          'An IPX5 rating protects against low-pressure water spray, but IPX6 testing guarantees protection against high-pressure water jets and heavy deluge conditions. All Apex Ebikes feature IPX6 internal wire harnesses, silicone-sealed battery ports, and conformal-coated printed circuit boards.'
        ],
        callout: {
          title: 'Workshop Golden Rule',
          text: 'Never charge a freezing cold battery immediately after a winter commute. Bring it inside and allow it to reach room temperature (18°C) before plugging into the charger to protect internal cell longevity.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        question: 'Can I leave my electric bike parked outside in continuous UK rain?',
        answer: 'While quality e-bikes with IPX6 ratings handle riding in torrential rain, prolonged outdoor storage without a breathable waterproof cover can allow trapped condensation to affect electrical contacts. We recommend bringing the battery inside.'
      }
    ],
    relatedProducts: [
      { name: 'Apex Weatherproof Pannier & Light Bundle', price: '£149', tag: 'All-Weather Kit', slug: 'apex-british-weatherproof-pannier-light-bundle' },
      { name: 'Apex Metro Urban Pro Commuter', price: '£1,899', tag: 'IPX6 Rated', slug: 'apex-metro-urban-pro-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-4-london-commute',
    title: 'London Commuting by E-Bike: Tube Rules, Train Restrictions & ULEZ Zone Savings',
    slug: 'london-commuting-ebike-tube-train-rules-ulez',
    category: 'London & City Commutes',
    author: {
      name: 'James Thornton',
      role: 'Head of UK Regulatory Compliance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '26 January 2026',
    readTime: '9 min read',
    targetQuery: 'can i take electric bike on london underground',
    searchVolume: 5100,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    summary: 'The comprehensive urban navigator guide for London commuters. Learn Transport for London (TfL) policies for the Tube, Elizabeth Line, Overground, and National Rail, plus how e-bikes bypass £12.50 daily ULEZ charges.',
    keyTakeaways: [
      'Full-size e-bikes are prohibited on deep Tube lines and restricted during peak hours (07:30-09:30 & 16:00-19:00).',
      'Compact folding e-bikes (under 20" wheels) are classified as folded luggage and permitted on ALL TfL services at ALL times.',
      'Saves £12.50 daily ULEZ fees, £15 Congestion Charge, and up to £2,800 annually on Zone 1-4 travelcards.',
      'Superhighway corridors (CS3, C1, C6) provide protected, uninterrupted cycle transit across Central London.'
    ],
    sections: [
      {
        heading: '1. Transport for London (TfL) Bike Carriage Rules',
        content: [
          'Navigating multi-modal journeys in London requires understanding TfL carriage rules. Non-folding bicycles cannot be taken on sub-surface lines (Circle, District, Hammersmith & City, Metropolitan) during morning or evening peak rush hours.',
          'In contrast, folding electric bikes that fold completely in half with pedals tucked away are legally defined as personal luggage. You can carry an Apex Foldway Ultra onto the Central, Northern, Piccadilly, or Elizabeth lines at 08:30 AM without hesitation.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are folding e-bikes allowed on London buses?',
        answer: 'Yes, at the driver\'s discretion, provided the bike is folded and placed in the designated luggage storage area without obstructing the wheelchair space.'
      }
    ],
    relatedProducts: [
      { name: 'Apex Foldway Ultra 20"', price: '£1,499', tag: 'TfL Approved Fold', slug: 'apex-foldway-ultra-folding-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-5-torque-hills',
    title: 'Hub Motor vs Mid-Drive on UK Hills: Torque (Nm) Comparison for Bristol & Edinburgh',
    slug: 'hub-motor-vs-mid-drive-ebike-torque-uk-hills',
    category: 'Motor & Tech Guides',
    author: {
      name: 'Marcus Bell',
      role: 'Master Workshop Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '18 January 2026',
    readTime: '7 min read',
    targetQuery: 'hub motor vs mid drive for steep hills uk',
    searchVolume: 3900,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    summary: 'An engineering breakdown comparing Newton Metres (Nm) torque curves between rear hub motors and crank mid-drive systems on steep UK gradients like Park Street Bristol, Highgate Hill London, and Dundas Street Edinburgh.',
    keyTakeaways: [
      'Mid-drive motors deliver power through the bike chain, multiplying mechanical torque through your gears.',
      'Hub motors spin independently at wheel speed, making them ideal and quiet for flatter cities like Cambridge.',
      'For gradients steeper than 10%, an 80Nm-85Nm mid-drive delivers 3x higher hill climbing efficiency.',
      'Torque sensors measure leg pressure to provide instant, natural electric assistance compared to laggy cadence sensors.'
    ],
    sections: [
      {
        heading: '1. Why Torque (Nm) Matters More Than Wattage for UK Hills',
        content: [
          'Because all UK-legal e-bikes are capped at 250 Watts continuous power, the true differentiator for climbing steep British hills is torque output measured in Newton Metres (Nm).',
          'A mid-drive motor positioned at the bottom bracket drives the front chainring directly. When you shift into a low climbing gear on your rear cassette, the motor benefits from the exact same mechanical gearing advantage as your legs, keeping motor RPM high and preventing overheating.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which is better for Sheffield or Bristol: hub motor or mid-drive?',
        answer: 'For hilly topography like Bristol, Sheffield, or Bath, a mid-drive motor with 75Nm to 85Nm torque is strongly recommended over a rear hub motor.'
      }
    ],
    relatedProducts: [
      { name: 'Apex Summit-X e-MTB', price: '£3,499', tag: '85Nm Shimano EP801', slug: 'apex-summit-x-electric-mountain-bike-emtb' },
      { name: 'Apex Metro Urban Pro Commuter', price: '£1,899', tag: '80Nm Mid-Drive', slug: 'apex-metro-urban-pro-commuter-ebike' }
    ]
  }
];

export const Blog: React.FC<BlogProps> = ({ onNavigateToView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<DetailedArticle | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const CATEGORIES = [
    'All',
    'UK EAPC & Laws',
    'Cycle to Work & Tax',
    'British Weather & Care',
    'London & City Commutes',
    'Motor & Tech Guides'
  ];

  const filteredArticles = ARTICLES_DATABASE.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesQuery = !searchQuery.trim() || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.targetQuery.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredArticle = ARTICLES_DATABASE.find(a => a.featured) || ARTICLES_DATABASE[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail('');
      }, 5000);
    }
  };

  return (
    <div className="space-y-12 pb-16 animate-fade-in text-slate-800">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white border-b border-slate-800 pt-10 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Apex UK Knowledge Base & Commuter Journal</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
                The UK Electric Bike Authority
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Expert technical guides, UK EAPC road regulations, HMRC Cycle to Work tax strategies, and winter commuting wisdom verified by Cytech Level 3 mechanics.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search legal guides, weather, C2W..."
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-white text-xs cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 border-t border-slate-800/80">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Pillar Hero Card (If viewing All / No search query) */}
      {!searchQuery && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 group">
            <div className="lg:col-span-6 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-slate-900">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                Featured Authority Guide
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-xs text-white p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-emerald-400">Target Volume: {featuredArticle.searchVolume.toLocaleString()} monthly UK searches</span>
                <span className="text-slate-300">{featuredArticle.readTime}</span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.publishedDate}</span>
                </div>

                <h2 
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {featuredArticle.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                {/* Key Takeaways snippet */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                    Essential Key Takeaways:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {featuredArticle.keyTakeaways.slice(0, 3).map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <span>{featuredArticle.author.name}</span>
                      {featuredArticle.author.verified && (
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
              {selectedCategory === 'All' ? 'Latest Guides & Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xs text-slate-500">
              Showing {filteredArticles.length} publication{filteredArticles.length === 1 ? '' : 's'}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
            <button
              onClick={() => onNavigateToView('shop')}
              className="hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Shop Models</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No articles match your query</h3>
            <p className="text-xs text-slate-500">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                {/* Thumbnail */}
                <div 
                  className="relative aspect-16/9 bg-slate-100 overflow-hidden cursor-pointer"
                  onClick={() => setActiveArticle(article)}
                >
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/85 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                    {article.category}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-white/90 text-slate-900 text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-2xs backdrop-blur-xs">
                    {article.readTime}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 
                      onClick={() => setActiveArticle(article)}
                      className="font-bold text-slate-900 text-base font-heading line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Author & Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-xs font-semibold text-slate-700 line-clamp-1">
                        {article.author.name}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. Newsletter & 2026 Handbook Download Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-blue-800/60 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free 2026 Commuter Whitepaper</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Get the UK E-Bike Tax & Buying Handbook
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Download our 42-page PDF guide covering HMRC salary sacrifice rules, London Tube travel diagrams, IP water testing results, and Cytech winter maintenance checklists.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {isSubscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-6 py-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold block text-white">Handbook dispatched!</span>
                  <span>Check your inbox for your free UK download link.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your work or personal email..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="bg-slate-800/90 border border-slate-700 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Handbook</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-scale-in text-slate-800">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 p-4 sm:p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-md">
                  {activeArticle.category}
                </span>
                <span className="text-xs text-slate-400">• {activeArticle.readTime}</span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Title & Author */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                  {activeArticle.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeArticle.author.avatar}
                      alt={activeArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                        <span>{activeArticle.author.name}</span>
                        {activeArticle.author.verified && (
                          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500">{activeArticle.author.role}</div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400">
                    Published: {activeArticle.publishedDate}
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden aspect-16/9 bg-slate-100">
                <img
                  src={activeArticle.heroImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Executive Summary */}
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono">
                  Executive Briefing:
                </span>
                <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
                  {activeArticle.summary}
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-emerald-600" />
                  <span>Key Practical Takeaways</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {activeArticle.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Sections */}
              <div className="space-y-8">
                {activeArticle.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                      {section.heading}
                    </h2>
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {section.callout && (
                      <div className={`p-4 rounded-xl text-xs sm:text-sm border ${
                        section.callout.type === 'warning'
                          ? 'bg-amber-50 border-amber-200 text-amber-900'
                          : section.callout.type === 'tip'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-slate-100 border-slate-200 text-slate-800'
                      }`}>
                        <div className="font-bold mb-1">{section.callout.title}</div>
                        <div>{section.callout.text}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {activeArticle.faqs.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {activeArticle.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900">{faq.question}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Shop Models CTA */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm font-heading">Recommended Road-Legal Models</h3>
                    <p className="text-xs text-slate-300">All Apex Ebikes are pre-configured to comply 100% with these standards.</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onNavigateToView('shop');
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Shop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeArticle.relatedProducts.map((rel, rIdx) => (
                    <div key={rIdx} className="bg-slate-800/90 border border-slate-700 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{rel.name}</div>
                        <div className="text-[11px] text-emerald-400">{rel.tag}</div>
                      </div>
                      <div className="text-xs font-bold text-white font-mono">{rel.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between">
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900 px-4 py-2 cursor-pointer"
              >
                ← Back to All Articles
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onNavigateToView('cycle-to-work');
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  Tax Calculator
                </button>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onNavigateToView('shop');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
