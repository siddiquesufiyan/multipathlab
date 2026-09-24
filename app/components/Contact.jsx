"use client";
import Testimonals from "./Testimonial";
import Faq from "./Faq";
import {
  Mail,
  MapPin,
  Phone,
  UserRound,
  CalendarDays,
  Clock3,
  FileText,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section className="mt-10 md:mt-2">
      <div className="mx-auto max-w-7xl">
        {/* MAIN CONTACT AREA */}
        <div className="grid mb-16 overflow-hidden  border border-[var(--color-border-light)]   lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* LEFT - CONTACT INFO */}
          <div className="relative overflow-hidden bg-[var(--color-medical-light)] px-7 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[var(--color-brand-blue)] opacity-[0.05]" />
            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[var(--color-brand-green)] opacity-[0.06]" />

            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand-blue)] shadow-sm">
                MultiPathLab
              </span>

              <h2 className="max-w-md font-[var(--font-heading)] text-3xl font-extrabold leading-[1.15] text-[var(--color-medical-navy)] sm:text-4xl">
                We’re here to help with your
                <span className="text-[var(--color-brand-green)]">
                  {" "}diagnostic needs.
                </span>
              </h2>

              <p className="mt-5 max-w-lg font-[var(--font-body)] text-[15px] leading-7 text-[var(--color-medical-text)]">
                Get in touch with MultiPathLab for diagnostic testing,
                home blood collection and laboratory services. Our team can
                help you with test bookings, reports and other enquiries.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-9 space-y-5">

                {/* Name */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-brand-blue)] shadow-sm">
                    <UserRound size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-medical-text)]">
                      Doctor
                    </p>
                    <p className="mt-1 font-[var(--font-heading)] text-[15px] font-bold text-[var(--color-medical-navy)]">
                      Dr. Kamruddin Shaikh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-brand-green)] shadow-sm">
                    <Phone size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-medical-text)]">
                      Phone
                    </p>

                    <a
                      href="tel:9082742451"
                      className="mt-1 block font-[var(--font-heading)] text-[15px] font-bold text-[var(--color-medical-navy)] transition-colors hover:text-[var(--color-brand-blue)]"
                    >
                      +91 90827 42451
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-brand-blue)] shadow-sm">
                    <Mail size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-medical-text)]">
                      Email
                    </p>

                    <a
                      href="mailto:info@multipathlab.in"
                      className="mt-1 block break-all font-[var(--font-heading)] text-[15px] font-bold text-[var(--color-medical-navy)] transition-colors hover:text-[var(--color-brand-blue)]"
                    >
                      info@multipathlab.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-brand-green)] shadow-sm">
                    <MapPin size={19} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="font-[var(--font-body)] text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-medical-text)]">
                      Address
                    </p>

                    <p className="mt-1 max-w-sm font-[var(--font-body)] text-[14px] font-semibold leading-6 text-[var(--color-medical-navy)]">
                      Room No. 701, 7th Floor,
                      <br />
                      Bhartiye Society, Building No. 22,
                      <br />
                      Gautam Nagar, MHADA Building,
                      <br />
                      Near Quba Masjid,
                      <br />
                      Govandi West, Mumbai – 400043
                    </p>
                  </div>
                </div>
              </div>

              {/* HOME COLLECTION NOTE */}
              <div className="mt-9 rounded-2xl border border-[var(--color-brand-green)]/15 bg-white/80 p-5">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h3 className="font-[var(--font-heading)] text-sm font-extrabold text-[var(--color-medical-navy)]">
                      Home Blood Collection
                    </h3>

                    <p className="mt-1 font-[var(--font-body)] text-xs leading-5 text-[var(--color-medical-text)]">
                      Our doctor can visit your home for blood sample
                      collection as per your requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTACT FORM */}
          <div className="bg-white px-7 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="mb-8">
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-brand-green)]">
                Send an enquiry
              </span>

              <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-[var(--color-medical-navy)]">
                How can we help?
              </h2>

              <p className="mt-2 max-w-xl font-[var(--font-body)] text-sm leading-6 text-[var(--color-medical-text)]">
                Fill in your details and our team will get back to you
                regarding your diagnostic service or test requirement.
              </p>
            </div>

            <form className="space-y-5">
              {/* NAME + PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                    Full Name
                  </label>

                  <div className="relative">
                    <UserRound
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                    />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      className="h-12 w-full rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="h-12 w-full rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-4 text-[var(--color-medical-text)]"
                  />

                  <textarea
                    name="address"
                    rows={3}
                    placeholder="Enter your address"
                    className="w-full resize-none rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] py-3 pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                  />
                </div>
              </div>

              {/* TEST / SERVICE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                    Test / Package
                  </label>

                  <div className="relative">
                    <FileText
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                    />

                    <input
                      type="text"
                      name="test"
                      placeholder="Test or package name"
                      className="h-12 w-full rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                    Preferred Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                    />

                    <input
                      type="date"
                      name="date"
                      className="h-12 w-full rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                    />
                  </div>
                </div>
              </div>

              {/* TIME */}
              <div>
                <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                  Preferred Time
                </label>

                <div className="relative">
                  <Clock3
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-medical-text)]"
                  />

                  <select
                    name="time"
                    defaultValue=""
                    className="h-12 w-full appearance-none rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] pl-11 pr-4 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                  >
                    <option value="" disabled>
                      Select preferred time
                    </option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block font-[var(--font-body)] text-[13px] font-bold text-[var(--color-medical-navy)]">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-[var(--color-border-light)] bg-[#fbfdff] px-4 py-3 font-[var(--font-body)] text-sm text-[var(--color-brand-black)] outline-none transition-all placeholder:text-slate-400 focus:border-[var(--color-brand-blue)] focus:ring-4 focus:ring-[var(--color-brand-blue)]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-blue)] px-6 py-3.5 font-[var(--font-heading)] text-sm font-bold text-white shadow-[0_8px_24px_rgba(0,104,201,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[var(--color-brand-blue-dark)]"
              >
                Send Enquiry
                <Send
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
<Testimonals />
<div className="mt-8 md:mt-16">
 <Faq />
</div>
       
        {/* MAP SECTION - FULL WIDTH */}
        <div className="mt-8 overflow-hidden rounded-[28px] border border-[var(--color-border-light)] bg-white shadow-[0_18px_60px_rgba(18,52,91,0.07)]">
          <div className="flex items-center gap-3 border-b border-[var(--color-border-light)] px-6 py-5 sm:px-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]">
              <MapPin size={19} />
            </div>

            <div>
              <h3 className="font-[var(--font-heading)] text-base font-extrabold text-[var(--color-medical-navy)]">
                Find Us
              </h3>

              <p className="font-[var(--font-body)] text-xs text-[var(--color-medical-text)]">
                Govandi West, Mumbai – 400043
              </p>
            </div>
          </div>

          <div className="h-[360px] w-full sm:h-[430px] lg:h-[480px]">
            <iframe
              title="MultiPathLab Location"
              src="https://www.google.com/maps?q=Gautam%20Nagar%20Govandi%20West%20Mumbai%20400043&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;