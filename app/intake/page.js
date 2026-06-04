import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import LeadCapture from '../../components/LeadCapture';

export const metadata = { title: 'Business Intake | Essential Solutions', description: 'Tell Essential Solutions about your business and current customer communication process.' };

export default function IntakePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-dark page-hero-short">
          <span className="eyebrow">Intake</span>
          <h1>Tell us where your business is losing time, leads, or follow-up.</h1>
          <p>This page is designed for the written intake form. ESA chat can stay available across the site, while this space keeps the deeper form separate and cleaner.</p>
        </section>
        <LeadCapture compact />
      </main>
      <Footer />
    </>
  );
}
