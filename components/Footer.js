const phoneDisplay = '978-915-6499';
const phoneHref = 'tel:9789156499';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand footer-logo-lockup">
            <img src="/essential-solutions-logo-gold-transparent.png" alt="Essential Solutions logo" />
          </div>
          <p>AI-powered business systems that help service companies answer faster, follow up automatically, book more customers, and track every opportunity.</p>
          <p className="footer-phone"><a href={phoneHref}>{phoneDisplay}</a></p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/#solutions">Solutions</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#how">How It Works</a>
          <a href="/industries">Industries</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Next Step</h4>
          <a href="/#audit">Free Systems Audit</a>
          <a href={phoneHref}>Call {phoneDisplay}</a>
          <a href="/#roi">Revenue Recovery</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Essential Solutions. All rights reserved.</div>
    </footer>
  );
}
