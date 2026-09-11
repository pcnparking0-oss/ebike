import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp" className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/447462268683"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp (+44 7462 268683)"
        aria-label="Chat on WhatsApp (+44 7462 268683)"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border-2 border-white"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
};
