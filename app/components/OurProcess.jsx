"use client";

import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  FlaskConical,
  Home,
  TestTube2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Your Package",
    description:
      "Select a health test package according to your screening requirements.",
  },
  {
    number: "02",
    icon: Home,
    title: "Book Home Collection",
    description:
      "Schedule a convenient time and our collection professional visits your home.",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Sample Testing",
    description:
      "Your samples are carefully processed and tested through the required parameters.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Get Your Report",
    description:
      "Receive your test results digitally and access them whenever you need.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="our-process"
      className="relative overflow-hidden bg-[#f7fbfe] px-5 py-16 font-body sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#0068c9]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#43b82a]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0068c9] shadow-sm">
            <TestTube2 className="h-4 w-4" />
            Simple & Convenient
          </div>

          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#12345b] sm:text-4xl lg:text-5xl">
            How Our Testing
            <span className="text-[#0068c9]"> Process Works</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#45627f] sm:text-base">
            From booking your package to receiving your report, we keep the
            entire testing journey simple and convenient.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-14">
          {/* Connecting line desktop */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-[#0068c9]/10 via-[#0068c9]/30 to-[#43b82a]/20 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Step */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-8 border-[#f7fbfe] bg-white shadow-[0_8px_30px_rgba(18,52,91,0.10)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-[#0068c9]">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <span className="mt-5 font-heading text-xs font-extrabold tracking-[0.18em] text-[#43b82a]">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 font-heading text-xl font-extrabold text-[#12345b]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#45627f]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0068c9] to-[#0053a3] px-6 py-7 shadow-xl shadow-[#0068c9]/15 sm:px-9">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Home className="h-5 w-5 text-white" />
                <p className="text-sm font-bold text-white/80">
                  Convenient Home Collection
                </p>
              </div>

              <h3 className="mt-1 font-heading text-xl font-extrabold text-white sm:text-2xl">
                Your health checkup, without leaving home.
              </h3>
            </div>

            <a
              href="#test-packages"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#0068c9] transition hover:bg-[#f3f8fc]"
            >
              Browse Packages
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}