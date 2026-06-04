import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const ghlBookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || '/#audit';

export const metadata = {
  title: 'AI Systems for Auto Repair Shops | Essential Solutions',
  description: 'AI receptionist, missed-call text-back, appointment booking, review automation, and CRM systems for auto repair shops.'
};

export default function AutoRepair() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero niche-hero section-dark">
          <div className="hero-copy">
            <div className="eyebrow">For auto repair shops</div>
            <h1>Turn missed repair calls into booked appointments.</h1>
            <p>Most repair shops do not lose customers because the work is bad. They lose them because the phone rings during chaos, nobody follows up fast enough, and reviews get ignored.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={ghlBookingUrl}>Book Auto Shop Audit</a>
              <a className="btn btn-outline" href="/#pricing">View Packages</a>
            </div>
          </div>
          <div className="dashboard-card main-card">
            <div className="card-top"><span>Auto Shop Lead Flow</span><strong>Live</strong></div>
            <div className="repair-flow">
              <div>Missed Call</div><span>→</span><div>AI Text Back</div><span>→</span><div>Booked Estimate</div><span>→</span><div>Review Request</div>
            </div>
            <div className="activity-feed">
              <p><b>Call:</b> Customer needs brakes checked this week.</p>
              <p><b>AI:</b> Sent booking link and requested vehicle details.</p>
              <p><b>CRM:</b> Added to “Estimate Scheduled.”</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Shop problems we fix</span>
            <h2>Your front desk should not be the bottleneck.</h2>
          </div>
          <div className="solution-grid">
            <article><span>01</span><h3>Phones ring while staff is busy</h3><p>The system responds instantly when calls are missed, so leads do not call the next shop.</p></article>
            <article><span>02</span><h3>Customers need quick answers</h3><p>AI can answer common questions about hours, services, estimates, location, and booking.</p></article>
            <article><span>03</span><h3>Reviews are inconsistent</h3><p>Every completed service can trigger a polite review request and follow-up.</p></article>
            <article><span>04</span><h3>Lead tracking is messy</h3><p>Each call, text, form, and booked appointment gets tracked in a clean CRM pipeline.</p></article>
          </div>
        </section>

        <section className="section-dark audit">
          <div>
            <span className="eyebrow">Auto shop audit</span>
            <h2>Let’s find where calls and appointments are leaking.</h2>
            <p>We’ll review your current call handling, follow-up, reviews, and scheduling process.</p>
          </div>
          <div className="audit-card"><a className="btn btn-gold" href={ghlBookingUrl}>Book Free Auto Shop Audit</a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
