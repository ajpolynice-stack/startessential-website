import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';
import FAQ from '../../components/FAQ';
import { businessPhoneDisplay, businessPhoneHref } from '../../components/data';

export const metadata = {
  title: 'Contact Essential Solutions | Free Systems Audit',
  description: 'Book a free systems audit with Essential Solutions or call 978-915-6499 for a demo.',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark contact-hero">
          <div className="industry-copy">
            <span className="eyebrow">Next step</span>
            <h1>Book your free systems audit.</h1>
            <p>
              We will look at your current call handling, follow-up, booking, CRM, and review process to show where automation can recover missed revenue.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={businessPhoneHref}>Call {businessPhoneDisplay}</a>
              <a className="btn btn-outline" href="/pricing">View Pricing</a>
            </div>
          </div>
          <div className="audit-card contact-card">
            <h3>What we review</h3>
            <p>Missed calls, lead sources, calendar flow, review process, pipeline tracking, and repetitive customer communication.</p>
            <a className="btn btn-gold" href="/intake">Open Intake</a>
          </div>
        </section>
        <LeadCapture compact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
