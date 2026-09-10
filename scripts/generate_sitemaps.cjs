const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://dirtvolt.co.uk';
const PUBLIC_DIR = path.join(__dirname, '../public');

// 1. Pages
const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'daily', title: 'DirtVolt | Electric Dirt Bikes, Talaria & Sur-Ron Official Store' },
  { path: '/shop', priority: '0.9', changefreq: 'daily', title: 'Electric Dirt Bikes & Motocross Showroom' },
  { path: '/about-us', priority: '0.7', changefreq: 'monthly', title: 'About DirtVolt UK Workshop & Distribution' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly', title: 'UK Electric Dirt Bike & EAPC Authority Blog' },
  { path: '/contact-us', priority: '0.7', changefreq: 'monthly', title: 'Contact DirtVolt UK Technical Support' },
  { path: '/terms-and-conditions', priority: '0.5', changefreq: 'monthly', title: 'Terms & Conditions of Sale' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly', title: 'Privacy & UK GDPR Policy' },
  { path: '/cycle-to-work', priority: '0.7', changefreq: 'monthly', title: 'UK Cycle to Work Scheme Tax Calculator' },
  { path: '/eapc-compliance', priority: '0.7', changefreq: 'monthly', title: 'UK EAPC Law Compliance Validator' },
  { path: '/schema-hub', priority: '0.6', changefreq: 'monthly', title: 'Schema.org JSON-LD Inspector' },
  { path: '/seo-architecture', priority: '0.6', changefreq: 'monthly', title: 'UK Technical SEO Architecture' }
];

// 2. Categories and Folders
const CATEGORIES = [
  { path: '/shop?folder=dirt-bikes', priority: '0.85', changefreq: 'daily', name: 'Electric Dirt Bikes' },
  { path: '/shop?folder=road-legal', priority: '0.85', changefreq: 'daily', name: 'Road-Legal Electric Dirt Bikes' },
  { path: '/shop?folder=kids-folder', priority: '0.80', changefreq: 'weekly', name: 'Kids & Youth Electric Dirt Bikes' },
  { path: '/shop?folder=quads-folder', priority: '0.85', changefreq: 'daily', name: 'Electric Quads & Buggies' },
  { path: '/shop?folder=battery-folder', priority: '0.80', changefreq: 'weekly', name: 'Batteries & Fast Chargers' },
  { path: '/shop?folder=parts-folder', priority: '0.75', changefreq: 'weekly', name: 'Spare Parts & Accessories' },
  { path: '/shop?brand=Sur-Ron', priority: '0.85', changefreq: 'weekly', name: 'Sur-Ron Electric Bikes' },
  { path: '/shop?brand=Talaria', priority: '0.85', changefreq: 'weekly', name: 'Talaria Electric Motocross' },
  { path: '/shop?brand=Stark+Future', priority: '0.85', changefreq: 'weekly', name: 'Stark Future Varg' },
  { path: '/shop?brand=E-Ride+Pro', priority: '0.80', changefreq: 'weekly', name: 'E-Ride Pro SS' },
  { path: '/shop?brand=RFN', priority: '0.75', changefreq: 'weekly', name: 'RFN Electric Bikes' },
  { path: '/shop?brand=KTM', priority: '0.75', changefreq: 'weekly', name: 'KTM Electric Youth Bikes' },
  { path: '/shop?brand=Revvi', priority: '0.75', changefreq: 'weekly', name: 'Revvi Kids Balance Bikes' },
  { path: '/shop?brand=FunBikes', priority: '0.75', changefreq: 'weekly', name: 'FunBikes Quads' },
  { path: '/shop?brand=Razor', priority: '0.75', changefreq: 'weekly', name: 'Razor Dirt Quads' },
  { path: '/shop?brand=Segway', priority: '0.75', changefreq: 'weekly', name: 'Segway Powersports' },
  { path: '/shop?brand=Eco+Rider', priority: '0.75', changefreq: 'weekly', name: 'Eco Rider Quads' },
  { path: '/shop?brand=GasGas', priority: '0.70', changefreq: 'weekly', name: 'GasGas Factory Replicas' },
  { path: '/shop?brand=STACYC', priority: '0.70', changefreq: 'weekly', name: 'STACYC Stability Cycles' },
  { path: '/shop?brand=Zero', priority: '0.70', changefreq: 'weekly', name: 'Zero Motorcycles' }
];

// 3. Blog articles
const BLOG_ARTICLES = [
  { slug: 'uk-ebike-laws-explained-eapc-regulations', title: 'UK E-Bike Laws 2026: 250W Limits, Throttle Legality & EAPC Regulations', date: '2026-02-14' },
  { slug: 'cycle-to-work-scheme-guide-ebike-tax-savings', title: 'Cycle to Work Scheme Guide 2026: Save 32% to 47% on a Tax-Free E-Bike', date: '2026-02-10' },
  { slug: 'best-electric-bikes-british-weather-winter-rain', title: 'Best Electric Bikes for British Rain & Winter: IPX6 Ratings, Road Salt & Battery Care', date: '2026-02-02' },
  { slug: 'london-commuting-ebike-tube-train-rules-ulez', title: 'London Commuting by E-Bike: Tube Rules, Train Restrictions & ULEZ Zone Savings', date: '2026-01-26' },
  { slug: 'hub-motor-vs-mid-drive-ebike-torque-uk-hills', title: 'Hub Motor vs Mid-Drive on UK Hills: Torque (Nm) Comparison for Bristol & Edinburgh', date: '2026-01-18' }
];

// Load products from volttrailProducts.ts
const productsContent = fs.readFileSync(path.join(__dirname, '../src/data/products/volttrailProducts.ts'), 'utf8');

// Parse items from the TypeScript array
const jsonPart = productsContent.substring(productsContent.indexOf('['), productsContent.lastIndexOf(']') + 1);
let allProducts = [];
try {
  allProducts = JSON.parse(jsonPart);
} catch (e) {
  // If not pure JSON due to formatting, regex match products
  const productBlocks = jsonPart.split(/\{\s*"id":/g).slice(1);
  allProducts = productBlocks.map(block => {
    const slugMatch = block.match(/"slug":\s*"([^"]+)"/);
    const nameMatch = block.match(/"name":\s*"([^"]+)"/);
    const subtitleMatch = block.match(/"subtitle":\s*"([^"]+)"/);
    const imgMatch = block.match(/"images":\s*\[\s*"([^"]+)"/);
    return {
      slug: slugMatch ? slugMatch[1] : '',
      name: nameMatch ? nameMatch[1] : '',
      subtitle: subtitleMatch ? subtitleMatch[1] : '',
      images: imgMatch ? [imgMatch[1]] : []
    };
  }).filter(p => p.slug);
}

