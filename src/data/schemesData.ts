import { Product } from '../types';

export interface CycleSchemeProvider {
  id: string;
  name: string;
  maxLimit: string;
  popularEmployers: string;
  processingTime: string;
  endOfHireFeeNote: string;
}

export const UK_CYCLE_SCHEMES: CycleSchemeProvider[] = [
  {
    id: 'cyclescheme',
    name: 'Fietsplan via Werkkostenregeling (WKR)',
    maxLimit: 'No Statutory Cap (Employer WKR budget / Lease)',
    popularEmployers: 'ASML, Philips, ING, Rabobank, Shell NL, Dutch Municipalities',
    processingTime: 'Instant / 24-48 hours proforma invoice & HR approval',
    endOfHireFeeNote: 'Direct employee ownership or 7% annual fiscal bijtelling lease'
  },
  {
    id: 'gci',
    name: 'Lease a Bike Nederland',
    maxLimit: 'Up to €10,000+ (All-in corporate lease & e-mobility)',
    popularEmployers: 'KPN, Coolblue, Universiteit van Amsterdam, Tech & Legal',
    processingTime: 'Fast online employer portal voucher',
    endOfHireFeeNote: 'Flexible buyout option at 15-20% residual value after 36 months'
  },
  {
    id: 'vivup',
    name: 'FiscFree / NFP Fietsplan',
    maxLimit: 'Up to €5,000+ via gross-net salary exchange',
    popularEmployers: 'Hospitals (UMC), Rijksoverheid, Police, Education',
    processingTime: 'Digital HR & payroll integration',
    endOfHireFeeNote: '100% ownership from day one with gross salary tax relief'
  },
  {
    id: 'halfords',
    name: 'Hellorider Corporate E-Mobility',
    maxLimit: 'Up to €7,500+ through Dutch employer network',
    popularEmployers: 'Schiphol Group, Albert Heijn / Ahold, PostNL, ABN AMRO',
    processingTime: 'Direct digital voucher redemption',
    endOfHireFeeNote: 'Includes theft insurance and nationwide roadside assistance'
  }
];

export interface TaxCalculationResult {
  retailPrice: number;
  taxBandRate: number; // Dutch Box 1 income tax relief rate
  niRate: number; // Social / pension contribution factor
  totalSavingPercentage: number;
  totalCashSavedGBP: number;
  effectiveCostGBP: number;
  monthlyGrossDeductionGBP: number;
  monthlyNetCostGBP: number;
  termMonths: number;
}

export function calculateCycleToWorkSavings(
  price: number,
  taxBand: 'basic' | 'higher' | 'additional',
  termMonths: 12 | 18 | 24 | 36 = 12
): TaxCalculationResult {
  let incomeTaxRate = 0.3697; // Dutch Box 1 Bracket 1 (up to €75,518)
  let niRate = 0.0;

  if (taxBand === 'higher') {
    incomeTaxRate = 0.42; // Combined WKR / IKC effective employer & payroll tax bracket
    niRate = 0.0;
  } else if (taxBand === 'additional') {
    incomeTaxRate = 0.495; // Dutch Box 1 Top Bracket (49.50%)
    niRate = 0.0;
  }

  const combinedSavingRate = incomeTaxRate + niRate;
  const totalCashSaved = Math.round(price * combinedSavingRate * 100) / 100;
  const effectiveCost = Math.round((price - totalCashSaved) * 100) / 100;
  const monthlyGross = Math.round((price / termMonths) * 100) / 100;
  const monthlyNet = Math.round((effectiveCost / termMonths) * 100) / 100;

  return {
    retailPrice: price,
    taxBandRate: incomeTaxRate,
    niRate,
    totalSavingPercentage: Math.round(combinedSavingRate * 100),
    totalCashSavedGBP: totalCashSaved,
    effectiveCostGBP: effectiveCost,
    monthlyGrossDeductionGBP: monthlyGross,
    monthlyNetCostGBP: monthlyNet,
    termMonths,
  };
}

export function generateProductJsonLd(product: Product) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.description,
    "sku": product.sku,
    "mpn": product.mpn,
    "gtin13": product.gtin13,
    "brand": {
      "@type": "Brand",
      "name": "DirtVolt"
    },
    "category": `Sporting Goods > Cycling > Electric Dirt Bikes > ${product.category}`,
    "offers": {
      "@type": "Offer",
      "url": `https://ebikessale.online/products/${product.slug}`,
      "priceCurrency": "EUR",
      "price": product.priceGBP.toFixed(2),
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "DirtVolt B.V."
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "EUR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "NL"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "d"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "d"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "NL",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "EU EN 15194 & Dutch RDW Compliance",
        "value": `${product.eapcCompliance.continuousRatedPowerW}W Continuous, ${Math.round(product.eapcCompliance.maxAssistedSpeedMph * 1.609)} km/h Cutoff`
      },
      {
        "@type": "PropertyValue",
        "name": "Motor Torque",
        "value": `${product.technicalSpecs.torqueNm} Nm`
      },
      {
        "@type": "PropertyValue",
        "name": "Battery Capacity",
        "value": `${product.technicalSpecs.batteryCapacityWh} Wh`
      },
      {
        "@type": "PropertyValue",
        "name": "Water Resistance Rating",
        "value": product.technicalSpecs.waterResistanceRating
      },
      {
        "@type": "PropertyValue",
        "name": "Dutch Fietsplan (WKR) Eligible",
        "value": "Yes (Netherlands WKR / Lease a Bike Compatible)"
      }
    ]
  };

  return JSON.stringify(schema, null, 2);
}

export function generateLocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BicycleStore",
    "name": "DirtVolt Netherlands Flagship Showroom & Hub",
    "image": "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://ebikessale.online/#amsterdam-store",
    "url": "https://ebikessale.online",
    "telephone": "+31 20 808 4410",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Keizersgracht 482",
      "addressLocality": "Amsterdam",
      "postalCode": "1017 EG",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3649,
      "longitude": 4.8878
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:30",
        "closes": "16:30"
      }
    ],
    "paymentAccepted": [
      "iDEAL",
      "SEPA Bank Transfer",
      "Credit Card",
      "Debit Card",
      "Klarna",
      "Apple Pay",
      "Google Pay"
    ],
    "currenciesAccepted": "EUR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Netherlands Electric Dirt Bikes & E-Bikes",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Electric Dirt Bikes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Commuter E-Bikes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Folding E-Bikes"
        }
      ]
    }
  };

  return JSON.stringify(schema, null, 2);
}

export function generateFaqJsonLd(faqs: { question: string; answer: string }[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return JSON.stringify(schema, null, 2);
}
