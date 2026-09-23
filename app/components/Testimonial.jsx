
"use client";

import React, { useEffect, useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      initials: "PS",
      color: "bg-emerald-100 text-emerald-700",
      review:
        "The home sample collection was very convenient. The staff was polite, professional and made the entire process comfortable.",
      service: "Home Blood Collection",
    },
    {
      name: "Rahul Verma",
      location: "Ghaziabad",
      initials: "RV",
      color: "bg-blue-100 text-blue-700",
      review:
        "Booking my blood test was simple and hassle-free. The collection professional arrived on time and explained everything clearly.",
      service: "Blood Test",
    },
    {
      name: "Anjali Gupta",
      location: "Noida",
      initials: "AG",
      color: "bg-rose-100 text-rose-700",
      review:
        "I booked a health checkup for my parents. The home collection made things much easier, and the overall experience was smooth.",
      service: "Health Checkup",
    },
    {
      name: "Amit Kumar",
      location: "Indirapuram",
      initials: "AK",
      color: "bg-amber-100 text-amber-700",
      review:
        "The booking process was quick, and the collection staff was courteous. It was convenient to get the sample collected at home.",
      service: "Home Sample Collection",
    },
    {
      name: "Neha Singh",
      location: "Vaishali",
      initials: "NS",
      color: "bg-violet-100 text-violet-700",
      review:
        "A comfortable experience from booking to sample collection. I appreciate the professional and friendly service.",
      service: "Diagnostic Tests",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    testimonials.length - visibleCount
  );

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-[#f1f9ff] via-[#edf7ff] to-[#effbf5] py-16 font-body sm:py-20 lg:py-24"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-green/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            <HeartPulse
              size={15}
              className="text-brand-green"
            />
            Patient Experiences
          </div>

          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-medical-navy sm:text-4xl lg:text-5xl">
            Care That Makes
            <span className="block text-brand-green">
              Patients Smile
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-medical-text sm:text-base">
            Every patient deserves comfortable, convenient
            and professional care. Here's what patients
            have to say about their experience.
          </p>

          {/* Rating Summary */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white bg-white/80 px-5 py-3 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-sm font-extrabold text-medical-navy">
              Patient Feedback
            </span>

            <span className="hidden h-4 w-px bg-slate-200 sm:block" />

            <span className="text-xs text-medical-text">
              Your comfort matters to us
            </span>
          </div>
        </div>

        {/* Carousel Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="font-heading text-lg font-extrabold text-medical-navy sm:text-xl">
              What Our Patients Say
            </h3>

            <p className="mt-1 text-xs text-medical-text sm:text-sm">
              Real experiences, personal care
            </p>
          </div>

          {/* Desktop Arrows */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/20 bg-white text-brand-blue shadow-sm transition hover:border-brand-green hover:bg-brand-green hover:text-white"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-md transition hover:bg-brand-green-dark"
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCount)
              }%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="shrink-0 px-2 pb-3"
                style={{
                  width: `${100 / visibleCount}%`,
                }}
              >
                <article className="group relative flex h-full min-h-[310px] flex-col rounded-3xl border border-white bg-white p-5 shadow-[0_8px_35px_rgba(15,50,80,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7">
                  {/* Quote Icon */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map(
                        (_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={15}
                            fill="currentColor"
                          />
                        )
                      )}
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-brand-green">
                      <Quote size={21} />
                    </div>
                  </div>

                  {/* Review */}
                  <p className="flex-1 text-sm leading-7 text-medical-text sm:text-[15px]">
                    “{item.review}”
                  </p>

                  {/* Service Tag */}
                  <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#f1f9ff] px-3 py-2 text-[11px] font-bold text-brand-blue">
                    <ShieldCheck
                      size={14}
                      className="text-brand-green"
                    />
                    {item.service}
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-slate-100" />

                  {/* Patient Info */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${item.color}`}
                    >
                      {item.initials}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-heading text-sm font-extrabold text-medical-navy">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-xs text-medical-text">
                        {item.location}
                      </p>
                    </div>

                    <div className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-brand-green">
                      <ShieldCheck size={15} />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-7 flex items-center justify-between sm:mt-9">
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {Array.from({
              length: maxIndex + 1,
            }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial group ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-brand-green"
                    : "w-2.5 bg-brand-blue/20 hover:bg-brand-green/50"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <p className="text-xs font-bold text-medical-text">
            {currentIndex + 1}
            <span className="mx-1 text-slate-300">/</span>
            {maxIndex + 1}
          </p>

          {/* Mobile Arrows */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 bg-white text-brand-blue shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl border border-white bg-white/70 px-5 py-6 text-center sm:flex-row sm:gap-4 sm:py-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-brand-green">
            <HeartPulse size={22} />
          </div>

          <div>
            <p className="font-heading text-sm font-extrabold text-medical-navy sm:text-base">
              Your Health, Our Priority
            </p>

            <p className="mt-1 text-xs leading-5 text-medical-text sm:text-sm">
              Making diagnostic care more convenient, one
              home visit at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;