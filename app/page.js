
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="gold"><strong>AI-POWERED BUSINESS SYSTEMS</strong></p>
          <h1>
            Stop Missing Calls. <span className="gold">Start Booking More Customers.</span>
          </h1>
          <p>
            We build AI-powered receptionist, CRM, follow-up, and review systems
            for service businesses that need more appointments without hiring more staff.
          </p>

          <div className="buttons">
            <a className="btn primary" href="#">
              BOOK YOUR FREE AUDIT
            </a>

            <a className="btn secondary" href="#">
              SEE HOW IT WORKS
            </a>
          </div>
        </div>

        <div className="mockup">
          <h2>Dashboard</h2>

          <div className="stats">
            <div className="card">
              <h3>248</h3>
              <p>Total Leads</p>
            </div>

            <div className="card">
              <h3>126</h3>
              <p>Appointments</p>
            </div>

            <div className="card">
              <h3>$38,650</h3>
              <p>Revenue</p>
            </div>
          </div>

          <p>AI Assistant Active</p>
        </div>
      </section>

      <section className="section">
        <h2>All-In-One Business Systems</h2>

        <div className="grid">
          <div className="feature">
            <h3>AI Receptionist</h3>
            <p>Answer calls, qualify leads, and book appointments automatically.</p>
          </div>

          <div className="feature">
            <h3>Automated Follow-Up</h3>
            <p>Never lose leads because of slow response times again.</p>
          </div>

          <div className="feature">
            <h3>CRM & Pipelines</h3>
            <p>Track every lead from first contact to closed customer.</p>
          </div>

          <div className="feature">
            <h3>Review Growth</h3>
            <p>Automate review requests and grow your reputation.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h2>Start Essential</h2>
        <p>AI-powered systems for modern service businesses.</p>
      </footer>
    </>
  );
}
