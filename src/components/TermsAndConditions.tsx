import React, { useState } from 'react';
import { ViewMode } from '../types';
import { 
  FileText, 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  AlertCircle, 
  Scale, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface TermsAndConditionsProps {
  onNavigateToView?: (view: ViewMode) => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigateToView }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setActiveSection(prev => prev === id ? null : id);
  };

  const SECTIONS = [
    {
      id: 'statutory-eapc',
      title: '1. Netherlands & EU Statutory E-Bike Compliance (RDW)',
      summary: 'All electric bicycles sold by DirtVolt Netherlands strictly comply with European Standard EN 15194 and the Dutch Road Traffic Act (Wegenverkeerswet 1994).',
      content: `Under Dutch and EU regulations:
• Continuous rated motor power for fietspad pedelecs is capped at a statutory maximum of 250 Watts.
• Electric motor assistance must cut off automatically when the bicycle reaches a speed of 25 km/h.
• The motor only activates when the pedals are in forward motion (pedal assist). Independent throttles above walking assist speed (6 km/h) classify the vehicle under L1e categories or require off-road private terrain / closed track operation.
• Road-legal high-power mopeds and speed pedelecs (L1e-B) include COC documentation for Dutch RDW kenteken registration, requiring WA insurance and an approved helmet. Off-road electric dirt bikes (e.g. Sur-Ron Ultra Bee MX, Talaria MX5, Stark VARG) are strictly designated for private land and licensed motocross tracks.`
    },
    {
      id: 'test-ride-trial',
      title: '2. 30-Day Netherlands Trial & Returns Policy',
      summary: 'We offer an extended 30-day trial period exceeding statutory 14-day Dutch/EU Distance Selling rules (Wet Koop op Afstand).',
      content: `• Trial Period: Customers may inspect and trial the machine for up to 30 calendar days from the confirmed PostNL or DHL delivery date.
• Acceptable Use: To qualify for a full refund, the bike must not have accumulated more than 50 km on the digital odometer and must be in clean, undamaged condition with all original keys, chargers, toolkits, and manuals.
• Return Shipping: We arrange tracked courier collection (PostNL / DHL Parcel Nederland) from your Dutch address. A nominal €35 collection fee is deducted from the final refund amount unless returning due to a verified manufacturer defect.
• Refunds: Processed within 3-5 working days of our Amsterdam inspection workshop confirming receipt and condition.`
    },
    {
      id: 'payment-methods',
      title: '3. Accepted Payment Methods, iDEAL, SEPA Bank Transfer & Invoicing',
      summary: 'Accepted payment methods include iDEAL, SEPA Direct Bank Transfer, major debit/credit cards, Klarna / In3, and official 21% Dutch BTW invoices.',
      content: `• iDEAL & Direct Bank Transfer (SEPA / Instant IBAN): We accept iDEAL and direct Euro (€) transfers for all orders with a 0% processing surcharge. Orders paid by bank transfer are reserved immediately and released for workshop PDI upon confirmation of funds.
• Payment Reference: Please ensure your unique DirtVolt Order Reference (e.g. VT-NL-XXXXXX) is quoted with your transfer to ensure automated reconciliation.
• Dutch BTW (VAT) Proforma Invoice: An official EU-compliant 21% BTW invoice with full DirtVolt B.V. credentials (BTW: NL863412098B01, KvK: 84920315) is issued for all orders.
• Cards & Installments: We accept Visa, Mastercard, Apple Pay, Google Pay, and Klarna / In3 installments subject to approval.`
    },
    {
      id: 'cycle-to-work-terms',
      title: '4. Dutch Fietsplan (WKR) & Corporate E-Mobility Subsidies',
      summary: 'Terms governing Dutch Werkkostenregeling (WKR) Fietsplan, Lease a Bike Nederland, Hellorider, FiscFree, and corporate fleet acquisitions.',
      content: `• Fietsplan & Corporate Lease: We supply official BTW proforma quotes, frame numbers, and EU compliance certificates compatible with Lease a Bike Nederland, FiscFree, Hellorider, and direct employer WKR arrangements.
• Documentation: Contact sales@ebikessale.online to receive tailored employer documentation with VIN/serial numbers and RDW/EN 15194 technical certificates.`
    },
    {
      id: 'two-year-warranty',
      title: '5. 2-Year Comprehensive NL Warranty & Exclusions',
      summary: 'Every new DirtVolt machine is covered by our comprehensive 2-Year warranty backing frame, motor, controller, display, and battery.',
      content: `• What is Covered: 24 months coverage on the electric motor, electronic controller, LCD/TFT display, frame integrity, and lithium-ion battery (guaranteed to maintain at least 70% capacity over 500 charge cycles).
• Excluded Wear & Tear Items: Brake pads, tyres, inner tubes, chains, cassette sprockets, and cables subject to normal operational friction.
• Voiding Conditions: Warranty is voided if the machine is modified beyond manufacturer guidelines or exposed to high-pressure jet washing directly targeting sealed bearing cartridges.`
    },
    {
      id: 'delivery-pdi',
      title: '6. Pre-Delivery Inspection (PDI) & Netherlands Nationwide Shipping',
      summary: 'Information on master assembly and tracked courier delivery throughout Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven, and all Dutch provinces.',
      content: `• Certified PDI Inspection: Prior to dispatch from our Amsterdam central facility, every bike undergoes an extensive 32-point safety check including brake hydraulic bleeding, spoke tension verification, suspension calibration, and battery diagnostic testing.
• Delivery Timeframes: Mainland Netherlands receives fast 24-48 hour delivery via PostNL and DHL Parcel Nederland freight.
• Delivery Inspection: Please inspect the outer protective packaging upon arrival. In the rare event of transit damage, note this with the courier and notify sales@ebikessale.online within 48 hours.`
    },
    {
      id: 'jurisdiction',
      title: '7. Governing Law & Dispute Resolution',
      summary: 'Statutory contract governance under the laws of the Netherlands and EU consumer protection directives.',
      content: `These terms and conditions are governed by and construed in accordance with the laws of the Netherlands (Nederlands recht / Burgerlijk Wetboek). Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of Amsterdam, the Netherlands, without prejudice to statutory consumer rights under the Netherlands Authority for Consumers and Markets (ACM ConsuWijzer) and EU ODR directives.`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in text-slate-800">
      {/* Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Legal &amp; Statutory Framework</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Terms &amp; Conditions of Sale
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Last updated: August 2026. These terms govern the purchase, statutory RDW / EN 15194 compliance, 30-day trial ride, and Dutch Fietsplan (WKR) redemptions for all DirtVolt B.V. (Netherlands) products.
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Dutch Civil Code (BW) &amp; ACM Compliant
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            EU EN 15194 &amp; Dutch RDW Certified
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            iDEAL, SEPA &amp; Klarna Protected
          </span>
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {SECTIONS.map((sec) => {
          const isOpen = activeSection === sec.id;
          return (
            <div
              key={sec.id}
              className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                    {sec.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sec.summary}
                  </p>
                </div>
                <div className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0 mt-0.5">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                  {sec.content}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Company Legal Footnote Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
        <h3 className="font-bold text-slate-900">DirtVolt Corporate Identity:</h3>
        <p>
          DirtVolt B.V. is a private limited company registered in the Netherlands under KvK Amsterdam registration number 84920315.
          <br />
          Headquarters &amp; Central Hub: Keizersgracht 482, 1017 EG Amsterdam, Netherlands.
          <br />
          BTW (VAT) Registration: NL863412098B01 • Direct Hotline: +31 20 808 4410 • Enquiries: sales@ebikessale.online
        </p>
      </div>
    </div>
  );
};
