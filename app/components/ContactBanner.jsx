import React from "react";

function ContactBanner() {
  return (
    <section className="md:w-full md:h-screen">
      <div className="mx-auto">
        <div className="grid items-center w-[100%] gap-10 overflow-hidden  bg-[var(--color-medical-blue-light)] px-6 py-8 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-12">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-2 font-[var(--font-heading)] text-xs font-bold uppercase tracking-wider text-[var(--color-brand-blue)] shadow-sm">
              Multpathlab
            </span>

            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold leading-tight text-[var(--color-medical-navy)] sm:text-4xl lg:text-[46px]">
              Reliable Diagnostics,
              <span className="block text-[var(--color-brand-blue)]">
                Delivered With Care.
              </span>
            </h2>

            <p className="mt-5 max-w-lg font-[var(--font-body)] text-[15px] leading-7 text-[var(--color-medical-text)] sm:text-base">
              Multpathlab makes diagnostic testing simple and convenient.
              From routine blood tests to advanced health checkups, we connect
              patients with reliable laboratory services and professional
              sample collection.
            </p>

            <p className="mt-3 max-w-lg font-[var(--font-body)] text-[14px] leading-6 text-[var(--color-medical-text)]">
              Choose convenient home sample collection or visit a diagnostic
              laboratory for your required tests and packages.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_rgba(18,52,91,0.10)]">
              <img
                src="/contact-us.png"
                alt="Multpathlab diagnostic services"
                className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[400px]"
              />
            </div>

            {/* SMALL INFO CARD */}
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(18,52,91,0.14)] sm:left-8">
              <p className="font-[var(--font-heading)] text-sm font-bold text-[var(--color-medical-navy)]">
                Professional Diagnostic Care
              </p>
              <p className="mt-1 font-[var(--font-body)] text-xs text-[var(--color-medical-text)]">
                Accurate • Convenient • Reliable
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactBanner;