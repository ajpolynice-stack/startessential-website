"use client";
import Link from "next/link";
import BrandLockup from "./BrandLockup";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const nav = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Support", href: "/support" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <BrandLockup onClick={() => setOpen(false)} />

        <nav className={`primary-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {nav.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={active ? "nav-active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <a className="mobile-login" href={site.login} target="_blank" rel="noopener noreferrer">
            Client login <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-outline btn-login" href={site.login} target="_blank" rel="noopener noreferrer">
            Client Login
          </a>
          <Link className="btn btn-yellow btn-get-started" href="/get-started">
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
