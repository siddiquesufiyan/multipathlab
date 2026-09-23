
"use client";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FlaskConical,
  Home,
  Phone,
  Search,
  TestTube,
} from "lucide-react";

function WorkProcess() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Submit Your Requirement",
      description:
        "Fill out the enquiry form on our website and share the details of the test you need.",
    },
    {
      number: "02",
      icon: Phone,
      title: "We Contact You",
      description:
        "After understanding your requirements, we will contact you to confirm the test details and home collection arrangements.",
    },
    {
      number: "03",
      icon: Home,
      title: "Sample Collection at Home",
      description:
        "We provide convenient home blood sample collection services in available locations across Mumbai.",
    },
    {
      number: "04",
      icon: FlaskConical,
      title: "Testing Process",
      description:
        "Your collected sample is submitted for the required diagnostic testing process.",
    },
  ];

  const popularTests = [
    "17 OH Progesterone",
    "24 Hour Albumin Creatinine Ratio (ACR)",
    "24 Hours Protein Creatinine Ratio (PCR)",
    "24 Hours Urinary Uric Acid",
    "24 Hrs Urinary Calcium",
    "24 Hrs Urinary Proteins",
    "24 Hrs Urinary Sodium",
    "25 OH Vitamin D",
    "ABO Blood Group and Rh Type",
    "Acetyl Choline Receptor Antibodies (AChR Ab)",
    "Acid Fast Bacilli Smear",
    "Acid Phosphatase",
    "ACTH",
    "Adenosine Deaminase (ADA)",
    "ADA - Ascitic Fluid",
    "ADA - CSF",
    "ADA - Pleural Fluid",
    "ADA - Pus",
    "AFB Rapid Culture by MGIT",
    "AFB Detection by Smear Examination",
    "ZN Stain - Body Fluids",
  ];

  return (
    <section className="bg-white font-body text-brand-black">
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-medical-navy">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Home className="h-4 w-4 text-brand-green" />
              Home Blood Collection in Mumbai
            </div>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              How Do We
              <span className="text-brand-green">
                {" "}Work?
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              No need to visit a hospital or diagnostic centre
              every time you need a blood test. We provide
              convenient home blood sample collection services
              in available locations across Mumbai.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:bg-brand-green-dark"
              >
                Book Home Collection
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:9082742451"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <Phone className="h-4 w-4" />
                Call 9082742451
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROBLEM ================= */}
      <div className="bg-medical-blue-light">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                The Problem
              </span>

              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-medical-navy sm:text-4xl">
                Visiting a Hospital or Lab Every Time Is Not Always Convenient
              </h2>

              <p className="mt-5 leading-8 text-medical-text">
                Travelling to a hospital or diagnostic centre,
                waiting in queues, and making extra time for
                blood sample collection can be difficult for
                many people.
              </p>

              <p className="mt-4 leading-8 text-medical-text">
                To make this process easier, we provide home
                blood sample collection services, allowing
                you to begin your diagnostic testing journey
                from the comfort of your home.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10">
                <Home className="h-7 w-7 text-brand-green-dark" />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-bold text-medical-navy">
                Blood Sample Collection at Home
              </h3>

              <p className="mt-3 leading-7 text-medical-text">
                Simply share your testing requirements.
                Once your request is confirmed, home
                collection can be arranged based on your
                location and the test requirements.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Convenient doorstep collection",
                  "Experienced DMLT professional",
                  "Multiple diagnostic tests",
                  "Affordable service options",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                    <span className="text-sm font-medium text-medical-text">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green-dark">
              Simple Process
            </span>

            <h2 className="mt-3 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
              Just 4 Simple Steps
            </h2>

            <p className="mt-4 leading-7 text-medical-text">
              Share your testing requirements and get in
              touch with us to arrange your home collection.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-border-light bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-xl"
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

      {/* ================= TESTS ================= */}
      <div className="bg-medical-light py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                Diagnostic Tests
              </span>

              <h2 className="mt-3 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
                A Wide Range of Diagnostic Tests
              </h2>

              <p className="mt-4 leading-7 text-medical-text">
                Below are some examples of the tests we offer.
                Test availability and home collection eligibility
                will be confirmed based on your location and
                laboratory requirements.
              </p>
            </div>

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 md:flex">
              <TestTube className="h-7 w-7 text-brand-blue" />
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularTests.map((test) => (
              <div
                key={test}
                className="flex items-start gap-3 rounded-xl border border-border-light bg-white p-4 transition hover:border-brand-blue/30 hover:shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />

                <span className="text-sm font-medium leading-6 text-medical-text">
                  {test}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-blue/10 bg-white p-5">
            <p className="text-center text-sm leading-6 text-medical-text">
              <span className="font-semibold text-medical-navy">
                Looking for a specific test?
              </span>{" "}
              Share the test name with us. We will confirm
              its availability, sample requirements, pricing,
              and home collection options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;