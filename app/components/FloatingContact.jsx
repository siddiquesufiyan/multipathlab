"use client";

import { Phone, MessageCircle } from "lucide-react";

function FloatingContact() {
  const phoneNumber = "9082742451";

  const whatsappMessage = encodeURIComponent(
    "Hello Doctor, mujhe blood test / home sample collection ke baare mein information chahiye."
  );

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Doctor"
        className="group flex items-center gap-3 rounded-full bg-brand-blue px-4 py-3 text-white shadow-lg shadow-brand-blue/25 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue-dark"
      >
        <span className="hidden text-sm font-semibold sm:block">
          Call Now
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <Phone className="h-5 w-5" />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/91${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-brand-green px-4 py-3 text-white shadow-lg shadow-brand-green/25 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-green-dark"
      >
        <span className="hidden text-sm font-semibold sm:block">
          WhatsApp
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-5 w-5" />
        </span>
      </a>
    </div>
  );
}

export default FloatingContact;