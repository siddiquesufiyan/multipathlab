"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Home,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

export default function HeroBannerPackages() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#edf7ff] via-white to-[#eef8f5] px-5 py-14 font-body sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0068c9]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#43b82a]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left Content */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0068c9]/15 bg-white px-4 py-2 text-sm font-semibold text-[#0068c9] shadow-sm">
            <TestTube2 className="h-4 w-4" />
            Comprehensive Health Test Packages
          </div>

          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#12345b] sm:text-5xl lg:text-6xl">
            Complete Health
            <span className="block text-[#0068c9]">Checkups Made Simple</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#45627f] sm:text-lg">
            Get carefully curated health test packages designed to help you
            understand your health better — with convenient home sample
            collection and reliable reports.
          </p>

          {/* Benefits */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Multiple health parameters",
              "Home sample collection",
              "Trusted laboratory testing",
              "Fast & accurate reports",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-sm font-semibold text-[#12345b]"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#43b82a]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#test-packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0068c9] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0068c9]/20 transition hover:bg-[#0053a3]"
            >
              Explore Test Packages
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#our-process"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d8e5ef] bg-white px-6 py-3.5 text-sm font-bold text-[#12345b] transition hover:border-[#0068c9]/30 hover:bg-[#f8fbff]"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-5 shadow-[0_25px_70px_rgba(18,52,91,0.14)] sm:p-7">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#43b82a]/10 blur-2xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#43b82a]">
                    Recommended
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-extrabold text-[#12345b]">
                    Complete Wellness
                  </h2>
                </div>

                <div className="rounded-2xl bg-[#edf7ff] p-3 text-[#0068c9]">
                  <ShieldCheck className="h-7 w-7" />
                </div>
              </div>

              {/* Parameters */}
              <div className="mt-7 rounded-2xl bg-[#f7fbfe] p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#45627f]">
                      Comprehensive screening
                    </p>
                    <p className="mt-1 font-heading text-4xl font-extrabold text-[#0068c9]">
                      70+
                    </p>
                    <p className="text-xs font-semibold text-[#45627f]">
                      Health Parameters
                    </p>
                  </div>

                  <div className="rounded-xl bg-white px-4 py-3 text-right shadow-sm">
                    <p className="text-xs font-medium text-[#45627f]">
                      Starting from
                    </p>
                    <p className="font-heading text-xl font-extrabold text-[#12345b]">
                      ₹999
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e5edf3]">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#0068c9] to-[#43b82a]" />
                </div>
              </div>

              {/* Features */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#e5edf3] bg-white p-4">
                  <Home className="h-5 w-5 text-[#0068c9]" />
                  <p className="mt-2 text-sm font-bold text-[#12345b]">
                    Home Collection
                  </p>
                  <p className="mt-1 text-xs text-[#45627f]">
                    Convenient sample pickup
                  </p>
                </div>

                <div className="rounded-xl border border-[#e5edf3] bg-white p-4">
                  <Clock3 className="h-5 w-5 text-[#43b82a]" />
                  <p className="mt-2 text-sm font-bold text-[#12345b]">
                    Quick Reports
                  </p>
                  <p className="mt-1 text-xs text-[#45627f]">
                    Timely digital delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white bg-white px-5 py-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef8f5] text-[#43b82a]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#12345b]">
                  Reliable Testing
                </p>
                <p className="text-xs text-[#45627f]">
                  Accurate & trusted results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}