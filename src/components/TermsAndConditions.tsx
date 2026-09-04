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
      title: '1. UK Statutory EAPC Compliance & Rider Age',
      summary: 'All electric bicycles sold by Apex Ebikes UK strictly comply with the Electrically Assisted Pedal Cycles Regulations 1983 (SI 1983/1168), as amended by SI 2015/54, and European Standard EN 15194.',
      content: `Under UK law:
• Continuous rated motor power is capped at a statutory maximum of 250 Watts.
• Electric motor assistance must cut off automatically when the bicycle reaches a speed of 15.5 mph (25 km/h).
• The motor only activates when the pedals are in forward motion (pedal assist). Independent twist-and-go throttles above walking speed (3.7 mph) are strictly prohibited on UK public roads unless officially type-approved as L1e-A vehicles.
• By purchasing and operating an Apex E-Bike on UK public roads, cycle lanes, or bridleways, the customer confirms the rider is at least 14 years of age, complying with Section 32 of the Road Traffic Act 1988.`
    },
    {
      id: 'test-ride-trial',
      title: '2. 30-Day UK Test Ride Trial & Returns Policy',
      summary: 'We offer an extended 30-day trial period exceeding statutory 14-day Distance Selling Regulations (Consumer Contracts Regulations 2013).',
      content: `• Trial Period: Customers may test ride the e-bike for up to 30 calendar days from the confirmed courier delivery date.
• Acceptable Use: To qualify for a full refund, the bike must not have accumulated more than 30 miles on the digital odometer and must be in clean, undamaged condition with all original keys, chargers, toolkits, and manuals.
• Return Shipping: We arrange DPD UK / DX Freight collection from your mainland UK address. A nominal £35 collection fee is deducted from the final refund amount unless returning due to a verified manufacturer defect.
• Refunds: Processed within 3-5 working days of our Birmingham inspection workshop confirming receipt and condition.`
    },
    {
      id: 'payment-methods',
      title: '3. Accepted Payment Methods, Direct Bank Transfer & Invoicing',
      summary: 'Accepted payment methods include UK Direct Bank Transfer (BACS / Faster Payments), major debit/credit cards, 0% APR finance, and proforma invoices.',
      content: `• Direct Bank Transfer (BACS / Faster Payments): We accept direct transfers for all orders with a 0% processing surcharge. Orders paid by bank transfer are reserved immediately and released for workshop PDI upon confirmation of funds.
• Payment Reference: Please ensure your unique Electric Dirt Bikes Order Reference (e.g. EDB-XXXXXX) is quoted with your transfer to ensure automated reconciliation.
• VAT Proforma Invoice: An official HMRC-compliant VAT invoice with full business credentials (GB 894 1209 44) is issued for all orders.
• Cards & Finance: We accept Visa, Mastercard, American Express, and Klarna / Novuna 0% APR finance subject to status.`
    },
    {
      id: 'cycle-to-work-terms',
      title: '4. Cycle to Work Schemes & Salary Sacrifice Vouchers',
      summary: 'Terms governing voucher redemption with Cyclescheme, Green Commute Initiative (GCI), Vivup, and Halfords Cycle2Work.',
      content: `• Voucher Redemption: Cycle to Work vouchers issued by approved providers constitute full or partial payment. Your employer retains statutory ownership of the equipment during the hire period.
• Cancellation of Scheme Orders: Once a Cycle to Work voucher is redeemed and the collection/delivery confirmation is signed, cancellations must be processed in accordance with your employer's salary sacrifice agreement and the scheme provider's terms.
• Surcharges: Electric Dirt Bikes does not apply hidden processing surcharges to Cycle to Work voucher redemptions.`
    },
    {
      id: 'two-year-warranty',
      title: '5. 2-Year Comprehensive Warranty & Exclusions',
      summary: 'Every new Electric Dirt Bikes machine is covered by our comprehensive 2-Year warranty backing frame, motor, controller, display, and battery.',
      content: `• What is Covered: 24 months coverage on the electric motor, electronic controller, LCD/TFT display, frame integrity, and lithium-ion battery (guaranteed to maintain at least 70% capacity over 500 charge cycles).
• Excluded Wear & Tear Items: Brake pads, tyres, inner tubes, chains, cassette sprockets, and cables subject to normal operational friction.
• Voiding Conditions: Warranty is voided if the machine is modified beyond manufacturer guidelines or exposed to high-pressure jet washing directly targeting sealed bearing cartridges.`
    },
    {
      id: 'delivery-pdi',
      title: '6. Pre-Delivery Inspection (PDI) & Mainland Shipping',
      summary: 'Information on Cytech Level 3 master assembly and DPD / DX Freight tracked shipping throughout Great Britain and Northern Ireland.',
      content: `• Cytech Level 3 Certified PDI: Prior to dispatch from our UK central facility, every bike undergoes an extensive 32-point safety check including brake hydraulic bleeding, spoke tension verification, suspension calibration, and battery diagnostic testing.
• Delivery Timeframes: Mainland England, Wales, and Scottish Lowlands receive complimentary 24-48 hour delivery. Scottish Highlands, Islands, and Northern Ireland may require 3-5 working days.
• Delivery Inspection: Please inspect the outer protective packaging upon arrival. In the rare event of transit damage, note this with the courier and notify sales@ebikessales.online within 48 hours.`
    },
    {
      id: 'jurisdiction',
      title: '7. Governing Law & Dispute Resolution',
      summary: 'Statutory contract governance under the laws of England and Wales.',
      content: `These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, without prejudice to consumer rights in Scotland and Northern Ireland under applicable UK law.`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in text-slate-800">
      {/* Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">
          <Scale className="w-4 h-4" />
          <span>Legal & Statutory Framework</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Terms & Conditions of Sale
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Last updated: August 2026. These terms govern the purchase, statutory EAPC compliance, 30-day trial ride, and Cycle to Work voucher redemptions for all Apex Ebikes UK products.
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            UK Consumer Rights Act 2015 Compliant
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            UK EAPC SI 1983/1168 Certified
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            FCA Regulated Finance Options
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
        <h3 className="font-bold text-slate-900">Electric Dirt Bikes Corporate Identity:</h3>
        <p>
          Electric Dirt Bikes Ltd is a private limited company registered in England and Wales under company number 14289012.
          <br />
          Registered Office: 42 Innovation Way, Digbeth, Birmingham, B5 5TH, United Kingdom.
          <br />
          VAT Registration: GB 894 1209 44 • Enquiries: sales@ebikessales.online
        </p>
      </div>
    </div>
  );
};
