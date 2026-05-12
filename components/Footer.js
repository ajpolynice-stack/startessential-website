export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/es-app-icon.png" alt="Essential Solutions ES mark" />
            <span>Essential Solutions</span>
          </div>
          <p>AI-powered business systems that help service companies recover missed opportunities, book more appointments, and follow up automatically.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="/#solutions">Solutions</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#how">How It Works</a>
          <a href="/auto-repair">Auto Repair</a>
        </div>
        <div>
          <h4>Next Step</h4>
          <a href="/#audit">Free Systems Audit</a>
          <a href="/#roi">Revenue Recovery</a>
          <a href="/#industries">Industries</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Essential Solutions. All rights reserved.</div>
    </footer>
  );
}
