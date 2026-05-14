const phoneDisplay = '978-915-6499';
const phoneHref = 'tel:9789156499';

export default function Nav() {
  return (
    <header className="site-header v6-header">
      <a className="brand full-logo-brand" href="/" aria-label="Essential Solutions home">
        <img src="/essential-solutions-logo-gold-transparent.png" alt="Essential Solutions logo" className="brand-full-logo" />
      </a>
      <nav className="nav-links v6-nav-links" aria-label="Main navigation">
        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </nav>
      <div className="nav-actions-clean">
        <a className="nav-phone" href={phoneHref}>{phoneDisplay}</a>
        <a className="nav-cta" href="/contact">Free Audit</a>
      </div>
    </header>
  );
}
