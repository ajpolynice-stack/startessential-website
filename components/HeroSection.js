"use client";

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white overflow-hidden" id="hero">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-dark opacity-90"></div>

      {/* Decorative network graphic */}
      <div className="absolute inset-0 pointer-events-none flex justify-end items-center pr-8 opacity-40">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="80" cy="80" r="4" stroke="#c08d26" strokeWidth="2" />
          <circle cx="200" cy="50" r="5" stroke="#c08d26" strokeWidth="2" />
          <circle cx="320" cy="100" r="6" stroke="#c08d26" strokeWidth="2" />
          <circle cx="280" cy="220" r="4" stroke="#c08d26" strokeWidth="2" />
          <circle cx="120" cy="260" r="5" stroke="#c08d26" strokeWidth="2" />
          <circle cx="220" cy="340" r="4" stroke="#c08d26" strokeWidth="2" />
          <path d="M80 80 L200 50" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M200 50 L320 100" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M320 100 L280 220" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M280 220 L120 260" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M120 260 L220 340" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M200 50 L280 220" stroke="#c08d26" strokeWidth="1.5" />
          <path d="M200 50 L120 260" stroke="#c08d26" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-start">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
          Stop missing calls.<br />
          Start booking more customers.
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-xl text-gray-200">
          Essential Solutions builds AI‑powered receptionist, follow‑up, CRM and review systems for service businesses
          that need more appointments without hiring a full‑time front desk or marketing team.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#contact"
            className="bg-accent text-primary font-semibold px-6 py-3 rounded-md text-center hover:opacity-90 transition-opacity"
          >
            Book a Demo
          </Link>
          <Link
            href="#solutions"
            className="border border-accent text-accent font-semibold px-6 py-3 rounded-md text-center hover:bg-accent hover:text-primary transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}