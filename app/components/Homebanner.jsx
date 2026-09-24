"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Clock,
  Users,
  ClipboardCheck,
  CheckCircle2,
  TestTube,
} from "lucide-react";

import BookingForm from "./BookingForm";

function Homebanner() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: ClipboardCheck,
      value: "500+",
      label: "Tests & Packages",
    },
    {
      icon: ShieldCheck,
      value: "99.7%",
      label: "Accuracy Rate",
    },
    {
      icon: Clock,
      value: "24–48 hrs",
      label: "Report Delivery",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#f1f9ff] via-[#edf7ff] to-[#effbf5] font-body"
      >
        <div className="mx-auto grid min-h-[530px] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-0 lg:py-16">

          {/* HERO CONTENT */}
          <div className="relative z-10">
            {/* TOP BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-brand-blue">
              <span>Accurate</span>
              <span className="text-brand-green">•</span>
              <span>Safe</span>
              <span className="text-brand-green">•</span>
              <span>Convenient</span>
            </div>

        {/* HEADING */}
<h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.13] tracking-tight text-medical-navy sm:text-5xl lg:text-[54px]">
  Trusted Blood Collection.
  <span className="block text-brand-green">
    Right at Your Door.
  </span>
</h1>

{/* DESCRIPTION */}
<p className="mt-5 max-w-xl text-base leading-7 text-medical-text">
  Kamruddin Shaikh, DMLT, Doctor & Lab Technician, offers affordable home
  blood sample collection, diagnostic services, and digital reports. With
  10+ years of experience, get professional sample collection and reliable
  service right at your doorstep.
</p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition duration-300 hover:bg-brand-green-dark"
              >
                <CalendarDays size={17} />

                Book a Home Collection

                <ArrowRight size={17} />
              </button>

              <a
                href="/tests-packages"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/40 bg-white px-6 py-3.5 text-sm font-bold text-brand-blue transition duration-300 hover:bg-medical-blue-light"
              >
                View Health Packages
              </a>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-white text-brand-green shadow-sm">
                      <Icon size={20} />
                    </div>

                    <div>
                      <p className="font-heading text-sm font-extrabold text-medical-navy">
                        {item.value}
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-medical-text">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            {/* GREEN DECORATION */}
            <div className="absolute -left-4 top-10 h-[85%] w-10 rounded-l-full bg-brand-green/60" />

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden rounded-[35px] rounded-bl-[100px] border-[7px] border-white bg-white shadow-2xl">
              <img
                src="/hero-banner.png"
                alt="Healthcare professional providing medical care"
                className="h-[350px] w-full object-cover sm:h-[440px] lg:h-[480px]"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/40 via-transparent to-transparent" />

              {/* TOP FLOATING CARD */}
              <div className="absolute left-4 top-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:top-6">
                <p className="flex items-center gap-2 text-sm font-extrabold text-medical-navy">
                  <ShieldCheck
                    size={17}
                    className="text-brand-green"
                  />
                  Safe Sample Collection
                </p>

                <p className="mt-1 text-xs text-medical-text">
                  Professional care at your home
                </p>
              </div>

              {/* BOTTOM FLOATING CARD */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[270px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-brand-green">
                    <TestTube size={23} />
                  </div>

                  <div>
                    <p className="font-heading text-sm font-extrabold text-medical-navy">
                      Home Collection
                    </p>

                    <p className="mt-1 text-xs text-medical-text">
                      Book your test in minutes
                    </p>
                  </div>

                  <CheckCircle2
                    className="ml-auto text-brand-green"
                    size={22}
                  />
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-5 -right-2 hidden rounded-2xl bg-brand-green px-5 py-4 text-white shadow-xl sm:block">
              <p className="flex items-center gap-2 text-sm font-extrabold">
                <Clock size={18} />
                Convenient & Reliable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM MODAL */}
      <BookingForm
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialTest=""
        topOffset="80px"
      />
    </>
  );
}

export default Homebanner;