"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

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
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f1f9ff]
        via-[#edf7ff]
        to-[#effbf5]
        py-16
        font-body
        sm:py-20
        lg:py-24
      "
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#43b82a]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#12345b]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#43b82a]/20
              bg-white
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-wider
              text-[#12345b]
            "
          >
            <HelpCircle size={16} className="text-[#43b82a]" />
            Frequently Asked Questions
          </div>

          <h2
            className="
              font-[var(--font-heading)]
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-[#12345b]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Got Questions?
            <span className="block text-[#43b82a]">
              We've Got Answers.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[#45627f]
              sm:text-base
            "
          >
            Find answers to common questions about home sample collection,
            test preparation, bookings and reports.
          </p>
        </div>

        {/* FULL WIDTH FAQ */}
        <div className="mx-auto w-full max-w-5xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`
                    overflow-hidden
                    rounded-[5px]
                    border
                    bg-white
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#43b82a]/50"
                        : "border-[#e5edf3] hover:border-[#12345b]/20"
                    }
                  `}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      cursor-pointer
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      sm:px-7
                      sm:py-6
                    "
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      {/* Number */}
                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-[5px]
                          text-xs
                          font-extrabold
                          transition
                          duration-300
                          ${
                            isOpen
                              ? "bg-[#43b82a] text-white"
                              : "bg-[#12345b] text-white"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`
                          font-[var(--font-heading)]
                          text-sm
                          font-extrabold
                          leading-6
                          sm:text-base
                          lg:text-lg
                          ${
                            isOpen
                              ? "text-[#43b82a]"
                              : "text-[#12345b]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 bg-[#43b82a] text-white"
                            : "bg-[#12345b] text-white"
                        }
                      `}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          border-t
                          border-[#e5edf3]
                          px-5
                          pb-6
                          pt-4
                          sm:px-7
                          sm:pb-7
                          sm:pl-[84px]
                        "
                      >
                        <p
                          className="
                            max-w-4xl
                            text-sm
                            leading-7
                            text-[#45627f]
                            sm:text-base
                          "
                        >
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