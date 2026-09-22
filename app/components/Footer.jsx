"use client";

import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowUp,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tests & Packages", href: "/tests-packages" },
    { name: "Home Collection", href: "/home-collection" },
    { name: "Reports", href: "/reports" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Blood Collection At Home", href: "/home-collection" },
    { name: "Diagnostic Tests", href: "/tests-packages" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Digital Reports", href: "/reports" },
    { name: "terms and conditions", href: "/terms-and-conditions" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Refund & Cancellation", href: "/refund-cancellation" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-white text-medical-navy">
      {/* =========================================================
          TOP CTA
      ========================================================= */}

    

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <section className="border-t border-border-light bg-white">
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:py-16
            lg:px-10
            xl:px-12
            2xl:py-20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:grid-cols-2
              lg:grid-cols-[1.35fr_1fr_1fr_1.15fr]
              lg:gap-10
              xl:gap-16
            "
          >
            {/* =====================================================
                BRAND
            ====================================================== */}

            <div className="sm:col-span-2 lg:col-span-1">
              {/* LOGO */}

              <div className="flex justify-start">
                <Link
                  href="/"
                  aria-label="Multipathlab Home"
                  className="
                    inline-flex
                    h-[70px]
                    w-[210px]
                    items-center
                    sm:h-[76px]
                    sm:w-[230px]
                    lg:h-[82px]
                    lg:w-[250px]
                    xl:h-[88px]
                    xl:w-[270px]
                  "
                >
                  <img
                    src="/homepathlab-removebg-preview.png"
                    alt="Multipathlab"
                    className="
                      block
                      h-full
                      w-full
                      object-contain
                      object-left
                    "
                  />
                </Link>
              </div>

              <p
                className="
                  mt-5
                  max-w-[430px]
                  font-body
                  text-sm
                  leading-6
                  text-medical-text
                  sm:text-[15px]
                "
              >
                Trusted diagnostic services with safe home sample collection,
                reliable testing, and easy digital report access.
              </p>

              {/* TRUST BADGES */}

              <div className="mt-6 flex flex-wrap gap-3">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border-light
                    bg-medical-light
                    px-3
                    py-2
                  "
                >
                  <ShieldCheck
                    size={16}
                    className="text-brand-green"
                    strokeWidth={2}
                  />

                  <span
                    className="
                      font-heading
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-medical-navy
                    "
                  >
                    Trusted Service
                  </span>
                </div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-border-light
                    bg-medical-blue-light
                    px-3
                    py-2
                  "
                >
                  <Clock3
                    size={16}
                    className="text-brand-blue"
                    strokeWidth={2}
                  />

                  <span
                    className="
                      font-heading
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-medical-navy
                    "
                  >
                    Home Collection
                  </span>
                </div>
              </div>

              {/* SOCIAL */}

              <div className="mt-7 flex items-center gap-2.5">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-light
                    bg-white
                    text-medical-text
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-green
                    hover:bg-brand-green
                    hover:text-white
                  "
                >
                  <FaFacebookF size={15} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-light
                    bg-white
                    text-medical-text
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-green
                    hover:bg-brand-green
                    hover:text-white
                  "
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-light
                    bg-white
                    text-medical-text
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-green
                    hover:bg-brand-green
                    hover:text-white
                  "
                >
                  <FaLinkedinIn size={15} />
                </a>

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border-light
                    bg-white
                    text-medical-text
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-brand-green
                    hover:bg-brand-green
                    hover:text-white
                  "
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
            </div>

            {/* =====================================================
                QUICK LINKS
            ====================================================== */}

            <div>
              <FooterHeading title="Quick Links" />

              <ul className="mt-6 space-y-3.5">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        font-body
                        text-sm
                        text-medical-text
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-brand-green
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-brand-blue/30
                          transition-colors
                          group-hover:bg-brand-green
                        "
                      />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                SERVICES
            ====================================================== */}

            <div>
              <FooterHeading title="Our Services" />

              <ul className="mt-6 space-y-3.5">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2.5
                        font-body
                        text-sm
                        text-medical-text
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-brand-green
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-brand-blue/30
                          transition-colors
                          group-hover:bg-brand-green
                        "
                      />

                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =====================================================
                CONTACT
            ====================================================== */}

            <div>
              <FooterHeading title="Contact Us" />

              <div className="mt-6 space-y-5">
                {/* PHONE */}

                <a
                  href="tel:+919673272466"
                  className="group flex items-start gap-3"
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-medical-blue-light
                      text-brand-blue
                      transition-all
                      duration-300
                      group-hover:bg-brand-blue
                      group-hover:text-white
                    "
                  >
                    <Phone size={17} strokeWidth={2} />
                  </span>

                  <div>
                    <p
                      className="
                        font-heading
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-medical-text/70
                      "
                    >
                      Call Us
                    </p>

                    <p
                      className="
                        mt-1
                        font-body
                        text-sm
                        font-semibold
                        text-medical-navy
                        transition-colors
                        group-hover:text-brand-blue
                      "
                    >
                      +91 96732 72466
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:info@multipathlab.com"
                  className="group flex items-start gap-3"
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-medical-light
                      text-brand-green
                      transition-all
                      duration-300
                      group-hover:bg-brand-green
                      group-hover:text-white
                    "
                  >
                    <Mail size={17} strokeWidth={2} />
                  </span>

                  <div className="min-w-0">
                    <p
                      className="
                        font-heading
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-medical-text/70
                      "
                    >
                      Email Us
                    </p>

                    <p
                      className="
                        mt-1
                        break-all
                        font-body
                        text-sm
                        font-semibold
                        text-medical-navy
                        transition-colors
                        group-hover:text-brand-green
                      "
                    >
                      info@multipathlab.com
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-medical-blue-light
                      text-brand-blue
                    "
                  >
                    <MapPin size={17} strokeWidth={2} />
                  </span>

                  <div>
                    <p
                      className="
                        font-heading
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-medical-text/70
                      "
                    >
                      Our Location
                    </p>

                    <p
                      className="
                        mt-1
                        font-body
                        text-sm
                        font-semibold
                        leading-5
                        text-medical-navy
                      "
                    >
                      Gurgaon, Haryana
                      <br />
                      Serving Various Cities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              LOWER INFORMATION STRIP
          ====================================================== */}

        </div>
      </section>

      {/* =========================================================
          LEGAL BAR
      ========================================================= */}

      <section className="border-t border-border-light bg-[#f8fbfd]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div
            className="
              flex
              flex-col
              gap-5
              py-6
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p
              className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-medical-text
              "
            >
              © {currentYear} Multipathlab. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {legalLinks.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      font-body
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-medical-text
                      transition-colors
                      hover:text-brand-green
                    "
                  >
                    {item.name}
                  </Link>

                  {index !== legalLinks.length - 1 && (
                    <span className="hidden h-3 w-px bg-border-light sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                group
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                self-start
                rounded-full
                border
                border-border-light
                bg-white
                text-medical-navy
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-brand-green
                hover:bg-brand-green
                hover:text-white
                md:self-auto
              "
            >
              <ArrowUp
                size={16}
                strokeWidth={2.3}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ title }) {
  return (
    <div>
      <h3
        className="
          font-heading
          text-sm
          font-extrabold
          uppercase
          tracking-[0.04em]
          text-medical-navy
        "
      >
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[3px] w-7 rounded-full bg-brand-green" />
        <span className="h-[3px] w-2 rounded-full bg-brand-blue" />
      </div>
    </div>
  );
}

export default Footer;