"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-semibold tracking-wide">Start Essential</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#solutions" className="hover:text-accent transition-colors">Solutions</Link>
            <Link href="#industries" className="hover:text-accent transition-colors">Industries</Link>
            <Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link>
            <Link href="#how" className="hover:text-accent transition-colors">How&nbsp;It&nbsp;Works</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
          <div className="flex items-center">
            <Link
              href="#contact"
              className="hidden sm:inline-block bg-accent text-primary font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}