
"use client";

import React, { useMemo, useState } from "react";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiDroplet,
  FiFileText,
  FiHeart,
  FiHome,
  FiSearch,
  FiShield,
  FiActivity,
  FiUsers,
  FiX,
} from "react-icons/fi";

const packages = [
  {
    id: 1,
    name: "Basic Health Checkup",
    price: 799,
    category: "General",
    description:
      "A convenient starting point for routine health monitoring.",
    tests: ["Routine health screening", "Blood sample collection"],
    icon: <FiHeart />,
    tag: "Essential",
    color: "blue",
  },
  {
    id: 2,
    name: "Comprehensive Full Body Checkup with Vitamin D",
    price: 1549,
    category: "Full Body",
    description:
      "A broader health screening package for your wellness routine.",
    tests: ["Full body screening", "Vitamin D included"],
    icon: <FiActivity />,
    tag: "Popular",
    color: "green",
  },
  {
    id: 3,
    name: "Fever Profile",
    price: 880,
    category: "Fever",
    description:
      "A diagnostic profile for evaluation of fever symptoms.",
    tests: ["Fever-related investigations", "Digital reports"],
    icon: <FiDroplet />,
    tag: "Fever Care",
    color: "blue",
  },
  {
    id: 4,
    name: "Fever Plus Profile",
    price: 1760,
    category: "Fever",
    description: "An expanded fever-related diagnostic profile.",
    tests: [
      "Additional fever investigations",
      "Home sample collection",
    ],
    icon: <FiShield />,
    tag: "Extended",
    color: "green",
  },
  {
    id: 5,
    name: "GD Diabetic Pro",
    price: 3060,
    category: "Diabetes",
    description:
      "A diagnostic package for diabetes-related health monitoring.",
    tests: [
      "Diabetes-related investigations",
      "Digital reports",
    ],
    icon: <FiActivity />,
    tag: "Diabetes Care",
    color: "blue",
  },
  {
    id: 6,
    name: "Arthritis Basic Screening",
    price: 1199,
    category: "General",
    description:
      "A basic screening package for arthritis-related evaluation.",
    tests: ["Arthritis screening", "Home sample collection"],
    icon: <FiHeart />,
    tag: "Screening",
    color: "green",
  },
];

const categories = [
  "All Packages",
  "Full Body",
  "General",
  "Fever",
  "Diabetes",
];