// Escape XML
function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const today = new Date().toISOString().split('T')[0];

// SITEMAP PAGES
const pagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url>
    <loc>${DOMAIN}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// SITEMAP CATEGORIES
const categoriesXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${CATEGORIES.map(c => `  <url>
    <loc>${DOMAIN}${escapeXml(c.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${c.changefreq}</changefreq>
    <priority>${c.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// SITEMAP BLOG
const blogXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${BLOG_ARTICLES.map(b => `  <url>
    <loc>${DOMAIN}/blog/${b.slug}</loc>
    <lastmod>${b.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>`).join('\n')}
</urlset>`;

// SITEMAP PRODUCTS
const productsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allProducts.map(prod => {
  const firstImg = (prod.images && prod.images.length > 0) ? prod.images[0] : (prod.image || '');
  const imgUrl = firstImg ? (firstImg.startsWith('http') ? firstImg : `${DOMAIN}${firstImg}`) : `${DOMAIN}/images/site-icon.png`;
  return `  <url>
    <loc>${DOMAIN}/products/${escapeXml(prod.slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
    <image:image>
      <image:loc>${escapeXml(imgUrl)}</image:loc>
      <image:title>${escapeXml(prod.name)}</image:title>
      <image:caption>${escapeXml(prod.subtitle || prod.name)}</image:caption>
    </image:image>
  </url>`;
}).join('\n')}
</urlset>`;

// SITEMAP INDEX
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-categories.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-products.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-blog.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

// ROBOTS.TXT
const robotsTxt = `# DirtVolt Robots.txt - High-Performance Electric Dirt Bikes UK
User-agent: *
Allow: /

# Disallow transient search filters without content
Disallow: /api/
Disallow: /checkout/
Disallow: /basket/

# Canonical Sitemaps
Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-pages.xml
Sitemap: ${DOMAIN}/sitemap-categories.xml
Sitemap: ${DOMAIN}/sitemap-products.xml
Sitemap: ${DOMAIN}/sitemap-blog.xml
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-pages.xml'), pagesXml.trim());
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-categories.xml'), categoriesXml.trim());
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-blog.xml'), blogXml.trim());
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap-products.xml'), productsXml.trim());
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapIndexXml.trim());
fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt.trim());

console.log('Successfully generated:');
console.log('- sitemap.xml');
console.log('- sitemap-pages.xml');
console.log('- sitemap-categories.xml');
console.log('- sitemap-products.xml (' + allProducts.length + ' products)');
console.log('- sitemap-blog.xml');
console.log('- robots.txt');
