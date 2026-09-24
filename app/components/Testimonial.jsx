"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Andheri, Mumbai",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      review:
        "The home sample collection was very convenient. The staff was polite, professional and made the entire process comfortable.",
    },
    {
      name: "Rahul Verma",
      location: "Bandra, Mumbai",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      review:
        "Booking my blood test was simple and hassle-free. The collection professional arrived on time and explained everything clearly.",
    },
    {
      name: "Anjali Gupta",
      location: "Powai, Mumbai",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
      review:
        "I booked a health checkup for my parents. The home collection made things much easier, and the overall experience was smooth.",
    },
    {
      name: "Amit Kumar",
      location: "Goregaon, Mumbai",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      review:
        "The booking process was quick, and the collection staff was courteous. It was convenient to get the sample collected at home.",
    },
    {
      name: "Neha Singh",
      location: "Thane, Mumbai",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      review:
        "A comfortable experience from booking to sample collection. I appreciate the professional and friendly service.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="
        bg-white
        px-5
        py-16
        font-body
        sm:px-8
        sm:py-20
        lg:px-6
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-block
              font-[var(--font-heading)]
              text-xs
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-[#43b82a]
            "
          >
            Patient Testimonials
          </span>

          <h2
            className="
              mt-3
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
            Trusted by Patients,
            <span className="block text-[#43b82a]">
              Valued by Families
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
            Read what our patients have to say about their
            experience with MultiPathLab and our home collection services.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-14">
          <div
            className="
              relative
              overflow-hidden
              rounded-[5px]
              border
              border-[#e5edf3]
              bg-[#f8fcff]
            "
          >
            {/* Top Green Line */}
            <div className="h-1 w-full bg-[#43b82a]" />

            <div
              className="
                relative
                flex
                min-h-[390px]
                flex-col
                items-center
                justify-center
                px-8
                py-12
                text-center
                sm:min-h-[410px]
                sm:px-16
                sm:py-14
                lg:min-h-[430px]
                lg:px-24
                xl:min-h-[430px]
              "
            >
              {/* Quote Icon */}
              <div
                className="
                  absolute
                  left-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#12345b]
                  text-white
                  sm:left-8
                  sm:top-8
                "
              >
                <Quote size={22} />
              </div>

              {/* Profile Image */}
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-4
                  border-white
                  bg-[#12345b]
                  ring-2
                  ring-[#43b82a]/40
                  sm:h-28
                  sm:w-28
                "
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3
                className="
                  mt-5
                  font-[var(--font-heading)]
                  text-xl
                  font-extrabold
                  text-[#12345b]
                  sm:text-2xl
                "
              >
                {current.name}
              </h3>

              {/* Location */}
              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  text-[#43b82a]
                "
              >
                {current.location}
              </p>

              {/* Review */}
              <p
                className="
                  mt-7
                  max-w-2xl
                  text-base
                  leading-8
                  text-[#45627f]
                  sm:text-lg
                  sm:leading-9
                "
              >
                “{current.review}”
              </p>

              {/* Previous */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="
                  absolute
                  left-3
                  cursor-pointer
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#12345b]/15
                  bg-white
                  text-[#12345b]
                  transition
                  duration-200
                  hover:border-[#43b82a]
                  hover:bg-[#43b82a]
                  hover:text-white
                  sm:left-6
                  sm:h-11
                  sm:w-11
                "
              >
                <ChevronLeft size={20} />
              </button>

              {/* Next */}
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="
                  absolute
                  right-3
                  cursor-pointer
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#43b82a]
                  text-white
                  transition
                  duration-200
                  hover:bg-[#26961e]
                  sm:right-6
                  sm:h-11
                  sm:w-11
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    currentIndex === index
                      ? "w-8 bg-[#43b82a]"
                      : "w-2 bg-[#12345b]/20 hover:bg-[#43b82a]/60"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;