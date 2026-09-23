
"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I book a home blood test?",
      answer:
        "You can book a home collection through our website by selecting your test or health package and filling in the booking details. Our team will contact you to confirm your appointment.",
    },
    {
      question: "Is home blood sample collection safe?",
      answer:
        "Our sample collection process is designed to maintain hygiene and safety. Trained collection professionals use appropriate sterile, single-use collection supplies and follow safe sample handling practices.",
    },
    {
      question: "Do I need to fast before my blood test?",
      answer:
        "Fasting requirements depend on the test you are taking. Please check the preparation instructions for your specific test or consult your healthcare professional before your appointment.",
    },
    {
      question: "When will I receive my test reports?",
      answer:
        "Report delivery time depends on the test or package. The expected turnaround time will be communicated during booking or by our support team.",
    },
    {
      question: "Can I book a test for my family members?",
      answer:
        "Yes, you can request a home collection for family members. Please provide the correct patient details and contact information while making the booking.",
    },
    {
      question: "What if I need to reschedule my appointment?",
      answer:
        "If you need to change your appointment, please contact our support team as early as possible. They can help you check the available collection slots.",
    },
    {
      question: "Are all tests available for home collection?",
      answer:
        "Home collection availability depends on the test, location and collection requirements. Contact our team to confirm whether your required test can be collected at home.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-br from-[#f1f9ff] via-[#edf7ff] to-[#effbf5] py-16 font-body sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-green/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            <HelpCircle
              size={16}
              className="text-brand-green"
            />
            Frequently Asked Questions
          </div>

          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-medical-navy sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="block text-brand-green">
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-medical-text sm:text-base">
            Find answers to common questions about home
            sample collection, test preparation, bookings
            and reports.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          {/* Left Info Card */}
          <div className="relative overflow-hidden rounded-3xl bg-medical-navy p-6 text-white shadow-xl sm:p-8 lg:sticky lg:top-24">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-green/20 blur-2xl" />

            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <MessageCircle size={27} />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
                Need More Help?
              </p>

              <h3 className="mt-3 font-heading text-2xl font-extrabold leading-snug sm:text-3xl">
                We're here to help you.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Have a question about your test, booking
                or home collection? Get in touch with our
                support team for assistance.
              </p>

              <div className="my-6 h-px bg-white/15" />

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Patient-first support
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/65">
                    We're happy to help you understand
                    the booking process.
                  </p>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-extrabold text-white transition duration-300 hover:bg-brand-green-dark"
              >
                Contact Our Team
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Right FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-brand-green/40 shadow-lg shadow-emerald-900/5"
                      : "border-slate-100 shadow-sm hover:border-brand-blue/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition ${
                          isOpen
                            ? "bg-brand-green text-white"
                            : "bg-[#f1f9ff] text-brand-blue"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`font-heading text-sm font-extrabold leading-6 sm:text-base ${
                          isOpen
                            ? "text-brand-green"
                            : "text-medical-navy"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-brand-green text-white"
                          : "bg-slate-50 text-brand-blue"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6 sm:pl-[76px]">
                        <p className="text-sm leading-7 text-medical-text">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;