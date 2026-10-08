
"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-medical-light px-4 py-10">
      <div className="w-full max-w-md bg-white px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">

        {/* Healthcare Image */}
        <div className="mx-auto mb-6 h-36 w-36 overflow-hidden rounded-full border-4 border-brand-blue/10">
          <img
            src="/thank-you.avif"
            alt="Healthcare professional"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Success Icon */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-green">
          Booking Successful
        </p>

        <h1 className="font-heading text-2xl font-extrabold text-medical-navy sm:text-3xl">
          Thank You!
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-medical-text sm:text-base">
          Your home blood collection request has been received successfully.
          Our team will contact you shortly to confirm your booking.
        </p>

        {/* Small Info */}
        <div className="mt-6 border border-border-light bg-medical-blue-light px-4 py-3">
          <p className="text-sm font-semibold text-medical-navy">
            BLOOD@HOME COLLECTION
          </p>

          <p className="mt-1 text-xs text-medical-text">
            Simple • Safe • Convenient
          </p>
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="mt-6 inline-flex w-full items-center justify-center bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}



