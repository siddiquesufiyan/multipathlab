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
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Blood Collection At Home", href: "/home-collection" },
    { name: "Diagnostic Tests", href: "/tests-packages" },
    { name: "Digital Reports", href: "/reports" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Refund & Cancellation", href: "/refund-cancellation" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-white text-[#12345b]">

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <section className="border-t border-[#dce8f2] bg-[#f7fbff]">
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

              <div
                className="
                  inline-flex
                  rounded-[5px]
                  bg-white
                  px-3
                  py-2
                  ring-1
                  ring-[#dce8f2]
                "
              >
                <Link
                  href="/"
                  aria-label="Multipathlab Home"
                  className="
                    inline-flex
                    h-[65px]
                    w-[210px]
                    items-center
                    sm:h-[72px]
                    sm:w-[225px]
                    lg:h-[78px]
                    lg:w-[245px]
                    xl:h-[84px]
                    xl:w-[260px]
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
                  text-[#45627f]
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
                    rounded-[5px]
                    border
                    border-[#dce8f2]
                    bg-white
                    px-3
                    py-2
                  "
                >
                  <ShieldCheck
                    size={16}
                    className="text-[#43b82a]"
                    strokeWidth={2}
                  />

                  <span
                    className="
                      font-heading
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#12345b]
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
                    rounded-[5px]
                    border
                    border-[#dce8f2]
                    bg-white
                    px-3
                    py-2
                  "
                >
                  <Clock3
                    size={16}
                    className="text-[#0068c9]"
                    strokeWidth={2}
                  />

                  <span
                    className="
                      font-heading
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#12345b]
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
                    border-[#dce8f2]
                    bg-white
                    text-[#12345b]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#12345b]
                    hover:bg-[#12345b]
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
                    border-[#dce8f2]
                    bg-white
                    text-[#12345b]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#43b82a]
                    hover:bg-[#43b82a]
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
                    border-[#dce8f2]
                    bg-white
                    text-[#12345b]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#0068c9]
                    hover:bg-[#0068c9]
                    hover:text-white
                  "
                >
                  <FaLinkedinIn size={15} />
                </a>

                <a
                  href="https://wa.me/919082742451"
                  aria-label="WhatsApp"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#dce8f2]
                    bg-white
                    text-[#12345b]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#43b82a]
                    hover:bg-[#43b82a]
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
                        text-[#45627f]
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-[#0068c9]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#0068c9]/40
                          transition-colors
                          group-hover:bg-[#43b82a]
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
                        text-[#45627f]
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-[#0068c9]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#0068c9]/40
                          transition-colors
                          group-hover:bg-[#43b82a]
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
                  href="tel:+919082742451"
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
                      rounded-[5px]
                      bg-[#eaf4ff]
                      text-[#0068c9]
                      transition-all
                      duration-300
                      group-hover:bg-[#0068c9]
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
                        text-[#45627f]/70
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
                        text-[#12345b]
                        transition-colors
                        group-hover:text-[#0068c9]
                      "
                    >
                      +91 90827 42451
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:info@multipathlab.in"
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
                      rounded-[5px]
                      bg-[#edf9ea]
                      text-[#43b82a]
                      transition-all
                      duration-300
                      group-hover:bg-[#43b82a]
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
                        text-[#45627f]/70
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
                        text-[#12345b]
                        transition-colors
                        group-hover:text-[#43b82a]
                      "
                    >
                      info@multipathlab.in
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

               <div className="flex items-start gap-2">
  <span
    className="
      flex
      h-10
      w-10
      shrink-0
      items-center
      justify-center
      rounded-[5px]
      bg-[#eaf4ff]
      text-[#0068c9]
    "
  >
    <MapPin size={17} strokeWidth={2} />
  </span>

  <div className="pt-0">
    <p
      className="
        font-heading
        text-[10px]
        font-bold
        uppercase
        tracking-[0.14em]
        text-[#45627f]/70
      "
    >
      Our Location
    </p>

    <p
      className="
        font-body
        text-sm
        font-semibold
        leading-6
        text-[#12345b]
      "
    >
      Bhartiye Society, Bldg No. 22,
      <br />
      Gautam Nagar, Mahada Bldg,
      <br />
      Near Quba Masjid,
      <br />
      Govandi West - 400043
    </p>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL BAR
      ========================================================= */}

      <section className="border-t border-[#dce8f2] bg-[#12345b]">
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
                text-white/75
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
                      text-white/75
                      transition-colors
                      hover:text-[#43b82a]
                    "
                  >
                    {item.name}
                  </Link>

                  {index !== legalLinks.length - 1 && (
                    <span className="hidden h-3 w-px bg-white/20 sm:block" />
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
                border-white/20
                bg-white
                text-[#12345b]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#43b82a]
                hover:bg-[#43b82a]
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
          text-[#12345b]
        "
      >
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[3px] w-7 rounded-full bg-[#43b82a]" />
        <span className="h-[3px] w-2 rounded-full bg-[#0068c9]" />
      </div>
    </div>
  );
}

export default Footer;