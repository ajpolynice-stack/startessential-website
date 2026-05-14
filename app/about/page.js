import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

export const metadata = {
  title: 'About Essential Solutions | Revenue Recovery Systems',
  description: 'Essential Solutions installs AI-powered reception, CRM, follow-up, booking, and review systems for service businesses.',
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark about-hero">
          <div className="industry-copy">
            <span className="eyebrow">About Essential Solutions</span>
            <h1>We do not sell software. We install working business systems.</h1>
            <p>
              Essential Solutions helps service businesses recover missed opportunities with AI reception, CRM, follow-up, booking, review growth, and customer communication systems.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/#audit">Book Free Audit</a>
              <a className="btn btn-outline" href="/#solutions">See Systems</a>
            </div>
          </div>
          <div className="about-card-stack">
            <div className="about-card"><b>01</b><span>Capture every serious lead.</span></div>
            <div className="about-card"><b>02</b><span>Respond before the customer goes cold.</span></div>
            <div className="about-card"><b>03</b><span>Track the full journey from call to booked customer.</span></div>
            <div className="about-card"><b>04</b><span>Improve the system month after month.</span></div>
          </div>
        </section>

        <section className="section split">
          <div>
            <span className="eyebrow dark">Our position</span>
            <h2>Built for owners who are tired of leaking revenue through messy follow-up.</h2>
          </div>
          <div className="text-stack">
            <p>
              Most businesses do not lose customers because they are bad at their work. They lose customers because calls go unanswered, forms get ignored, leads are not followed up with, reviews are never requested, and nobody has a clean view of the pipeline.
            </p>
            <p>
              We build the system that sits between the business and the customer: answering, routing, following up, booking, tracking, and reminding. The goal is simple — fewer missed opportunities and more booked customers.
            </p>
          </div>
        </section>

        <LeadCapture compact />
      </main>
      <Footer />
    </>
  );
}