function TestPackage() {
  const [activeCategory, setActiveCategory] =
    useState("All Packages");
  const [search, setSearch] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const matchesCategory =
        activeCategory === "All Packages" ||
        item.category === activeCategory;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const bookPackage = (item) => {
    const message = `Hello, I want to book ${item.name} (₹${item.price}) with home blood sample collection.`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All Packages");
  };

  return (
    <section
      id="tests-packages"
      className="w-full overflow-hidden bg-[#f8fbfd] py-[53px] text-medical-navy sm:py-[68px] lg:py-[88px] font-body"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1200px] sm:w-[calc(100%-48px)]">

        {/* TOP INTRO */}
        <div className="mb-[25px] sm:mb-[34px]">
          <div className="mb-[15px] inline-flex items-center gap-[9px] text-[9px] font-extrabold tracking-[1.3px] text-brand-green-dark sm:mb-[19px] sm:text-[11px] sm:tracking-[1.8px]">
            <span className="grid h-[27px] w-[27px] place-items-center rounded-[9px] bg-[#e5f5df] text-[15px]">
              <FiActivity />
            </span>
            YOUR HEALTH, OUR PRIORITY
          </div>

          <div className="flex flex-col gap-[19px] sm:gap-[30px] md:flex-row md:items-end md:justify-between">
            <div className="max-w-[720px]">
              <h2 className="m-0 font-heading text-[clamp(30px,8vw,40px)] font-extrabold leading-[1.17] tracking-[-1.4px] text-medical-navy sm:text-[clamp(32px,4.1vw,51px)] sm:tracking-[-2px]">
                Health tests made
                <br />
                <span className="text-brand-blue">
                  simple & convenient.
                </span>
              </h2>

              <p className="mt-[14px] max-w-[590px] text-[13px] leading-[1.8] text-medical-text sm:mt-[18px] sm:text-[15px] sm:leading-[1.85]">
                Book diagnostic tests and health packages from
                the comfort of your home. Get your blood sample
                collected and receive your reports digitally.
              </p>
            </div>

            <a
              href="/tests-packages"
              className="inline-flex w-fit shrink-0 items-center gap-[10px] rounded-[12px] border border-[#d6e7f5] bg-brand-white px-[15px] py-[12px] text-[12px] font-bold text-brand-blue no-underline transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue hover:text-brand-white sm:px-[18px] sm:py-[13px] sm:text-[13px]"
            >
              View all packages
              <FiArrowUpRight />
            </a>
          </div>
        </div>

        {/* TRUST FEATURES */}
        <div className="my-[26px] grid grid-cols-1 gap-[10px] sm:my-[32px] sm:mb-[52px] sm:grid-cols-3 sm:gap-[15px]">
          <div className="flex min-w-0 items-center gap-[14px] rounded-[13px] border border-border-light bg-brand-white p-[14px] sm:rounded-[16px] sm:p-[20px]">
            <span className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[13px] bg-medical-blue-light text-[20px] text-brand-blue sm:h-[45px] sm:w-[45px] sm:text-[21px]">
              <FiHome />
            </span>

            <div>
              <strong className="mb-[5px] block text-[13px] font-extrabold text-medical-navy sm:text-[14px]">
                Home collection
              </strong>
              <span className="block text-[11px] leading-[1.6] text-medical-text">
                Sample collection at your doorstep
              </span>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-[14px] rounded-[13px] border border-border-light bg-brand-white p-[14px] sm:rounded-[16px] sm:p-[20px]">
            <span className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[13px] bg-[#edf8e9] text-[20px] text-brand-green-dark sm:h-[45px] sm:w-[45px] sm:text-[21px]">
              <FiFileText />
            </span>

            <div>
              <strong className="mb-[5px] block text-[13px] font-extrabold text-medical-navy sm:text-[14px]">
                Digital reports
              </strong>
              <span className="block text-[11px] leading-[1.6] text-medical-text">
                Reports delivered digitally
              </span>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-[14px] rounded-[13px] border border-border-light bg-brand-white p-[14px] sm:rounded-[16px] sm:p-[20px]">
            <span className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[13px] bg-medical-blue-light text-[20px] text-brand-blue sm:h-[45px] sm:w-[45px] sm:text-[21px]">
              <FiShield />
            </span>

            <div>
              <strong className="mb-[5px] block text-[13px] font-extrabold text-medical-navy sm:text-[14px]">
                Convenient booking
              </strong>
              <span className="block text-[11px] leading-[1.6] text-medical-text">
                Book your tests from home
              </span>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTER */}
        <div className="mb-[19px] flex flex-col gap-[16px] sm:mb-[25px] sm:flex-row sm:items-center sm:justify-between sm:gap-[24px]">
          <div>
            <span className="block font-heading text-[22px] font-extrabold tracking-[-0.7px] text-medical-navy sm:text-[24px]">
              Explore our packages
            </span>
            <small className="mt-[7px] block text-[11px] text-medical-text sm:text-[12px]">
              Find a package that suits your needs
            </small>
          </div>

          <div className="flex min-h-[47px] w-full items-center gap-[10px] rounded-[12px] border border-[#dce7ef] bg-brand-white px-[15px] text-[#7690a7] transition focus-within:border-brand-blue focus-within:ring-4 focus-within:ring-brand-blue/10 sm:min-h-[49px] sm:w-[min(350px,100%)]">
            <FiSearch className="shrink-0" />

            <input
              type="text"
              placeholder="Search health packages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 border-0 bg-transparent text-[12px] text-medical-navy outline-none placeholder:text-[#8ba0b3]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="grid shrink-0 place-items-center border-0 bg-transparent text-medical-text hover:text-brand-blue"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-[20px] flex flex-nowrap gap-[10px] overflow-x-auto pb-[8px] sm:mb-[28px] sm:flex-wrap sm:overflow-visible sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-[15px] py-[10px] text-[11px] font-bold transition duration-200 sm:px-[18px] sm:py-[11px] sm:text-[12px] ${
                activeCategory === category
                  ? "border-brand-blue bg-brand-blue text-brand-white shadow-[0_5px_15px_#0068c921]"
                  : "border-[#e0e9f0] bg-brand-white text-medical-text hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 items-stretch gap-[15px] sm:grid-cols-2 sm:gap-[18px] lg:grid-cols-3 lg:gap-[22px]">
          {filteredPackages.map((item) => (
            <article
              key={item.id}
              className="flex min-w-0 flex-col overflow-hidden rounded-[17px] border border-border-light bg-brand-white p-[21px] transition duration-300 hover:-translate-y-1.5 hover:border-[#c7dfef] hover:shadow-[0_16px_42px_#12345b0d] sm:rounded-[20px] sm:p-[25px]"
            >
              {/* CARD TOP */}
              <div className="mb-[21px] flex items-center justify-between gap-[10px] sm:mb-[26px]">
                <div
                  className={`grid h-[53px] w-[53px] place-items-center rounded-[16px] text-[24px] ${
                    item.color === "blue"
                      ? "bg-medical-blue-light text-brand-blue"
                      : "bg-[#edf8e9] text-brand-green-dark"
                  }`}
                >
                  {item.icon}
                </div>

                <span
                  className={`rounded-full px-[11px] py-[7px] text-[10px] font-extrabold ${
                    item.color === "blue"
                      ? "bg-medical-blue-light text-brand-blue"
                      : "bg-[#edf8e9] text-brand-green-dark"
                  }`}
                >
                  {item.tag}
                </span>
              </div>

              {/* CARD CONTENT */}
              <div>
                <span className="mb-[10px] block text-[10px] font-extrabold tracking-[1.3px] text-brand-green-dark">
                  {item.category.toUpperCase()} PACKAGE
                </span>

                <h3 className="m-0 min-h-0 font-heading text-[19px] font-extrabold leading-[1.45] tracking-[-0.5px] text-medical-navy sm:min-h-[53px]">
                  {item.name}
                </h3>

                <p className="mb-[17px] mt-[10px] min-h-0 text-[12px] leading-[1.8] text-medical-text sm:mb-[19px] sm:mt-[12px] sm:min-h-[60px]">
                  {item.description}
                </p>

                <div className="grid gap-[11px] border-y border-[#edf1f5] py-[17px]">
                  {item.tests.map((test) => (
                    <div
                      key={test}
                      className="flex items-start gap-[9px] text-[11px] leading-[1.6] text-medical-text"
                    >
                      <FiCheckCircle className="mt-[1px] shrink-0 text-[15px] text-brand-green" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CARD BOTTOM */}
              <div className="mt-auto flex items-end justify-between gap-[12px] pt-[18px] sm:pt-[21px]">
                <div>
                  <span className="mb-[5px] block text-[10px] text-[#7d91a4]">
                    Starting from
                  </span>

                  <strong className="block font-heading text-[26px] font-extrabold tracking-[-0.8px] text-medical-navy">
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>
                </div>

                <button
                  type="button"
                  className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[13px] border-0 bg-brand-blue text-[20px] text-brand-white transition duration-300 hover:rotate-[-8deg] hover:bg-brand-green-dark"
                  onClick={() => setSelectedPackage(item)}
                  aria-label={`View ${item.name} booking options`}
                >
                  <FiArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredPackages.length === 0 && (
          <div className="rounded-[18px] border border-dashed border-[#cbdce8] px-[20px] py-[55px] text-center text-medical-text">
            <FiSearch className="mx-auto text-[32px] text-brand-blue" />

            <h3 className="mb-[8px] mt-[15px] font-heading text-lg font-extrabold text-medical-navy">
              No packages found
            </h3>

            <p className="text-[13px]">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-[12px] rounded-[10px] bg-brand-blue px-[18px] py-[11px] font-bold text-brand-white transition hover:bg-brand-blue-dark"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* BOTTOM CTA */}
        <div className="mt-[30px] flex flex-col items-start gap-[14px] rounded-[17px] border border-[#dcece0] bg-gradient-to-r from-medical-light to-medical-blue-light p-[22px] sm:mt-[46px] sm:flex-row sm:items-center sm:gap-[20px] sm:rounded-[20px] sm:p-[27px_30px]">
          <div className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-[16px] bg-brand-white text-[25px] text-brand-green-dark">
            <FiUsers />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="mb-[7px] font-heading text-[17px] font-extrabold text-medical-navy sm:text-[18px]">
              Not sure which test you need?
            </h3>

            <p className="text-[11px] leading-[1.7] text-medical-text sm:text-[12px]">
              Contact us for booking assistance and information
              about available diagnostic tests.
            </p>
          </div>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-[10px] rounded-[12px] bg-brand-blue px-[14px] py-[14px] text-[12px] font-extrabold text-brand-white no-underline transition duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark sm:w-auto sm:px-[19px]"
          >
            Get booking assistance
            <FiChevronRight />
          </a>
        </div>
      </div>

      {/* BOOKING MODAL */}
      {selectedPackage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-black/60 p-[20px] backdrop-blur-[5px]"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-[460px] overflow-y-auto rounded-[20px] bg-brand-white p-[25px_21px] shadow-[0_25px_80px_#07111f30] sm:rounded-[24px] sm:p-[32px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tp-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="absolute right-[17px] top-[17px] grid h-[36px] w-[36px] place-items-center rounded-[11px] border-0 bg-[#f0f5f8] text-[19px] text-medical-navy transition hover:bg-[#e5edf3]"
              onClick={() => setSelectedPackage(null)}
              aria-label="Close booking dialog"
            >
              <FiX />
            </button>

            {/* MODAL ICON */}
            <div
              className={`mb-[22px] grid h-[57px] w-[57px] place-items-center rounded-[17px] text-[27px] ${
                selectedPackage.color === "blue"
                  ? "bg-medical-blue-light text-brand-blue"
                  : "bg-[#edf8e9] text-brand-green-dark"
              }`}
            >
              {selectedPackage.icon}
            </div>

            <span className="text-[10px] font-extrabold tracking-[1.5px] text-brand-green-dark">
              SELECTED HEALTH PACKAGE
            </span>

            <h3
              id="tp-modal-title"
              className="mb-[12px] mt-[12px] pr-[12px] font-heading text-[22px] font-extrabold leading-[1.4] text-medical-navy sm:text-[25px]"
            >
              {selectedPackage.name}
            </h3>

            <p className="text-[13px] leading-[1.8] text-medical-text">
              {selectedPackage.description}
            </p>

            {/* PRICE */}
            <div className="my-[23px] flex items-center justify-between gap-[15px] rounded-[13px] bg-[#f3f8fc] p-[17px]">
              <span className="text-[12px] text-medical-text">
                Listed price
              </span>

              <strong className="font-heading text-[27px] font-extrabold text-brand-blue">
                ₹{selectedPackage.price.toLocaleString("en-IN")}
              </strong>
            </div>

            {/* BOOKING INFO */}
            <div className="mb-[25px] grid gap-[13px]">
              <div className="flex items-center gap-[10px] text-[12px] text-medical-text">
                <FiHome className="shrink-0 text-[17px] text-brand-green-dark" />
                Home sample collection
              </div>

              <div className="flex items-center gap-[10px] text-[12px] text-medical-text">
                <FiFileText className="shrink-0 text-[17px] text-brand-green-dark" />
                Digital reports
              </div>

              <div className="flex items-center gap-[10px] text-[12px] text-medical-text">
                <FiClock className="shrink-0 text-[17px] text-brand-green-dark" />
                Collection timing to be confirmed
              </div>
            </div>

            {/* CONTINUE BOOKING */}
            <button
              type="button"
              className="flex min-h-[51px] w-full items-center justify-center gap-[12px] rounded-[12px] border-0 bg-brand-blue text-[13px] font-extrabold text-brand-white transition hover:bg-brand-blue-dark"
              onClick={() => bookPackage(selectedPackage)}
            >
              Continue to booking
              <FiArrowRight />
            </button>

            <small className="mt-[15px] block text-center text-[10px] leading-[1.7] text-[#7c90a3]">
              Final availability, collection charges and package
              details should be confirmed before booking.
            </small>
          </div>
        </div>
      )}
    </section>
  );
}

export default TestPackage;