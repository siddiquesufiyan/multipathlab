"use client";

import React from "react";
import {
  ArrowRight,
  CalendarX2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  IndianRupee,
  Mail,
  Phone,
  RefreshCcw,
  ShieldCheck,
  TestTube,
  XCircle,
} from "lucide-react";

function RefundAndCancillation() {
  const sections = [
    {
      id: "overview",
      title: "1. Refund & Cancellation Overview",
    },
    {
      id: "cancellation",
      title: "2. Cancellation of Booking",
    },
    {
      id: "reschedule",
      title: "3. Rescheduling a Service",
    },
    {
      id: "refund",
      title: "4. Refund Eligibility",
    },
    {
      id: "nonrefund",
      title: "5. Non-Refundable Situations",
    },
    {
      id: "failed",
      title: "6. Sample Collection Issues",
    },
    {
      id: "processing",
      title: "7. Refund Processing",
    },
    {
      id: "contact",
      title: "8. Refund Support",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-body text-medical-text">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#edf7ff] via-white to-[#effbf5] px-5 py-16 sm:px-8 sm:py-20 lg:px-6">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-green/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-blue">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span>Refund & Cancellation</span>
          </div>

          <div className="mt-7 max-w-3xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[5px] bg-white text-brand-blue ring-1 ring-border-light">
              <RefreshCcw className="h-6 w-6" />
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-medical-navy sm:text-5xl lg:text-[54px]">
              Refund &
              <span className="block text-brand-green">
                Cancellation Policy
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-medical-text sm:text-lg">
              Our refund and cancellation policy explains how cancellations,
              rescheduling, payments, and refunds are handled for diagnostic
              services and home sample collection.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-[5px] bg-white px-4 py-2.5 text-sm font-semibold text-medical-navy ring-1 ring-border-light">
                <IndianRupee className="h-4 w-4 text-brand-green" />
                Clear Payment Process
              </span>

              <span className="inline-flex items-center gap-2 rounded-[5px] bg-white px-4 py-2.5 text-sm font-semibold text-medical-navy ring-1 ring-border-light">
                <ShieldCheck className="h-4 w-4 text-brand-blue" />
                Transparent Policy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="px-5 py-10 sm:px-8 lg:px-6 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
              <CalendarX2 className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Cancel Your Booking
            </h3>

            <p className="mt-2 text-sm leading-6">
              Contact our team as early as possible if you need to cancel your
              scheduled service.
            </p>
          </div>

          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
              <RefreshCcw className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Reschedule When Possible
            </h3>

            <p className="mt-2 text-sm leading-6">
              Depending on availability, a booking may be rescheduled instead
              of cancelled.
            </p>
          </div>

          <div className="rounded-[5px] border border-border-light bg-white p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
              <IndianRupee className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-heading text-lg font-bold text-medical-navy">
              Refund Review
            </h3>

            <p className="mt-2 text-sm leading-6">
              Refund eligibility depends on the stage of the booking and
              whether the service or testing process has started.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
            {/* Overview */}
            <article
              id="overview"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex gap-4">
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue sm:flex">
                  <TestTube className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-medical-navy">
                    1. Refund & Cancellation Overview
                  </h2>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    This policy applies to bookings and payments made for
                    MultiPathLab diagnostic services, health checkup packages,
                    home sample collection, and related services.
                  </p>

                  <p className="mt-4 text-sm leading-7 sm:text-base">
                    Refund eligibility can depend on whether the appointment
                    has been cancelled before the service, whether a sample has
                    already been collected, and whether testing or processing
                    has already started.
                  </p>
                </div>
              </div>
            </article>

            {/* Cancellation */}
            <article
              id="cancellation"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-red-50 text-red-500">
                  <CalendarX2 className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  2. Cancellation of Booking
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  If you need to cancel a booking, please contact MultiPathLab
                  as soon as possible using the available phone or
                  communication channels.
                </p>

                <p>
                  Cancellation requests should ideally be made before the
                  scheduled home sample collection visit.
                </p>

                <p>
                  Once a collection professional has reached the location or
                  the sample collection/testing process has started,
                  cancellation and refund eligibility may be affected.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[5px] border border-brand-green/20 bg-brand-green/5 p-5">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />

                  <h3 className="mt-3 font-heading font-bold text-medical-navy">
                    Before Collection
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    Cancellation requests made before sample collection can be
                    reviewed for applicable refund or rescheduling.
                  </p>
                </div>

                <div className="rounded-[5px] border border-border-light bg-[#fbfdff] p-5">
                  <Clock3 className="h-5 w-5 text-brand-blue" />

                  <h3 className="mt-3 font-heading font-bold text-medical-navy">
                    After Collection
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    Once a sample has been collected or testing has started,
                    refund eligibility may be limited.
                  </p>
                </div>
              </div>
            </article>

            {/* Reschedule */}
            <article
              id="reschedule"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                  <RefreshCcw className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  3. Rescheduling a Service
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Customers may request to reschedule a home sample collection
                  appointment by contacting our team.
                </p>

                <p>
                  Rescheduling is subject to service availability and the
                  requirements of the selected test or package.
                </p>

                <p>
                  If the requested new date or time is not available, the
                  customer may discuss alternative scheduling options with our
                  team.
                </p>
              </div>
            </article>

            {/* Refund Eligibility */}
            <article
              id="refund"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
                  <IndianRupee className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  4. Refund Eligibility
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                A refund request may be reviewed in situations such as:
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "A confirmed service cannot be provided by MultiPathLab.",
                  "A booking is cancelled before the service is performed, subject to the applicable terms.",
                  "A duplicate payment has been successfully identified.",
                  "The selected service cannot be performed because of an operational issue on our side.",
                  "A refund is otherwise approved by MultiPathLab after reviewing the booking and payment details.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[5px] bg-[#f8fbfd] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Non Refund */}
            <article
              id="nonrefund"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-red-50 text-red-500">
                  <XCircle className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  5. Non-Refundable Situations
                </h2>
              </div>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                Depending on the circumstances, a refund may not be available
                when:
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "The sample has already been collected and processing/testing has started.",
                  "The customer is unavailable at the confirmed collection location without prior communication.",
                  "Incorrect or incomplete address/contact information prevents the service from being completed.",
                  "The customer does not follow applicable preparation requirements for the selected test.",
                  "A third-party payment provider has completed a transaction that is subject to its own processing conditions, where applicable.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                  >
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Sample Issues */}
            <article
              id="failed"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                6. Sample Collection Issues
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  In some cases, a collected sample may not be suitable for
                  testing because of sample quality, quantity, handling,
                  transportation, test-specific requirements, or other
                  laboratory-related reasons.
                </p>

                <p>
                  If a sample cannot be processed, MultiPathLab may contact the
                  customer regarding a repeat sample collection or another
                  suitable resolution, depending on the circumstances.
                </p>

                <p>
                  Any refund or additional collection arrangement will be
                  reviewed based on the specific situation.
                </p>
              </div>

              <div className="mt-6 rounded-[5px] border border-brand-blue/10 bg-brand-blue/5 p-5">
                <p className="font-semibold text-medical-navy">
                  Important
                </p>

                <p className="mt-2 text-sm leading-6">
                  Customers should keep their booking confirmation and payment
                  details available when contacting support about a sample or
                  refund issue.
                </p>
              </div>
            </article>

            {/* Processing */}
            <article
              id="processing"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                  <Clock3 className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  7. Refund Processing
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Once a refund has been approved, the refund will generally be
                  processed using the applicable payment method or transaction
                  process.
                </p>

                <p>
                  The time taken for the amount to appear in the customer's
                  account may depend on the payment gateway, bank, card issuer,
                  UPI provider, or other payment service provider.
                </p>

                <p>
                  MultiPathLab is not responsible for delays caused by a bank
                  or third-party payment provider after the refund has been
                  initiated.
                </p>
              </div>
            </article>

            {/* Contact */}
            <article
              id="contact"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                8. Refund Support
              </h2>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                If you have a question regarding a cancellation, payment,
                refund, rescheduling request, or sample collection issue,
                please contact our team with your booking details.
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

                <a
                  href="mailto:info@multipathlab.in"
                  className="group flex cursor-pointer items-center gap-4 rounded-[5px] border border-border-light p-5 transition hover:border-brand-green/30 hover:bg-brand-green/5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-medical-text">
                      Email
                    </p>

                    <p className="mt-1 font-heading font-bold text-medical-navy">
                      info@multipathlab.in
                    </p>
                  </div>
                </a>
              </div>
            </article>

            {/* Policy Note */}
            <div className="rounded-[5px] border border-[#dce8f0] bg-[#f8fbfd] p-6 sm:p-8">
              <div className="flex gap-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />

                <div>
                  <h3 className="font-heading font-bold text-medical-navy">
                    Policy Note
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    This refund and cancellation policy should be read
                    together with our Terms & Conditions and Privacy Policy.
                    Specific promotional offers or packages may have additional
                    terms communicated at the time of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
            <RefreshCcw className="h-7 w-7" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-extrabold text-medical-navy">
            Need Help With a Cancellation?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-medical-text sm:text-base">
            Our team can help you with booking changes, rescheduling,
            payment-related questions, and refund requests.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:9082742451"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-green-dark"
            >
              <Phone className="h-4 w-4" />
              Contact Support
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

      {/* Footer Note */}
      <div className="border-t border-border-light bg-[#f8fbfd] px-5 py-5 text-center">
        <p className="text-xs text-medical-text">
          Refund & Cancellation Policy • Please review this policy before
          completing your booking or payment.
        </p>
      </div>
    </main>
  );
}

export default RefundAndCancillation;