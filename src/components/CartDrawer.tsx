import React, { useState } from 'react';
import { CartItem } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Ticket,
  Lock
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [voucherCode, setVoucherCode] = useState('');
  const [appliedVoucher, setAppliedVoucher] = useState<string | null>(null);
  const [voucherDiscount, setVoucherDiscount] = useState<number>(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.priceGBP * item.quantity, 0);
  const ukVatIncluded = Math.round((subtotal / 6) * 100) / 100; // 20% VAT inside total
  const shippingCost = subtotal >= 50 ? 0 : 4.95;
  const total = Math.max(0, subtotal - voucherDiscount + shippingCost);

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const code = voucherCode.trim().toUpperCase();
    if (code.includes('C2W') || code.includes('SCHEME') || code.includes('CYCLE')) {
      // Mock 35% Cycle to Work employer voucher
      const discount = Math.round(subtotal * 0.35);
      setVoucherDiscount(discount);
      setAppliedVoucher(`Cycle to Work Certificate (${code})`);
      setVoucherCode('');
    } else if (code === 'APEX10') {
      const discount = Math.round(subtotal * 0.10);
      setVoucherDiscount(discount);
      setAppliedVoucher('Apex Launch 10% Discount');
      setVoucherCode('');
    } else {
      alert('Voucher not recognised. Try entering "CYCLESCHEME-2026" for Cycle to Work voucher redemption, or "APEX10" for 10% off.');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl text-slate-900">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-slate-900 text-base font-heading">Your UK Order Basket</h2>
            <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs px-2 py-0.5 rounded-full font-mono font-medium">
              {items.length} {items.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div className="bg-emerald-50 border-b border-emerald-200 px-5 py-2.5 flex items-center justify-between text-xs text-emerald-800">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">Free UK Mainland 24-48h Delivery Qualified!</span>
          </div>
          <span className="font-bold text-emerald-700">£0.00</span>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkoutComplete ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-2xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Order & Scheme Request Received!</h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                Order confirmation <strong className="text-slate-900 font-mono">#APX-UK-98421</strong> dispatched. We are preparing your bike in our Birmingham workshop with a complete pre-delivery inspection (PDI).
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Courier:</span>
                  <span className="text-slate-900 font-semibold">DPD UK / DX Freight</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Pre-Delivery Inspection:</span>
                  <span className="text-emerald-700 font-semibold">Cytech Level 3 Certified</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>UK Warranty:</span>
                  <span className="text-slate-900 font-semibold">2 Years Full Coverage</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClearCart();
                  onClose();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Continue Browsing Store
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Your basket is empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our UK EAPC legal commuter bikes, folding e-bikes, and Cycle to Work eligible accessories.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-3 flex gap-3 relative group shadow-2xs"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg bg-white border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-bold text-slate-900 text-xs truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-400 hover:text-red-600 p-0.5 cursor-pointer transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[10px] text-blue-600 font-bold block">
                      {item.product.category}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      250W EAPC Road Legal
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-200">
                    <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-1.5 py-0.5 shadow-2xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="text-slate-500 hover:text-slate-900 p-0.5 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-mono font-bold px-1 text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="text-slate-500 hover:text-slate-900 p-0.5 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-extrabold text-slate-900 text-xs font-heading">
                      £{(item.product.priceGBP * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Cycle to Work Voucher / Promo Code Box */}
          {items.length > 0 && !checkoutComplete && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-800 font-semibold">
                <Ticket className="w-3.5 h-3.5 text-amber-600" />
                <span>Cycle to Work Voucher / Promo Code</span>
              </div>
              <form onSubmit={handleApplyVoucher} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. CYCLESCHEME-2026 or APEX10"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="flex-1 bg-white border border-slate-200 text-xs rounded-lg px-2.5 py-1.5 text-slate-900 uppercase placeholder:normal-case focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {appliedVoucher && (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg p-1.5 text-[11px] text-emerald-800 font-medium">
                  <span>✓ {appliedVoucher}</span>
                  <button
                    onClick={() => {
                      setAppliedVoucher(null);
                      setVoucherDiscount(0);
                    }}
                    className="text-slate-500 hover:text-slate-800 text-xs cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && !checkoutComplete && (
          <div className="p-5 border-t border-slate-200 bg-slate-50/90 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal (Net of Discounts):</span>
                <span className="text-slate-900 font-semibold">£{subtotal.toLocaleString()}</span>
              </div>
              {voucherDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Cycle to Work / Voucher Saving:</span>
                  <span>-£{voucherDiscount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>UK Mainland Shipping:</span>
                <span className="text-emerald-700 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-slate-500 text-[11px]">
                <span>Estimated UK VAT (20% Included):</span>
                <span>£{ukVatIncluded.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Amount to Pay:</span>
                <span className="text-slate-900 font-extrabold text-base font-heading">£{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckingOut}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isCheckingOut ? 'Securing UK Payment...' : 'Secure Checkout & Voucher Redemption'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500 pt-1">
              <span>🔒 256-Bit SSL Encryption</span>
              <span>•</span>
              <span>GB VAT Invoice Provided</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
