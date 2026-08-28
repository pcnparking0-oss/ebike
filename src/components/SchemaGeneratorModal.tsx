import React, { useState } from 'react';
import { Product } from '../types';
import { 
  generateProductJsonLd, 
  generateLocalBusinessJsonLd, 
  generateFaqJsonLd 
} from '../data/schemesData';
import { 
  X, 
  Code2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Store, 
  HelpCircle 
} from 'lucide-react';

interface SchemaGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const SchemaGeneratorModal: React.FC<SchemaGeneratorModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen || !product) return null;

  const [activeSchemaTab, setActiveSchemaTab] = useState<'product' | 'store' | 'faq'>('product');
  const [copied, setCopied] = useState(false);

  const productJson = generateProductJsonLd(product);
  const storeJson = generateLocalBusinessJsonLd();
  const faqJson = generateFaqJsonLd(product.paaFaqs);

  const activeJson = 
    activeSchemaTab === 'product' ? productJson :
    activeSchemaTab === 'store' ? storeJson : faqJson;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-white border border-slate-200/90 w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh] text-slate-900">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-base font-heading">
              Structured JSON-LD Schema Inspector
            </h3>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2 py-0.5 rounded font-medium">
              Google Rich Results Validated
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-tabs & Actions Bar */}
        <div className="px-5 py-3 border-b border-slate-200/80 bg-slate-50 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg text-xs">
            <button
              onClick={() => setActiveSchemaTab('product')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSchemaTab === 'product' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Product (GBP + Shipping + EAPC)
            </button>
            <button
              onClick={() => setActiveSchemaTab('store')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSchemaTab === 'store' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-emerald-600" />
              BicycleStore (London Geo)
            </button>
            <button
              onClick={() => setActiveSchemaTab('faq')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSchemaTab === 'faq' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              FAQPage (PAA Accordion)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code Snippet'}</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 flex-1 overflow-y-auto bg-slate-950">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-sky-300 leading-relaxed overflow-x-auto">
            <div className="text-slate-500 mb-2 font-mono text-[10px]">
              &lt;!-- Insert into &lt;head&gt; or via Google Tag Manager / Shopify liquid script --&gt;
              <br />
              &lt;script type="application/ld+json"&gt;
            </div>
            <pre className="whitespace-pre">{activeJson}</pre>
            <div className="text-slate-500 mt-2 font-mono text-[10px]">
              &lt;/script&gt;
            </div>
          </div>
        </div>

        {/* Schema Validation Notes */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Includes UK GBP currency, DPD mainland shipping time, and 30-day return policy required by Google Search Console.</span>
          </div>
          <span className="text-slate-500 text-[11px] font-mono font-medium">Schema.org v28.0 Compliant</span>
        </div>
      </div>
    </div>
  );
};
