
"use client";

import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Home,
  Award,
  Building2,
  Users,
  Droplet,
  Activity,
  HeartPulse,
  Stethoscope,
  FlaskConical,
  CheckCircle2,
  IndianRupee,
  Microscope,
} from "lucide-react";

function AboutBanner() {
  const services = [
    { name: "Complete Blood Count", short: "CBC", icon: Droplet },
    { name: "Diabetes Test", short: "Blood Sugar / HbA1c", icon: Activity },
    { name: "Lipid Profile", short: "Cholesterol", icon: HeartPulse },
    { name: "Liver Function", short: "LFT", icon: FlaskConical },
    { name: "Kidney Function", short: "KFT", icon: Microscope },
    { name: "Thyroid Profile", short: "T3, T4, TSH", icon: Stethoscope },
    { name: "Vitamin Tests", short: "Vitamin D & B12", icon: Award },
    { name: "Other Blood Tests", short: "As prescribed", icon: ShieldCheck },
  ];

  const benefits = [
    {
      icon: Home,
      title: "Home Sample Collection",
      desc: "Convenient blood collection at your doorstep.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Hygienic",
      desc: "Professional sample collection with proper hygiene.",
    },
    {
      icon: Clock,
      title: "Convenient Service",
      desc: "Save travel time with home collection.",
    },
    {
      icon: IndianRupee,
      title: "Affordable Testing",
      desc: "Access a range of diagnostic tests at affordable prices.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-10 lg:grid-cols-2 lg:gap-10 lg:px-6 lg:py-12">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100">
                <Stethoscope size={16} />
              </span>
              About Me
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Health,
              <span className="block text-emerald-600">
                My Priority.
              </span>
            </h1>

            <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-700">
              Experienced DMLT Professional | Trusted Blood Collection
              Service at Your Home
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              I am a qualified DMLT professional with 10 years of
              experience in the healthcare and diagnostic field.
              Having worked with diagnostic companies and healthcare
              facilities, I now bring convenient blood sample
              collection services directly to your home.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              My goal is to make diagnostic testing more convenient
              and affordable while providing professional,
              hygienic and reliable sample collection.
            </p>

            {/* EXPERIENCE BADGE */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-5 py-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Award size={27} />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">
                    10+ Years
                  </p>
                  <p className="text-sm text-slate-500">
                    Professional Experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle2
                  size={19}
                  className="text-emerald-600"
                />
                Home Sample Collection
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/tests-packages"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                Explore Our Tests
                <ArrowRight size={19} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
              >
                <Clock size={19} />
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-200/70">
              <img
                src="/doctor.avif"
                alt="Professional DMLT blood sample collection specialist"
                className="h-[380px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />

              {/* EXPERIENCE CARD */}
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:bottom-9 sm:left-9 sm:right-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck size={30} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">
                      Your Trusted Health Partner
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Professional care, right at your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -left-3 top-8 rounded-2xl border border-white bg-white p-4 shadow-xl sm:-left-8 sm:top-12">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Home size={23} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">
                    At Your Home
                  </p>
                  <p className="text-xs text-slate-500">
                    Convenient Collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-sky-100">
              <img
                src="/work.jpg"
                alt="Professional blood sample collection"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl bg-emerald-600 px-6 py-5 text-white shadow-xl sm:right-8">
              <p className="text-3xl font-extrabold">10+</p>
              <p className="mt-1 text-sm font-medium">
                Years of Experience
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              My Journey
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              A Decade of Experience,
              <span className="block text-emerald-600">
                A Commitment to Care.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              My journey in the medical laboratory field began
              with my DMLT qualification and a passion for
              healthcare. Over the past 10 years, I have gained
              valuable professional experience working with
              diagnostic companies and healthcare facilities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Through this experience, I have developed practical
              knowledge of blood sample collection, patient
              interaction and the importance of proper sample
              handling.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Today, I bring these skills to home collection
              services, helping people access diagnostic testing
              without the need to travel to a laboratory for
              sample collection.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "10 years of professional experience",
                "Experience with diagnostic companies",
                "Convenient at-home blood collection",
                "Focus on hygiene and proper sample handling",
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-emerald-600"
                  />
                  <span className="font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    

 
     
    </main>
  );
}

export default AboutBanner;