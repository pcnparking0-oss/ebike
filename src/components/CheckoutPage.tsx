import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft, ArrowRight, ShieldCheck, Mail, MapPin, Landmark, Lock, Zap, Ticket, AlertCircle } from 'lucide-react';
import { submitOrderReservation } from '../services/formApi';
import type { CartItem, ViewMode } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  onClearCart: () => void;
  onNavigateToView: (view: ViewMode) => void;
}

export function CheckoutPage({ items, onClearCart, onNavigateToView }: CheckoutPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer' | 'finance' | 'c2w'>('card');
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>(null);
  const [voucherDiscount, setVoucherDiscount] = useState<number>(0);
  const [voucherError, setVoucherError] = useState<string | null>(null);
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderReference] = useState(() => `VT-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryPostcode, setDeliveryPostcode] = useState('');
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.priceGBP * item.quantity, 0);
  const ukVatIncluded = Math.round((subtotal / 6) * 100) / 100; // 20% VAT inside total
  const shippingCost = subtotal >= 50 ? 0 : 4.95;
  const total = Math.max(0, subtotal - voucherDiscount + shippingCost);

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    setVoucherError(null);
    const code = voucherCode.trim().toUpperCase();
    if (code.includes('C2W') || code.includes('SCHEME') || code.includes('CYCLE')) {
      const discount = Math.round(subtotal * 0.35);
      setVoucherDiscount(discount);
      setAppliedVoucher(`Cycle to Work Certificate (${code})`);
      setVoucherCode('');
    } else if (code === 'VOLT10' || code === 'APEX10' || code === 'DIRT10') {
      const discount = Math.round(subtotal * 0.10);
      setVoucherDiscount(discount);
      setAppliedVoucher('DirtVolt 10% Welcome Discount');
      setVoucherCode('');
    } else {
      setVoucherError('Voucher code not recognised. Try "DIRT10" for 10% off or "CYCLESCHEME-2026" for Cycle to Work voucher.');
    }
  };

  const handleCheckout = async () => {
    if (!customerEmail.trim() || !customerEmail.includes('@')) {
      setCheckoutError('Please enter your email address below to receive your official order reservation and invoice.');
      return;
    }

    setCheckoutError(null);
    setIsCheckingOut(true);

    try {
      const orderItems = items.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        priceGBP: item.product.priceGBP,
        sku: item.product.sku,
      }));

      const response = await submitOrderReservation({
        orderReference,
        customerName: customerName.trim() || 'Valued Customer',
        customerEmail: customerEmail.trim(),
        customerPhone: customerPhone.trim(),
        deliveryAddress: deliveryPostcode.trim() ? `UK Postcode: ${deliveryPostcode.trim()}` : 'UK Mainland Standard Delivery',
        paymentMethod,
        items: orderItems,
        subtotal,
        discount: voucherDiscount,
        shipping: shippingCost,
        total,
      });

      if (!response.success) {
        setCheckoutError(response.error || 'Failed to submit order. Please try again.');
        return;
      }

      setCheckoutComplete(true);
      onClearCart();
    } catch (err: any) {
      console.error('Checkout error:', err);
      setCheckoutError(err?.message || 'An unexpected error occurred.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (checkoutComplete) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 animate-fade-in text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-emerald-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 font-heading">Secure Reservation Complete!</h1>
        <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
          Your order reference <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">#{orderReference}</span> has been securely logged.
        </p>
        <div className="bg-white border border-slate-200 shadow-xs p-6 rounded-2xl max-w-lg mx-auto text-sm space-y-4 text-left">
          <p className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Next Steps for UK Delivery:</p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-blue-600">1.</span>
              A confirmation email has been dispatched to {customerEmail} via Zoho Mail.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">2.</span>
              {paymentMethod === 'bank_transfer' 
                ? 'Our UK sales team will email you a VAT proforma invoice with bank details within 1-2 hours.'
                : 'A secure payment link / finance application will follow shortly to complete your order.'}
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600">3.</span>
              Once cleared, your machine will be dispatched via secure UK courier (24-48h).
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <button
            onClick={() => onNavigateToView('shop')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-all cursor-pointer shadow-md inline-block"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24 animate-fade-in text-center space-y-6">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-8 h-8 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 font-heading">Your Basket is Empty</h1>
        <p className="text-slate-600">Please add some items to your basket before checking out.</p>
        <button
          onClick={() => onNavigateToView('shop')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all cursor-pointer shadow-md inline-block mt-4"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => onNavigateToView('shop')}
          className="p-2 hover:bg-white bg-slate-100 rounded-lg text-slate-600 transition-colors border border-slate-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">Secure Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form & Options */}
        <div className="lg:col-span-7 space-y-6">
          {/* Payment Method */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Select Payment Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  paymentMethod === 'card'
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Lock className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span className="font-bold">Credit / Debit Card</span>
                </div>
                <span className="text-xs text-slate-500">Secure link via Stripe</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('bank_transfer')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  paymentMethod === 'bank_transfer'
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Landmark className={`w-5 h-5 ${paymentMethod === 'bank_transfer' ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span className="font-bold">Bank Transfer (BACS)</span>
                </div>
                <span className="text-xs text-slate-500">Invoice sent instantly</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('finance')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  paymentMethod === 'finance'
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Zap className={`w-5 h-5 ${paymentMethod === 'finance' ? 'text-blue-600' : 'text-slate-500'}`} />
                  <span className="font-bold">0% APR Finance</span>
                </div>
                <span className="text-xs text-slate-500">Klarna (12-36 months)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('c2w')}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  paymentMethod === 'c2w'
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Ticket className={`w-5 h-5 ${paymentMethod === 'c2w' ? 'text-blue-600' : 'text-slate-500'}`} />
                    <span className="font-bold">Cycle to Work</span>
                  </div>
                  <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono font-bold">Save 47%</span>
                </div>
                <span className="text-xs text-slate-500">Employer scheme voucher</span>
              </button>
            </div>
          </section>

          {/* Contact Details */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-2">Customer & Delivery Details</h2>
            
            {checkoutError && (
              <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl flex items-center gap-2 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{checkoutError}</span>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-sm font-bold text-slate-700 block mb-1">
                  Email Address (for VAT Invoice & Courier Tracking) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@example.co.uk"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700 block mb-1">UK Delivery Address / Postcode</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Street, Town, Postcode (e.g. EC1V 9BW)"
                    value={deliveryPostcode}
                    onChange={(e) => setDeliveryPostcode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs sticky top-24">
            <h2 className="font-bold text-slate-900 border-b border-slate-100 pb-4 mb-4 text-lg flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
              Order Summary
            </h2>

            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 border-b border-slate-50 pb-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h4 className="font-bold text-slate-900 text-sm truncate">{item.product.name}</h4>
                    <p className="text-slate-500 text-xs">Qty: {item.quantity}</p>
                    <div className="font-mono text-sm font-semibold text-slate-700 mt-1">
                      £{(item.product.priceGBP * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-800 font-semibold">
                <Ticket className="w-4 h-4 text-amber-600" />
                <span>Promo Code / Voucher</span>
              </div>
              <form onSubmit={handleApplyVoucher} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. VOLT10"
                  value={voucherCode}
                  onChange={(e) => {
                    setVoucherCode(e.target.value);
                    if (voucherError) setVoucherError(null);
                  }}
                  className="flex-1 bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 text-slate-900 uppercase placeholder:normal-case focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 font-medium"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {voucherError && <p className="text-xs text-rose-600 font-medium">{voucherError}</p>}
              {appliedVoucher && (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-xs text-emerald-800 font-medium mt-2">
                  <span>✓ {appliedVoucher}</span>
                  <button
                    onClick={() => {
                      setAppliedVoucher(null);
                      setVoucherDiscount(0);
                    }}
                    className="text-slate-500 hover:text-slate-800 text-sm cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Totals */}
            <div className="space-y-3 text-sm border-t border-slate-100 pt-4 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="text-slate-950 font-semibold">£{subtotal.toLocaleString()}</span>
              </div>
              {voucherDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount Applied:</span>
                  <span>-£{voucherDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>UK Mainland Shipping:</span>
                <span className="text-emerald-700 font-bold">FREE (24-48h Tracked)</span>
              </div>
              <div className="flex justify-between text-slate-500 text-xs">
                <span>Estimated UK VAT (20% Included):</span>
                <span>£{ukVatIncluded.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-slate-950 pt-3 border-t border-slate-200">
                <span>Total Due:</span>
                <span className="text-slate-950 font-extrabold text-2xl font-heading">£{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-blue-600/30 active:scale-95 disabled:opacity-50"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>{isCheckingOut ? 'Transmitting to Zoho Mail...' : 'Confirm & Place Secure Order'}</span>
              {!isCheckingOut && <ArrowRight className="w-5 h-5 ml-1" />}
            </button>
            
            <p className="text-center text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" /> 256-Bit SSL Encrypted Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
