import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { servicePages } from '../../components/data';

export const metadata = {
  title: 'Services | Essential Solutions',
  description: 'AI voice, smart follow-up, CRM, booking, review growth, and automation systems for service businesses.',
};

export default function ServicesPage() {
  const services = Object.entries(servicePages);
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark">
          <div className="industry-copy">
            <span className="eyebrow">Services</span>
            <h1>Business systems that help companies respond, book, and follow up faster.</h1>
            <p>Essential Solutions builds practical AI and automation infrastructure around the moments where businesses usually lose customers: missed calls, slow follow-up, weak scheduling, scattered leads, and inconsistent reviews.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/contact">Book Free Audit</a>
              <a className="btn btn-outline" href="/industries">View Industries</a>
            </div>
          </div>
          <div className="industry-photo-card">
            <img src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Essential Solutions service planning" />
            <div className="industry-overlay-card"><strong>One connected growth system</strong><span>Calls, texts, forms, calendars, reviews, and pipeline visibility.</span></div>
          </div>
        </section>
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">What we build</span>
            <h2>Explore the core systems.</h2>
          </div>
          <div className="solution-grid deep-grid">
            {services.map(([slug, service], index) => (
              <a className="solution-link-card" href={`/services/${slug}`} key={slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.name}</h3>
                <p>{service.subhead}</p>
                <b>Learn more →</b>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
