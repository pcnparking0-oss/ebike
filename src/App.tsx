import React, { useState } from 'react';
import { ViewMode, Product, CartItem } from './types';
import { UK_PRODUCTS } from './data/productsData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StoreFront } from './components/StoreFront';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SeoArchitectureHub } from './components/SeoArchitectureHub';
import { CycleToWorkCalculator } from './components/CycleToWorkCalculator';
import { EapcValidator } from './components/EapcValidator';
import { SchemaGeneratorModal } from './components/SchemaGeneratorModal';
import { AboutUs } from './components/AboutUs';
import { TermsAndConditions } from './components/TermsAndConditions';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ContactUs } from './components/ContactUs';
import { HomePage } from './components/HomePage';
import { Blog } from './components/Blog';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedCity, setSelectedCity] = useState<string>('All UK');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals & Drawers
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [selectedSchemaProduct, setSelectedSchemaProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  
  // Shopping Cart
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: UK_PRODUCTS[0], // Apex Metro Urban Pro Commuter
      quantity: 1,
    }
  ]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        onSelectView={setCurrentView}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            products={UK_PRODUCTS}
            onOpenProductDetail={setSelectedProductDetail}
            onAddToCart={handleAddToCart}
            onNavigateToView={setCurrentView}
          />
        )}

        {(currentView === 'shop' || currentView === 'store') && (
          <StoreFront
            products={UK_PRODUCTS}
            selectedCity={selectedCity}
            searchQuery={searchQuery}
            onOpenProductDetail={setSelectedProductDetail}
            onAddToCart={handleAddToCart}
            onOpenSchemaModal={setSelectedSchemaProduct}
            onNavigateToView={setCurrentView}
          />
        )}

        {currentView === 'about-us' && (
          <AboutUs onNavigateToView={setCurrentView} />
        )}

        {currentView === 'blog' && (
          <Blog onNavigateToView={setCurrentView} />
        )}

        {currentView === 'terms-and-conditions' && (
          <TermsAndConditions onNavigateToView={setCurrentView} />
        )}

        {currentView === 'privacy-policy' && (
          <PrivacyPolicy onNavigateToView={setCurrentView} />
        )}

        {currentView === 'contact-us' && (
          <ContactUs onNavigateToView={setCurrentView} />
        )}

        {currentView === 'seo-architecture' && (
          <SeoArchitectureHub />
        )}

        {currentView === 'cycle-to-work' && (
          <CycleToWorkCalculator />
        )}

        {currentView === 'eapc-compliance' && (
          <EapcValidator />
        )}

        {currentView === 'schema-hub' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
            <div className="bg-white border border-slate-200/90 shadow-sm rounded-2xl p-6 sm:p-8">
              <h1 className="text-2xl font-bold text-slate-900 font-heading mb-2">
                UK Schema.org JSON-LD Structured Data Inspector
              </h1>
              <p className="text-xs text-slate-600 mb-6">
                Select any UK e-bike model below to view and copy Google-compliant Product and LocalBusiness schemas with GBP pricing, UK shipping details, and EAPC compliance properties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {UK_PRODUCTS.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedSchemaProduct(prod)}
                    className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-500 p-4 rounded-xl cursor-pointer transition-all space-y-2 group shadow-xs hover:shadow-md"
                  >
                    <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="font-bold text-slate-900 text-xs truncate group-hover:text-blue-600 transition-colors">
                      {prod.name}
                    </h3>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-600 font-mono">£{prod.priceGBP} GBP</span>
                      <span className="text-blue-600 font-semibold group-hover:underline">View JSON-LD →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectView={setCurrentView} />

      {/* Modals & Slide-overs */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onAddToCart={handleAddToCart}
        onOpenSchemaModal={setSelectedSchemaProduct}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <SchemaGeneratorModal
        isOpen={!!selectedSchemaProduct}
        onClose={() => setSelectedSchemaProduct(null)}
        product={selectedSchemaProduct}
      />
    </div>
  );
}
