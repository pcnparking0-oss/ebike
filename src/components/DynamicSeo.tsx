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
  selectedCity = 'All UK',
  categoryFilter = 'All',
}) => {
  const getSeoData = (): MetaInfo => {
    // If a product modal is active, prioritize the Product schema & metadata
    if (selectedProduct) {
      const productUrl = `${BASE_URL}/?view=shop&product=${selectedProduct.id}`;
      return {
        title: `${selectedProduct.name} | UK EAPC Legal Electric Bike | DirtVolt`,
        description: `Buy ${selectedProduct.name} in the UK for £${selectedProduct.priceGBP.toLocaleString()} GBP. ${selectedProduct.technicalSpecs.motorPowerW}W motor, ${selectedProduct.technicalSpecs.rangeMiles} miles range, 100% UK road legal with Free 24-48h Delivery & Cycle to Work savings.`,
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
            priceCurrency: 'GBP',
            price: selectedProduct.priceGBP.toFixed(2),
            priceValidUntil: '2026-12-31',
            itemCondition: 'https://schema.org/NewCondition',
            availability:
              selectedProduct.stockStatus === 'in_stock'
                ? 'https://schema.org/InStock'
                : 'https://schema.org/PreOrder',
            seller: {
              '@type': 'Organization',
              name: 'DirtVolt UK E-Bikes',
              email: 'sales@ebikessale.online',
            },
            shippingDetails: {
              '@type': 'OfferShippingDetails',
              shippingRate: {
                '@type': 'MonetaryAmount',
                value: '0.00',
                currency: 'GBP',
              },
              shippingDestination: [
                {
                  '@type': 'DefinedRegion',
                  addressCountry: 'GB',
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
              applicableCountry: 'GB',
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
          title: `Buy Electric Bikes UK — Road Legal EAPCs & Off-Road E-Bikes | DirtVolt`,
          description: `Browse premium UK road-legal electric bikes, folding commuters, e-gravel, and high-performance e-MTBs. Cytech inspected, 2-year warranty, Free UK delivery & Cycle to Work schemes accepted.`,
          canonical: `${BASE_URL}/shop`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'DirtVolt UK Electric Bikes Catalog',
            description:
              'Complete range of UK road-legal electric bicycles with Cycle to Work scheme support and nationwide 24-48h delivery.',
            url: `${BASE_URL}/shop`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'DirtVolt UK E-Bikes',
              url: BASE_URL,
            },
          },
        };

      case 'cycle-to-work':
        return {
          title: `Cycle to Work Scheme Calculator UK (Save up to 47%) | DirtVolt`,
          description: `Calculate your salary sacrifice tax and National Insurance savings on UK road legal e-bikes. Compatible with Cyclescheme, Green Commute Initiative, Vivup & Halfords Cycle2Work.`,
          canonical: `${BASE_URL}/cycle-to-work`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'FinancialProduct',
            name: 'UK Cycle to Work Scheme E-Bike Salary Sacrifice',
            description:
              'Save 33% to 47% on electric bikes and commuting gear through UK government tax-free salary deduction schemes.',
            provider: {
              '@type': 'Organization',
              name: 'DirtVolt UK E-Bikes',
              url: BASE_URL,
              email: 'sales@ebikessale.online',
            },
            annualPercentageRate: 0,
            feesAndCommissionsSpecification: '0% Interest Salary Sacrifice Scheme',
          },
        };

      case 'eapc-compliance':
        return {
          title: `UK EAPC E-Bike Law & Road Legal Regulations Guide (2026) | DirtVolt`,
          description: `Official UK Electrically Assisted Pedal Cycles (EAPC) regulations guide. Learn motor power (250W), 15.5mph speed cutoff, pedal-assist rules, and throttle laws under GB legislation.`,
          canonical: `${BASE_URL}/eapc-compliance`,
          ogType: 'article',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'GovernmentService',
            name: 'UK Electrically Assisted Pedal Cycles (EAPC) Compliance Guide',
            serviceType: 'E-Bike Road Legal Advisory',
            provider: {
              '@type': 'Organization',
              name: 'DirtVolt UK Technical Authority',
              url: BASE_URL,
            },
          },
        };

      case 'blog':
        return {
          title: `UK E-Bike Guides, Battery Care & Route Reviews | DirtVolt Blog`,
          description: `In-depth expert articles on UK e-bike winter battery maintenance, hill climbing in Sheffield & Bristol, London clean air commuting, and Cycle to Work scheme tips.`,
          canonical: `${BASE_URL}/blog`,
          ogType: 'blog',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'DirtVolt UK Electric Bike Knowledge Hub',
            description:
              'Expert guides, route reviews, and maintenance tips for British e-bike riders and daily commuters.',
            url: `${BASE_URL}/blog`,
            publisher: {
              '@type': 'Organization',
              name: 'DirtVolt UK E-Bikes',
              logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/icon.svg`,
              },
            },
          },
        };

      case 'contact-us':
        return {
          title: `Contact DirtVolt UK — Technical Support & Order Enquiries | sales@ebikessale.online`,
          description: `Get in touch with DirtVolt UK electric bike specialists. Email sales@ebikessale.online or call 020 7946 0888 for expert advice, test ride bookings, or order enquiries.`,
          canonical: `${BASE_URL}/contact`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact DirtVolt UK',
            url: `${BASE_URL}/contact`,
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'DirtVolt UK Electric Bikes',
              email: 'sales@ebikessale.online',
              telephone: '+44-20-7946-0888',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '14-18 Great Eastern Street',
                addressLocality: 'London',
                postalCode: 'EC2A 3NT',
                addressCountry: 'GB',
              },
            },
          },
        };

      case 'about-us':
        return {
          title: `About DirtVolt UK — Premium Electric Bikes Engineered for Britain`,
          description: `Discover DirtVolt: UK-based electric bicycle specialists committed to Cytech-certified quality, weather-sealed British engineering, and transparent pricing.`,
          canonical: `${BASE_URL}/about`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About DirtVolt UK',
            url: `${BASE_URL}/about`,
            mainEntity: {
              '@type': 'Organization',
              name: 'DirtVolt UK E-Bikes',
              url: BASE_URL,
              email: 'sales@ebikessale.online',
            },
          },
        };

      case 'terms-and-conditions':
        return {
          title: `Terms & Conditions of Sale | DirtVolt UK Electric Bikes`,
          description: `UK Consumer Rights Act 2015 compliant terms of sale, distance selling regulations, 30-day returns policy, and warranty conditions.`,
          canonical: `${BASE_URL}/terms-and-conditions`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'DirtVolt Terms & Conditions',
            url: `${BASE_URL}/terms-and-conditions`,
          },
        };

      case 'privacy-policy':
        return {
          title: `UK GDPR & Privacy Policy | DirtVolt Electric Bikes`,
          description: `How DirtVolt processes and protects your personal data in strict compliance with the UK Data Protection Act 2018 and UK GDPR.`,
          canonical: `${BASE_URL}/privacy-policy`,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'DirtVolt Privacy Policy',
            url: `${BASE_URL}/privacy-policy`,
          },
        };

      case 'home':
      default:
        return {
          title: `DirtVolt — UK Road Legal Electric Bikes, Commuters & E-MTBs`,
          description: `Explore premium UK road legal electric bikes (EAPC 250W / 15.5mph). Cytech certified, 30-day test ride, Cycle to Work scheme approved, Free UK Delivery.`,
          canonical: BASE_URL,
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${BASE_URL}/#website`,
                url: BASE_URL,
                name: 'DirtVolt UK Electric Bikes',
                description:
                  'Premium UK Road Legal Electric Bikes and Accessories with Cycle to Work scheme integration.',
                publisher: {
                  '@type': 'Organization',
                  name: 'DirtVolt UK E-Bikes',
                  email: 'sales@ebikessale.online',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: `${BASE_URL}/shop?q={search_term_string}`,
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@type': 'LocalBusiness',
                '@id': `${BASE_URL}/#localbusiness`,
                name: 'DirtVolt UK E-Bikes',
                image: `${BASE_URL}/icon.svg`,
                url: BASE_URL,
                telephone: '+44-20-7946-0888',
                email: 'sales@ebikessale.online',
                priceRange: '££-£££',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '14-18 Great Eastern Street',
                  addressLocality: 'London',
                  postalCode: 'EC2A 3NT',
                  addressCountry: 'GB',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 51.5237,
                  longitude: -0.0818,
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
                    name: 'Are DirtVolt electric bikes road legal in the UK?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. All DirtVolt street models strictly adhere to UK Electrically Assisted Pedal Cycle (EAPC) regulations: max 250W continuous rated motor output, 15.5 mph (25 km/h) speed assistance cutoff, and functioning pedals. No driving licence, road tax, or DVLA registration required.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can I purchase an e-bike using the Cycle to Work scheme?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes! We accept all major UK schemes including Cyclescheme, Green Commute Initiative, Vivup, and Halfords Cycle2Work. You can save between 33% and 47% through tax-free salary sacrifice.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How fast is UK delivery and how does the bike arrive?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Every e-bike undergoes a full Cytech Level 3 pre-delivery inspection (PDI) in our UK workshop and is dispatched via tracked courier (DPD / DX Freight) with 24 to 48 hour delivery to UK mainland addresses.',
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
      <meta property="og:site_name" content="DirtVolt UK E-Bikes" />
      <meta property="og:locale" content="en_GB" />

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
