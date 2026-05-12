export default function Nav() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Essential Solutions home">
        <img src="/es-app-icon.png" alt="Essential Solutions ES mark" className="brand-mark" />
        <span className="brand-text">Essential Solutions</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="/#solutions">Solutions</a>
        <a href="/#industries">Industries</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#how">How It Works</a>
        <a href="/auto-repair">Auto Repair</a>
      </nav>
      <a className="nav-cta" href="#audit">Free Systems Audit</a>
    </header>
  );
}
