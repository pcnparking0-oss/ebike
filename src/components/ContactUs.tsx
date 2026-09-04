import React, { useState } from 'react';
import { ViewMode } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Wrench, 
  MessageSquare, 
  Calendar,
  Sparkles,
  Bike
} from 'lucide-react';

interface ContactUsProps {
  onNavigateToView?: (view: ViewMode) => void;
}

export const ContactUs: React.FC<ContactUsProps> = ({ onNavigateToView }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Cycle to Work Scheme Voucher',
    city: 'London',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fade-in text-slate-800">
      {/* Header */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-2xs font-mono">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>UK CUSTOMER CARE & WORKSHOP SUPPORT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
            Get in Touch with DirtVolt
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you need advice choosing the right electric off-road bike, want to enquire about 0% finance or Cycle to Work eligibility, or require certified workshop service and original spare parts, our UK specialist team is here to help.
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-500 font-semibold uppercase font-mono block">Freephone UK</span>
            <span className="text-sm font-bold text-slate-900 block font-heading">0800 892 4410</span>
            <span className="text-[11px] text-slate-500 block">Mon–Fri: 8:30am – 6:00pm</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-500 font-semibold uppercase font-mono block">Email Support & Sales</span>
            <span className="text-sm font-bold text-slate-900 block font-heading">sales@ebikessales.online</span>
            <span className="text-[11px] text-emerald-700 font-medium block">Avg. response under 2 hours</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
              <Wrench className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-500 font-semibold uppercase font-mono block">Technical Workshop</span>
            <span className="text-sm font-bold text-slate-900 block font-heading">workshop@ebikessales.online</span>
            <span className="text-[11px] text-slate-500 block">Spares, tuning & warranty</span>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-xs text-slate-500 font-semibold uppercase font-mono block">UK Service Center</span>
            <span className="text-sm font-bold text-slate-900 block font-heading">Open Mon–Sat</span>
            <span className="text-[11px] text-slate-500 block">Sat: 9:00am – 5:00pm</span>
          </div>
        </div>
      </div>

      {/* Main Form & Location Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 font-heading mb-2">
            Send an Enquiry to Our UK Team
          </h2>
          <p className="text-xs text-slate-600 mb-6">
            Fill in the details below and a DirtVolt specialist will respond with technical advice, stock reservation, or workshop availability.
          </p>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                Thank You, Message Dispatched!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Your enquiry regarding <strong className="text-slate-900 font-medium">"{formData.subject}"</strong> has been assigned ticket <strong className="text-blue-600 font-mono font-bold">#VT-UK-2849</strong>. A Dirt Bike technical advisor will reply to <span className="font-semibold text-slate-800">{formData.email || 'your email'}</span> within 2 business hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: 'Cycle to Work Scheme Voucher',
                    city: 'London',
                    message: ''
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. James Wilson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. james.wilson@example.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="e.g. 07700 900123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Nearest UK City / Hub</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="London">London & South East</option>
                    <option value="Birmingham">Birmingham & West Midlands</option>
                    <option value="Manchester">Manchester & North West</option>
                    <option value="Bristol">Bristol & South West</option>
                    <option value="Edinburgh">Edinburgh & Scotland</option>
                    <option value="Leeds">Leeds & Yorkshire</option>
                    <option value="Other">Other UK Mainland</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">Enquiry Subject *</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none transition-all cursor-pointer font-medium"
                >
                  <option value="Cycle to Work Scheme Voucher">Cycle to Work Scheme Voucher (Cyclescheme / GCI / Vivup)</option>
                  <option value="Sales & Bike Selection Advice">Sales & Bike Selection Advice (Commuter / Folding / Cargo)</option>
                  <option value="Book Birmingham Test Ride">Book a Test Ride at Birmingham Showroom</option>
                  <option value="Cytech Workshop & Service">Cytech Workshop Service & Annual Inspection</option>
                  <option value="Order Tracking & Delivery">Order Tracking & DPD / DX Shipping Update</option>
                  <option value="Warranty & Technical Support">2-Year UK Warranty & Replacement Parts</option>
                  <option value="General Corporate Commute Query">General / Corporate Fleet Enquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 block">How can we assist you? *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please describe your commuting requirements, scheme provider, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSending ? 'Transmitting Enquiry...' : 'Submit Message to UK Technical Team'}</span>
              </button>
            </form>
          )}
        </div>

        {/* UK Physical Locations & Workshop Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 font-heading flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>UK Central Hub & Showrooms</span>
            </h2>

            {/* Birmingham */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs">Birmingham Central Workshop & PDI</span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-1.5 py-0.5 rounded">HQ Hub</span>
              </div>
              <p className="text-xs text-slate-600">
                42 Innovation Way, Digbeth, Birmingham, B5 5TH
              </p>
              <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-2">
                <span>Tel: 0121 496 0880</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">Test rides available daily</span>
              </div>
            </div>

            {/* London */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs">London Experience & Partner Hub</span>
                <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Partner</span>
              </div>
              <p className="text-xs text-slate-600">
                18 Tabernacle Street, Shoreditch, London, EC2A 4LU
              </p>
              <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-2">
                <span>Tel: 0207 946 0192</span>
                <span>•</span>
                <span>Tube: Moorgate / Old Street</span>
              </div>
            </div>

            {/* Manchester */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-xs">Manchester & North West Service Hub</span>
                <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Service</span>
              </div>
              <p className="text-xs text-slate-600">
                Unit 4, Great Ancoats Street, Manchester, M4 5AB
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <span>Cytech Level 3 Service & Warranty Repairs</span>
              </div>
            </div>
          </div>

          {/* Quick FAQ Box */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-3xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Looking for Quick Answers?</span>
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Check out our 30-Day UK Test Ride trial, Cycle to Work tax calculator, and EAPC regulatory guidance directly in the store.
            </p>
            {onNavigateToView && (
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={() => onNavigateToView('shop')}
                  className="bg-white hover:bg-slate-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-2xs cursor-pointer"
                >
                  Browse Store E-Bikes →
                </button>
                <button
                  onClick={() => onNavigateToView('terms-and-conditions')}
                  className="bg-white hover:bg-slate-50 border border-blue-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-2xs cursor-pointer"
                >
                  Read 30-Day Terms →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
