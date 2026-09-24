"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Beaker,
  Check,
  ChevronDown,
  Clock3,
  Dna,
  FileText,
  Filter,
  FlaskConical,
  HeartPulse,
  Home,
  Microscope,
  Search,
  ShieldCheck,
  Sparkles,
  TestTube2,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

import BookingForm from "./BookingForm";

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  {
    id: "all",
    label: "All Services",
    icon: Sparkles,
  },
  {
    id: "wellness",
    label: "Health Checkups",
    icon: HeartPulse,
  },
  {
    id: "men",
    label: "Men's Health",
    icon: UserRound,
  },
  {
    id: "women",
    label: "Women's Health",
    icon: UsersRound,
  },
  {
    id: "pregnancy",
    label: "Pregnancy",
    icon: HeartPulse,
  },
  {
    id: "genetic",
    label: "Genetic & Molecular",
    icon: Dna,
  },
  {
    id: "specialized",
    label: "Specialized Tests",
    icon: Microscope,
  },
];

/* =========================================================
   PACKAGES / SERVICES
========================================================= */

const packages = [
  /* =======================================================
     HEALTH / WELLNESS
  ======================================================= */

  {
    id: "tax-saver-health",
    category: "wellness",

    title: "Tax Saver Health Package",
    shortTitle: "Tax Saver Health",
    badge: "SPECIAL OFFER",

    description:
      "Comprehensive health screening covering essential routine and wellness parameters.",

    parameters: "74 Parameters",

    price: "₹2,499",
    mrp: "₹2,499",

    priceLabel: "Package Price",

    reportTime: "Routine reporting",
    sample: "Blood Sample",

    modes: ["home", "lab"],

    image:
      "/special-offer.avif",

    features: [
      "Lipid Profile (8)",
      "CBC (28)",
      "Liver Function Test (11)",
      "Iron Studies (3)",
      "Kidney Profile (7)",
      "Thyroid Profile (3)",
      "Vitamin B12",
      "25 OH Vitamin D",
      "HbA1c (2)",
      "Cardiac Risk Markers (5)",
      "Rheumatoid Factor (RF)",
      "Serum Electrolyte Profile (3)",
      "ESR",
    ],

    details: [
      "Comprehensive preventive health screening",
      "Multiple routine health parameters",
      "Suitable for general wellness monitoring",
      "Home sample collection available",
    ],
  },

  {
    id: "summer-health",
    category: "wellness",

    title: "Summer Health Package",
    shortTitle: "Summer Health",
    badge: "SEASONAL PACKAGE",

    description:
      "Seasonal wellness screening with essential blood and metabolic health parameters.",

    parameters: "86 Parameters",

    price: "₹2,000",
    mrp: "₹3,000",

    priceLabel: "Special Price",

    reportTime: "Routine reporting",
    sample: "Blood + Urine",

    modes: ["home", "lab"],

    image:
      "/summer-health.avif",

    features: [
      "Iron Studies (3)",
      "Thyroid Profile (3)",
      "Liver Function Test (11)",
      "Diabetic Profile (2)",
      "Kidney Profile (8)",
      "25 OH Vitamin D",
      "Lipid Profile (8)",
      "Vitamin B12",
      "Electrolyte (3)",
      "CBC (28)",
      "Urine Complete (18)",
    ],

    details: [
      "86 health parameters",
      "Routine blood and urine testing",
      "Suitable for seasonal health screening",
      "Home collection available",
    ],
  },

  /* =======================================================
     MEN
  ======================================================= */

  {
    id: "advance-men",
    category: "men",

    title: "GD Advance Men Package",
    shortTitle: "Advance Men Package",
    badge: "MEN'S WELLNESS",

    description:
      "Comprehensive screening package covering key health indicators for men's wellness.",

    parameters: "94 Parameters",

    price: "₹2,200",
    mrp: "₹2,200",

    priceLabel: "Package Price",

    reportTime: "Timely reporting",
    sample: "Blood + Urine",

    modes: ["home", "lab"],

    image:
      "/gd-advanced.avif",

    features: [
      "Iron Studies (3)",
      "Thyroid Profile (3)",
      "PSA - Total (1)",
      "CBC (28)",
      "Specific Cardiac Profile (6)",
      "Liver Function Test (11)",
      "Serum Electrolyte Profile (3)",
      "HbA1c (2)",
      "25 OH Vitamin D",
      "Urine Complete (18)",
      "Kidney Profile (7)",
      "Vitamin B12",
      "Lipid Profile (8)",
      "Amylase",
      "Lipase",
    ],

    details: [
      "94 essential health parameters",
      "Men's wellness screening",
      "Includes PSA testing",
      "Cardiac, liver, kidney and metabolic screening",
      "Home collection available",
    ],
  },

  /* =======================================================
     WOMEN
  ======================================================= */

  {
    id: "women-basic",
    category: "women",

    title: "GD Women Basic",
    shortTitle: "Women Basic",
    badge: "WOMEN'S HEALTH",

    description:
      "Essential women's health screening covering hormones, vitamins, thyroid and metabolic health.",

    parameters: "69 Parameters",

    price: "₹2,200",
    mrp: "₹2,200",

    priceLabel: "Package Price",

    reportTime: "Timely reporting",
    sample: "Blood Sample",

    modes: ["home", "lab"],

    image:
      "/women-health.jpg",

    features: [
      "Estradiol",
      "CBC (28)",
      "Iron Studies (3)",
      "Liver Function Test (11)",
      "Kidney Profile (7)",
      "Lipid Profile (8)",
      "GD Vitamin Profile (3)",
      "HbA1c (2)",
      "Thyroid Profile (3)",
      "FSH, LH & Prolactin",
    ],

    details: [
      "69 total parameters",
      "Hormone profile",
      "Thyroid and vitamin assessment",
      "Kidney and liver screening",
      "Home sample collection available",
    ],
  },

  {
    id: "women-advance",
    category: "women",

    title: "Women Advance Package",
    shortTitle: "Women Advance",
    badge: "ADVANCED WOMEN'S HEALTH",

    description:
      "Advanced screening package designed around hormonal, cardiac, metabolic and women's wellness parameters.",

    parameters: "76 Parameters",

    price: "₹2,800",
    mrp: "₹4,000",

    priceLabel: "Offer Price",

    reportTime: "Timely reporting",
    sample: "Blood Sample",

    modes: ["home", "lab"],

    image:
      "/women-advanced.avif",

    features: [
      "Hormone Profile (7)",
      "Kidney Profile (7)",
      "Liver Function Tests (11)",
      "Lipid Profile (8)",
      "CBC (28)",
      "Diabetes Profile (2)",
      "Vitamin Profile (3)",
      "Advanced Cardiac Risk Markers (6)",
      "Iron Studies (3)",
      "Anti CCP (ACCP)",
    ],

    details: [
      "76 parameters",
      "Hormone profile",
      "Advanced cardiac risk markers",
      "Diabetes and vitamin screening",
      "10–12 hours fasting required",
    ],
  },

  /* =======================================================
     PREGNANCY
  ======================================================= */

  {
    id: "nipt",
    category: "pregnancy",

    title: "NIPT",
    shortTitle: "NIPT Screening",
    badge: "PRENATAL SCREENING",

    description:
      "Non-invasive prenatal screening using a simple blood test for screening of selected chromosomal abnormalities.",

    parameters: "Specialized Genetic Test",

    price: "₹3,900",
    mrp: "₹12,000",

    priceLabel: "Special Price",

    reportTime: "7 Days",
    sample: "Blood Sample",

    modes: ["home", "lab"],

    image:
      "/nipt.avif",

    features: [
      "Non-invasive screening",
      "Blood-based prenatal screening",
      "Trisomy 21 screening",
      "Trisomy 18 screening",
      "Trisomy 13 screening",
      "7-day report time",
    ],

    details: [
      "Non-invasive blood test",
      "Sample processing at Navi Mumbai HQ Lab",
      "Report time: 7 days after receiving samples",
      "Home collection available",
    ],
  },

  /* =======================================================
     GENETIC
  ======================================================= */

  {
    id: "brca",
    category: "genetic",

    title: "BRCA1/2 Panel (Germline)",
    shortTitle: "BRCA1/2 Panel",
    badge: "GENETIC TEST",

    description:
      "Focused germline BRCA1/2 profiling for hereditary-risk assessment and relevant clinical decision-making.",

    parameters: "Targeted Panel",

    price: "₹15,000",
    mrp: "₹15,000",

    priceLabel: "Package Price",

    reportTime: "20 Days",
    sample: "3–5 ml EDTA Peripheral Blood",

    modes: ["home", "lab"],

    image:
      "/genetic-test.avif",

    features: [
      "BRCA1 profiling",
      "BRCA2 profiling",
      "SNV detection",
      "Indel detection",
      "CNV detection",
      "Germline testing",
    ],

    details: [
      "NGS based targeted panel",
      "3–5 ml EDTA peripheral blood",
      "Report time: 20 days",
      "Focused BRCA1/2 profiling",
    ],
  },

  {
    id: "whole-exome",
    category: "genetic",

    title: "Whole Exome Panel (WES)",
    shortTitle: "Whole Exome Sequencing",
    badge: "ADVANCED GENOMICS",

    description:
      "Whole Exome Sequencing for broader genetic investigation and variant analysis.",

    parameters: "Whole Exome Sequencing",

    price: "₹18,000",
    mrp: "₹18,000",

    priceLabel: "Package Price",

    reportTime: "2 Weeks",
    sample: "Blood Sample",

    modes: ["home", "lab"],

    image:
      "/advanced-genomics.avif",

    features: [
      "Whole Exome Sequencing",
      "Copy Number Variant Analysis",
      "Mitochondrial DNA Sequencing",
      "NGS methodology",
      "Variant analysis",
    ],

    details: [
      "Whole Exome Sequencing (WES)",
      "Copy Number Variant (CNV) analysis",
      "Mitochondrial DNA sequencing",
      "Approximately 2-week report TAT",
      "Suitable for selected genetic investigations",
    ],
  },

  {
    id: "advanced-genomic",
    category: "genetic",

    title: "Advanced Genomic Testing Solutions",
    shortTitle: "Advanced Genomics",
    badge: "NGS PANELS",

    description:
      "High-resolution next-generation sequencing solutions covering multiple specialized genomic panels.",

    parameters: "Multiple Gene Panels",

    price: null,
    mrp: null,

    priceLabel: "Enquire for Price",

    reportTime: "Panel dependent",
    sample: "Panel dependent",

    modes: ["lab", "home"],

    image:
      "/dna-test.avif",

    features: [
      "Infertility Panel",
      "Hematological Cancer Panel",
      "Neurodevelopmental Panel",
      "Pharmacogenomics Panel",
      "Comprehensive PAN Cancer Panel",
      "Lung Cancer Panel",
      "Glioma Panel",
      "Cervical Cancer Panel",
      "Colorectal Cancer Panel",
      "Breast Cancer Panel",
      "BRCA1/2 Panel",
      "HRD Panel",
      "SMA Panel",
      "Congenital Panel",
      "HLA Typing Panel",
      "Tuberculosis Panel",
      "Infectious Panel",
    ],

    details: [
      "SNV detection",
      "Indel detection",
      "CNV detection",
      "Fusion analysis on applicable panels",
      "MSI / TMB profiling on applicable panels",
      "Panel-specific reporting",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function OurTest() {
  const [activeCategory, setActiveCategory] = useState("all");

  const [serviceMode, setServiceMode] = useState("home");

  const [search, setSearch] = useState("");

  const [selectedPackage, setSelectedPackage] = useState(null);

  const [bookingOpen, setBookingOpen] = useState(false);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredPackages = useMemo(() => {
    return packages.filter((item) => {
      const categoryMatch =
        activeCategory === "all" ||
        item.category === activeCategory;

      const modeMatch = item.modes.includes(serviceMode);

      const searchText = search.trim().toLowerCase();

      const searchMatch =
        !searchText ||
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.features.some((feature) =>
          feature.toLowerCase().includes(searchText)
        );

      return categoryMatch && modeMatch && searchMatch;
    });
  }, [activeCategory, serviceMode, search]);

  /* =======================================================
     BOOKING
  ======================================================= */

  const openBooking = () => {
    setSelectedPackage(null);
    setBookingOpen(true);
  };

  return (
    <>
      <section
        id="test-packages"
        className="
          bg-white
          px-4
          py-14
          font-body
          sm:px-6
          sm:py-20
          lg:px-8
          lg:py-24
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="mx-auto max-w-3xl text-center">

            <div
              className="
                mb-4
                inline-flex
                cursor-default
                items-center
                gap-2
                rounded-full
                border
                border-[#0068c9]/10
                bg-[#edf7ff]
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#0068c9]
              "
            >
              <TestTube2 className="h-4 w-4" />
              Tests & Services
            </div>

            <h2
              className="
                font-heading
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-[#12345b]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Find the Right{" "}
              <span className="text-[#0068c9]">
                Health Test
              </span>{" "}
              for You
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-[#45627f]
                sm:text-base
              "
            >
              Explore health packages, women's and men's wellness
              tests, prenatal screening, genetic testing and
              specialized diagnostic services.
            </p>

          </div>

          {/* =================================================
              SERVICE TYPE
          ================================================= */}

          <div
            className="
              mx-auto
              mt-10
              max-w-4xl
              rounded-[5px]
              border
              border-[#e5edf3]
              bg-[#f8fbfd]
              p-2
            "
          >

            <div className="grid grid-cols-2 gap-2">

              {/* HOME */}

              <button
                type="button"
                onClick={() => setServiceMode("home")}
                className={`
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-[5px]
                  px-4
                  py-4
                  text-left
                  transition
                  ${
                    serviceMode === "home"
                      ? "bg-white shadow-sm ring-1 ring-[#0068c9]/10"
                      : "hover:bg-white/70"
                  }
                `}
              >

                <span
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-[5px]
                    ${
                      serviceMode === "home"
                        ? "bg-[#edf7ff] text-[#0068c9]"
                        : "bg-white text-[#45627f]"
                    }
                  `}
                >
                  <Home className="h-5 w-5" />
                </span>

                <span className="hidden sm:block">

                  <span className="block text-sm font-extrabold text-[#12345b]">
                    Home Collection
                  </span>

                  <span className="mt-0.5 block text-xs text-[#45627f]">
                    Doctor / phlebotomist visits your home
                  </span>

                </span>

                <span className="sm:hidden">
                  <span className="block text-xs font-extrabold text-[#12345b]">
                    Home Collection
                  </span>
                </span>

              </button>

              {/* LAB */}

              <button
                type="button"
                onClick={() => setServiceMode("lab")}
                className={`
                  group
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-[5px]
                  px-4
                  py-4
                  text-left
                  transition
                  ${
                    serviceMode === "lab"
                      ? "bg-white shadow-sm ring-1 ring-[#43b82a]/20"
                      : "hover:bg-white/70"
                  }
                `}
              >

                <span
                  className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-[5px]
                    ${
                      serviceMode === "lab"
                        ? "bg-[#eef8f5] text-[#26961e]"
                        : "bg-white text-[#45627f]"
                    }
                  `}
                >
                  <FlaskConical className="h-5 w-5" />
                </span>

                <span className="hidden sm:block">

                  <span className="block text-sm font-extrabold text-[#12345b]">
                    Lab Testing
                  </span>

                  <span className="mt-0.5 block text-xs text-[#45627f]">
                    Visit the lab for your diagnostic test
                  </span>

                </span>

                <span className="sm:hidden">
                  <span className="block text-xs font-extrabold text-[#12345b]">
                    Lab Testing
                  </span>
                </span>

              </button>

            </div>
          </div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <div
            className="
              mt-9
              flex
              flex-col
              gap-4
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="relative w-full lg:max-w-sm">

              <Search
                className="
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-[#45627f]
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search test, package or parameter..."
                className="
                  h-12
                  w-full
                  rounded-[5px]
                  border
                  border-[#e5edf3]
                  bg-white
                  pl-11
                  pr-4
                  text-sm
                  text-[#12345b]
                  outline-none
                  transition
                  placeholder:text-[#8aa0b4]
                  focus:border-[#0068c9]/40
                  focus:ring-4
                  focus:ring-[#0068c9]/5
                "
              />

            </div>

            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-[#45627f]
              "
            >
              <Filter className="h-4 w-4 text-[#0068c9]" />

              {filteredPackages.length} services available
            </div>

          </div>

          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <div
            className="
              mt-5
              overflow-x-auto
              pb-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >

            <div className="flex min-w-max gap-2">

              {categories.map((category) => {

                const Icon = category.icon;

                const active =
                  activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category.id)
                    }
                    className={`
                      inline-flex
                      cursor-pointer
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-[5px]
                      border
                      px-4
                      py-2.5
                      text-xs
                      font-bold
                      transition
                      ${
                        active
                          ? "border-[#0068c9] bg-[#0068c9] text-white"
                          : "border-[#e5edf3] bg-white text-[#45627f] hover:border-[#0068c9]/20 hover:bg-[#edf7ff] hover:text-[#0068c9]"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}

            </div>

          </div>

          {/* =================================================
              PACKAGE GRID
          ================================================= */}

          {filteredPackages.length > 0 ? (

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredPackages.map((pkg) => (

                <PackageCard
                  key={pkg.id}
                  packageData={pkg}
                  serviceMode={serviceMode}
                  onDetails={() =>
                    setSelectedPackage(pkg)
                  }
                  onBook={() => {
                    setSelectedPackage(pkg);
                    setBookingOpen(true);
                  }}
                />

              ))}

            </div>

          ) : (

            <div
              className="
                mt-10
                rounded-[5px]
                border
                border-dashed
                border-[#d7e3eb]
                bg-[#f8fbfd]
                px-6
                py-16
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#edf7ff]
                  text-[#0068c9]
                "
              >
                <Search className="h-6 w-6" />
              </div>

              <h3
                className="
                  mt-5
                  font-heading
                  text-xl
                  font-extrabold
                  text-[#12345b]
                "
              >
                No matching tests found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-[#45627f]">
                Try another category, search term or service type.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="
                  mt-5
                  cursor-pointer
                  rounded-[5px]
                  bg-[#0068c9]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-[#0053a3]
                "
              >
                View All Services
              </button>

            </div>

          )}

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <TrustItem
              icon={Home}
              title="Home Sample Collection"
              text="Convenient collection at your doorstep"
            />

            <TrustItem
              icon={ShieldCheck}
              title="Trusted Testing"
              text="Reliable diagnostic testing"
            />

            <TrustItem
              icon={FileText}
              title="Digital Reports"
              text="Get your reports conveniently"
            />

          </div>

        </div>
      </section>

      {/* =====================================================
          DETAILS MODAL
      ===================================================== */}

      {selectedPackage && !bookingOpen && (
        <PackageDetailsModal
          packageData={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBook={() => setBookingOpen(true)}
        />
      )}

      {/* =====================================================
          BOOKING FORM
      ===================================================== */}

      <BookingForm
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
        }}
        initialTest={selectedPackage?.title || ""}
        topOffset="80px"
      />
    </>
  );
}

/* =========================================================
   PACKAGE CARD
========================================================= */

function PackageCard({
  packageData,
  serviceMode,
  onDetails,
  onBook,
}) {
  return (
    <article
      className="
        group
        flex
        h-full
        cursor-default
        flex-col
        overflow-hidden
        rounded-[5px]
        border
        border-[#e5edf3]
        bg-white
        shadow-[0_8px_35px_rgba(18,52,91,0.06)]
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#0068c9]/20
        hover:shadow-[0_20px_50px_rgba(18,52,91,0.11)]
      "
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative h-52 overflow-hidden bg-[#edf7ff]">

        <img
          src={packageData.image}
          alt={packageData.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-[1.04]
          "
          loading="lazy"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07111f]/45
            via-transparent
            to-transparent
          "
        />

        {/* Badge */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white
            px-3
            py-1.5
            text-[10px]
            font-extrabold
            uppercase
            tracking-wider
            text-[#0068c9]
            shadow-sm
          "
        >
          {packageData.badge}
        </div>

        {/* Parameters */}

        <div
          className="
            absolute
            bottom-4
            left-4
            inline-flex
            items-center
            gap-2
            rounded-[5px]
            bg-white
            px-3
            py-2
            text-xs
            font-extrabold
            text-[#12345b]
            shadow-sm
          "
        >
          <TestTube2 className="h-4 w-4 text-[#43b82a]" />

          {packageData.parameters}
        </div>

      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h3
          className="
            font-heading
            text-xl
            font-extrabold
            leading-tight
            text-[#12345b]
          "
        >
          {packageData.title}
        </h3>

        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-6
            text-[#45627f]
          "
        >
          {packageData.description}
        </p>

        {/* PRICE */}

        <div className="mt-5 rounded-[5px] bg-[#f7fafc] p-4">

          <div className="flex items-end justify-between gap-3">

            <div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#45627f]
                "
              >
                {packageData.priceLabel}
              </p>

              {packageData.price ? (

                <div className="mt-1 flex items-baseline gap-2">

                  <span
                    className="
                      font-heading
                      text-2xl
                      font-extrabold
                      text-[#12345b]
                    "
                  >
                    {packageData.price}
                  </span>

                  {packageData.mrp &&
                    packageData.mrp !== packageData.price && (
                      <span
                        className="
                          text-xs
                          font-medium
                          text-[#8aa0b4]
                          line-through
                        "
                      >
                        {packageData.mrp}
                      </span>
                    )}

                </div>

              ) : (

                <p
                  className="
                    mt-1
                    font-heading
                    text-lg
                    font-extrabold
                    text-[#0068c9]
                  "
                >
                  Enquire for Price
                </p>

              )}

            </div>

            <div
              className="
                rounded-[5px]
                bg-white
                px-3
                py-2
                text-right
                shadow-sm
              "
            >
              <p className="text-[10px] font-semibold text-[#45627f]">
                Report
              </p>

              <p className="mt-0.5 text-xs font-bold text-[#12345b]">
                {packageData.reportTime}
              </p>
            </div>

          </div>

        </div>

        {/* QUICK INFO */}

        <div className="mt-4 grid grid-cols-2 gap-2">

          <div
            className="
              rounded-[5px]
              border
              border-[#e5edf3]
              p-3
            "
          >
            <div className="flex items-center gap-2">

              {serviceMode === "home" ? (
                <Home className="h-4 w-4 text-[#0068c9]" />
              ) : (
                <FlaskConical className="h-4 w-4 text-[#43b82a]" />
              )}

              <span className="text-[11px] font-bold text-[#12345b]">
                {serviceMode === "home"
                  ? "Home Collection"
                  : "Lab Visit"}
              </span>

            </div>
          </div>

          <div
            className="
              rounded-[5px]
              border
              border-[#e5edf3]
              p-3
            "
          >
            <div className="flex items-center gap-2">

              <Beaker className="h-4 w-4 text-[#43b82a]" />

              <span className="line-clamp-1 text-[11px] font-bold text-[#12345b]">
                {packageData.sample}
              </span>

            </div>
          </div>

        </div>

        {/* FEATURES */}

        <div className="mt-5">

          <p
            className="
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-[#45627f]
            "
          >
            Includes
          </p>

          <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">

            {packageData.features
              .slice(0, 6)
              .map((feature) => (

                <div
                  key={feature}
                  className="
                    flex
                    items-start
                    gap-1.5
                    text-xs
                    leading-5
                    text-[#45627f]
                  "
                >
                  <Check
                    className="
                      mt-0.5
                      h-3.5
                      w-3.5
                      shrink-0
                      text-[#43b82a]
                    "
                  />

                  <span className="line-clamp-2">
                    {feature}
                  </span>
                </div>

              ))}

          </div>

          {packageData.features.length > 6 && (
            <p
              className="
                mt-3
                text-xs
                font-bold
                text-[#0068c9]
              "
            >
              + {packageData.features.length - 6} more tests
            </p>
          )}

        </div>

        {/* BUTTONS */}

        <div className="mt-auto grid grid-cols-2 gap-2 pt-6">

          <button
            type="button"
            onClick={onDetails}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              rounded-[5px]
              border
              border-[#dce7ee]
              px-3
              py-3
              text-xs
              font-bold
              text-[#12345b]
              transition
              hover:border-[#0068c9]/30
              hover:bg-[#edf7ff]
            "
          >
            View Details

            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={onBook}
            className="
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              rounded-[5px]
              bg-[#0068c9]
              px-3
              py-3
              text-xs
              font-bold
              text-white
              transition
              hover:bg-[#0053a3]
            "
          >
            Book Now

            <ArrowRight className="h-3.5 w-3.5" />
          </button>

        </div>

      </div>
    </article>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  icon: Icon,
  title,
  text,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-[5px]
        border
        border-[#e5edf3]
        bg-[#f8fbfd]
        p-4
      "
    >

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-[5px]
          bg-white
          text-[#0068c9]
        "
      >
        <Icon className="h-5 w-5" />
      </div>

      <div>

        <p className="text-sm font-extrabold text-[#12345b]">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-[#45627f]">
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   DETAILS MODAL
========================================================= */

function PackageDetailsModal({
  packageData,
  onClose,
  onBook,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-[#07111f]/60
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >

      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-3xl
          overflow-hidden
          rounded-[5px]
          bg-white
          shadow-2xl
        "
      >

        {/* HEADER */}

        <div
          className="
            sticky
            top-0
            z-10
            flex
            items-center
            justify-between
            border-b
            border-[#e5edf3]
            bg-white
            px-5
            py-4
            sm:px-7
          "
        >

          <div>

            <p
              className="
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.14em]
                text-[#0068c9]
              "
            >
              Service Details
            </p>

            <h3
              className="
                mt-1
                font-heading
                text-xl
                font-extrabold
                text-[#12345b]
                sm:text-2xl
              "
            >
              {packageData.title}
            </h3>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-[5px]
              bg-[#f4f8fa]
              text-[#45627f]
              transition
              hover:bg-[#edf7ff]
              hover:text-[#0068c9]
            "
          >
            <X className="h-5 w-5" />
          </button>

        </div>

        {/* BODY */}

        <div
          className="
            max-h-[calc(90vh-75px)]
            overflow-y-auto
            p-5
            sm:p-7
          "
        >

          {/* IMAGE */}

          <div className="h-56 overflow-hidden rounded-[5px] bg-[#edf7ff]">

            <img
              src={packageData.image}
              alt={packageData.title}
              className="h-full w-full object-cover"
            />

          </div>

          {/* SUMMARY */}

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <InfoBox
              icon={TestTube2}
              label="Parameters"
              value={packageData.parameters}
            />

            <InfoBox
              icon={Clock3}
              label="Report Time"
              value={packageData.reportTime}
            />

            <InfoBox
              icon={Beaker}
              label="Sample"
              value={packageData.sample}
            />

          </div>

          {/* DESCRIPTION */}

          <div className="mt-7">

            <h4
              className="
                font-heading
                text-lg
                font-extrabold
                text-[#12345b]
              "
            >
              About this service
            </h4>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-[#45627f]
              "
            >
              {packageData.description}
            </p>

          </div>

          {/* FEATURES */}

          <div className="mt-7">

            <h4
              className="
                font-heading
                text-lg
                font-extrabold
                text-[#12345b]
              "
            >
              Tests & Parameters
            </h4>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">

              {packageData.features.map((feature) => (

                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-[5px]
                    border
                    border-[#e5edf3]
                    bg-[#f9fcfd]
                    px-3
                    py-2.5
                    text-sm
                    text-[#45627f]
                  "
                >
                  <Check
                    className="
                      h-4
                      w-4
                      shrink-0
                      text-[#43b82a]
                    "
                  />

                  {feature}
                </div>

              ))}

            </div>

          </div>

          {/* DETAILS */}

          <div
            className="
              mt-7
              rounded-[5px]
              bg-[#edf7ff]
              p-5
            "
          >

            <h4
              className="
                font-heading
                text-base
                font-extrabold
                text-[#12345b]
              "
            >
              Service Details
            </h4>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">

              {packageData.details.map((detail) => (

                <div
                  key={detail}
                  className="
                    flex
                    gap-2
                    text-sm
                    text-[#45627f]
                  "
                >

                  <Check
                    className="
                      mt-0.5
                      h-4
                      w-4
                      shrink-0
                      text-[#0068c9]
                    "
                  />

                  {detail}

                </div>

              ))}

            </div>

          </div>

          {/* PRICE + CTA */}

          <div
            className="
              mt-7
              flex
              flex-col
              gap-5
              rounded-[5px]
              border
              border-[#e5edf3]
              bg-white
              p-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <div>

              <p className="text-xs font-semibold text-[#45627f]">
                Package Price
              </p>

              <div className="mt-1 flex items-baseline gap-2">

                {packageData.price ? (

                  <span
                    className="
                      font-heading
                      text-3xl
                      font-extrabold
                      text-[#12345b]
                    "
                  >
                    {packageData.price}
                  </span>

                ) : (

                  <span
                    className="
                      font-heading
                      text-xl
                      font-extrabold
                      text-[#0068c9]
                    "
                  >
                    Price on Enquiry
                  </span>

                )}

                {packageData.mrp &&
                  packageData.mrp !== packageData.price && (
                    <span
                      className="
                        text-sm
                        text-[#8aa0b4]
                        line-through
                      "
                    >
                      {packageData.mrp}
                    </span>
                  )}

              </div>

            </div>

            <button
              type="button"
              onClick={onBook}
              className="
                inline-flex
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-[5px]
                bg-[#0068c9]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition
                hover:bg-[#0053a3]
              "
            >
              Book This Test

              <ArrowRight className="h-4 w-4" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        rounded-[5px]
        border
        border-[#e5edf3]
        bg-[#f8fbfd]
        p-4
      "
    >

      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[5px]
          bg-white
          text-[#0068c9]
        "
      >
        <Icon className="h-4 w-4" />
      </div>

      <p
        className="
          mt-3
          text-[10px]
          font-bold
          uppercase
          tracking-wider
          text-[#45627f]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          text-sm
          font-extrabold
          text-[#12345b]
        "
      >
        {value}
      </p>

    </div>
  );
}