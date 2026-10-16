import Link from "next/link";
import BrandLockup from "./BrandLockup";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <BrandLockup footer />
        <div className="footer-links">
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <small>© {new Date().getFullYear()} Essential Solutions · Essential Funding LLC</small>
      </div>
    </footer>
  );
}
