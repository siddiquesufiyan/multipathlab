"use client";

import React from "react";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Info,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

function PrivacyPolicy() {
  const sections = [
    {
      id: "information",
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            When you contact us, book a home collection service, request a
            diagnostic service, or use our website, we may collect information
            required to provide and manage the requested service.
          </p>

          <p className="mt-4">
            Depending on the service, this may include your name, mobile
            number, email address, address or location for home visits, test
            or service requirements, appointment details, and information you
            voluntarily provide while communicating with us.
          </p>
        </>
      ),
    },
    {
      id: "health-information",
      title: "2. Health & Diagnostic Information",
      content: (
        <>
          <p>
            If you request blood collection or diagnostic services, you may
            provide information related to your tests, sample requirements,
            reports, or other information necessary to complete the requested
            service.
          </p>

          <p className="mt-4">
            Such information is used only as reasonably necessary for
            arranging the requested service, sample collection, diagnostic
            processing, report delivery, communication, and related support.
          </p>
        </>
      ),
    },
    {
      id: "use",
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>Your information may be used to:</p>

          <ul className="mt-4 space-y-3">
            {[
              "Respond to your enquiries and service requests.",
              "Schedule and manage home visits or sample collection.",
              "Confirm test and diagnostic service requirements.",
              "Communicate regarding appointments and service updates.",
              "Arrange the required testing or diagnostic process.",
              "Provide digital reports where applicable.",
              "Respond to questions, complaints, or support requests.",
              "Improve our website and service experience.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      id: "sharing",
      title: "4. Sharing of Information",
      content: (
        <>
          <p>
            We do not intend to sell your personal information. Information
            may be shared with relevant service providers or diagnostic
            laboratories where reasonably necessary to fulfil the service you
            have requested.
          </p>

          <p className="mt-4">
            Information may also be disclosed where required by applicable
            law, legal process, or a lawful request from an authorized
            authority.
          </p>
        </>
      ),
    },
    {
      id: "reports",
      title: "5. Digital Reports",
      content: (
        <>
          <p>
            Where digital reports are provided, they may be delivered through
            the communication method agreed with you or made available through
            the website or other applicable service system.
          </p>

          <p className="mt-4">
            You are responsible for keeping any report links, report
            credentials, or downloaded report copies secure and for avoiding
            unnecessary sharing of your personal medical information.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "6. Data Security",
      content: (
        <>
          <p>
            We take reasonable steps to protect the information provided to us
            from unauthorized access, misuse, alteration, or disclosure.
          </p>

          <p className="mt-4">
            However, no website, electronic communication, or method of data
            transmission can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "7. Data Retention",
      content: (
        <p>
          We may retain information for as long as reasonably necessary to
          provide services, maintain appropriate business and service records,
          resolve disputes, comply with applicable legal requirements, or
          fulfil other legitimate operational purposes.
        </p>
      ),
    },
    {
      id: "cookies",
      title: "8. Cookies & Website Usage",
      content: (
        <>
          <p>
            Our website may use cookies or similar technologies to support
            website functionality, understand website usage, and improve the
            user experience.
          </p>

          <p className="mt-4">
            You may be able to manage cookie preferences through your browser
            settings. Disabling certain cookies may affect some website
            functionality.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      title: "9. Third-Party Services",
      content: (
        <p>
          Our website or communications may contain links to third-party
          websites, services, payment providers, laboratories, or other
          platforms. Their privacy practices are governed by their respective
          privacy policies, and we recommend reviewing those policies before
          providing information to them.
        </p>
      ),
    },
    {
      id: "rights",
      title: "10. Your Choices",
      content: (
        <>
          <p>
            You may contact us regarding information you have provided to us
            and request clarification about how it is being used, subject to
            applicable legal and operational requirements.
          </p>

          <p className="mt-4">
            If you believe that information associated with your service is
            inaccurate, please contact us so that we can review the matter.
          </p>
        </>
      ),
    },
    {
      id: "children",
      title: "11. Children's Privacy",
      content: (
        <p>
          Our services are intended to be arranged by adults or by a parent,
          guardian, or authorized person when services are required for a
          minor. We do not knowingly seek unnecessary personal information
          from children.
        </p>
      ),
    },
    {
      id: "changes",
      title: "12. Changes to This Privacy Policy",
      content: (
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, website, operational practices, or
          applicable requirements. Any updated version will be published on
          this page with the revised effective date.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-white font-body text-brand-black">
      {/* =====================================================
          HERO
      ====================================================== */}
      <div className="relative overflow-hidden bg-medical-navy">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <LockKeyhole className="h-4 w-4 text-brand-green" />
              Privacy & Data Protection
            </div>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Privacy
              <span className="text-brand-green"> Policy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We respect your privacy and aim to handle the information you
              provide to us responsibly while delivering home blood collection
              and diagnostic services.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/65">
              <span>Last Updated: September 2026</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
              <span>Privacy & Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <div className="bg-medical-blue-light">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="flex gap-4 rounded-2xl border border-brand-blue/10 bg-white p-6 sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
              <Info className="h-5 w-5 text-brand-blue" />
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-medical-navy">
                About This Privacy Policy
              </h2>

              <p className="mt-2 max-w-4xl text-sm leading-7 text-medical-text">
                This Privacy Policy explains how information may be collected,
                used, stored, and shared when you use our website or request
                our home collection and diagnostic services. By using our
                website or services, you acknowledge this policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border-light bg-medical-light p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10">
                    <ShieldCheck className="h-5 w-5 text-brand-green-dark" />
                  </div>

                  <div>
                    <p className="font-heading text-sm font-bold text-medical-navy">
                      Privacy Policy
                    </p>

                    <p className="text-xs text-medical-text">
                      Quick navigation
                    </p>
                  </div>
                </div>

                <nav className="mt-5 space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-medical-text transition hover:bg-white hover:text-brand-blue"
                    >
                      <span>{section.title}</span>

                      <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy content */}
            <main className="max-w-4xl">
              <div className="mb-10">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                  Privacy Policy
                </span>

                <h2 className="mt-3 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
                  Your Privacy Matters to Us
                </h2>

                <p className="mt-4 leading-8 text-medical-text">
                  We aim to keep our privacy practices clear and easy to
                  understand. The following sections explain how information
                  may be handled when you use our website and services.
                </p>
              </div>

              <div className="space-y-10">
                {sections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 border-b border-border-light pb-10 last:border-b-0"
                  >
                    <h3 className="font-heading text-xl font-bold text-medical-navy sm:text-2xl">
                      {section.title}
                    </h3>

                    <div className="mt-4 text-sm leading-8 text-medical-text sm:text-base">
                      {section.content}
                    </div>
                  </article>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTACT PRIVACY
      ====================================================== */}
      <div className="bg-medical-light py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-3xl bg-medical-navy p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-brand-green" />
                  </div>

                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
                    Privacy Questions
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-3xl font-extrabold text-white sm:text-4xl">
                  Have a Question About Your Information?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/70">
                  If you have any questions about this Privacy Policy or the
                  information you have provided while using our services,
                  please contact us directly.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col">
                <a
                  href="mailto:info@multipathlab.in"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:bg-brand-green-dark"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>

                <a
                  href="tel:9082742451"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <div className="bg-medical-blue-light">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center sm:px-8 lg:px-10 lg:py-16">
          <h2 className="font-heading text-2xl font-extrabold text-medical-navy sm:text-3xl">
            Need Home Blood Collection?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-medical-text">
            Get convenient professional sample collection and diagnostic
            services at your doorstep.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 font-semibold text-white transition hover:bg-brand-blue-dark"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
