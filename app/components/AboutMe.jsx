
"use client";

import React from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiDroplet,
  FiHeart,
  FiMapPin,
  FiShield,
  FiTarget,
  FiAward,
  FiActivity,
} from "react-icons/fi";

function AboutMe() {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-[58px] text-[#12345b] sm:py-[75px] lg:py-[50px] lg:pb-[45px]"
    >
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1200px] sm:w-[calc(100%-48px)]">
        {/* SECTION LABEL */}
        <div className="mb-[35px] flex items-center justify-center gap-[10px] text-[10px] font-extrabold tracking-[2px] text-[#26961e] sm:mb-[45px] lg:mb-[60px] lg:text-[11px]">
          <span className="grid h-[30px] w-[30px] place-items-center rounded-[10px] bg-[#edf8e9] text-[16px]">
            <FiActivity />
          </span>
          ABOUT MULTIPATHLAB
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-center gap-[42px] min-[701px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] min-[701px]:gap-[38px] lg:gap-[clamp(45px,7vw,95px)]">
          {/* LEFT IMAGE */}
          <div className="relative mx-auto w-full min-w-0 max-w-[500px] pb-[40px] pr-[10px] min-[701px]:max-w-none min-[701px]:pb-[45px] min-[701px]:pr-[18px]">
            <div className="group relative aspect-[4/4.6] overflow-hidden rounded-[23px] bg-[#eaf4f9] shadow-[0_20px_55px_rgba(18,52,91,0.11)] min-[701px]:aspect-auto min-[701px]:h-[520px] min-[1001px]:h-[590px] min-[1001px]:rounded-[30px]">
              <img
                src="/doctor.avif"
                alt="MultiPathLab founder and experienced laboratory professional"
                className="block h-full w-full object-cover object-center transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.035]"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-b from-transparent to-[rgba(7,17,31,0.76)]" />

              {/* IMAGE CAPTION */}
              <div className="absolute bottom-[16px] left-[14px] right-[14px] flex items-center gap-[13px] text-white min-[701px]:bottom-[22px] min-[701px]:left-[20px] min-[701px]:right-[20px]">
                <div className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-[14px] border border-white/35 bg-white/[0.17] text-[19px] backdrop-blur-[10px] min-[701px]:h-[47px] min-[701px]:w-[47px] min-[701px]:text-[22px]">
                  <FiHeart />
                </div>

                <div>
                  <strong className="mb-[5px] block text-[14px] font-extrabold min-[701px]:text-[16px]">
                    Care beyond the test
                  </strong>
                  <span className="block text-[10px] text-white/80 min-[701px]:text-[11px]">
                    Healthcare with a human touch
                  </span>
                </div>
              </div>
            </div>

            {/* EXPERIENCE BADGE */}
            <div className="absolute right-[-2px] top-[25px] z-10 flex items-center gap-[10px] rounded-[15px] border border-[#e7eef3] bg-white px-[14px] py-[12px] shadow-[0_15px_45px_rgba(18,52,91,0.12)] min-[701px]:right-[-8px] min-[701px]:top-[42px] min-[701px]:gap-[13px] min-[701px]:rounded-[18px] min-[701px]:px-[16px] min-[701px]:py-[13px] min-[1001px]:right-[-15px] min-[1001px]:px-[22px] min-[1001px]:py-[17px]">
              <div className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[14px] bg-[#edf8e9] text-[19px] text-[#26961e] min-[701px]:h-[46px] min-[701px]:w-[46px] min-[701px]:text-[23px]">
                <FiAward />
              </div>

              <div>
                <strong className="block font-[var(--font-heading,Manrope,sans-serif)] text-[22px] font-extrabold leading-[1.2] text-[#0068c9] min-[701px]:text-[26px]">
                  10+
                </strong>
                <span className="mt-[4px] block text-[10px] font-semibold text-[#45627f] min-[701px]:text-[11px]">
                  Years of Experience
                </span>
              </div>
            </div>

            {/* DECORATIVE ELEMENTS */}
            <div className="pointer-events-none absolute -left-[28px] -top-[25px] -z-10 h-[100px] w-[100px] rounded-full border-[18px] border-[#edf7ff]" />

            <div className="pointer-events-none absolute -bottom-[-10px] right-[-3px] -z-10 h-[110px] w-[110px] rounded-full bg-[#edf8e9]" />

            {/* IMAGE NOTE */}
            <div className="absolute bottom-0 left-[5px] flex items-center gap-[9px] text-[10px] font-bold text-[#45627f] min-[701px]:left-[15px] min-[701px]:text-[11px]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#43b82a] shadow-[0_0_0_4px_#43b82a20]" />
              Your trusted healthcare partner
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="min-w-0">
            <span className="mb-[19px] inline-block text-[10px] font-extrabold leading-[1.7] tracking-[1.7px] text-[#26961e]">
              MEET THE PERSON BEHIND MULTIPATHLAB
            </span>

            <h2 className="m-0 font-[var(--font-heading,Manrope,sans-serif)] text-[clamp(30px,8vw,41px)] font-extrabold leading-[1.2] tracking-[-1.3px] text-[#12345b] min-[701px]:text-[35px] min-[1001px]:text-[clamp(32px,3.5vw,45px)] min-[1001px]:tracking-[-1.8px]">
              Healthcare that cares.
              <br />
              <span className="text-[#0068c9]">
                Expertise you can trust.
              </span>
            </h2>

            <p className="mb-[16px] mt-[19px] text-[13px] font-semibold leading-[1.9] text-[#12345b] min-[701px]:mt-[23px] min-[701px]:text-[14px]">
              Behind MultiPathLab is a healthcare professional with over a
              decade of hands-on experience in blood sample collection and
              laboratory work, driven by one simple belief: quality healthcare
              should be accessible and affordable for everyone.
            </p>

            <p className="mb-[14px] text-[12px] leading-[1.95] text-[#45627f] min-[701px]:text-[13px]">
              With years of practical experience in the Mumbai region, he
              understands the importance of careful sample collection, patient
              comfort and reliable laboratory processes. His journey has been
              shaped by working closely with patients and understanding their
              everyday healthcare needs.
            </p>

            <p className="mb-[14px] text-[12px] leading-[1.95] text-[#45627f] min-[701px]:text-[13px]">
              MultiPathLab was established with a clear purpose: to help make
              blood testing more affordable and convenient, while bringing
              professional sample collection closer to people — including the
              comfort of their own homes.
            </p>

            {/* QUICK STATS */}
            <div className="my-[22px] grid grid-cols-2 gap-[10px] min-[701px]:my-[27px] min-[701px]:grid-cols-1 min-[1001px]:grid-cols-2 min-[1001px]:gap-[12px]">
              <div className="flex min-w-0 items-center gap-[9px] rounded-[15px] border border-[#e5edf3] bg-white px-[10px] py-[12px] min-[701px]:items-start min-[701px]:gap-[11px] min-[701px]:px-[12px] min-[701px]:py-[15px] min-[1001px]:items-center">
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[12px] bg-[#edf7ff] text-[17px] text-[#0068c9] min-[701px]:h-[39px] min-[701px]:w-[39px] min-[701px]:text-[19px]">
                  <FiClock />
                </span>

                <div>
                  <strong className="mb-[5px] block text-[11px] font-extrabold text-[#12345b] min-[701px]:text-[12px]">
                    10+ Years
                  </strong>
                  <span className="block text-[9px] leading-[1.6] text-[#45627f] min-[701px]:text-[10px]">
                    Practical experience
                  </span>
                </div>
              </div>

              <div className="flex min-w-0 items-center gap-[9px] rounded-[15px] border border-[#e5edf3] bg-white px-[10px] py-[12px] min-[701px]:items-start min-[701px]:gap-[11px] min-[701px]:px-[12px] min-[701px]:py-[15px] min-[1001px]:items-center">
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[12px] bg-[#edf8e9] text-[17px] text-[#26961e] min-[701px]:h-[39px] min-[701px]:w-[39px] min-[701px]:text-[19px]">
                  <FiMapPin />
                </span>

                <div>
                  <strong className="mb-[5px] block text-[11px] font-extrabold text-[#12345b] min-[701px]:text-[12px]">
                    Mumbai Region
                  </strong>
                  <span className="block text-[9px] leading-[1.6] text-[#45627f] min-[701px]:text-[10px]">
                    Local healthcare experience
                  </span>
                </div>
              </div>
            </div>

            {/* MISSION CARD */}
            <div className="flex items-start gap-[12px] rounded-[17px] border border-[#dceee0] bg-gradient-to-br from-[#eef8f5] to-[#edf7ff] p-[17px] min-[701px]:gap-[15px] min-[701px]:p-[22px]">
              <div className="grid h-[43px] w-[43px] shrink-0 place-items-center rounded-[13px] bg-white text-[21px] text-[#26961e]">
                <FiTarget />
              </div>

              <div>
                <span className="mb-[8px] block text-[9px] font-extrabold tracking-[1.5px] text-[#26961e]">
                  OUR MISSION
                </span>

                <h3 className="m-0 font-[var(--font-heading,Manrope,sans-serif)] text-[14px] font-extrabold leading-[1.6] text-[#12345b] min-[701px]:text-[16px]">
                  Making health testing affordable for everyone.
                </h3>

                <p className="mb-0 mt-[7px] text-[10px] leading-[1.8] text-[#45627f] min-[701px]:text-[11px]">
                  We believe that the cost of healthcare should never be a
                  barrier to getting the tests people need.
                </p>
              </div>
            </div>

            {/* VALUES */}
            <div className="my-[24px] flex flex-wrap gap-x-[18px] gap-y-[12px] min-[701px]:gap-[12px_18px]">
              <div className="flex items-center gap-[7px] text-[10px] font-bold text-[#45627f]">
                <FiCheckCircle className="shrink-0 text-[15px] text-[#43b82a]" />
                Patient comfort
              </div>

              <div className="flex items-center gap-[7px] text-[10px] font-bold text-[#45627f]">
                <FiCheckCircle className="shrink-0 text-[15px] text-[#43b82a]" />
                Affordable testing
              </div>

              <div className="flex items-center gap-[7px] text-[10px] font-bold text-[#45627f]">
                <FiCheckCircle className="shrink-0 text-[15px] text-[#43b82a]" />
                Home sample collection
              </div>
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="group inline-flex items-center gap-[16px] rounded-full border border-[#0068c9] bg-[#0068c9] py-[8px] pl-[20px] pr-[8px] text-[12px] font-extrabold text-white no-underline transition duration-300 hover:-translate-y-[2px] hover:border-[#0053a3] hover:bg-[#0053a3]"
            >
              Discover our story

              <span className="grid h-[35px] w-[35px] place-items-center rounded-full bg-white text-[18px] text-[#0068c9] transition duration-300 group-hover:rotate-45">
                <FiArrowUpRight />
              </span>
            </a>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default AboutMe;