
"use client";

import React, { useMemo, useState } from "react";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiDroplet,
  FiHeart,
  FiHome,
  FiMapPin,
  FiMessageCircle,
  FiSearch,
  FiShield,
  FiStar,
  FiUser,
} from "react-icons/fi";

// ================= BOOKING FORM IMPORT =================
import BookingForm from "./BookingForm";

// ================= WHATSAPP CONFIG =================
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

// ================= TEST DATA START =================
const tests = [
  { name: "Complete Blood Count (CBC)", category: "Blood Tests", description: "Blood cell count test" },
  { name: "Complete Hemogram Test", category: "Blood Tests", description: "Detailed blood count" },
  { name: "Blood Group ABO & Rh", category: "Blood Tests", description: "Blood group identification" },
  { name: "ESR", category: "Blood Tests", description: "Erythrocyte sedimentation rate" },
  { name: "Hemoglobin", category: "Blood Tests", description: "Hemoglobin level test" },
  { name: "Platelet Count", category: "Blood Tests", description: "Platelet count assessment" },

  { name: "Lipid Profile", category: "Heart Health", description: "Cholesterol and lipid assessment" },
  { name: "Total Cholesterol", category: "Heart Health", description: "Cholesterol level test" },
  { name: "Triglycerides", category: "Heart Health", description: "Blood triglyceride test" },
  { name: "Apolipoprotein - A1", category: "Heart Health", description: "Cardiovascular risk marker" },
  { name: "Apolipoprotein - B", category: "Heart Health", description: "Cardiovascular risk marker" },
  { name: "Homocysteine", category: "Heart Health", description: "Homocysteine level test" },

  { name: "HbA1c", category: "Diabetes", description: "Long-term blood sugar marker" },
  { name: "Glucose Fasting", category: "Diabetes", description: "Fasting blood glucose" },
  { name: "Glucose Post Prandial", category: "Diabetes", description: "Post-meal blood glucose" },
  { name: "Glucose Random", category: "Diabetes", description: "Random blood glucose" },
  { name: "Insulin Fasting", category: "Diabetes", description: "Fasting insulin test" },

  { name: "Thyroid Profile (T3, T4, TSH)", category: "Thyroid", description: "Thyroid hormone assessment" },
  { name: "TSH Ultra Sensitive", category: "Thyroid", description: "Sensitive TSH measurement" },
  { name: "Free T3", category: "Thyroid", description: "Free thyroid hormone test" },
  { name: "Free T4", category: "Thyroid", description: "Free thyroid hormone test" },
  { name: "Anti-TPO", category: "Thyroid", description: "Thyroid antibody test" },

  { name: "Vitamin B12", category: "Vitamins", description: "Vitamin B12 level" },
  { name: "Vitamin D3", category: "Vitamins", description: "Vitamin D level" },
  { name: "Vitamin B6", category: "Vitamins", description: "Vitamin B6 level" },
  { name: "Folic Acid", category: "Vitamins", description: "Folate level test" },

  { name: "Liver Function Test (LFT)", category: "Organ Profiles", description: "Liver health assessment" },
  { name: "Kidney Profile", category: "Organ Profiles", description: "Kidney health assessment" },
  { name: "Liver Enzymes SGOT", category: "Organ Profiles", description: "AST enzyme test" },
  { name: "Liver Enzymes SGPT", category: "Organ Profiles", description: "ALT enzyme test" },
  { name: "Creatinine", category: "Organ Profiles", description: "Kidney function marker" },
  { name: "Uric Acid", category: "Organ Profiles", description: "Uric acid level" },

  { name: "Dengue IgG", category: "Fever & Infection", description: "Dengue antibody test" },
  { name: "Dengue IgM", category: "Fever & Infection", description: "Dengue antibody test" },
  { name: "Dengue NS1 Antigen", category: "Fever & Infection", description: "Dengue antigen test" },
  { name: "Typhi Dot IgG & IgM", category: "Fever & Infection", description: "Typhoid antibody test" },
  { name: "Malaria Antigen Detection", category: "Fever & Infection", description: "Malaria antigen test" },
  { name: "CRP", category: "Fever & Infection", description: "Inflammation marker" },

  { name: "Prolactin", category: "Hormones", description: "Hormone level test" },
  { name: "Testosterone", category: "Hormones", description: "Hormone level test" },
  { name: "Follicle Stimulating Hormone (FSH)", category: "Hormones", description: "Reproductive hormone test" },
  { name: "Luteinizing Hormone (LH)", category: "Hormones", description: "Reproductive hormone test" },
  { name: "Estradiol", category: "Hormones", description: "Estrogen hormone test" },
];
// ================= TEST DATA END =================


