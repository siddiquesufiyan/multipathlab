"use client";

import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import {
  CalendarDays,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Tests & Packages",
    href: "/tests-packages",
  },
  {
    name: "Home Collection",
    href: "/home-collection",
  },
  {
    name: "Reports",
    href: "/reports",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  /* ==========================================
     BODY SCROLL LOCK
  ========================================== */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* ==========================================
     ESC KEY CLOSE
  ========================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className="
          sticky
          top-0
          z-[100]
          w-full

          border-b
          border-[var(--color-border-light)]

          bg-white
        "
      >
        {/* =================================================
            MAIN NAVBAR CONTAINER
        ================================================= */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1200px]

            items-center
            justify-between

            px-4

            h-[64px]

            sm:px-5
            sm:h-[68px]

            md:px-6
            md:h-[72px]

            lg:px-8
            lg:h-[76px]

            xl:px-8
            xl:h-[78px]

            2xl:px-10
            2xl:h-[80px]
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="/"
            aria-label="Multipathlab Home"
            className="
              flex
              shrink-0
              items-center

              h-full

              overflow-visible
            "
          >
            <img
              src="/multipath-main-logo-remover.png"
              alt="Multipathlab"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="
               
  block
  h-auto
  w-[80px]

  max-w-none

  object-cover
  object-left

  sm:w-[120px]

  md:w-[100px]

  lg:w-[100px]

  xl:w-[100px]

  2xl:w-[100px]
"
            
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
              1280px+
          ================================================= */}

          <nav
            className="
              hidden

              xl:flex
              xl:flex-1

              xl:items-center
              xl:justify-center

              xl:h-full
            "
            aria-label="Main navigation"
          >
            <div
              className="
                flex
                h-full

                items-center
                justify-center

                gap-0

                2xl:gap-1
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative

                    flex
                    h-full

                    items-center
                    justify-center

                    px-2.5

                    2xl:px-3

                    font-[var(--font-heading)]
                    text-[13px]
                    2xl:text-[14px]

                    font-semibold
                    uppercase

                    tracking-[0.01em]
                    whitespace-nowrap

                    text-[var(--color-medical-navy)]

                    transition-colors
                    duration-200

                    hover:text-[var(--color-brand-green)]
                  "
                >
                  <span>
                    {link.name}
                  </span>

                  {/* HOVER LINE */}

                  <span
                    className="
                      pointer-events-none

                      absolute
                      bottom-0
                      left-1/2

                      h-[3px]
                      w-0

                      -translate-x-1/2

                      rounded-t-full

                      bg-[var(--color-brand-green)]

                      transition-all
                      duration-300
                      ease-out

                      group-hover:w-[calc(100%-16px)]
                    "
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* =================================================
              DESKTOP BOOK TEST
          ================================================= */}

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="
              hidden

              shrink-0

              items-center
              justify-center
              gap-2

              rounded-full

              bg-[var(--color-brand-green)]

              px-4
              py-2.5

              xl:inline-flex

              2xl:px-5
              2xl:py-3

              font-[var(--font-heading)]
              text-[12px]
              2xl:text-[13px]

              font-bold
              uppercase

              tracking-[0.02em]

              text-white

              shadow-[0_5px_18px_rgba(67,184,42,0.16)]

              transition-all
              duration-200

              cursor-pointer

              hover:-translate-y-[1px]
              hover:bg-[var(--color-brand-green-dark)]
            "
          >
            <CalendarDays
              size={16}
              strokeWidth={2}
            />

            Book a Test
          </button>

          {/* =================================================
              MOBILE / TABLET ACTIONS
              BELOW 1280px
          ================================================= */}

          <div
            className="
              flex
              shrink-0

              items-center
              justify-end

              gap-2

              xl:hidden
            "
          >
            {/* BOOK TEST */}

            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="
                inline-flex

                h-[38px]

                items-center
                justify-center
                gap-1.5

                rounded-full

                bg-[var(--color-brand-green)]

                px-3

                font-[var(--font-heading)]
                text-[10px]

                font-bold
                uppercase

                tracking-[0.01em]

                text-white

                transition-all
                duration-200

                cursor-pointer

                hover:bg-[var(--color-brand-green-dark)]

                sm:h-[40px]
                sm:px-3.5
                sm:text-[11px]

                md:h-[42px]
                md:px-4
                md:text-[12px]

                lg:h-[44px]
                lg:px-4.5
                lg:text-[13px]
              "
            >
              <CalendarDays
                size={14}
                strokeWidth={2}
                className="
                  sm:h-[15px]
                  sm:w-[15px]

                  md:h-4
                  md:w-4

                  lg:h-[17px]
                  lg:w-[17px]
                "
              />

              <span>
                Book a Test
              </span>
            </button>

            {/* MENU */}

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((prev) => !prev)
              }
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              className="
                relative
                z-[140]

                flex
                h-[40px]
                w-[40px]

                shrink-0

                items-center
                justify-center

                rounded-xl

                border
                border-[var(--color-border-light)]

                bg-white

                text-[var(--color-medical-navy)]

                transition-all
                duration-200

                cursor-pointer

                hover:border-[var(--color-brand-green)]
                hover:text-[var(--color-brand-green)]

                sm:h-[42px]
                sm:w-[42px]

                md:h-[44px]
                md:w-[44px]

                lg:h-[46px]
                lg:w-[46px]
              "
            >
              {isMenuOpen ? (
                <X
                  size={21}
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  size={22}
                  strokeWidth={2}
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[120]

          xl:hidden

          ${
            isMenuOpen
              ? "pointer-events-auto visible"
              : "pointer-events-none invisible"
          }
        `}
      >
        {/* OVERLAY */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsMenuOpen(false)}
          className={`
            absolute
            inset-0

            bg-black/10

            transition-opacity
            duration-200

            ${
              isMenuOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* =================================================
            MENU PANEL
        ================================================= */}

        <div
          className={`
            absolute
            left-0
            right-0

            top-[64px]

            max-h-[calc(100vh-64px)]

            overflow-y-auto

            border-b
            border-[var(--color-border-light)]

            bg-white

            shadow-[0_18px_45px_rgba(18,52,91,0.16)]

            transition-transform
            duration-300
            ease-out

            sm:top-[68px]
            sm:max-h-[calc(100vh-68px)]

            md:top-[72px]
            md:max-h-[calc(100vh-72px)]

            lg:top-[76px]
            lg:max-h-[calc(100vh-76px)]

            ${
              isMenuOpen
                ? "translate-y-0"
                : "-translate-y-5"
            }
          `}
        >
          <nav
            aria-label="Mobile navigation"
            className="
              mx-auto
              w-full
              max-w-[760px]

              px-4
              py-5

              sm:px-6
              sm:py-6

              md:px-8
              md:py-7

              lg:px-10
              lg:py-8
            "
          >
            {/* MOBILE LINKS */}

            <div
              className="
                overflow-hidden

                rounded-2xl

                border
                border-[var(--color-border-light)]

                bg-white
              "
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    group

                    flex
                    min-h-[54px]

                    items-center
                    justify-between

                    px-5

                    font-[var(--font-heading)]
                    text-[14px]

                    font-semibold
                    uppercase

                    tracking-[0.01em]

                    text-[var(--color-medical-navy)]

                    transition-all
                    duration-200

                    hover:bg-[var(--color-medical-light)]
                    hover:text-[var(--color-brand-green)]

                    sm:min-h-[57px]
                    sm:px-6
                    sm:text-[15px]

                    md:min-h-[60px]
                    md:px-7
                    md:text-[16px]

                    lg:min-h-[62px]
                    lg:px-8
                    lg:text-[16px]

                    ${
                      index !== navLinks.length - 1
                        ? "border-b border-[var(--color-border-light)]"
                        : ""
                    }
                  `}
                >
                  <span>
                    {link.name}
                  </span>

                  <ChevronRight
                    size={18}
                    strokeWidth={2}
                    className="
                      shrink-0

                      text-[var(--color-brand-green)]

                      transition-transform
                      duration-200

                      group-hover:translate-x-1
                    "
                  />
                </a>
              ))}
            </div>

            {/* MOBILE BOOK TEST */}

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setBookingOpen(true);
              }}
              className="
                mt-4

                flex
                min-h-[53px]
                w-full

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-[var(--color-brand-green)]

                px-5

                font-[var(--font-heading)]
                text-[14px]

                font-bold
                uppercase

                tracking-[0.01em]

                text-white

                transition-colors
                duration-200

                cursor-pointer

                hover:bg-[var(--color-brand-green-dark)]

                sm:min-h-[56px]
                sm:text-[15px]

                md:min-h-[58px]
                md:text-[16px]
              "
            >
              <CalendarDays
                size={18}
                strokeWidth={2}
              />

              Book a Test
            </button>
          </nav>
        </div>
      </div>

      {/* =====================================================
          BOOKING FORM
      ===================================================== */}

      <BookingForm
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTest=""
        topOffset="80px"
      />
    </>
  );
}

export default Navbar;