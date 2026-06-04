import Nav from './Nav';
import Footer from './Footer';
import FAQ from './FAQ';
import { ghlBookingUrl } from './data';

export default function ServiceTemplate({ service }) {
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark service-hero">
          <div className="industry-copy">
            <span className="eyebrow">{service.eyebrow}</span>
            <h1>{service.headline}</h1>
            <p>{service.subhead}</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/contact">Book Free Audit</a>
              <a className="btn btn-outline" href="/industries">Explore Industries</a>
            </div>
          </div>
          <div className="industry-photo-card">
            <img src={service.image} alt={`${service.name} by Essential Solutions`} />
            <div className="industry-overlay-card">
              <strong>{service.name}</strong>
              <span>Built around business outcomes, not just software features.</span>
            </div>
          </div>
        </section>

        <section className="section problem-outcome-grid">
          <div>
            <span className="eyebrow dark">Why customers care</span>
            <h2>The business problem this solves.</h2>
            <div className="mini-list">
              {service.why.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
          <div>
            <span className="eyebrow dark">What improves</span>
            <h2>Outcomes the system supports.</h2>
            <div className="mini-list positive">
              {service.outcomes.map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        <section className="section-dark workflow-section">
          <div className="section-heading left-align">
            <span className="eyebrow">How it works</span>
            <h2>A simple path from customer action to business follow-up.</h2>
          </div>
          <div className="workflow-line">
            {service.process.map((step, index) => (
              <div key={step}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section service-cta-panel">
          <div>
            <span className="eyebrow dark">Next step</span>
            <h2>See how {service.name} would fit your business.</h2>
            <p>We will review your current call handling, lead flow, follow-up, booking, and customer communication process, then recommend the highest-impact setup first.</p>
          </div>
          <a className="btn btn-gold" href={ghlBookingUrl}>Start Free Audit</a>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
