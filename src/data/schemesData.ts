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
    name: 'Cyclescheme (Blackhawk Network)',
    maxLimit: 'No Limit (Employer chosen, typically £3,000 - £10,000)',
    popularEmployers: 'NHS, Civil Service, BBC, Barclays, Tesco, Unilever',
    processingTime: 'Instant / 24-48 hours digital voucher',
    endOfHireFeeNote: 'Transfer to "Free Ownership" after small refundable deposit at 4 years'
  },
  {
    id: 'gci',
    name: 'Green Commute Initiative (GCI)',
    maxLimit: 'Unlimited (FCA Authorised for high-value e-bikes & cargo bikes)',
    popularEmployers: 'Universities, Tech Firms, Legal Practices, Councils',
    processingTime: 'Fast online voucher redemption',
    endOfHireFeeNote: 'Zero end-of-scheme ownership fee (Free transfer of ownership)'
  },
  {
    id: 'vivup',
    name: 'Vivup Employee Benefits',
    maxLimit: 'Up to £5,000+ (dependent on employer policy)',
    popularEmployers: 'NHS Trusts, Local Authorities, Police Services',
    processingTime: 'Online portal integration',
    endOfHireFeeNote: 'Extended use agreement with minimal end payment'
  },
  {
    id: 'halfords',
    name: 'Halfords Cycle2Work',
    maxLimit: 'Up to £3,000+ through partner network',
    popularEmployers: 'Royal Mail, Sainsbury\'s, Marks & Spencer, British Airways',
    processingTime: 'Direct digital voucher redemption',
    endOfHireFeeNote: 'Zero-cost ownership retention options available'
  }
];

export interface TaxCalculationResult {
  retailPrice: number;
  taxBandRate: number; // 0.20, 0.40, 0.45
  niRate: number; // 0.08 for basic, 0.02 for higher/additional
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
  let incomeTaxRate = 0.20;
  let niRate = 0.08; // Employee Class 1 National Insurance

  if (taxBand === 'higher') {
    incomeTaxRate = 0.40;
    niRate = 0.02;
  } else if (taxBand === 'additional') {
    incomeTaxRate = 0.45;
    niRate = 0.02;
  }

  const combinedSavingRate = incomeTaxRate + niRate; // 28% or 42% or 47%
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
      "url": `https://ebikessales.online/products/${product.slug}`,
      "priceCurrency": "GBP",
      "price": product.priceGBP.toFixed(2),
      "priceValidUntil": "2026-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "DirtVolt Ltd"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "GBP"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "GB"
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
        "applicableCountry": "GB",
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
        "name": "UK EAPC Compliance",
        "value": `${product.eapcCompliance.continuousRatedPowerW}W Continuous, ${product.eapcCompliance.maxAssistedSpeedMph}mph Cutoff`
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
        "name": "Cycle to Work Eligible",
        "value": "Yes (HMRC Tax Free Scheme)"
      }
    ]
  };

  return JSON.stringify(schema, null, 2);
}

export function generateLocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BicycleStore",
    "name": "DirtVolt Flagship Hub",
    "image": "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://ebikessales.online/#london-store",
    "url": "https://ebikessales.online",
    "telephone": "+44 20 7946 0888",
    "priceRange": "£££",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "142-144 Old Street, Shoreditch",
      "addressLocality": "London",
      "postalCode": "EC1V 9BW",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5255,
      "longitude": -0.0886
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
      "Credit Card",
      "Debit Card",
      "Cyclescheme",
      "Green Commute Initiative",
      "Vivup",
      "Klarna",
      "Novuna Finance",
      "Apple Pay",
      "Google Pay"
    ],
    "currenciesAccepted": "GBP",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UK Road Legal Electric Bikes",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Commuter E-Bikes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Folding E-Bikes"
        },
        {
          "@type": "OfferCatalog",
          "name": "Cargo E-Bikes"
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
