import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { industryPages } from '../../components/data';

export const metadata = {
  title: 'Industries | Essential Solutions',
  description: 'AI-powered revenue recovery systems for service businesses.',
};

const links = [
  ['auto-repair', 'Auto Repair'],
  ['med-spas', 'Med Spas'],
  ['dental', 'Dental Offices'],
  ['home-services', 'Home Services'],
  ['law-offices', 'Law Offices'],
  ['logistics', 'Logistics'],
  ['contractors', 'Contractors'],
  ['cleaning-companies', 'Cleaning Companies'],
];

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="industry-hero section-dark">
          <div className="industry-copy">
            <span className="eyebrow">Industries</span>
            <h1>AI systems for businesses where every call matters.</h1>
            <p>
              Each business has different customer questions, booking pressure, follow-up gaps, and reputation needs. These pages show how the system changes by industry.
            </p>
          </div>
          <div className="dashboard-card main-card static-card">
            <div className="card-top"><span>Industry Systems</span><strong>Configured</strong></div>
            <div className="activity-feed">
              <p><b>Auto Repair:</b> missed-call recovery and appointment booking.</p>
              <p><b>Med Spas:</b> consultation capture and follow-up.</p>
              <p><b>Logistics:</b> quote requests, updates, and pipeline tracking.</p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Choose a vertical</span>
            <h2>Start with the market you want to sell first.</h2>
          </div>
          <div className="industry-page-grid">
            {links.map(([slug, label]) => {
              const industry = industryPages[slug];
              return (
                <a className="industry-page-card" href={`/${slug}`} key={slug}>
                  <img src={industry.image} alt={`${label} automation`} />
                  <div>
                    <span>{industry.eyebrow}</span>
                    <h3>{label}</h3>
                    <p>{industry.headline}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
