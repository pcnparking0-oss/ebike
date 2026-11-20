import React, { useState } from 'react';
import { ViewMode } from '../types';
import { UK_BLOG_PILLARS } from '../data/seoArchitectureData';
import { submitNewsletterSubscription } from '../services/formApi';
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
  category: 'NL Laws & RDW' | 'Fietsplan & Tax' | 'Dutch Weather & Care' | 'Randstad & NS Rail' | 'Motor & Tech Guides';
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
    title: 'Netherlands E-Bike Laws 2026: 250W Limits, RDW L1e-B Plates & Fietspad Rules',
    slug: 'netherlands-ebike-laws-rdw-regulations-explained',
    category: 'NL Laws & RDW',
    author: {
      name: 'Pieter van Dijk',
      role: 'Head of NL Regulatory Compliance & Master Technician',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '14 February 2026',
    readTime: '8 min read',
    targetQuery: 'are electric dirt bikes street legal in netherlands rdw rules',
    searchVolume: 9900,
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=80',
    summary: 'The definitive legal breakdown of Dutch Wegenverkeerswet 1994 & EU Standard EN 15194 electric bicycle regulations. Understand 250W fietspad pedelecs, 25 km/h assistance limits, RDW L1e-B speed pedelec/moped kenteken plates, and why non-homologated throttled dirt bikes belong on private land.',
    keyTakeaways: [
      'Standard fietspad pedelecs must not exceed 250 Watts continuous rated motor power.',
      'Electrical assistance must automatically cease when road speed reaches 25 km/h.',
      'Pedals must be in forward motion for motor assistance (walk-assist is capped at 6 km/h).',
      'Homologated L1e-B models (up to 45 km/h) require an RDW kenteken plate, WA insurance, AM/B licence, and helmet.',
      'High-power electric motocross dirt bikes (3kW–60kW) are for closed MX tracks and private terrain.'
    ],
    sections: [
      {
        heading: '1. What Qualifies as a Legal Fietspad E-Bike (Pedelec) in the Netherlands?',
        content: [
          'In the Netherlands, electric bicycles regulated under European Standard EN 15194 and the Dutch Wegenverkeerswet 1994 are legally treated identically to regular bicycles (fietsen) when they satisfy strict output thresholds.',
          'This means riders are legally permitted on all Dutch fietspaden and public roads without needing an RDW kenteken number plate, driving licence, road tax, or compulsory WA motor insurance.'
        ],
        callout: {
          title: 'Official Netherlands Statutory Reference',
          text: 'Dutch Wegenverkeerswet 1994 (Regeling voertuigen) & EU Standard EN 15194. Every DirtVolt Netherlands street model carries authentic CE and manufacturer serial/COC documentation.',
          type: 'info'
        }
      },
      {
        heading: '2. The Three Cardinal Fietspad Constraints',
        content: [
          'First, the electric motor must have a maximum continuous rated output of 250 Watts. Peak hill or headwind torque bursts can momentarily assist riders, provided continuous rated steady-state output complies at 250W.',
          'Second, electrical motor assistance must cut off smoothly when the bicycle reaches 25 km/h. You can pedal faster under your own leg power, but the motor stops assisting beyond 25 km/h.',
          'Third, motor propulsion must require forward pedal rotation (torque or cadence sensor).'
        ]
      },
      {
        heading: '3. RDW L1e-B Moped Plates vs Off-Road MX Terrain Rules',
        content: [
          'Models equipped with twist throttles above 6 km/h or continuous power up to 4,000W (45 km/h) can be ridden on Dutch public roads if factory-homologated under EU L1e-B type approval—such as the Sur-Ron Light Bee L1e.',
          'Riding an unregistered, non-homologated electric dirt bike on Dutch public roads or fietspaden risks a €310+ Politie fine, liability claims in an accident, and vehicle confiscation.'
        ],
        callout: {
          title: 'Legal Warning',
          text: 'Always ride non-homologated MX machines strictly on licensed Dutch motocross tracks or private terrain, or choose our COC-ready L1e-B models for official RDW plate registration.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        question: 'Do I need insurance or a driving licence for a 250W e-bike in the Netherlands?',
        answer: 'No. A standard 250W / 25 km/h pedal-assist e-bike requires no RDW kenteken, WA insurance, or driving licence in the Netherlands. Only L1e-B mopeds/speed pedelecs (45 km/h) require RDW registration, WA insurance, AM/B licence, and an approved helmet.'
      },
      {
        question: 'Which helmet is required for L1e-B electric mopeds and speed pedelecs?',
        answer: 'Since 1 January 2023, all bromfiets and L1e-B speed pedelec riders in the Netherlands must wear an approved helmet (ECE 22.05/22.06 motorcycle/moped helmet or NTA 8776 speed pedelec helmet).'
      },
      {
        question: 'Can I ride L1e-B electric dirt bikes on city cycle paths in Amsterdam or Rotterdam?',
        answer: 'Road-registered L1e-B vehicles follow Dutch bromfiets rules: they use the main carriageway (rijbaan) where speed limits are 50 km/h unless signs indicate a mandatory fiets/bromfietspad.'
      }
    ],
    relatedProducts: [
      { name: 'Sur-Ron Light Bee X L1e Road-Legal', price: '€4,699', tag: 'RDW L1e-B Homologated', slug: 'sur-ron-light-bee-l1e' },
      { name: 'DirtVolt Metro Pro Commuter', price: '€1,899', tag: '250W Fietspad Legal', slug: 'apex-metro-urban-pro-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-2-cycle-to-work',
    title: 'Dutch Fietsplan & WKR Guide 2026: Save up to 49.5% Tax on Your E-Bike',
    slug: 'dutch-fietsplan-wkr-ebike-tax-savings-guide',
    category: 'Fietsplan & Tax',
    author: {
      name: 'Sanne Vermeer',
      role: 'NL Employee Benefits & WKR Mobility Advisor',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '10 February 2026',
    readTime: '7 min read',
    targetQuery: 'how does fietsplan wkr work for ebikes netherlands',
    searchVolume: 7800,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80',
    summary: 'Everything you need to know about the Dutch Werkkostenregeling (WKR) Fietsplan and corporate bicycle leasing. Discover how Box 1 taxpayers save up to 49.5%, how 7% fiscal bijtelling works with Lease a Bike Nederland, and how ZZP / B.V. business owners deduct 21% Dutch BTW.',
    keyTakeaways: [
      'Box 1 bracket taxpayers save 36.97% up to 49.50% through gross salary exchange or employer WKR budget.',
      'There is no statutory €749 cap anymore under the modern Dutch Werkkostenregeling (WKR).',
      'Corporate lease riders pay just 7% annual fiscal bijtelling on the recommended retail price.',
      'Registered ZZP / B.V. businesses can reclaim 21% Dutch BTW and claim KIA investment deductions.',
      'ART-2+ locks, waterproof Ortlieb panniers, and helmets can be included on the same Fietsplan quote.'
    ],
    sections: [
      {
        heading: '1. How the Dutch WKR Fietsplan & Lease Mechanism Operates',
        content: [
          'Under the Dutch Werkkostenregeling (WKR), employers can allocate tax-free discretionary space (vrije ruimte) or apply gross salary / IKC exchanges toward commuting bicycles and e-bikes of any price.',
          'Alternatively, corporate lease schemes such as Lease a Bike Nederland, Hellorider, and FiscFree bundle the e-bike, ART-2 theft insurance, and Amsterdam workshop servicing into one pre-tax monthly payroll benefit subject to only 7% annual bijtelling.'
        ],
        callout: {
          title: 'Key Benefit for Dutch Employees',
          text: 'Because deductions occur before Box 1 income tax (36.97% or 49.50%), an e-bike typically costs less per month than an NS Traject Vrij rail subscription.',
          type: 'tip'
        }
      },
      {
        heading: '2. Real-World Euro (€) Savings Comparison Matrix',
        content: [
          'For a €2,000 electric bike package reimbursed via WKR / gross-net salary arrangement:',
          '• Box 1 Standard Bracket (36.97%): You save €739.40 overall, reducing effective cost to €1,260.60.',
          '• Effective WKR / IKC Bracket (42.00%): You save €840.00 overall, paying an effective net of €1,160.00.',
          '• Box 1 Top Bracket (49.50%): You save €990.00 overall, cutting the net cost nearly in half to €1,010.00.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is there still a €749 price cap on Dutch Fietsplan e-bikes?',
        answer: 'No! The old €749 statutory cap was replaced by the Werkkostenregeling (WKR). Modern employers working with Lease a Bike, FiscFree, or Hellorider routinely approve €2,000–€6,000+ e-bikes.'
      },
      {
        question: 'Can I include an ART-2 lock, helmet, and waterproof bags in my Fietsplan quote?',
        answer: 'Yes! Dutch insurers require an ART-2 or ART-3 certified lock, and it can be bundled directly into our official 21% BTW employer proforma quote.'
      }
    ],
    relatedProducts: [
      { name: 'DirtVolt Hauler Longtail Cargo', price: '€2,699', tag: 'WKR Family Favourite', slug: 'apex-hauler-longtail-electric-cargo-bike' },
      { name: 'DirtVolt Foldway Ultra 20"', price: '€1,499', tag: 'NS Train Commuter', slug: 'apex-foldway-ultra-folding-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-3-british-weather',
    title: 'Best Electric Bikes for Dutch Rain & Coastal Headwinds: IP67 Protection & Winter Care',
    slug: 'best-electric-bikes-dutch-rain-coastal-wind',
    category: 'Dutch Weather & Care',
    author: {
      name: 'Bram Hendriks',
      role: 'Amsterdam Master Workshop Lead & E-Mobility Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '02 February 2026',
    readTime: '6 min read',
    targetQuery: 'waterproof electric bike dutch rain wind ip67',
    searchVolume: 4200,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80',
    summary: 'A technical guide to surviving Dutch coastal rain squalls, salted winter bike paths (pekel), and Force 6 Randstad headwinds. Understand IPX5 vs IPX6/IP67 ingress ratings, cold-weather lithium battery chemistry, and essential winter maintenance routines.',
    keyTakeaways: [
      'Choose IPX6 or IP67 water-sealed motors, connectors, and battery housings for year-round Dutch rain.',
      'Lithium-ion cells temporarily lose 10% - 15% range below 0°C—always charge packs indoors at room temperature.',
      'Never blast bottom brackets, wheel bearings, or displays with a pressure washer—use low-pressure water.',
      'Rinse winter road salt (pekel) from brake calipers and chainrings every week to prevent corrosion.'
    ],
    sections: [
      {
        heading: '1. Ingress Protection (IP) Ratings Explained for Wet Dutch Fietspaden',
        content: [
          'Dutch riders face relentless sideways rain, coastal wind spray across Zuid-Holland and Noord-Holland, and winter road salt (pekel). While ordinary chains rust, water intrusion into unsealed controllers can shut down electronics.',
          'An IPX5 rating protects against light jets, whereas IPX6 and IP67 hardware—standard across our DirtVolt Sur-Ron, Talaria, and urban commuter lines—features waterproof Higo connectors, silicone-sealed battery ports, and conformal-coated PCBs.'
        ],
        callout: {
          title: 'Amsterdam Workshop Golden Rule',
          text: 'Never charge a freezing cold lithium battery immediately after a winter ride. Bring the removable pack indoors and let it reach 18°C before connecting the fast charger.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        question: 'Can I ride my Sur-Ron or electric commuter in heavy Dutch rain?',
        answer: 'Yes. Models rated IPX5/IP65+ handle heavy rain and wet trails effortlessly. When parking outdoors overnight in Amsterdam or Rotterdam, we recommend using a breathable cover and storing the removable battery indoors.'
      }
    ],
    relatedProducts: [
      { name: 'Waterproof Pannier & StVZO Light Bundle', price: '€149', tag: 'All-Weather Kit', slug: 'apex-british-weatherproof-pannier-light-bundle' },
      { name: 'DirtVolt Metro Pro Commuter', price: '€1,899', tag: 'IPX6 Rated', slug: 'apex-metro-urban-pro-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-4-london-commute',
    title: 'Amsterdam, Rotterdam & NS Rail Commuting: Multi-Modal E-Bike & Fietspad Survival Guide',
    slug: 'amsterdam-rotterdam-ns-train-ebike-commuting',
    category: 'Randstad & NS Rail',
    author: {
      name: 'Pieter van Dijk',
      role: 'Head of NL Regulatory Compliance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '26 January 2026',
    readTime: '9 min read',
    targetQuery: 'can i take folding electric bike on ns train netherlands',
    searchVolume: 5100,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    summary: 'The complete multi-modal guide for Randstad commuters. Learn Nederlandse Spoorwegen (NS) bike carriage rules for Sprinter & Intercity trains, why folding e-bikes travel free even in rush hour, and how ART-2 locks keep your ANWB / ENRA insurance valid.',
    keyTakeaways: [
      'Full-size e-bikes require a €7.50 NS Dagkaart Fiets and are banned during weekday peak hours (06:30–09:00 & 16:00–18:30).',
      'Compact folding e-bikes travel 100% FREE as hand luggage on ALL NS, GVB Amsterdam, RET Rotterdam, and HTM trains at ALL hours.',
      'Skip Amsterdam €7.50+/hr city parking fees and ring-road traffic jams every day.',
      'Pair your e-bike with a certified ART-2 or ART-3 chain lock required by Dutch bike insurers.'
    ],
    sections: [
      {
        heading: '1. Nederlandse Spoorwegen (NS) & Metro Bike Rules',
        content: [
          'Combining rail and electric cycling across Amsterdam Centraal, Utrecht Centraal, and Rotterdam Centraal requires knowing NS peak restrictions. Non-folding bicycles cannot board NS trains between 06:30–09:00 and 16:00–18:30.',
          'In contrast, a compact folding e-bike like the Foldway Ultra folds in under 10 seconds and counts as normal luggage—riding free with you onto every Intercity Direct and Sprinter during rush hour.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are folding e-bikes allowed on Amsterdam GVB Metro and trams?',
        answer: 'Yes! When folded cleanly, compact folding electric bikes travel free of charge on GVB Amsterdam Metro, RET Rotterdam Metro, and NS trains without peak-hour restrictions.'
      }
    ],
    relatedProducts: [
      { name: 'DirtVolt Foldway Ultra 20"', price: '€1,499', tag: 'NS Train Approved Fold', slug: 'apex-foldway-ultra-folding-commuter-ebike' }
    ]
  },
  {
    id: 'pillar-5-torque-hills',
    title: 'Hub Motor vs Mid-Drive in the Netherlands: Torque for Headwinds, Viaducts & Veluwe Trails',
    slug: 'hub-motor-vs-mid-drive-torque-veluwe-headwinds',
    category: 'Motor & Tech Guides',
    author: {
      name: 'Bram Hendriks',
      role: 'Amsterdam Master Workshop Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      verified: true
    },
    publishedDate: '18 January 2026',
    readTime: '7 min read',
    targetQuery: 'hub motor vs mid drive netherlands wind trails',
    searchVolume: 3900,
    featured: false,
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
    summary: 'An engineering breakdown comparing Newton Metres (Nm) torque curves between rear hub motors, 85Nm crank mid-drives, and direct-gearbox electric dirt drivetrains against Dutch coastal headwinds, steep viaducts, and sandy Veluwe / Utrechtse Heuvelrug climbs.',
    keyTakeaways: [
      'Mid-drive and gearbox drivetrains deliver massive wheel torque without bogging down in deep Veluwe sand or steep Limburg hills.',
      'Rear hub motors spin silently and need minimal drivetrain maintenance across flat Amsterdam and Utrecht city streets.',
      'Against Windkracht 6 coastal headwinds, 75Nm–85Nm torque sensors feel three times stronger than basic 40Nm hub motors.',
      '72V high-voltage packs on Talaria and Stark Varg prevent voltage sag under heavy throttle on closed MX circuits.'
    ],
    sections: [
      {
        heading: '1. Why Torque (Nm) Matters More Than Top Speed in Dutch Conditions',
        content: [
          'The Netherlands may lack Alpine peaks, yet riders face a constant invisible hill: Windkracht 5 to 7 coastal headwinds across open polders, dikes, and long river bridges.',
          'A high-torque mid-drive or central gearbox motor keeps efficiency high at lower cadence—powering cleanly over loose Utrechtse Heuvelrug roots, Zuid-Limburg slopes, and bridge ramps without overheating.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Which motor is best for sandy Veluwe trails or coastal headwinds?',
        answer: 'For loose forest sand, Zuid-Limburg hills, or heavy cargo carrying against strong coastal winds, a 75Nm–85Nm mid-drive (or central gearbox dirt bike like Talaria/Sur-Ron) is strongly recommended.'
      }
    ],
    relatedProducts: [
      { name: 'Talaria Sting R MX4 Pro', price: '€4,399', tag: 'Direct Gearbox Torque', slug: 'talaria-sting-r-mx4' },
      { name: 'DirtVolt Summit-X e-MTB', price: '€3,499', tag: '85Nm Mid-Drive', slug: 'apex-summit-x-electric-mountain-bike-emtb' }
    ]
  }
];

export const Blog: React.FC<BlogProps> = ({ onNavigateToView }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<DetailedArticle | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [subscribeError, setSubscribeError] = useState<string | null>(null);

  const CATEGORIES = [
    'All',
    'NL Laws & RDW',
    'Fietsplan & Tax',
    'Dutch Weather & Care',
    'Randstad & NS Rail',
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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail || isSubmitting) return;

    setIsSubmitting(true);
    setSubscribeError(null);
    try {
      const response = await submitNewsletterSubscription(subscribedEmail, 'Netherlands E-Bike Handbook & 2026 Trail Dispatch');
      
      if (!response.success) {
        setSubscribeError(response.error || 'Failed to subscribe. Please try again.');
        return;
      }
      
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail('');
      }, 7000);
    } catch (err: any) {
      console.error('Subscription error:', err);
      setSubscribeError(err?.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
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
            <span>DirtVolt Netherlands Knowledge Base &amp; Rider Journal</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
                The Netherlands Electric Bike Authority
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Expert technical guides, Dutch RDW &amp; EN 15194 regulations, Fietsplan WKR tax strategies, and coastal rain &amp; trail maintenance checklists verified by Amsterdam workshop engineers.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search RDW rules, rain care, Fietsplan..."
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
                <span className="font-mono text-emerald-400">Target Volume: {featuredArticle.searchVolume.toLocaleString()} monthly NL searches</span>
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
              Get the Netherlands E-Bike &amp; Fietsplan Handbook
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              Download our 42-page PDF guide covering Dutch WKR Fietsplan tax rules, NS Rail folding bike diagrams, IP67 water testing results, and winter maintenance checklists.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            {isSubscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-6 py-4 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold block text-white">Handbook dispatched!</span>
                  <span>Check your inbox for your free Netherlands download link.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-md w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work or personal email..."
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="flex-1 bg-slate-800/90 border border-slate-700 text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Get Handbook'}</span>
                  </button>
                </div>
                {subscribeError && (
                  <div className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">
                    {subscribeError}
                  </div>
                )}
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
                    <h3 className="font-bold text-sm font-heading">Recommended Netherlands Models</h3>
                    <p className="text-xs text-slate-300">All DirtVolt Netherlands bikes meet full EU &amp; Dutch technical standards.</p>
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
