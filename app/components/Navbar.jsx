"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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

  /* ==========================================
     BODY SCROLL LOCK
  ========================================== */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
        {/* ===================================================
            MAIN CONTAINER
        ==================================================== */}

        <div
          className="
            mx-auto
            flex
            h-[70px]
            w-full
            max-w-[1240px]
            items-center
            justify-between

            px-4

            sm:h-[74px]
            sm:px-6

            md:h-[78px]
            md:px-8

            lg:h-[82px]
            lg:px-10

            xl:h-[84px]
            xl:px-8

            2xl:px-10
          "
        >
          {/* =================================================
              LOGO

              NO LINK
          ================================================= */}

          <div
            className="
              relative
              flex
              h-[50px]
              w-[150px]
              shrink-0
              items-center

              sm:h-[54px]
              sm:w-[165px]

              md:h-[58px]
              md:w-[180px]

              lg:h-[62px]
              lg:w-[195px]

              xl:h-[66px]
              xl:w-[205px]

              2xl:h-[70px]
              2xl:w-[215px]
            "
          >
             <Image
    src="/homepathlab.png"
    alt="Multipathlab"
    fill
    priority
    quality={100}
    sizes="150px"
    className="object-contain cursor-pointer object-left"
  />
          </div>

          {/* =================================================
              DESKTOP NAVIGATION

              1280px+
          ================================================== */}

          <nav
            className="
              hidden
              xl:flex
              xl:flex-1
              xl:items-stretch
              xl:justify-center
              xl:self-stretch
            "
            aria-label="Main navigation"
          >
            <div
              className="
                flex
                h-full
                items-stretch
                justify-center

                gap-1

                2xl:gap-2
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

                    font-[var(--font-heading)]
                    text-[14px]
                    font-semibold
                    uppercase
                    tracking-[0.01em]
                    whitespace-nowrap

                    text-[var(--color-medical-navy)]

                    transition-colors
                    duration-200

                    hover:text-[var(--color-brand-green)]

                    2xl:px-3
                    2xl:text-[15px]
                  "
                >
                  <span>
                    {link.name}
                  </span>

                  {/* =========================================
                      PERFECT HOVER LINE

                      INSIDE EACH LINK
                  ========================================== */}

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

                      group-hover:w-[calc(100%-20px)]
                    "
                  />
                </a>
              ))}
            </div>
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <a
            href="/book-a-test"
            className="
              hidden
              shrink-0

              items-center
              justify-center
              gap-2

              rounded-full

              bg-[var(--color-brand-green)]

              px-5
              py-3

              font-[var(--font-heading)]
              text-[13px]
              font-bold
              uppercase
              tracking-[0.02em]
              text-white

              shadow-[0_5px_18px_rgba(67,184,42,0.16)]

              transition-all
              duration-200

              hover:-translate-y-[1px]
              hover:bg-[var(--color-brand-green-dark)]

              xl:inline-flex

              2xl:px-6
              2xl:py-3.5
              2xl:text-[14px]
            "
          >
            <CalendarDays
              size={17}
              strokeWidth={2}
            />

            Book a Test
          </a>

          {/* =================================================
              MOBILE / TABLET ACTIONS

              BELOW 1280px
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-2

              sm:gap-2.5

              md:gap-3

              xl:hidden
            "
          >
            {/* ===============================================
                BOOK TEST
            ================================================ */}

            <a
              href="/book-a-test"
              className="
                inline-flex

                h-[40px]

                items-center
                justify-center
                gap-1.5

                rounded-full

                bg-[var(--color-brand-green)]

                px-3.5

                font-[var(--font-heading)]
                text-[11px]
                font-bold
                uppercase
                tracking-[0.01em]
                text-white

                transition-colors
                duration-200

                hover:bg-[var(--color-brand-green-dark)]

                sm:h-[42px]
                sm:px-4
                sm:text-[12px]

                md:h-[44px]
                md:px-5
                md:text-[13px]

                lg:h-[46px]
                lg:px-5
                lg:text-[14px]
              "
            >
              <CalendarDays
                size={15}
                strokeWidth={2}
                className="
                  sm:h-4
                  sm:w-4

                  md:h-[17px]
                  md:w-[17px]
                "
              />

              <span>
                Book a Test
              </span>
            </a>

            {/* ===============================================
                MENU BUTTON
            ================================================ */}

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
                h-[42px]
                w-[42px]
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

                hover:border-[var(--color-brand-green)]
                hover:text-[var(--color-brand-green)]

                sm:h-[44px]
                sm:w-[44px]

                md:h-[46px]
                md:w-[46px]

                lg:h-[48px]
                lg:w-[48px]
              "
            >
              {isMenuOpen ? (
                <X
                  size={22}
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  size={23}
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
        {/* =================================================
            CLEAR OVERLAY
        ================================================== */}

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
        ================================================== */}

        <div
          className={`
            absolute
            left-0
            right-0

            top-[70px]

            max-h-[calc(100vh-70px)]

            overflow-y-auto

            border-b
            border-[var(--color-border-light)]

            bg-white

            shadow-[0_18px_45px_rgba(18,52,91,0.16)]

            transition-transform
            duration-300
            ease-out

            sm:top-[74px]
            sm:max-h-[calc(100vh-74px)]

            md:top-[78px]
            md:max-h-[calc(100vh-78px)]

            lg:top-[82px]
            lg:max-h-[calc(100vh-82px)]

            ${
              isMenuOpen
                ? "translate-y-0"
                : "-translate-y-5"
            }
          `}
        >
          {/* =================================================
              MENU INNER CONTAINER
          ================================================== */}

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
            {/* =================================================
                MOBILE MENU LINKS
            ================================================== */}

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
                    min-h-[56px]

                    items-center
                    justify-between

                    px-5

                    font-[var(--font-heading)]
                    text-[15px]
                    font-semibold

                    uppercase
                    tracking-[0.01em]

                    text-[var(--color-medical-navy)]

                    transition-all
                    duration-200

                    hover:bg-[var(--color-medical-light)]
                    hover:text-[var(--color-brand-green)]

                    sm:min-h-[59px]
                    sm:px-6
                    sm:text-[16px]

                    md:min-h-[62px]
                    md:px-7
                    md:text-[17px]

                    lg:min-h-[64px]
                    lg:px-8
                    lg:text-[17px]

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
                    size={19}
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

            {/* =================================================
                MOBILE MENU CTA
            ================================================== */}

            <a
              href="/book-a-test"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-4

                flex
                min-h-[55px]

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-[var(--color-brand-green)]

                px-5

                font-[var(--font-heading)]
                text-[15px]
                font-bold
                uppercase
                tracking-[0.01em]
                text-white

                transition-colors
                duration-200

                hover:bg-[var(--color-brand-green-dark)]

                sm:min-h-[58px]
                sm:text-[16px]

                md:min-h-[60px]
                md:text-[17px]
              "
            >
              <CalendarDays
                size={19}
                strokeWidth={2}
              />

              Book a Test
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;