// ================= HEALTH PACKAGES START =================
const packages = [
  {
    name: "Basic Health Checkup",
    description: "A selection of tests for general health assessment.",
    icon: FiHeart,
  },
  {
    name: "Comprehensive Full Body Checkup with Vitamin D",
    description: "A broader health screening package that includes Vitamin D.",
    icon: FiActivity,
  },
  {
    name: "Fever Profile",
    description: "A package listed in the provided diagnostics price list.",
    icon: FiDroplet,
  },
  {
    name: "Fever Plus Profile",
    description: "An expanded fever-related package listed in the price list.",
    icon: FiShield,
  },
  {
    name: "GD Diabetic Pro",
    description: "A diabetes-related health package listed in the price list.",
    icon: FiActivity,
  },
  {
    name: "Arthritis Basic Screening",
    description: "A package listed for arthritis-related screening.",
    icon: FiHeart,
  },
];
// ================= HEALTH PACKAGES END =================


// ================= CATEGORY FILTERS =================
const categories = [
  "All Tests",
  "Blood Tests",
  "Heart Health",
  "Diabetes",
  "Thyroid",
  "Vitamins",
  "Organ Profiles",
  "Fever & Infection",
  "Hormones",
];

function HomeCollection() {
  // ================= PAGE STATES START =================
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Tests");
  const [showAll, setShowAll] = useState(false);

  // Booking modal open/close control
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTest, setSelectedTest] = useState("");
  // ================= PAGE STATES END =================


  // ================= OPEN BOOKING FORM =================
  const openBooking = (testName = "") => {
    setSelectedTest(testName);
    setBookingOpen(true);
  };

  // ================= CLOSE BOOKING FORM =================
  const closeBooking = () => {
    setBookingOpen(false);
  };


  // ================= FILTER TESTS START =================
  const filteredTests = useMemo(() => {
    return tests.filter((test) => {
      const matchesSearch = test.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Tests" || test.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const visibleTests = showAll
    ? filteredTests
    : filteredTests.slice(0, 8);
  // ================= FILTER TESTS END =================


  // ================= WHATSAPP ENQUIRY LINK =================
  const whatsappMessage =
    "Hello, I want to enquire about home blood collection in Mumbai.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;


  return (
    <main className="overflow-hidden bg-white font-body text-medical-navy">

      {/* ================= TRUST / EXPERIENCE START ================= */}
      <section className="border-y border-border-light bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-8 sm:px-8 md:grid-cols-4">
          {[
            { value: "10 Years", label: "Doctor's Experience", icon: FiStar },
            { value: "At Home", label: "Sample Collection", icon: FiHome },
            { value: "Mumbai", label: "Service Location", icon: FiMapPin },
            { value: "Affordable", label: "Collection Service", icon: FiHeart },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-blue-light text-xl text-brand-blue">
                  <Icon />
                </div>

                <div>
                  <p className="font-heading text-lg font-extrabold">
                    {item.value}
                  </p>
                  <p className="text-xs text-medical-text sm:text-sm">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= TRUST / EXPERIENCE END ================= */}


      {/* ================= HOW IT WORKS START ================= */}
      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
              Simple Process
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
              How Home Collection Works
            </h2>

            <p className="mt-4 leading-7 text-medical-text">
              Book your collection from home in a few simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose Your Test",
                text: "Browse the test list or tell us which health checkup you need.",
                icon: FiSearch,
              },
              {
                number: "02",
                title: "Book Your Slot",
                text: "Share your details, location and preferred collection time.",
                icon: FiClock,
              },
              {
                number: "03",
                title: "Sample Collection",
                text: "The collection visit is arranged at your home after confirmation.",
                icon: FiHome,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group rounded-3xl border border-border-light bg-white p-7 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-4xl font-extrabold text-brand-blue/15">
                      {step.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-medical-blue-light text-2xl text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                      <Icon />
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-medical-text">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ================= HOW IT WORKS END ================= */}


   
      {/* ================= TEST LIST START ================= */}
      <section
        id="home-collection-tests"
        className="px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">

          {/* TEST SECTION HEADER + SEARCH */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
                Explore Tests
              </span>

              <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
                Find Your Blood Test
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-medical-text">
                Search the available test names or browse by category.
                Contact us to confirm home collection availability and pricing.
              </p>
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full md:max-w-sm">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-medical-text" />

              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowAll(false);
                }}
                placeholder="Search tests..."
                className="w-full rounded-xl border border-border-light bg-white py-4 pl-12 pr-4 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
              />
            </div>
          </div>

          {/* CATEGORY FILTER BUTTONS */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCategory(item);
                  setShowAll(false);
                }}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  category === item
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                    : "border border-border-light bg-white text-medical-text hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* TEST CARDS START */}
          {filteredTests.length > 0 ? (
            <>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {visibleTests.map((test) => (
                  <article
                    key={test.name}
                    className="flex flex-col rounded-2xl border border-border-light bg-white p-5 transition hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-medical-blue-light text-xl text-brand-blue">
                        <FiDroplet />
                      </div>

                      <span className="rounded-full bg-medical-light px-3 py-1 text-xs font-semibold text-brand-green">
                        {test.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-lg font-bold">
                      {test.name}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-medical-text">
                      {test.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-border-light pt-4">
                      <span className="text-sm font-semibold text-medical-text">
                        Price on enquiry
                      </span>

                      <button
                        onClick={() => openBooking(test.name)}
                        className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-blue-dark"
                      >
                        Enquire
                        <FiArrowRight />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* VIEW ALL / SHOW LESS */}
              {filteredTests.length > 8 && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="rounded-xl border border-brand-blue px-7 py-3 font-bold text-brand-blue transition hover:bg-brand-blue hover:text-white"
                  >
                    {showAll
                      ? "Show Less"
                      : `View All ${filteredTests.length} Results`}
                  </button>
                </div>
              )}
            </>
          ) : (
            /* NO TEST FOUND */
            <div className="mt-8 rounded-2xl border border-dashed border-border-light px-5 py-12 text-center">
              <FiSearch className="mx-auto text-3xl text-medical-text" />

              <h3 className="mt-4 text-xl font-bold">
                No tests found
              </h3>

              <p className="mt-2 text-medical-text">
                Try another test name or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All Tests");
                  setShowAll(false);
                }}
                className="mt-5 font-bold text-brand-blue"
              >
                Clear Filters
              </button>
            </div>
          )}
          {/* TEST CARDS END */}

          {/* TEST LIST DISCLAIMER */}
          <p className="mt-6 text-sm leading-6 text-medical-text">
            This is a selection of tests from the supplied price list, not the
            complete catalogue. Test availability, sample requirements,
            collection charges and final pricing must be confirmed before booking.
          </p>
        </div>
      </section>
      {/* ================= TEST LIST END ================= */}


      {/* ================= HEALTH PACKAGES START ================= */}
      <section className="bg-[#f8fbfd] px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">

          {/* PACKAGE SECTION HEADER */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">
              Health Packages
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">
              Checkups for Your Health Needs
            </h2>

            <p className="mt-4 leading-7 text-medical-text">
              Explore some of the packages listed in the supplied diagnostics
              price list.
            </p>
          </div>

          {/* PACKAGE CARDS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="rounded-3xl border border-border-light bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-medical-navy/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-2xl text-brand-green">
                    <Icon />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-3 min-h-12 leading-7 text-medical-text">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-border-light pt-5">
                    <span className="text-sm font-semibold text-medical-text">
                      Price on enquiry
                    </span>

                    <button
                      onClick={() => openBooking(item.name)}
                      className="inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-blue-dark"
                    >
                      Enquire
                      <FiArrowRight />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>
      {/* ================= HEALTH PACKAGES END ================= */}



      {/* ================= REUSABLE BOOKING FORM ================= */}
    <BookingForm
  isOpen={bookingOpen}
  onClose={closeBooking}
  initialTest={selectedTest}
  topOffset="80px"
/>
      {/* ================= REUSABLE BOOKING FORM END ================= */}

    </main>
  );
}

export default HomeCollection;