"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileText,
  IndianRupee,
  Mail,
  Phone,
  RefreshCcw,
  ShieldCheck,
  TestTube,
} from "lucide-react";

function TermsAndConditions() {
  const sections = [
    {
      id: "services",
      title: "1. Our Services",
    },
    {
      id: "booking",
      title: "2. Booking & Appointments",
    },
    {
      id: "sample",
      title: "3. Home Sample Collection",
    },
    {
      id: "reports",
      title: "4. Diagnostic Reports",
    },
    {
      id: "payments",
      title: "5. Payments & Charges",
    },
    {
      id: "cancellation",
      title: "6. Cancellation & Refunds",
    },
    {
      id: "responsibility",
      title: "7. Customer Responsibility",
    },
    {
      id: "medical",
      title: "8. Medical Disclaimer",
    },
    {
      id: "privacy",
      title: "9. Privacy & Data",
    },
    {
      id: "changes",
      title: "10. Changes to Terms",
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
            <span>Terms & Conditions</span>
          </div>

          <div className="mt-7 max-w-3xl">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[5px] bg-white text-brand-blue ring-1 ring-border-light">
              <FileText className="h-6 w-6" />
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-medical-navy sm:text-5xl lg:text-[54px]">
              Terms &
              <span className="block text-brand-green">
                Conditions
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-medical-text sm:text-lg">
              Please read these terms carefully before booking a diagnostic
              service, home sample collection, health checkup, or accessing
              reports through MultiPathLab.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-[5px] bg-white px-4 py-2.5 font-semibold text-medical-navy ring-1 ring-border-light">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
                Transparent Services
              </span>

              <span className="inline-flex items-center gap-2 rounded-[5px] bg-white px-4 py-2.5 font-semibold text-medical-navy ring-1 ring-border-light">
                <IndianRupee className="h-4 w-4 text-brand-blue" />
                Clear Payment Terms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-10 sm:px-8 lg:px-6 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[5px] border border-border-light bg-[#f8fbfd] p-6 sm:p-8">
            <div className="flex gap-4">
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue sm:flex">
                <TestTube className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-heading text-xl font-bold text-medical-navy">
                  About These Terms
                </h2>

                <p className="mt-3 text-sm leading-7 text-medical-text sm:text-base">
                  These Terms & Conditions explain the rules applicable to
                  services provided by MultiPathLab. By booking or using our
                  services, you acknowledge that you have read and understood
                  these terms.
                </p>

                <p className="mt-3 text-sm leading-7 text-medical-text sm:text-base">
                  MultiPathLab provides diagnostic and health-checkup related
                  services, including home blood sample collection and
                  diagnostic reports. Our services are not a substitute for
                  medical consultation, treatment, prescription, or emergency
                  medical care.
                </p>
              </div>
            </div>
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
            {/* Services */}
            <article
              id="services"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                1. Our Services
              </h2>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                MultiPathLab offers diagnostic and health-checkup services
                according to the tests and packages listed on the website.
                Depending on the selected service, this may include:
              </p>

              <ul className="mt-5 space-y-3">
                {[
                  "Home blood sample collection",
                  "Diagnostic testing and health checkup packages",
                  "Sample processing through applicable diagnostic facilities",
                  "Digital diagnostic reports",
                  "Assistance related to report access and service information",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Booking */}
            <article
              id="booking"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                2. Booking & Appointments
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Customers can request a service through the booking form,
                  phone, WhatsApp, or other available communication channels.
                </p>

                <p>
                  A booking request is considered confirmed only after the
                  service details, availability, location, and applicable
                  charges have been confirmed by MultiPathLab.
                </p>

                <p>
                  Customers are requested to provide accurate information such
                  as name, contact number, address, selected test/package and
                  any relevant preparation information communicated for the
                  selected test.
                </p>
              </div>
            </article>

            {/* Sample Collection */}
            <article
              id="sample"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                3. Home Sample Collection
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  For eligible services, a trained and experienced sample
                  collection professional may visit the customer's provided
                  location for sample collection.
                </p>

                <p>
                  The customer should ensure that the provided address is
                  correct and that reasonable access is available at the
                  scheduled time.
                </p>

                <p>
                  Sample collection may be rescheduled if the location is
                  inaccessible, the customer is unavailable, or collection
                  cannot safely or appropriately be performed.
                </p>

                <p>
                  Certain tests may require specific preparation such as
                  fasting or other instructions. Customers should follow the
                  instructions provided for the relevant test.
                </p>
              </div>
            </article>

            {/* Reports */}
            <article
              id="reports"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                4. Diagnostic Reports
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Diagnostic reports are provided based on the testing process
                  applicable to the selected test or package.
                </p>

                <p>
                  Reports may be provided digitally through the available
                  communication or report-access system.
                </p>

                <p>
                  Report availability may vary depending on the test,
                  processing requirements, laboratory workflow, and other
                  operational factors.
                </p>

                <div className="mt-5 rounded-[5px] border border-brand-blue/10 bg-brand-blue/5 p-5">
                  <p className="font-semibold text-medical-navy">
                    Important:
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    A diagnostic report is a test result and should not be
                    considered a prescription or treatment plan. Customers
                    should discuss their reports with a qualified healthcare
                    professional when medical interpretation or treatment
                    advice is required.
                  </p>
                </div>
              </div>
            </article>

            {/* Payments */}
            <article
              id="payments"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-green/10 text-brand-green">
                  <IndianRupee className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  5. Payments & Charges
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  The applicable price for a test, package, or service will be
                  communicated or displayed before the booking is confirmed.
                </p>

                <p>
                  Prices may vary depending on the selected test/package,
                  location, home collection requirements, promotional offers,
                  or other applicable service charges.
                </p>

                <p>
                  Payment may be collected through the payment methods made
                  available by MultiPathLab.
                </p>

                <p>
                  Customers should retain the payment confirmation or receipt
                  provided after a successful transaction.
                </p>

                <div className="rounded-[5px] border border-[#e5edf3] bg-[#fbfdff] p-5">
                  <h3 className="font-heading font-bold text-medical-navy">
                    Payment Confirmation
                  </h3>

                  <p className="mt-2 text-sm leading-6">
                    A payment does not automatically guarantee that a
                    particular test can be completed if the service cannot be
                    performed because of sample quality, test-specific
                    requirements, location limitations, or other operational
                    reasons. In such cases, the applicable refund or
                    rescheduling terms will apply.
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
                <div className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
                  <RefreshCcw className="h-5 w-5" />
                </div>

                <h2 className="font-heading text-2xl font-bold text-medical-navy">
                  6. Cancellation & Refunds
                </h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  Customers may contact MultiPathLab to request cancellation or
                  rescheduling before the scheduled service.
                </p>

                <p>
                  Refund eligibility may depend on whether sample collection
                  has already taken place, whether testing has started, the
                  selected service, and the applicable payment terms.
                </p>

                <p>
                  Once a sample has been collected or testing has commenced,
                  cancellation or refund may be subject to applicable
                  restrictions.
                </p>

                <p>
                  Where a refund is approved, the amount and processing time
                  will depend on the applicable payment method and transaction
                  provider.
                </p>

                <p>
                  For cancellation or refund-related questions, customers can
                  contact our support team with their booking or payment
                  details.
                </p>
              </div>
            </article>

            {/* Responsibility */}
            <article
              id="responsibility"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                7. Customer Responsibility
              </h2>

              <ul className="mt-5 space-y-3">
                {[
                  "Provide accurate contact and booking information.",
                  "Provide a correct and accessible home-collection address.",
                  "Follow any preparation instructions applicable to the selected test.",
                  "Inform the service team about relevant test-specific requirements when requested.",
                  "Ensure that payment information and transaction details are accurate.",
                  "Do not misuse, modify, or falsely represent diagnostic reports.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Medical Disclaimer */}
            <article
              id="medical"
              className="rounded-[5px] border border-[#dce8f0] bg-[#f8fbfd] p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                8. Medical Disclaimer
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  MultiPathLab's services are focused on diagnostic testing,
                  health checkups, sample collection, and providing diagnostic
                  reports.
                </p>

                <p>
                  We do not provide medical treatment, prescribe medicines, or
                  replace consultation with a qualified doctor or other
                  healthcare professional.
                </p>

                <p>
                  Diagnostic test results should be interpreted in the
                  appropriate clinical context. If you have questions about
                  your health, symptoms, diagnosis, or treatment, consult a
                  qualified healthcare professional.
                </p>

                <p>
                  In case of a medical emergency, contact your local emergency
                  medical service or visit an appropriate healthcare facility.
                </p>
              </div>
            </article>

            {/* Privacy */}
            <article
              id="privacy"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                9. Privacy & Data
              </h2>

              <div className="mt-4 space-y-4 text-sm leading-7 sm:text-base">
                <p>
                  We may collect information required to process bookings,
                  arrange sample collection, process services, communicate with
                  customers, and provide reports.
                </p>

                <p>
                  Personal and diagnostic information will be handled according
                  to our Privacy Policy and applicable requirements.
                </p>

                <p>
                  Customers should review our Privacy Policy for additional
                  information about collection, use, storage, and protection of
                  personal information.
                </p>
              </div>
            </article>

            {/* Changes */}
            <article
              id="changes"
              className="rounded-[5px] border border-border-light bg-white p-6 sm:p-8"
            >
              <h2 className="font-heading text-2xl font-bold text-medical-navy">
                10. Changes to These Terms
              </h2>

              <p className="mt-4 text-sm leading-7 sm:text-base">
                MultiPathLab may update these Terms & Conditions from time to
                time to reflect changes in our services, payment processes,
                operational practices, or applicable requirements. Updated
                terms will be published on this page with the revised date
                where applicable.
              </p>
            </article>

            {/* Contact */}
            <section className="rounded-[5px] bg-gradient-to-br from-[#12345b] to-[#0b2949] p-7 text-white sm:p-9">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-brand-green">
                  HAVE A QUESTION?
                </p>

                <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
                  Need clarification about our services or payments?
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  Contact MultiPathLab before booking if you need information
                  about a test, package, home collection, report, payment, or
                  cancellation.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="tel:9082742451"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-brand-green px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-green-dark"
                  >
                    <Phone className="h-4 w-4" />
                    9082742451
                  </a>

                  <a
                    href="mailto:info@multipathlab.in"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-extrabold text-medical-navy">
            Clear Services. Clear Terms.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-medical-text sm:text-base">
            We aim to keep our diagnostic services, home sample collection,
            reports, and payment process simple and transparent.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex cursor-pointer items-center gap-2 rounded-[5px] bg-brand-blue px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Last Updated */}
      <div className="border-t border-border-light bg-[#f8fbfd] px-5 py-5 text-center">
        <p className="text-xs text-medical-text">
          Terms & Conditions • Please review these terms before using our
          services.
        </p>
      </div>
    </main>
  );
}

export default TermsAndConditions;