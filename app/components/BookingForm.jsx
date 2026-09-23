
"use client";

import React, { useEffect, useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function BookingForm({
  isOpen,
  onClose,
  initialTest = "",
  topOffset = "80px", // Navbar ki height ke hisaab se change karo
}) {
  const [selectedTest, setSelectedTest] = useState(initialTest);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    date: "",
    time: "",
  });

  // Selected test update when opening form from a different card
  useEffect(() => {
    if (isOpen) {
      setSelectedTest(initialTest);
    }
  }, [isOpen, initialTest]);

  // Lock background scroll and close modal with Escape
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Update form fields
  const updateForm = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit booking enquiry to WhatsApp
  const submitBooking = (e) => {
    e.preventDefault();

    const message = [
      "Hello, I want to book a home blood collection.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Area: ${form.area}`,
      `Date: ${form.date || "Not selected"}`,
      `Time: ${form.time || "Flexible"}`,
      `Test/Package: ${selectedTest || "Please suggest"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Do not render modal when closed
  if (!isOpen) return null;

  return (
    /* ================= BOOKING FORM START ================= */
    <div
      className="fixed inset-x-0 bottom-0 z-[999] flex justify-center overflow-y-auto bg-medical-navy/60 p-2 backdrop-blur-sm sm:p-4"
      style={{
        top: topOffset,
        height: `calc(100dvh - ${topOffset})`,
      }}
      onClick={onClose}
    >
      {/* ================= MODAL CONTAINER START ================= */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="
          my-auto flex w-full max-w-md flex-col
          overflow-hidden rounded-2xl bg-white shadow-2xl
          sm:max-w-lg sm:rounded-3xl
        "
        style={{
          maxHeight: "calc(100% - 16px)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= FORM HEADER START ================= */}
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-border-light px-4 py-3 sm:px-5 sm:py-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-green sm:text-xs">
              Home Collection
            </p>

            <h2
              id="booking-title"
              className="mt-1 font-heading text-lg font-extrabold text-medical-navy sm:text-xl"
            >
              Book Your Collection
            </h2>

            <p className="mt-1 text-xs leading-5 text-medical-text sm:text-sm">
              Share your details to send an enquiry on WhatsApp.
            </p>
          </div>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking form"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-medical-light text-lg text-medical-navy transition hover:bg-border-light"
          >
            <FiX />
          </button>
        </div>
        {/* ================= FORM HEADER END ================= */}

        {/* ================= FORM BODY START ================= */}
        <form
          onSubmit={submitBooking}
          className="
            min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain
            px-4 py-4
            sm:space-y-4 sm:px-5 sm:py-5
          "
        >
          {/* FULL NAME FIELD */}
          <div className="min-w-0">
            <label
              htmlFor="booking-name"
              className="mb-1.5 block text-sm font-semibold text-medical-navy"
            >
              Full Name *
            </label>

            <input
              id="booking-name"
              required
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={updateForm}
              placeholder="Enter your name"
              className="block w-full min-w-0 rounded-lg border border-border-light bg-white px-3 py-2.5 text-base text-medical-navy outline-none transition placeholder:text-medical-text/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
            />
          </div>

          {/* PHONE NUMBER FIELD */}
          <div className="min-w-0">
            <label
              htmlFor="booking-phone"
              className="mb-1.5 block text-sm font-semibold text-medical-navy"
            >
              Phone Number *
            </label>

            <input
              id="booking-phone"
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              value={form.phone}
              onChange={updateForm}
              pattern="[0-9+\-\s]{10,15}"
              title="Please enter a valid phone number."
              placeholder="Enter phone number"
              className="block w-full min-w-0 rounded-lg border border-border-light bg-white px-3 py-2.5 text-base text-medical-navy outline-none transition placeholder:text-medical-text/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
            />
          </div>

          {/* AREA FIELD */}
          <div className="min-w-0">
            <label
              htmlFor="booking-area"
              className="mb-1.5 block text-sm font-semibold text-medical-navy"
            >
              Area in Mumbai *
            </label>

            <input
              id="booking-area"
              required
              name="area"
              type="text"
              autoComplete="address-level2"
              value={form.area}
              onChange={updateForm}
              placeholder="e.g. Andheri, Borivali"
              className="block w-full min-w-0 rounded-lg border border-border-light bg-white px-3 py-2.5 text-base text-medical-navy outline-none transition placeholder:text-medical-text/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
            />
          </div>

          {/* DATE & TIME FIELDS */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* DATE FIELD */}
            <div className="min-w-0">
              <label
                htmlFor="booking-date"
                className="mb-1.5 block text-sm font-semibold text-medical-navy"
              >
                Preferred Date
              </label>

              <input
                id="booking-date"
                type="date"
                name="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={form.date}
                onChange={updateForm}
                className="block w-full min-w-0 max-w-full rounded-lg border border-border-light bg-white px-2 py-2.5 text-base text-medical-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              />
            </div>

            {/* TIME FIELD */}
            <div className="min-w-0">
              <label
                htmlFor="booking-time"
                className="mb-1.5 block text-sm font-semibold text-medical-navy"
              >
                Preferred Time
              </label>

              <select
                id="booking-time"
                name="time"
                value={form.time}
                onChange={updateForm}
                className="block w-full min-w-0 rounded-lg border border-border-light bg-white px-2 py-2.5 text-base text-medical-navy outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              >
                <option value="">Flexible</option>
                <option value="7 AM - 9 AM">7 AM - 9 AM</option>
                <option value="9 AM - 12 PM">9 AM - 12 PM</option>
                <option value="12 PM - 3 PM">12 PM - 3 PM</option>
                <option value="3 PM - 6 PM">3 PM - 6 PM</option>
              </select>
            </div>
          </div>

          {/* TEST / PACKAGE FIELD */}
          <div className="min-w-0">
            <label
              htmlFor="booking-test"
              className="mb-1.5 block text-sm font-semibold text-medical-navy"
            >
              Test / Package
            </label>

            <input
              id="booking-test"
              name="test"
              type="text"
              value={selectedTest}
              onChange={(e) => setSelectedTest(e.target.value)}
              placeholder="Enter test or package name"
              className="block w-full min-w-0 rounded-lg border border-border-light bg-white px-3 py-2.5 text-base text-medical-navy outline-none transition placeholder:text-medical-text/60 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-green px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-green-dark focus:outline-none focus:ring-4 focus:ring-brand-green/20 sm:text-base"
          >
            <FiMessageCircle className="shrink-0 text-lg" />
            <span>Send Booking Enquiry</span>
          </button>

          {/* FORM DISCLAIMER */}
          <p className="text-center text-xs leading-5 text-medical-text">
            WhatsApp will open with your entered details. Booking is subject
            to confirmation.
          </p>
        </form>
        {/* ================= FORM BODY END ================= */}
      </div>
      {/* ================= MODAL CONTAINER END ================= */}
    </div>
    /* ================= BOOKING FORM END ================= */
  );
}