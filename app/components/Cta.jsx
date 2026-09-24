"use client";

import { ArrowRight, Phone } from "lucide-react";

function Cta() {
  return (
    <section className="bg-[#f1f9ff] px-4 py-8 font-body sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex
            min-h-[450px]
            items-center
            justify-center
            rounded-[5px]
            bg-gradient-to-br
            from-[#12345b]
            via-[#0f2f52]
            to-[#092642]
            px-6
            py-12
            text-center
            sm:px-10
            sm:py-14
            lg:px-20
            lg:py-16
          "
        >
          <div className="w-full">

            {/* SMALL TOP TEXT */}
            <p
              className="
                font-[var(--font-heading)]
                text-sm
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#bfe0ff]
              "
            >
              MultiPathLab Diagnostics
            </p>

            {/* HEADING */}
            <h3
              className="
                mx-auto
                mt-5
                max-w-4xl
                font-[var(--font-heading)]
                text-3xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
                xl:text-[52px]
              "
            >
              Need a Diagnostic Test
              <span className="block text-[#63d94b]">
                or Home Collection Service?
              </span>
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/80
                sm:text-base
                lg:text-lg
                lg:leading-8
              "
            >
              MultiPathLab provides convenient diagnostic testing and home
              sample collection services. Explore our tests and packages or
              contact our team to get the service you need.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              {/* CONTACT */}
              <a
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  bg-[var(--color-brand-green)]
                  px-7
                  py-3.5
                  font-[var(--font-heading)]
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-200
                  hover:bg-[var(--color-brand-green-dark)]
                "
              >
                <Phone size={18} />
                Contact Us
              </a>

              {/* TEST PACKAGES */}
              <a
                href="/tests-packages"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  border
                  border-white/50
                  bg-white
                  px-7
                  py-3.5
                  font-[var(--font-heading)]
                  text-sm
                  font-bold
                  text-[var(--color-brand-blue)]
                  transition
                  duration-200
                  hover:bg-[#f0f8ff]
                "
              >
                Explore Test Packages
                <ArrowRight size={18} />
              </a>
            </div>

            {/* BOTTOM INFO */}
           

          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;