'use client';

import { useState } from 'react';

const phoneDisplay = '1-978-915-6499';
const phoneHref = 'tel:19789156499';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header v8-header">
        <button
          className="hamburger-btn"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <a className="brand full-logo-brand" href="/" aria-label="Essential Solutions home">
          <img src="/essential-solutions-logo-gold-transparent.png" alt="Essential Solutions logo" className="brand-full-logo" />
        </a>

        <div className="nav-actions-clean">
          <a className="nav-phone" href={phoneHref}>{phoneDisplay}</a>
          <a className="btn btn-gold nav-cta" href="/contact">Free Audit</a>
        </div>
      </header>

      {/* Slide-out drawer */}
      <div className={`nav-drawer-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <nav className={`nav-drawer${open ? ' open' : ''}`} aria-label="Main navigation">
        <div className="drawer-top">
          <img src="/essential-solutions-logo-gold-transparent.png" alt="Essential Solutions" className="drawer-logo" />
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="drawer-links">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/industries" onClick={() => setOpen(false)}>Industries</a>
          <a href="/pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
        <div className="drawer-footer">
          <a className="btn btn-gold" href="/contact" onClick={() => setOpen(false)}>Book Free Audit</a>
          <a className="drawer-phone" href={phoneHref}>{phoneDisplay}</a>
        </div>
      </nav>
    </>
  );
}
