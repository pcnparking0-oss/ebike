import React, { useState } from 'react';
import { 
  UK_URL_HIERARCHY, 
  UK_KEYWORD_MAP, 
  UK_BLOG_PILLARS, 
  UK_LOCAL_STORES, 
  UrlHierarchyNode 
} from '../data/seoArchitectureData';
import { 
  generateProductJsonLd, 
  generateLocalBusinessJsonLd, 
  generateFaqJsonLd 
} from '../data/schemesData';
import { UK_PRODUCTS } from '../data/productsData';
import { 
  Layers, 
  Search, 
  Code2, 
  FileText, 
  Layout, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  ArrowUpRight, 
  ChevronRight, 
  Sparkles,
  Link2,
  Terminal
} from 'lucide-react';

export const SeoArchitectureHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'keywords' | 'schema' | 'content' | 'cro' | 'prompt-exporter'>('architecture');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [keywordFilter, setKeywordFilter] = useState<string>('All');
  const [selectedCityKeyword, setSelectedCityKeyword] = useState<string>('All');
  const [brandName, setBrandName] = useState<string>('Apex Ebikes UK');

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2500);
  };

  // Filter keywords
  const filteredKeywords = UK_KEYWORD_MAP.filter(kw => {
    if (keywordFilter !== 'All' && kw.category !== keywordFilter) return false;
    if (selectedCityKeyword !== 'All' && kw.localCity !== selectedCityKeyword) return false;
    return true;
  });

  const sampleProduct = UK_PRODUCTS[0];
  const productSchemaJson = generateProductJsonLd(sampleProduct);
  const localBusinessSchemaJson = generateLocalBusinessJsonLd();
  const faqSchemaJson = generateFaqJsonLd(sampleProduct.paaFaqs);

  // Master Prompt for copying
  const masterPromptText = `Act as an elite E-commerce System Architect and Senior Technical SEO Specialist based in the UK. Your task is to design a comprehensive build plan, site structure, and content framework for a premium online UK e-bike store named ${brandName}.

Target Audience & Market Focus:
* Geography: United Kingdom (focusing on major urban centers like London, Manchester, Bristol, Edinburgh, and Birmingham).
* Audience: UK daily commuters, leisure cyclists, and eco-conscious buyers.
* Key UK Selling Points: Cycle to Work Schemes (Green Commute Initiative, Cyclescheme), UK EAPC (Electrically Assisted Pedal Cycles) legal compliance (250W max, 15.5 mph limit), free UK delivery, and localized warranty/aftercare.

Deliverables:
1. Architecture & Site Structure (Flat URL hierarchy, Intent categorization: Commuter, Folding, e-MTB, Cargo, Accessories, Faceted filter structures).
2. Technical & Local SEO Strategy (High-intent commercial/transactional UK keyword map, Exact JSON-LD Product & LocalBusiness schema in GBP with UK shipping and stock status, UK compliance & trust badges).
3. Content Strategy & Topical Authority (SEO Product Page template under 60 char title & 155 char meta desc, British weather IP ratings, 80Nm hill torque, removable battery, PAA FAQs, and 5 strategic blog pillars with internal linking).
4. Conversion Rate Optimization (CRO) & Trust Triggers (Above-the-fold PDP layout, Novuna 0% / Klarna / Cycle-to-Work finance calculator placements).`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Blueprint Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Technical SEO & System Architecture Plan
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              UK EAPC & HMRC Aligned
            </span>
          </div>

          <button
            onClick={() => copyToClipboard(masterPromptText, 'master-prompt-top')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 shadow"
          >
            {copiedSection === 'master-prompt-top' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Master AI Prompt</span>
              </>
            )}
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-2">
          UK E-Bike E-Commerce & Technical SEO Architecture Blueprint
        </h1>
        <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
          Comprehensive production-ready specification for building high-ranking UK e-bike stores. Covers Shopify/WooCommerce flat taxonomy, commercial keyword matrices, exact GBP JSON-LD schema markup, above-the-fold CRO wireframes, and Cycle to Work scheme calculators.
        </p>

        {/* Dynamic Brand Customizer */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3 text-xs flex-wrap">
          <span className="text-slate-400 font-medium">Target UK Brand:</span>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-slate-200 px-2.5 py-1 rounded text-xs font-medium focus:outline-none focus:border-indigo-500"
            placeholder="e.g. Apex Ebikes UK"
          />
          <span className="text-slate-500 text-[11px]">
            (Updates dynamically throughout templates and schema code)
          </span>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-1 border-b border-slate-800 overflow-x-auto no-scrollbar pb-1">
        {[
          { id: 'architecture', label: '1. Architecture & URL Structure', icon: Layers },
          { id: 'keywords', label: '2. UK Keyword Matrix', icon: Search },
          { id: 'schema', label: '3. JSON-LD Schema Lab', icon: Code2 },
          { id: 'content', label: '4. Content & Topical Authority', icon: FileText },
          { id: 'cro', label: '5. PDP CRO & Trust Triggers', icon: Layout },
          { id: 'prompt-exporter', label: '6. Master Prompt Exporter', icon: Terminal },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border-b-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'border-emerald-400 text-emerald-400 bg-slate-900/60 rounded-t-lg'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SECTION 1: Architecture & Site Structure */}
      {activeTab === 'architecture' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-lg font-bold text-white font-heading">
                  1. Flat URL Hierarchy & Taxonomy (Shopify / WooCommerce)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Engineered to maximize Google crawl efficiency and page rank distribution with a maximum depth of 2 clicks from the homepage.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(JSON.stringify(UK_URL_HIERARCHY, null, 2), 'url-tree')}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5"
              >
                {copiedSection === 'url-tree' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Copy URL Architecture (JSON)</span>
              </button>
            </div>

            {/* Visual URL Tree */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 font-mono text-xs space-y-3">
              <div className="text-emerald-400 font-bold flex items-center gap-2">
                <span>/ (Homepage)</span>
                <span className="bg-emerald-500/10 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                  Domain Root • UK Commercial Hub
                </span>
              </div>

              <div className="pl-6 space-y-4 border-l border-slate-800">
                {/* Category 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                    <span>├── /collections/commuter-ebikes</span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                      Primary Commercial Intent
                    </span>
                  </div>
                  <div className="pl-6 space-y-1 text-slate-400 border-l border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">├── /products/apex-metro-urban-pro-commuter-ebike</span>
                      <span className="bg-teal-500/20 text-teal-300 text-[9px] px-1 rounded font-sans">PDP • Transactional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">└── /products/apex-citylite-step-through-urban-ebike</span>
                      <span className="bg-teal-500/20 text-teal-300 text-[9px] px-1 rounded font-sans">PDP • Transactional</span>
                    </div>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                    <span>├── /collections/folding-ebikes</span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                      London & Multi-Modal Commuters
                    </span>
                  </div>
                  <div className="pl-6 space-y-1 text-slate-400 border-l border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">└── /products/apex-foldway-ultra-folding-commuter-ebike</span>
                      <span className="bg-teal-500/20 text-teal-300 text-[9px] px-1 rounded font-sans">PDP • TfL Tube Certified</span>
                    </div>
                  </div>
                </div>

                {/* Category 3 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                    <span>├── /collections/electric-mountain-bikes-emtb</span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                      e-MTB Commercial
                    </span>
                  </div>
                  <div className="pl-6 space-y-1 text-slate-400 border-l border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">└── /products/apex-summit-x-electric-mountain-bike-emtb</span>
                      <span className="bg-teal-500/20 text-teal-300 text-[9px] px-1 rounded font-sans">PDP • 85Nm Shimano</span>
                    </div>
                  </div>
                </div>

                {/* Category 4 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                    <span>├── /collections/cargo-ebikes</span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                      Family & Business Last-Mile
                    </span>
                  </div>
                  <div className="pl-6 space-y-1 text-slate-400 border-l border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">└── /products/apex-hauler-longtail-electric-cargo-bike</span>
                      <span className="bg-teal-500/20 text-teal-300 text-[9px] px-1 rounded font-sans">PDP • 200kg Payload</span>
                    </div>
                  </div>
                </div>

                {/* Category 5 */}
                <div className="flex items-center gap-2 text-indigo-300 font-semibold">
                  <span>├── /collections/accessories-parts</span>
                  <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                    Waterproof Panniers & High-Lumen Lights
                  </span>
                </div>

                {/* Institutional & Scheme Hubs */}
                <div className="flex items-center gap-2 text-amber-300 font-semibold">
                  <span>├── /pages/cycle-to-work-scheme</span>
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                    HMRC Salary Sacrifice Hub & Voucher Redemption
                  </span>
                </div>

                <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                  <span>├── /pages/uk-eapc-regulations-legal-guide</span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                    UK EAPC 250W Statutory Compliance Certification
                  </span>
                </div>

                <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                  <span>└── /hub</span>
                  <span className="bg-cyan-500/20 text-cyan-300 text-[10px] px-1.5 py-0.2 rounded font-sans">
                    Topical Authority Commuter & Maintenance Knowledge Graph
                  </span>
                </div>
              </div>
            </div>

            {/* Faceted Filter Rules & Canonicalization Architecture */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h3 className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Key Faceted Filter Taxonomy
                </h3>
                <ul className="space-y-1.5 text-slate-300">
                  <li><strong>• Battery Range:</strong> &lt;35 miles, 35-55 miles, 55-80 miles+</li>
                  <li><strong>• Motor Architecture:</strong> Mid-Drive (80-85Nm) vs. Hub Motor (45-50Nm)</li>
                  <li><strong>• Total Weight:</strong> Ultra-light (&lt;16kg), Standard (17-22kg), Cargo (30kg+)</li>
                  <li><strong>• British Weather Rating:</strong> IPX6 (Heavy Jetproof), IPX7 (Submersible)</li>
                  <li><strong>• Scheme Eligibility:</strong> Cyclescheme, GCI, Vivup, Halfords Cycle2Work</li>
                </ul>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h3 className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  SEO Canonicalization & Crawl Budget Rules
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Dynamic URL parameters (e.g. <code>?filter.v.weight=16kg</code>) must use <strong>rel="canonical"</strong> self-referencing to the base collection URL to prevent crawl bloat, while allowing high-search facets (e.g. <code>/collections/folding-ebikes</code>) to exist as dedicated indexed indexable landings.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: UK Keyword Matrix */}
      {activeTab === 'keywords' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-bold text-white font-heading">
                  2. High-Intent UK Keyword Map & Commercial Architecture
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Commercial, transactional, and local search queries targeting UK buyers with search volumes and exact conversion angles.
                </p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <select
                  aria-label="Filter by Category"
                  value={keywordFilter}
                  onChange={(e) => setKeywordFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500"
                >
                  <option value="All">All Categories</option>
                  <option value="Commuter E-Bikes">Commuter E-Bikes</option>
                  <option value="Folding E-Bikes">Folding E-Bikes</option>
                  <option value="Cargo E-Bikes">Cargo E-Bikes</option>
                  <option value="Electric Mountain Bikes (e-MTB)">e-MTB</option>
                  <option value="Legal / Trust">Legal / EAPC</option>
                  <option value="Finance / Savings">Cycle to Work / Finance</option>
                </select>

                <button
                  onClick={() => copyToClipboard(JSON.stringify(UK_KEYWORD_MAP, null, 2), 'keywords-json')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5"
                >
                  {copiedSection === 'keywords-json' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>Copy Keyword Matrix</span>
                </button>
              </div>
            </div>

            {/* Keyword Table */}
            <div className="border border-slate-800 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4">Primary UK Keyword</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Intent</th>
                    <th className="py-3 px-4 text-right">UK Vol/mo</th>
                    <th className="py-3 px-4 text-center">KD</th>
                    <th className="py-3 px-4">Target URL</th>
                    <th className="py-3 px-4">UK Selling Hook</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-900/50 font-sans">
                  {filteredKeywords.map((kw, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white font-mono">
                        "{kw.keyword}"
                      </td>
                      <td className="py-3 px-4 text-slate-300">{kw.category}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          kw.searchIntent === 'Commercial'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : kw.searchIntent === 'Transactional'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : kw.searchIntent === 'Local'
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {kw.searchIntent}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-bold text-emerald-400">
                        {kw.monthlyUkSearchVolume.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-center font-mono">
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                          kw.keywordDifficulty < 30 ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-300'
                        }`}>
                          {kw.keywordDifficulty}/100
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-400 text-[11px] truncate max-w-xs">
                        {kw.targetUrl}
                      </td>
                      <td className="py-3 px-4 text-slate-300 text-[11px]">
                        {kw.sellingHook}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: JSON-LD Schema Lab */}
      {activeTab === 'schema' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                3. Exact JSON-LD Code Templates (UK Currency GBP, Shipping & LocalBusiness)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Copy-ready Google Rich Snippet JSON-LD code blocks implementing Google's latest Merchant Return, Free UK Shipping, and LocalBusiness specifications.
              </p>
            </div>

            {/* Schema Code Block 1: Product */}
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 rounded-t-xl border border-slate-800 border-b-0">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white font-mono">
                    Template A: Schema.org / Product (with GBP, DPD Next-Day & EAPC)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(productSchemaJson, 'product-schema')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1"
                >
                  {copiedSection === 'product-schema' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy Product JSON-LD</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-b-xl border border-slate-800 text-[11px] text-cyan-300 font-mono overflow-x-auto max-h-72">
                {productSchemaJson}
              </pre>
            </div>

            {/* Schema Code Block 2: LocalBusiness / BicycleStore */}
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 rounded-t-xl border border-slate-800 border-b-0">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white font-mono">
                    Template B: Schema.org / BicycleStore (London & Regional UK Hubs)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(localBusinessSchemaJson, 'store-schema')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1"
                >
                  {copiedSection === 'store-schema' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy BicycleStore JSON-LD</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-b-xl border border-slate-800 text-[11px] text-emerald-300 font-mono overflow-x-auto max-h-72">
                {localBusinessSchemaJson}
              </pre>
            </div>

            {/* Schema Code Block 3: FAQPage for PAA Domination */}
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 rounded-t-xl border border-slate-800 border-b-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white font-mono">
                    Template C: Schema.org / FAQPage (Targeting Google People Also Ask)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(faqSchemaJson, 'faq-schema')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-2.5 py-1 rounded border border-slate-700 flex items-center gap-1"
                >
                  {copiedSection === 'faq-schema' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>Copy FAQPage JSON-LD</span>
                </button>
              </div>
              <pre className="bg-slate-950 p-4 rounded-b-xl border border-slate-800 text-[11px] text-amber-300 font-mono overflow-x-auto max-h-56">
                {faqSchemaJson}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: Content Strategy & Topical Authority */}
      {activeTab === 'content' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                4. Content Strategy & 5 Strategic Topical Authority Pillars
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Targeting high-volume informational search queries in the UK to build topical dominance and channel equity back to core commercial category pages.
              </p>
            </div>

            {/* 5 Blog Pillars */}
            <div className="space-y-4">
              {UK_BLOG_PILLARS.map((pillar, idx) => (
                <div key={pillar.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        Pillar Article #{idx + 1} • {pillar.wordCountTarget} • {pillar.estimatedVolume.toLocaleString()} Searches/mo
                      </span>
                      <h3 className="text-sm font-bold text-white font-heading">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-indigo-300 font-mono mt-0.5">
                        Target Query: "{pillar.targetQuery}" ({pillar.searchIntent})
                      </p>
                    </div>

                    <span className="bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono px-2 py-1 rounded">
                      {pillar.schemaType}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.summary}
                  </p>

                  {/* Internal Linking Graph */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Link2 className="w-3.5 h-3.5 text-emerald-400" />
                      Internal Linking & Conversion Architecture:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {pillar.internalLinks.map((link, lIdx) => (
                        <div key={lIdx} className="bg-slate-950 p-2 rounded border border-slate-800 text-[11px]">
                          <span className="text-emerald-400 font-mono font-medium block">
                            Anchor: "{link.anchorText}"
                          </span>
                          <span className="text-slate-500 font-mono text-[10px] block truncate">
                            Target: {link.targetUrl}
                          </span>
                          <span className="text-slate-400 text-[10px] block mt-0.5">
                            Goal: {link.reason}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 5: CRO & Trust Triggers */}
      {activeTab === 'cro' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                5. Product Detail Page (PDP) Above-the-Fold CRO Blueprint
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Conversion-engineered anatomy designed to overcome UK buyer skepticism, clarify legal EAPC compliance, and eliminate price friction.
              </p>
            </div>

            {/* CRO Wireframe Visual Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <Layout className="w-4 h-4 text-emerald-400" />
                  Above-the-Fold Psychological Hierarchy
                </h3>

                <div className="space-y-3">
                  <div className="border-l-2 border-emerald-500 pl-3 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono text-[11px]">1. Trust & Urgency Ribbon (Top)</span>
                    <p className="text-slate-400">
                      "Order by 2pm for Free UK Next-Day Delivery" + 100% EAPC Legal Badge. Immediately validates road legality before the customer even asks.
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-500 pl-3 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono text-[11px]">2. Dual Price Perception Architecture</span>
                    <p className="text-slate-400">
                      Displays the £1,899 RRP alongside the <strong>£68.36/mo Cycle to Work</strong> net salary sacrifice. Reframes a £2k investment into a monthly saving cheaper than a London monthly train travelcard.
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-500 pl-3 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono text-[11px]">3. Embedded Interactive Finance Widget</span>
                    <p className="text-slate-400">
                      Seamless tabs for Cyclescheme / GCI salary sacrifice, Novuna 0% APR, and Klarna Pay in 3 right adjacent to the Primary CTA.
                    </p>
                  </div>

                  <div className="border-l-2 border-emerald-500 pl-3 space-y-1">
                    <span className="font-bold text-emerald-400 font-mono text-[11px]">4. 4-Pillar Climate Specification Matrix</span>
                    <p className="text-slate-400">
                      Explicitly lists IPX6 waterproof rating, 80Nm hill climbing torque, removable battery, and weight kg in clear iconography.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Key UK Trust & Compliance Badges
                </h3>

                <div className="grid grid-cols-2 gap-3 text-[11px]">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                    <span className="font-bold text-emerald-400 block">🇬🇧 100% EAPC Compliant</span>
                    <span className="text-slate-400">250W continuous limit certified to GB SI 1983/1168.</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                    <span className="font-bold text-amber-300 block">🚴 Cycle to Work Approved</span>
                    <span className="text-slate-400">Redeem vouchers instantly from all major UK providers.</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                    <span className="font-bold text-cyan-300 block">🌧️ British Weather IPX6</span>
                    <span className="text-slate-400">Protected against torrential rain and road spray.</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1">
                    <span className="font-bold text-indigo-300 block">🛡️ 30-Day Test Ride</span>
                    <span className="text-slate-400">Exceeds UK 14-day statutory distance selling regulations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: Master Prompt Exporter */}
      {activeTab === 'prompt-exporter' && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  Master AI Prompt (Copy & Paste Ready)
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Paste this master prompt into ChatGPT, Claude, or DeepSeek to recreate this exact UK e-bike e-commerce architecture.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(masterPromptText, 'master-prompt-box')}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                {copiedSection === 'master-prompt-box' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Master Prompt</span>
                  </>
                )}
              </button>
            </div>

            <pre className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {masterPromptText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
