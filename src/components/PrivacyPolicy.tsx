import React from 'react';
import { ViewMode } from '../types';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileCheck, 
  Database, 
  UserCheck, 
  Mail,
  CheckCircle2
} from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigateToView?: (view: ViewMode) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateToView }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 animate-fade-in text-slate-800">
      {/* Header */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs text-blue-600 font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>UK Data Protection & GDPR Compliant</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Privacy & Cookie Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Apex Ebikes UK is committed to protecting your personal data in full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            ICO Registration: ZA892104
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            256-bit TLS / SSL Encrypted
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <Eye className="w-3.5 h-3.5 text-indigo-600" />
            Zero Third-Party Ad Tracking Sales
          </span>
        </div>
      </div>

      {/* Main Privacy Articles */}
      <div className="space-y-6">
        {/* Section 1: Data We Collect */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900 font-heading">
              1. Information We Collect
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            When you interact with Apex Ebikes UK, place an order, or request Cycle to Work documentation, we may collect the following categories of personal data:
          </p>
          <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside leading-relaxed pl-2">
            <li><strong>Identity & Contact Details:</strong> Full name, billing and mainland UK shipping address, email address, and phone number for courier delivery alerts.</li>
            <li><strong>Cycle to Work Information:</strong> Employer name, company scheme reference code, and certificate redemption identifiers.</li>
            <li><strong>Transactional Data:</strong> Payment method references, order history, warranty registration records, and Cytech workshop service logs.</li>
            <li><strong>Technical & Session Data:</strong> IP address, device type, browser settings, and local preferences to ensure seamless checkout functionality.</li>
          </ul>
        </div>

        {/* Section 2: How We Use Data */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-600" />
            <h2 className="text-base font-bold text-slate-900 font-heading">
              2. Legal Basis & How We Use Your Data
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We only process your personal information when we have a valid lawful basis under UK GDPR:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-slate-900 block">Contractual Performance</span>
              <p className="text-slate-600">To assemble, inspect, and dispatch your e-bike order, communicate delivery tracking with DPD/DX Freight, and honour your 2-year UK warranty.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1">
              <span className="font-bold text-slate-900 block">Legal & Statutory Obligations</span>
              <p className="text-slate-600">Complying with UK HMRC VAT reporting requirements and verifying the 14+ minimum statutory rider age for EAPC cycles.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Third Party Processors */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900 font-heading">
              3. Payment Security & Third-Party Service Providers
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We never store raw credit/debit card numbers on our servers. All financial transactions are securely tokenized through PCI-DSS Level 1 certified processors:
          </p>
          <ul className="space-y-1 text-xs text-slate-700 list-disc list-inside leading-relaxed pl-2">
            <li><strong>Novuna Personal Finance:</strong> 0% APR regulated consumer credit applications.</li>
            <li><strong>Klarna Bank AB:</strong> Pay in 3 interest-free instalment arrangements.</li>
            <li><strong>Cyclescheme / GCI / Vivup:</strong> Salary sacrifice certificate verification.</li>
            <li><strong>DPD UK & DX Freight:</strong> Delivery name, address, and mobile SMS dispatch notifications.</li>
          </ul>
        </div>

        {/* Section 4: Your Statutory Rights */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-600" />
            <h2 className="text-base font-bold text-slate-900 font-heading">
              4. Your UK GDPR Rights
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Under UK data protection laws, you retain the following enforceable rights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="font-bold text-slate-900 block">Right to Access & Copy</span>
              <span className="text-slate-600">Request a complete copy of all personal records held in our systems.</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="font-bold text-slate-900 block">Right to Erasure</span>
              <span className="text-slate-600">Request deletion of non-statutory records ('Right to be Forgotten').</span>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
              <span className="font-bold text-slate-900 block">Right to Rectification</span>
              <span className="text-slate-600">Instantly correct any inaccurate or outdated address or contact information.</span>
            </div>
          </div>
        </div>
      </div>

      {/* DPO Contact Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-slate-900">Data Protection Officer (DPO) Inquiries:</h3>
          <p className="mt-0.5">To exercise any statutory data rights or query cookie preferences, email our data team directly.</p>
        </div>
        <a
          href="mailto:dpo@volttrail.co.uk"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 border border-slate-200 text-blue-600 px-4 py-2 rounded-lg font-bold transition-all shadow-2xs cursor-pointer shrink-0"
        >
          <Mail className="w-4 h-4" />
          <span>dpo@volttrail.co.uk</span>
        </a>
      </div>
    </div>
  );
};
