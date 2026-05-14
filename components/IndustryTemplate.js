import Nav from './Nav';
import Footer from './Footer';
import LeadCapture from './LeadCapture';
import FAQ from './FAQ';
import { ghlBookingUrl } from './data';

export default function IndustryTemplate({ industry }) {
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark">
          <div className="industry-copy">
            <span className="eyebrow">{industry.eyebrow}</span>
            <h1>{industry.headline}</h1>
            <p>{industry.subhead}</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={ghlBookingUrl}>Book Free Audit</a>
              <a className="btn btn-outline" href="#workflow">See Workflow</a>
            </div>
          </div>
          <div className="industry-photo-card">
            <img src={industry.image} alt={`${industry.name} business automation`} />
            <div className="industry-overlay-card">
              <strong>{industry.name} Lead System</strong>
              <span>Calls → Follow-up → Booking → Reviews</span>
            </div>
          </div>
        </section>

        <section className="section problem-outcome-grid">
          <div>
            <span className="eyebrow dark">Common leaks</span>
            <h2>Where revenue gets lost.</h2>
            <div className="mini-list">
              {industry.pains.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
          <div>
            <span className="eyebrow dark">What we fix</span>
            <h2>What the system is built to improve.</h2>
            <div className="mini-list positive">
              {industry.outcomes.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        <section className="section-dark workflow-section" id="workflow">
          <div className="section-heading left-align">
            <span className="eyebrow">Workflow</span>
            <h2>A cleaner path from first contact to booked customer.</h2>
          </div>
          <div className="workflow-line">
            {industry.workflow.map((step, index) => (
              <div key={step}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <FAQ />
        <LeadCapture compact />
      </main>
      <Footer />
    </>
  );
}
