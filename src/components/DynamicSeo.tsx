import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ViewMode, Product } from '../types';

interface DynamicSeoProps {
  currentView: ViewMode;
  selectedProduct?: Product | null;
  selectedCity?: string;
  categoryFilter?: string;
}

interface MetaInfo {
  title: string;
  description: string;
  canonical: string;
  ogType: string;
  structuredData: object;
}

const BASE_URL = 'https://ebikessale.online';

export const DynamicSeo: React.FC<DynamicSeoProps> = ({
  currentView,
  selectedProduct,
  selectedCity = 'All Netherlands',
  categoryFilter = 'All',
}) => {
  const getSeoData = (): MetaInfo => {
    // If a product modal is active, prioritize the Product schema & metadata
    if (selectedProduct) {
      const productUrl = `${BASE_URL}/?view=shop&product=${selectedProduct.id}`;
      return {
        title: `${selectedProduct.name} | Official Netherlands Electric Dirt Bike | DirtVolt`,
        description: `Buy ${selectedProduct.name} in the Netherlands for €${selectedProduct.priceGBP.toLocaleString()} EUR. ${selectedProduct.technicalSpecs.motorPowerW}W motor, ${selectedProduct.technicalSpecs.rangeMiles} km range, official warranty with Free 24-48h Netherlands Delivery via PostNL & DHL.`,
        canonical: productUrl,
        ogType: 'product',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: selectedProduct.name,
          image: selectedProduct.images,
          description: selectedProduct.description,
          sku: selectedProduct.sku,
          mpn: selectedProduct.sku,
          brand: {
            '@type': 'Brand',
            name: selectedProduct.brand,
          },
          category: selectedProduct.category,
          offers: {
            '@type': 'Offer',
            url: productUrl,
            priceCurrency: 'EUR',
            price: selectedProduct.priceGBP.toFixed(2),
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability:
              selectedProduct.inStock
                ? 'https://schema.org/InStock'
                : 'https://schema.org/PreOrder',
            seller: {
              '@type': 'Organization',
              name: 'DirtVolt Netherlands',
              email: 'sales@ebikessale.online',
            },
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: {
                '@type': 'MonetaryAmount',
                value: '0.00',
                currency: 'EUR',
              },
              shippingDestination: [
                {
                  '@type': 'DefinedRegion',
                  addressCountry: 'NL',
                },
              ],
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: {
                  '@type': 'QuantitativeValue',
                  minValue: 0,
                  maxValue: 1,
                  unitCode: 'd',
                },
                transitTime: {
                  '@type': 'QuantitativeValue',
                  minValue: 1,
                  maxValue: 2,
                  unitCode: 'd',
                },
              },
            },
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'NL',
              returnPolicyCategory:
                'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 30,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '148',
            bestRating: '5',
          },
        },
      };
    }

    // Route-specific metadata & structured data
    switch (currentView) {
      case 'shop':
        return {
          title: `Buy Electric Dirt Bikes Netherlands — Official Sur-Ron, Talaria & Stark Varg | DirtVolt`,
          description: `Browse premium electric dirt bikes, EU EN 15194 / RDW road-legal e-bikes, and off-road motocross models in the Netherlands. 2-year warranty, Amsterdam showroom, Free Netherlands 24-48h delivery via PostNL & DHL.`,
          canonical: `${BASE_URL}/shop`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'DirtVolt Netherlands Electric Dirt Bikes Catalog',
            description:
              'Complete range of electric dirt bikes and road-legal e-bikes in the Netherlands with nationwide 24-48h courier delivery.',
            url: `${BASE_URL}/shop`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'DirtVolt Netherlands',
              url: BASE_URL,
            },
          },
        };

      case 'cycle-to-work':
        return {
          title: `Dutch Fietsplan (WKR) & Corporate E-Mobility Savings | DirtVolt Netherlands`,
          description: `Calculate your Dutch Werkkostenregeling (WKR) Fietsplan and Lease a Bike Nederland tax savings up to 49.5%, plus business 21% BTW deductions on electric bikes.`,
          canonical: `${BASE_URL}/cycle-to-work`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'FinancialProduct',
            name: 'Dutch Fietsplan (WKR) & Corporate Lease Savings',
            description:
              'Werkkostenregeling (WKR) tax relief and corporate lease schemes on electric bikes and lightweight e-mobility in the Netherlands.',
            provider: {
              '@type': 'Organization',
              name: 'DirtVolt Netherlands',
              url: BASE_URL,
              email: 'sales@ebikessale.online',
            },
            annualPercentageRate: 0,
            feesAndCommissionsSpecification: 'Dutch WKR Fietsplan Support',
          },
        };

      case 'eapc-compliance':
        return {
          title: `Netherlands & EU E-Bike Law & RDW Regulations Guide (2026) | DirtVolt`,
          description: `Official Dutch Wegenverkeerswet 1994, RDW & EU EN 15194 e-bike guide. Motor limits (250W), 25 km/h assistance cutoff, L1e-B kenteken rules, and off-road dirt bike classifications in the Netherlands.`,
          canonical: `${BASE_URL}/eapc-compliance`,
          ogType: 'article',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'GovernmentService',
            name: 'Netherlands RDW & EU EN 15194 E-Bike Compliance Guide',
            serviceType: 'Electric Bike Road Legal Advisory',
            provider: {
              '@type': 'Organization',
              name: 'DirtVolt Netherlands Technical Center',
              url: BASE_URL,
            },
          },
        };

      case 'blog':
        return {
          title: `Netherlands E-Dirt Bike Guides, Veluwe Trails & Coastal Rain Care | DirtVolt Blog`,
          description: `In-depth expert articles on Dutch rain & coastal headwind durability, off-road MTB & enduro routes around Utrechtse Heuvelrug, Veluwe, and Eindhoven, plus RDW legal compliance.`,
          canonical: `${BASE_URL}/blog`,
          ogType: 'blog',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'DirtVolt Netherlands Electric Knowledge Hub',
            description:
              'Expert guides, Dutch trail reviews, and maintenance tips for Netherlands electric motocross riders and commuters.',
            url: `${BASE_URL}/blog`,
            publisher: {
              '@type': 'Organization',
              name: 'DirtVolt Netherlands',
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/icon.svg`,
              },
            },
          },
        };

      case 'contact-us':
        return {
          title: `Contact DirtVolt Netherlands — Amsterdam Showroom & Customer Care | +31 20 808 4410`,
          description: `Get in touch with DirtVolt Netherlands specialists. Email sales@ebikessale.online or call +31 20 808 4410. Showrooms and service hubs in Amsterdam, Rotterdam, and Eindhoven.`,
          canonical: `${BASE_URL}/contact`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact DirtVolt Netherlands',
            url: `${BASE_URL}/contact`,
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'DirtVolt Netherlands Showroom & Hub',
              email: 'sales@ebikessale.online',
              telephone: '+31-20-808-4410',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Keizersgracht 482',
                addressLocality: 'Amsterdam',
                postalCode: '1017 EG',
                addressCountry: 'NL',
              },
            },
          },
        };

      case 'about-us':
        return {
          title: `About DirtVolt Netherlands — Official Electric Dirt Bikes & Motocross Distributor`,
          description: `Discover DirtVolt Netherlands: Authorized distributor of Sur-Ron, Talaria, and Stark Future. Amsterdam technical workshop, Dutch weather-proofed bikes, and full 21% BTW invoicing.`,
          canonical: `${BASE_URL}/about`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About DirtVolt Netherlands',
            url: `${BASE_URL}/about`,
            mainEntity: {
              '@type': 'Organization',
              name: 'DirtVolt Netherlands',
              url: BASE_URL,
              email: 'sales@ebikessale.online',
            },
          },
        };

      case 'terms-and-conditions':
        return {
          title: `Terms & Conditions of Sale | DirtVolt Netherlands`,
          description: `Dutch Civil Code and Consumer Rights compliant terms of sale, 30-day money-back guarantee, 2-year warranty, and PostNL / DHL Parcel Nederland shipping policies.`,
          canonical: `${BASE_URL}/terms-and-conditions`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'DirtVolt Netherlands Terms & Conditions',
            url: `${BASE_URL}/terms-and-conditions`,
          },
        };

      case 'privacy-policy':
        return {
          title: `EU GDPR & Dutch AVG Privacy Policy | DirtVolt Netherlands`,
          description: `How DirtVolt B.V. processes and protects your personal data in strict compliance with the EU GDPR (AVG) and the Autoriteit Persoonsgegevens (AP) guidelines.`,
          canonical: `${BASE_URL}/privacy-policy`,
          ogType: 'website',
          structuredData: {
            '@type': 'WebPage',
            name: 'DirtVolt Netherlands Privacy Policy',
            url: `${BASE_URL}/privacy-policy`,
          },
        };

      case 'home':
      default:
        return {
          title: `DirtVolt Netherlands | Electric Dirt Bikes, Talaria & Sur-Ron Official Store`,
          description: `The Netherlands' premier distributor for Sur-Ron, Talaria, and Stark Future electric dirt bikes. 2-year warranty, Amsterdam central workshop, Free 24-48h Netherlands Delivery via PostNL & DHL.`,
          canonical: BASE_URL,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${BASE_URL}/#website`,
                url: BASE_URL,
                name: 'DirtVolt Netherlands',
                description:
                  'Official Electric Dirt Bikes and Motocross Distributor in the Netherlands with nationwide delivery.',
                publisher: {
                  '@type': 'Organization',
                  name: 'DirtVolt Netherlands',
                  email: 'sales@ebikessale.online',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${BASE_URL}/shop?q={search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@type': 'BicycleStore',
                '@id': `${BASE_URL}/#localbusiness`,
                name: 'DirtVolt Netherlands Showroom & Hub',
                image: `${BASE_URL}/icon.svg`,
                url: BASE_URL,
                telephone: '+31-20-808-4410',
                email: 'sales@ebikessale.online',
                priceRange: '€€-€€€',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Keizersgracht 482',
                  addressLocality: 'Amsterdam',
                  postalCode: '1017 EG',
                  addressCountry: 'NL',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 52.3649,
                  longitude: 4.8878,
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: [
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                    ],
                    opens: '09:00',
                    closes: '18:00',
                  },
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Saturday'],
                    opens: '10:00',
                    closes: '17:00',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                '@id': `${BASE_URL}/#faq`,
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Are electric dirt bikes road legal in the Netherlands?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Pedal-assist models with up to 250W power and 25 km/h assistance cutoff comply with EU standard EN 15194 and Dutch Wegenverkeerswet 1994 rules for public fietspaden. Homologated L1e-B electric dirt bikes (such as Sur-Ron Light Bee L1e) can be registered for an RDW kenteken moped plate with WA insurance and an approved helmet, while high-powered MX models (3kW-60kW) are designated for private land and closed circuits.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How does nationwide delivery work across the Netherlands?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Every bike undergoes a comprehensive 40-point technical inspection at our Amsterdam headquarters and is dispatched via PostNL / DHL Parcel Nederland with 24 to 48 hour tracked delivery anywhere in the Netherlands (Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, Groningen, etc.).',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can business customers get a 21% BTW invoice or use Fietsplan WKR?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. DirtVolt B.V. issues official Dutch 21% BTW invoices with full KvK and BTW details, plus proforma quotes compatible with Dutch Fietsplan (WKR) and Lease a Bike Nederland schemes.',
                    },
                  },
                ],
              },
            ],
          },
        };
    }
  };

  const seo = getSeoData();

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content="DirtVolt Netherlands" />
      <meta property="og:locale" content="en_NL" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.canonical} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* Dynamic JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(seo.structuredData)}
      </script>
    </Helmet>
  );
};
