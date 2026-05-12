export default function Nav() {
  return (
    <header className="site-header">
      <a className="brand full-logo-brand" href="/" aria-label="Essential Solutions home">
        <img
          src="/essential-solutions-logo-gold-transparent.png"
          alt="Essential Solutions logo"
          className="brand-full-logo"
        />
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="/#solutions">Solutions</a>
        <a href="/industries">Industries</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#how">How It Works</a>
        <a href="/about">About</a>
      </nav>
      <a className="nav-cta" href="/#audit">Free Systems Audit</a>
    </header>
  );
}
