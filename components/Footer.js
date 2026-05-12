"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <span className="text-xl font-semibold text-white">Start Essential</span>
            <p className="mt-2 text-sm">© {new Date().getFullYear()} Essential Solutions. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#how" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Book Demo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}