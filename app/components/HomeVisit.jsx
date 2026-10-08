"use client";

import {
  FaHeartbeat,
  FaFlask,
  FaCalendarCheck,
  FaCheckCircle,
  FaVial,
  FaArrowRight,
} from "react-icons/fa";

function HomeVisit() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="mb-8 text-center">
          <h1
            className="font-[var(--font-heading)] text-3xl font-extrabold tracking-tight text-[var(--color-medical-navy)] sm:text-4xl"
          >
            Book a Home Visit Now
          </h1>

          <p
            className="mx-auto mt-3 max-w-4xl font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)] sm:text-[15px]"
          >
            Maintaining health in a fast-paced world can be challenging. Our
            blood test at home service simplifies the process with easy blood
            sample collection. Our diagnostic labs provide convenient lab tests
            at home to assist with your health management — rely on MultiPathLab
            for all your pathology requirements.
          </p>
        </div>

        {/* Cards Row 1 */}
        <div className="grid gap-5 lg:grid-cols-2">

          {/* Card 1 */}
          <div className="group h-full rounded-2xl border border-[var(--color-border-light)] bg-white p-6 shadow-[0_8px_30px_rgba(18,52,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,52,91,0.10)] sm:p-7">

            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-medical-blue-light)] text-[var(--color-brand-blue)] transition-colors group-hover:bg-[var(--color-brand-blue)] group-hover:text-white">
                <FaHeartbeat size={23} strokeWidth={2} />
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-extrabold leading-snug text-[var(--color-medical-navy)]">
                Ensuring Optimal Health and Well-being
              </h3>
            </div>

            <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              At MultiPathLab, we understand that it may not always be possible
              for you to visit us to give a blood sample. This is why we come to
              you — whether you are resting at home or busy in your office. All
              you need is 10 minutes for your health.
            </p>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Our phlebotomists are highly trained and vaccinated professionals
              who follow strict safety and hygiene protocols, using sterilised
              tools for blood sample collection. Your sample is then carefully
              transferred to our labs for speedy, accurate, and reliable
              testing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group h-full rounded-2xl border border-[var(--color-border-light)] bg-white p-6 shadow-[0_8px_30px_rgba(18,52,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,52,91,0.10)] sm:p-7">

            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-medical-blue-light)] text-[var(--color-brand-blue)] transition-colors group-hover:bg-[var(--color-brand-blue)] group-hover:text-white">
                <FaFlask size={23} strokeWidth={2} />
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-extrabold leading-snug text-[var(--color-medical-navy)]">
                Blood Tests Conducted At Home
              </h3>
            </div>

            <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Any test that requires only a blood sample can be efficiently
              conducted from the comfort of your home. Choose from a wide range
              of routine tests such as Glucose, CBC, Vitamin, Thyroid function,
              or Liver function tests.
            </p>

            <p className="mt-3 font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Our services also cover specialised tests such as allergy checkups
              with maximum allergens, STD tests, PCOD tests, and more. Monitor
              chronic diseases or stay on top of your health with regular annual
              health packages based on your age, gender, and lifestyle.
            </p>
          </div>
        </div>

        {/* Cards Row 2 */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">

          {/* Card 3 */}
          <div className="group h-full rounded-2xl border border-[var(--color-border-light)] bg-white p-6 shadow-[0_8px_30px_rgba(18,52,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,52,91,0.10)] sm:p-7">

            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)] transition-colors group-hover:bg-[var(--color-brand-green)] group-hover:text-white">
                <FaCalendarCheck size={23} strokeWidth={2} />
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-extrabold leading-snug text-[var(--color-medical-navy)]">
                Booking A Home Collection With MultiPathLab
              </h3>
            </div>

            <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Blood tests help you stay informed about potential health concerns
              before they become serious.
            </p>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

              <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-medical-blue-light)] p-3 text-center">
                <span className="block font-[var(--font-heading)] text-xl font-extrabold text-[var(--color-brand-blue)]">
                  45+
                </span>
                <span className="mt-1 block font-[var(--font-body)] text-[10px] font-semibold leading-4 text-[var(--color-medical-text)]">
                  Years of Experience
                </span>
              </div>

              <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-medical-light)] p-3 text-center">
                <span className="block font-[var(--font-heading)] text-xl font-extrabold text-[var(--color-brand-green)]">
                  21
                </span>
                <span className="mt-1 block font-[var(--font-body)] text-[10px] font-semibold leading-4 text-[var(--color-medical-text)]">
                  Countries Present
                </span>
              </div>

              <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-medical-blue-light)] p-3 text-center">
                <span className="block font-[var(--font-heading)] text-xl font-extrabold text-[var(--color-brand-blue)]">
                  4,500+
                </span>
                <span className="mt-1 block font-[var(--font-body)] text-[10px] font-semibold leading-4 text-[var(--color-medical-text)]">
                  Tests & Profiles
                </span>
              </div>

              <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-medical-light)] p-3 text-center">
                <span className="block font-[var(--font-heading)] text-xl font-extrabold text-[var(--color-brand-green)]">
                  750+
                </span>
                <span className="mt-1 block font-[var(--font-body)] text-[10px] font-semibold leading-4 text-[var(--color-medical-text)]">
                  Towns Covered
                </span>
              </div>

            </div>

            <p className="mt-5 font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Tests are performed using advanced technology across routine,
              semi-specialised and super-specialised areas including oncology,
              neurology, gynaecology, nephrology, and more — delivering fast
              turnaround times with reliable results.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group flex h-full flex-col rounded-2xl border border-[var(--color-border-light)] bg-white p-6 shadow-[0_8px_30px_rgba(18,52,91,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(18,52,91,0.10)] sm:p-7">

            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)] transition-colors group-hover:bg-[var(--color-brand-green)] group-hover:text-white">
                <FaCheckCircle size={23} strokeWidth={2} />
              </div>

              <h3 className="font-[var(--font-heading)] text-lg font-extrabold leading-snug text-[var(--color-medical-navy)]">
                Confirm Your Blood Tests Online!
              </h3>
            </div>

            <p className="font-[var(--font-body)] text-sm leading-7 text-[var(--color-medical-text)]">
              Take the first step towards better health with MultiPathLab. Our
              easy-to-use booking system makes it convenient to book a test
              anytime from anywhere, with a hassle-free sample collection
              process available right at your doorstep.
            </p>

            <div className="mt-auto pt-6">
              <a
                href="/contact"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-blue)] px-5 py-3 font-[var(--font-heading)] text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,104,201,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-brand-blue-dark)]"
              >
                <FaVial size={17} strokeWidth={2} />

                Book Home Collection

                <FaArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeVisit;