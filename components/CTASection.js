"use client";

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-20" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to stop missing calls?</h2>
        <p className="text-lg text-gray-200 mb-8">
          Let’s build the system that catches the customers you’re already losing. Book your free systems audit
          and start booking more customers today.
        </p>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block bg-accent text-primary font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
        >
          Book My Free Systems Audit
        </Link>
      </div>
    </section>
  );
}