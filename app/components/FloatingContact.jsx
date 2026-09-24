"use client";

import { Phone, MessageCircle } from "lucide-react";

function FloatingContact() {
  const phoneNumber = "9082742451";
  const whatsappNumber = "919082742451";

  const whatsappMessage = encodeURIComponent(
    "Hello, mujhe blood test / home sample collection ke baare mein information chahiye."
  );

  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-[9999]
        flex
        flex-col
        items-end
        gap-2.5
        sm:bottom-5
        sm:right-5
        sm:gap-3
      "
    >
      {/* =====================================================
          CALL
      ===================================================== */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call MultiPathLab"
        className="
          group
          flex
          h-12
          w-12
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-brand-blue
          text-white
          shadow-md
          shadow-brand-blue/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-brand-blue-dark
          sm:h-auto
          sm:w-auto
          sm:gap-2
          sm:px-3
          sm:py-2.5
          md:px-3.5
        "
      >
        {/* Label */}
        <span
          className="
            hidden
            text-xs
            font-bold
            sm:block
            md:text-sm
          "
        >
          Call Now
        </span>

        {/* Icon */}
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/15
            sm:h-8
            sm:w-8
          "
        >
          <Phone
            className="
              h-[18px]
              w-[18px]
              sm:h-[17px]
              sm:w-[17px]
            "
            strokeWidth={2.2}
          />
        </span>
      </a>

      {/* =====================================================
          WHATSAPP
      ===================================================== */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp MultiPathLab"
        className="
          group
          flex
          h-12
          w-12
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-brand-green
          text-white
          shadow-md
          shadow-brand-green/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-brand-green-dark
          sm:h-auto
          sm:w-auto
          sm:gap-2
          sm:px-3
          sm:py-2.5
          md:px-3.5
        "
      >
        {/* Label */}
        <span
          className="
            hidden
            text-xs
            font-bold
            sm:block
            md:text-sm
          "
        >
          WhatsApp
        </span>

        {/* Icon */}
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/15
            sm:h-8
            sm:w-8
          "
        >
          <MessageCircle
            className="
              h-[19px]
              w-[19px]
              sm:h-[18px]
              sm:w-[18px]
            "
            strokeWidth={2.2}
          />
        </span>
      </a>
    </div>
  );
}

export default FloatingContact;