"use client";

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  FileQuestion,
  Home,
  Search,
  TestTube,
} from "lucide-react";

function NotFound() {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#edf7ff] via-white to-[#effbf5] px-5 py-16 font-body sm:px-8 lg:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[5px] bg-brand-blue/10 text-brand-blue">
            <FileQuestion className="h-8 w-8" />
          </div>

          {/* 404 */}
          <div className="mt-7">
            <p className="font-heading text-[100px] font-extrabold leading-none tracking-tight text-medical-navy sm:text-[140px]">
              4<span className="text-brand-green">0</span>4
            </p>
          </div>

          {/* Content */}
          <h1 className="mt-4 font-heading text-3xl font-extrabold text-medical-navy sm:text-4xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-medical-text sm:text-base">
            Sorry, the page you are looking for doesn't exist or may have been
            moved. You can go back to the previous page or return to the
            MultiPathLab homepage.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border-light bg-white px-6 py-3.5 text-sm font-bold text-medical-navy transition hover:border-brand-blue/30 hover:bg-brand-blue/5"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>

            <a
              href="/"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-green-dark"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </a>
          </div>

          {/* Helpful Links */}
          <div className="mx-auto mt-12 max-w-xl border-t border-border-light pt-8">
            <p className="text-sm font-semibold text-medical-navy">
              Looking for something?
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                href="/tests-packages"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border-light bg-white px-4 py-3 text-sm font-semibold text-medical-text transition hover:border-brand-blue/30 hover:text-brand-blue"
              >
                <TestTube className="h-4 w-4" />
                Tests
              </a>

              <a
                href="/reports"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border-light bg-white px-4 py-3 text-sm font-semibold text-medical-text transition hover:border-brand-blue/30 hover:text-brand-blue"
              >
                <Search className="h-4 w-4" />
                Reports
              </a>

              <a
                href="/contact"
                className="group flex cursor-pointer items-center justify-center gap-2 rounded-[5px] border border-border-light bg-white px-4 py-3 text-sm font-semibold text-medical-text transition hover:border-brand-blue/30 hover:text-brand-blue"
              >
                Contact
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Brand */}
          <div className="mt-10">
            <p className="font-heading text-lg font-extrabold text-medical-navy">
              MultiPath
              <span className="text-brand-green">Lab</span>
            </p>

            <p className="mt-1 text-xs text-medical-text">
              Diagnostic & Health Checkup Services
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;