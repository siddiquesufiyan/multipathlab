"use client";
import { useState } from "react";
import BookingForm from "./BookingForm";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FlaskConical,
  Home,
  ShieldCheck,
  Stethoscope,
  TestTube2,
} from "lucide-react";

function HomeService() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const services = [
    {
      icon: TestTube2,
      title: "Blood Collection",
      description:
        "Routine and specialized blood samples collected safely at your doorstep.",
    },
    {
      icon: Stethoscope,
      title: "Health Checkups",
      description:
        "Complete health checkup packages with convenient home sample collection.",
    },
    {
      icon: FlaskConical,
      title: "Diagnostic Tests",
      description:
        "A wide range of diagnostic tests and laboratory investigations.",
    },
    {
      icon: FileCheck2,
      title: "Specialized Tests",
      description:
        "Advanced diagnostic panels and specialized testing services at home.",
    },
  ];

  const benefits = [
    {
      icon: Stethoscope,
      title: "Professional Care",
      text: "Trained healthcare professionals handle your sample collection.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Hygienic",
      text: "Careful sample collection with proper hygiene and safety practices.",
    },
    {
      icon: Clock3,
      title: "Convenient Service",
      text: "Choose a convenient time and get sample collection at your home.",
    },
    {
      icon: FlaskConical,
      title: "Wide Range of Tests",
      text: "Book routine, preventive and specialized diagnostic tests.",
    },
    {
      icon: FileCheck2,
      title: "Reliable Reports",
      text: "Get your diagnostic reports after the testing process is completed.",
    },
  ];

  return (
    <main className="bg-white font-[var(--font-body)] text-[var(--color-brand-black)]">
      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7fbff] to-[#eef9f5]">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#edf7ff] blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#eefbf2] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              {/* Small label */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe6f8] bg-[#edf7ff] px-4 py-2 text-sm font-semibold text-[var(--color-brand-blue)]">
                <Home size={17} strokeWidth={2.2} />
                Home Collection Service
              </div>

              <h1 className="font-[var(--font-heading)] text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--color-medical-navy)] sm:text-5xl lg:text-[56px]">
                Quality Testing,
                <span className="block text-[var(--color-brand-green)]">
                  Right at Your Doorstep.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-medical-text)] sm:text-lg sm:leading-8">
                Our trained healthcare professionals visit your home to collect
                blood samples and provide diagnostic testing services with
                care, safety and convenience.
              </p>

              {/* Quick benefits */}
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#cfe7fa] bg-white text-[var(--color-brand-blue)] shadow-sm">
                    <Home size={18} />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-[var(--color-medical-navy)]">
                    Home
                    <br />
                    Collection
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7eed4] bg-white text-[var(--color-brand-green)] shadow-sm">
                    <ShieldCheck size={18} />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-[var(--color-medical-navy)]">
                    Safe &
                    <br />
                    Hygienic
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#cfe7fa] bg-white text-[var(--color-brand-blue)] shadow-sm">
                    <Clock3 size={18} />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-[var(--color-medical-navy)]">
                    Convenient
                    <br />
                    Service
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7eed4] bg-white text-[var(--color-brand-green)] shadow-sm">
                    <FileCheck2 size={18} />
                  </span>
                  <span className="text-xs font-semibold leading-4 text-[var(--color-medical-navy)]">
                    Reliable
                    <br />
                    Reports
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-3">
              <button
  type="button"
  onClick={() => setBookingOpen(true)}
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-green)] px-6 py-3.5 font-[var(--font-heading)] text-sm font-bold text-white shadow-[0_8px_24px_rgba(67,184,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-green-dark)] cursor-pointer"
>
  Book Home Collection
  <ArrowRight size={17} />
</button>

                <a
                  href="/tests-packages"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfe0ec] bg-white px-6 py-3.5 font-[var(--font-heading)] text-sm font-bold text-[var(--color-brand-blue)] transition hover:border-[var(--color-brand-blue)] hover:bg-[#f6fbff]"
                >
                  View Tests & Packages
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#dff1ff] to-[#e7f7e8] opacity-70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-[0_20px_60px_rgba(18,52,91,0.12)]">
                <img
                  src="/homeservice.png"
                  alt="Healthcare professional collecting blood sample at home"
                  className="h-[310px] w-full rounded-[24px] object-cover sm:h-[400px] lg:h-[500px]"
                />

                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:max-w-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef8f5] text-[var(--color-brand-green)]">
                      <ShieldCheck size={22} />
                    </div>

                    <div>
                      <p className="font-[var(--font-heading)] text-sm font-extrabold text-[var(--color-medical-navy)]">
                        Safe & Professional Collection
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--color-medical-text)]">
                        Care at your doorstep
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
     
  <BookingForm
  isOpen={bookingOpen}
  onClose={() => setBookingOpen(false)}
  initialTest=""
  topOffset="80px"
/>

    </main>
  );
}

export default HomeService;