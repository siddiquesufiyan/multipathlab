"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Download,
  FileCheck2,
  FileText,
  HelpCircle,
  Home,
  LockKeyhole,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  UserRound,
} from "lucide-react";
import { useState } from "react";

function Reports() {
  const [reportId, setReportId] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!reportId.trim() || !mobile.trim()) {
      setMessage("Please enter your Report ID and registered mobile number.");
      return;
    }

    setMessage(
      "Report access will be available here once the digital report system is connected."
    );
  };

  const reportFeatures = [
    {
      icon: FileCheck2,
      title: "Digital Reports",
      description:
        "Receive your diagnostic reports digitally for convenient access and record keeping.",
    },
    {
      icon: Smartphone,
      title: "Easy Access",
      description:
        "Access your report from your phone, tablet or computer whenever you need it.",
    },
    {
      icon: LockKeyhole,
      title: "Private & Secure",
      description:
        "Your report details are intended for the patient and should be accessed using the required information.",
    },
    {
      icon: Download,
      title: "Download & Save",
      description:
        "Keep a digital copy of your report for your personal health records.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Home,
      title: "Sample Collection",
      description:
        "Your required sample is collected during the scheduled home visit.",
    },
    {
      number: "02",
      icon: FileText,
      title: "Diagnostic Testing",
      description:
        "The sample is submitted for the required diagnostic testing process.",
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Report Preparation",
      description:
        "After testing is completed, the diagnostic report is prepared.",
    },
    {
      number: "04",
      icon: Smartphone,
      title: "Digital Report",
      description:
        "Your report can be provided digitally for convenient access.",
    },
  ];

  return (
    <section className="bg-white font-body text-brand-black">
      {/* =====================================================
          HERO
      ====================================================== */}
      <div className="relative overflow-hidden bg-medical-navy">
        {/* Background decoration */}
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <FileText className="h-4 w-4 text-brand-green" />
                Digital Diagnostic Reports
              </div>

              <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Access Your
                <span className="block text-brand-green">
                  Diagnostic Reports.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                Get convenient access to your digital diagnostic reports after
                your sample collection and testing process. Keep your reports
                available for easy reference whenever you need them.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#access-report"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:bg-brand-green-dark"
                >
                  Access Your Report
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:9082742451"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  Call 9082742451
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                  Digital Reports
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                  Easy Access
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                  Convenient Service
                </div>
              </div>
            </div>

            {/* Hero report visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white p-5 shadow-xl sm:p-6">
                {/* Fake report header */}
                <div className="flex items-center justify-between border-b border-border-light pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue/10">
                        <FileText className="h-5 w-5 text-brand-blue" />
                      </div>

                      <div>
                        <p className="font-heading text-sm font-bold text-medical-navy">
                          Diagnostic Report
                        </p>

                        <p className="text-xs text-medical-text">
                          Digital Copy
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green-dark">
                    Completed
                  </div>
                </div>

                {/* Patient info */}
                <div className="grid grid-cols-2 gap-4 py-5">
                  <div>
                    <p className="text-xs text-medical-text">Patient</p>
                    <p className="mt-1 text-sm font-semibold text-medical-navy">
                      Patient Name
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-medical-text">Report ID</p>
                    <p className="mt-1 text-sm font-semibold text-medical-navy">
                      MP-000000
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-medical-text">Test Date</p>
                    <p className="mt-1 text-sm font-semibold text-medical-navy">
                      DD / MM / YYYY
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-medical-text">Status</p>
                    <p className="mt-1 text-sm font-semibold text-brand-green-dark">
                      Report Ready
                    </p>
                  </div>
                </div>

                {/* Report lines */}
                <div className="space-y-3 rounded-2xl bg-medical-blue-light p-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between"
                    >
                      <div className="h-2 w-28 rounded-full bg-white" />
                      <div className="h-2 w-16 rounded-full bg-white" />
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 font-semibold text-white transition hover:bg-brand-blue-dark"
                >
                  <Download className="h-4 w-4" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          REPORT ACCESS
      ====================================================== */}
      <div
        id="access-report"
        className="scroll-mt-20 bg-medical-blue-light py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left content */}
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                Report Portal
              </span>

              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-medical-navy sm:text-4xl">
                Access Your Digital Report
              </h2>

              <p className="mt-5 leading-8 text-medical-text">
                Enter your report details to access your diagnostic report.
                Please use the information provided to you during your testing
                or sample collection process.
              </p>

              <div className="mt-6 flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-green" />

                <p className="text-sm leading-6 text-medical-text">
                  Keep your report details private and only share them with
                  people you trust.
                </p>
              </div>
            </div>

            {/* Search card */}
            <div className="rounded-3xl border border-border-light bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Search className="h-6 w-6 text-brand-blue" />
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold text-medical-navy">
                    Find Your Report
                  </h3>

                  <p className="mt-1 text-sm text-medical-text">
                    Enter the details below
                  </p>
                </div>
              </div>

              <form onSubmit={handleSearch} className="mt-7 space-y-5">
                {/* Report ID */}
                <div>
                  <label
                    htmlFor="report-id"
                    className="mb-2 block text-sm font-semibold text-medical-navy"
                  >
                    Report ID
                  </label>

                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-medical-text/60" />

                    <input
                      id="report-id"
                      type="text"
                      value={reportId}
                      onChange={(e) => setReportId(e.target.value)}
                      placeholder="Enter your Report ID"
                      className="w-full rounded-xl border border-border-light bg-white py-3.5 pl-12 pr-4 text-sm text-medical-navy outline-none transition placeholder:text-medical-text/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-sm font-semibold text-medical-navy"
                  >
                    Registered Mobile Number
                  </label>

                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-medical-text/60" />

                    <input
                      id="mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter mobile number"
                      className="w-full rounded-xl border border-border-light bg-white py-3.5 pl-12 pr-4 text-sm text-medical-navy outline-none transition placeholder:text-medical-text/50 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 font-semibold text-white transition hover:bg-brand-blue-dark"
                >
                  <Search className="h-4 w-4" />
                  View Report
                </button>

                {message && (
                  <div className="rounded-xl border border-brand-blue/10 bg-medical-blue-light p-4 text-sm leading-6 text-medical-text">
                    {message}
                  </div>
                )}
              </form>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-medical-light p-4">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" />

                <p className="text-xs leading-5 text-medical-text">
                  Having trouble accessing your report? Contact us and we will
                  help you with the next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          HOW REPORT WORKS
      ====================================================== */}
      <div className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green-dark">
              How It Works
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
              From Sample Collection to Digital Report
            </h2>

            <p className="mt-4 leading-7 text-medical-text">
              Your report journey is kept simple and convenient from home
              collection through the testing process.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border-light bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                      <Icon className="h-6 w-6 text-brand-blue" />
                    </div>

                    <span className="font-heading text-3xl font-extrabold text-medical-blue-light">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-bold text-medical-navy">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-medical-text">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <div className="bg-medical-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
              Digital Reports
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
              Your Reports, Conveniently Available
            </h2>

            <p className="mt-4 leading-7 text-medical-text">
              Digital reports make it easier to keep your diagnostic records
              organized and accessible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reportFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border-light bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10">
                    <Icon className="h-6 w-6 text-brand-green-dark" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold text-medical-navy">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-medical-text">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          HELP SECTION
      ====================================================== */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-3xl bg-medical-navy p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <HelpCircle className="h-6 w-6 text-brand-green" />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
                    Need Help?
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  Can't Find or Access Your Report?
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  If you have already completed your test or home sample
                  collection and need assistance with your report, contact us
                  directly. We can guide you regarding your report and service.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:bg-brand-green-dark"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="tel:9082742451"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <div className="bg-medical-blue-light">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center sm:px-8 lg:px-10 lg:py-16">
          <h2 className="font-heading text-2xl font-extrabold text-medical-navy sm:text-3xl">
            Need a Blood Test or Home Collection?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-medical-text">
            Book a convenient home service and get professional sample
            collection at your doorstep.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Book Home Service
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reports;
