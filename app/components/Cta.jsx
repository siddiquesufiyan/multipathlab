
"use client";
import { ArrowRight, CalendarDays, Clock, ShieldCheck } from "lucide-react";

function Cta() {
  return (
    <section className="bg-gradient-to-br from-[#f1f9ff] via-[#edf7ff] to-[#effbf5] px-5 py-14 font-body sm:px-8 sm:py-20 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] bg-medical-navy shadow-xl sm:rounded-[36px]">
          <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">

            {/* CONTENT */}
            <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <ShieldCheck size={15} />
                Your Health Comes First
              </div>

              <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Take Care
                <span className="block text-emerald-300">
                  of Your Health?
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
                Book your home sample collection with ease.
                Schedule an appointment and let our team
                help make your diagnostic experience convenient.
              </p>

              {/* CTA BUTTON */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-green px-6 py-4 text-sm font-extrabold text-white shadow-lg transition duration-300 hover:bg-brand-green-dark sm:w-auto sm:px-8"
                >
                  <CalendarDays size={19} />
                  Schedule Your Appointment
                  <ArrowRight size={18} />
                </a>
              </div>

              {/* TRUST POINTS */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-white/80 sm:text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-emerald-300" />
                  Professional Care
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={17} className="text-emerald-300" />
                  Convenient Booking
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative min-h-[250px] sm:min-h-[350px] lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare professional caring for a patient"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-navy/50 via-medical-navy/10 to-transparent lg:bg-gradient-to-r lg:from-medical-navy/30 lg:via-transparent lg:to-transparent" />

              {/* IMAGE BADGE */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-lg sm:bottom-8 sm:left-8 sm:right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-brand-green">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="font-heading text-sm font-extrabold text-medical-navy">
                      Care at Your Convenience
                    </p>

                    <p className="mt-1 text-xs leading-5 text-medical-text">
                      Take the next step toward your health.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
