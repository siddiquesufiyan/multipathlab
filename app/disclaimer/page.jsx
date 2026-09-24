"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  Home,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  TestTube,
  Users,
  XCircle,
} from "lucide-react";

function Disclaimer() {
  const sections = [
    {
      id: "about",
      title: "About MultiPathLab",
    },
    {
      id: "services",
      title: "Our Services",
    },
    {
      id: "coverage",
      title: "Mumbai Region Coverage",
    },
    {
      id: "diagnostic",
      title: "Diagnostic Information",
    },
    {
      id: "not-provide",
      title: "What We Do Not Provide",
    },
    {
      id: "reports",
      title: "Reports & Results",
    },
    {
      id: "website",
      title: "Website Information",
    },
    {
      id: "contact",
      title: "Contact Us",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-body text-medical-text">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#edf7ff] via-white to-[#effbf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-6">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-green/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span>Disclaimer</span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-[5px] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-green ring-1 ring-border-light">
                <ShieldCheck className="h-4 w-4" />
                Important Information
              </div>

              <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-medical-navy sm:text-5xl lg:text-[56px]">
                Important Information
                <span className="block text-brand-green">
                  About MultiPathLab
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-medical-text sm:text-lg">
                Please read this disclaimer carefully to understand the nature
                of MultiPathLab's diagnostic services, health checkups, home
                sample collection, reports, and the information provided
                through our website.
              </p>

              <div className="mt-7 h-1 w-14 rounded-full bg-brand-green" />
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[5px] border border-border-light bg-white p-6 sm:p-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-blue/5 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-brand-green/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
                      <Microscope className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="font-heading text-2xl font-extrabold text-medical-navy">
                        MultiPath
                        <span className="text-brand-green">Lab</span>
                      </p>

                      <p className="mt-1 text-sm text-medical-text">
                        Diagnostic & Health Checkup Services
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <div className="rounded-[5px] bg-[#f8fbfd] p-4">
                      <TestTube className="h-5 w-5 text-brand-blue" />
                      <p className="mt-3 text-sm font-bold text-medical-navy">
                        Diagnostic Tests
                      </p>
                    </div>

                    <div className="rounded-[5px] bg-[#f8fbfd] p-4">
                      <Home className="h-5 w-5 text-brand-green" />
                      <p className="mt-3 text-sm font-bold text-medical-navy">
                        Home Collection
                      </p>
                    </div>

                    <div className="rounded-[5px] bg-[#f8fbfd] p-4">
                      <FileText className="h-5 w-5 text-brand-blue" />
                      <p className="mt-3 text-sm font-bold text-medical-navy">
                        Digital Reports
                      </p>
                    </div>

                    <div className="rounded-[5px] bg-[#f8fbfd] p-4">
                      <MapPin className="h-5 w-5 text-brand-green" />
                      <p className="mt-3 text-sm font-bold text-medical-navy">
                        Mumbai Region
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-[5px] bg-gradient-to-r from-[#12345b] to-[#0b2949] p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">
                      Our Focus
                    </p>

                    <p className="mt-2 font-heading text-lg font-bold">
                      Convenient diagnostics at your doorstep.
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/70">
                      Testing, sample collection and digital reports made
                      simple and accessible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK CARDS
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-6 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
              <Microscope className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Diagnostic Services
            </h3>

            <p className="mt-2 text-sm leading-6">
              Diagnostic tests and health checkup packages designed to make
              testing convenient and accessible.
            </p>
          </div>

          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
              <Home className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Home Sample Collection
            </h3>

            <p className="mt-2 text-sm leading-6">
              Convenient sample collection at your home, subject to service
              availability and location coverage.
            </p>
          </div>

          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
              <FileText className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Digital Reports
            </h3>

            <p className="mt-2 text-sm leading-6">
              Access diagnostic reports digitally through the available report
              delivery or access channels.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-[#f8fbfd] px-5 py-12 sm:px-8 lg:px-6 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[5px] border border-border-light bg-white p-5">
              <p className="mb-4 font-heading text-sm font-bold uppercase tracking-wide text-medical-navy">
                On This Page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-[5px] px-3 py-2.5 text-sm font-medium text-medical-text transition hover:bg-brand-blue/5 hover:text-brand-blue"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {/* =====================================================
                ABOUT
            ===================================================== */}
            <article
              id="about"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex gap-4">
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue sm:flex">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
                    About MultiPathLab
                  </p>

                  <h2 className="mt-1 font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                    Who We Are
                  </h2>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    MultiPathLab is a diagnostic and health checkup service
                    brand focused on making diagnostic testing more convenient,
                    accessible, and straightforward for individuals and
                    families.
                  </p>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    Our work is centered around diagnostic testing, health
                    checkup packages, home sample collection, and providing
                    diagnostic reports through convenient digital channels.
                  </p>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    We aim to make the testing process easier for people who
                    prefer the convenience of having sample collection arranged
                    at their doorstep.
                  </p>
                </div>
              </div>
            </article>

            {/* =====================================================
                SERVICES
            ===================================================== */}
            <article
              id="services"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
                What We Do
              </p>

              <h2 className="mt-1 font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                Our Services
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 sm:text-base">
                MultiPathLab focuses on diagnostic and preventive testing
                services. Depending on availability and the selected service,
                our offerings may include:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: TestTube,
                    title: "Diagnostic Tests",
                    text: "Routine and specialized diagnostic tests based on the available test menu.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Health Checkup Packages",
                    text: "Curated health checkup packages covering different testing requirements.",
                  },
                  {
                    icon: Home,
                    title: "Home Sample Collection",
                    text: "Convenient doorstep sample collection for eligible services and locations.",
                  },
                  {
                    icon: FileText,
                    title: "Digital Reports",
                    text: "Diagnostic reports delivered or made accessible through available digital channels.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[5px] border border-border-light bg-[#fbfdff] p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-4 font-heading font-bold text-medical-navy">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </article>

            {/* =====================================================
                COVERAGE
            ===================================================== */}
            <article
              id="coverage"
              className="overflow-hidden rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
                    Our Service Area
                  </p>

                  <h2 className="mt-1 font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                    Mumbai Region
                  </h2>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    MultiPathLab is focused on serving customers across the
                    Mumbai region with convenient diagnostic services and home
                    sample collection.
                  </p>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    Our service model is designed around making diagnostic
                    testing easier for people who prefer professional sample
                    collection at their home rather than travelling for every
                    test.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "South Mumbai",
                      "Central Mumbai",
                      "Western Mumbai",
                      "Eastern Mumbai",
                      "North Mumbai",
                      "Nearby Mumbai areas",
                    ].map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-sm font-medium text-medical-navy"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-green" />
                        {area}
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-xs leading-5 text-medical-text">
                    *Home collection availability may vary by exact location,
                    test/package, timing, and service availability. Please
                    confirm your location before booking.
                  </p>
                </div>

                {/* Coverage Visual */}
                <div className="relative flex min-h-[310px] items-center justify-center overflow-hidden rounded-[5px] bg-gradient-to-br from-[#edf7ff] to-[#effbf5] p-6">
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-brand-blue/10 blur-2xl" />
                    <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-brand-green/10 blur-2xl" />
                  </div>

                  <div className="relative w-full max-w-sm">
                    <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border border-brand-blue/10 bg-white/60">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-brand-green/20 bg-white">
                        <MapPin className="h-12 w-12 text-brand-green" />
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <p className="font-heading text-xl font-extrabold text-medical-navy">
                        Mumbai Region
                      </p>

                      <p className="mt-1 text-sm text-medical-text">
                        Home sample collection & diagnostic services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* =====================================================
                DIAGNOSTIC INFORMATION
            ===================================================== */}
            <article
              id="diagnostic"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                Diagnostic Information
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Diagnostic tests provide laboratory information based on the
                  sample collected and the testing process applicable to the
                  selected investigation.
                </p>

                <p>
                  Test results may vary depending on several factors including
                  the type of test, sample quality, sample collection,
                  processing, and other laboratory conditions.
                </p>

                <p>
                  MultiPathLab provides diagnostic reports for informational
                  and healthcare-use purposes. A report should be considered
                  together with the individual's overall health information and
                  professional medical advice where required.
                </p>
              </div>
            </article>

            {/* =====================================================
                WHAT WE DO NOT PROVIDE
            ===================================================== */}
            <article
              id="not-provide"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-red-50 text-red-500">
                  <XCircle className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                  What MultiPathLab Does Not Provide
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                MultiPathLab's services are focused on diagnostics and
                diagnostic-related convenience. We do not represent our
                services as a replacement for professional medical treatment.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "We do not prescribe medicines.",
                  "We do not provide medical treatment.",
                  "We do not replace consultation with a qualified doctor.",
                  "We do not provide emergency medical care.",
                  "We do not guarantee a particular medical outcome based on a diagnostic report.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[5px] bg-[#fffafa] p-4"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />

                    <p className="text-sm leading-6 text-medical-text">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[5px] border border-brand-blue/10 bg-brand-blue/5 p-5">
                <p className="font-semibold text-medical-navy">
                  Need medical advice?
                </p>

                <p className="mt-2 text-sm leading-6">
                  If you need diagnosis, treatment, medication, or
                  interpretation of your health condition, please consult an
                  appropriately qualified healthcare professional.
                </p>
              </div>
            </article>

            {/* =====================================================
                REPORTS
            ===================================================== */}
            <article
              id="reports"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                  <FileText className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                  Reports & Results
                </h2>
              </div>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Diagnostic reports are prepared based on the applicable
                  testing process. Report availability and turnaround time can
                  vary depending on the selected test or package.
                </p>

                <p>
                  Reports may be provided digitally through the available
                  channels such as the website, email, WhatsApp, or other
                  communication methods used by MultiPathLab.
                </p>

                <p>
                  Customers should keep their reports securely and share them
                  only with people or healthcare professionals they trust.
                </p>

                <div className="mt-5 rounded-[5px] border border-brand-green/20 bg-brand-green/5 p-5">
                  <p className="font-semibold text-medical-navy">
                    Important
                  </p>

                  <p className="mt-2 text-sm leading-6">
                    MultiPathLab provides the diagnostic report. Any medical
                    interpretation, diagnosis, treatment decision, or
                    medication decision should be taken with a qualified
                    healthcare professional.
                  </p>
                </div>
              </div>
            </article>

            {/* =====================================================
                WEBSITE
            ===================================================== */}
            <article
              id="website"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                Website Information
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  The information available on the MultiPathLab website is
                  provided to explain our services, diagnostic tests, packages,
                  booking process, reports, and related information.
                </p>

                <p>
                  Service availability, pricing, test availability, report
                  timelines, and collection coverage may change from time to
                  time.
                </p>

                <p>
                  Customers should confirm the applicable service details
                  before completing a booking or payment.
                </p>
              </div>
            </article>

            {/* =====================================================
                TRUST
            ===================================================== */}
            <section className="rounded-[5px] bg-gradient-to-br from-[#12345b] to-[#0b2949] p-7 text-white sm:p-9">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">
                    MultiPathLab
                  </p>

                  <h2 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
                    Built Around Convenience, Transparency & Trust
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                    Our goal is to make diagnostic testing simpler for people
                    across the Mumbai region — from booking a test and
                    arranging home sample collection to receiving the final
                    diagnostic report.
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-[5px] bg-brand-green text-white">
                  <ShieldCheck className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[5px] border border-white/10 bg-white/5 p-4">
                  <p className="font-heading font-bold">
                    Transparent
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Clear service information
                  </p>
                </div>

                <div className="rounded-[5px] border border-white/10 bg-white/5 p-4">
                  <p className="font-heading font-bold">
                    Convenient
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Home sample collection
                  </p>
                </div>

                <div className="rounded-[5px] border border-white/10 bg-white/5 p-4">
                  <p className="font-heading font-bold">
                    Accessible
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/60">
                    Digital diagnostic reports
                  </p>
                </div>
              </div>
            </section>

            {/* =====================================================
                CONTACT
            ===================================================== */}
            <article
              id="contact"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy sm:text-3xl">
                Contact MultiPathLab
              </h2>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                If you have questions about our diagnostic tests, health
                packages, home sample collection, reports, service coverage,
                or booking process, please contact our team.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:9082742451"
                  className="group flex cursor-pointer items-center gap-4 rounded-[5px] border border-border-light p-5 transition hover:border-brand-blue/30 hover:bg-brand-blue/5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-medical-text">
                      Call Us
                    </p>

                    <p className="mt-1 font-heading font-bold text-medical-navy">
                      9082742451
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-[5px] border border-border-light p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-medical-text">
                      Service Region
                    </p>

                    <p className="mt-1 font-heading font-bold text-medical-navy">
                      Mumbai Region
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* =====================================================
                FINAL DISCLAIMER
            ===================================================== */}
            <div className="rounded-[5px] border border-[#dce8f0] bg-[#f8fbfd] p-6 sm:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />

                <div>
                  <h3 className="font-heading font-bold text-medical-navy">
                    Final Disclaimer
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    MultiPathLab provides diagnostic and health checkup related
                    services. Information on this website should not be
                    considered medical advice, diagnosis, treatment,
                    prescription, or emergency healthcare. For medical
                    concerns, please consult a qualified healthcare
                    professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
            <Home className="h-7 w-7" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-extrabold text-medical-navy">
            Diagnostic Testing Made Convenient
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-medical-text sm:text-base">
            Explore our diagnostic tests and health checkup packages or contact
            us to check home sample collection availability in your area.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/tests-packages"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-green-dark"
            >
              Explore Test Packages
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border-light bg-white px-6 py-3.5 text-sm font-bold text-medical-navy transition hover:border-brand-blue/30 hover:bg-brand-blue/5"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="border-t border-border-light bg-[#f8fbfd] px-5 py-5 text-center">
        <p className="text-xs text-medical-text">
          Disclaimer • MultiPathLab — Diagnostic & Health Checkup Services
          serving the Mumbai region.
        </p>
      </div>
    </main>
  );
}

export default Disclaimer;