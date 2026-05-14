import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';
import { servicePages, industryPages, ghlBookingUrl, businessPhoneDisplay, businessPhoneHref } from '../components/data';

export default function Home() {
  const featuredServices = Object.entries(servicePages);
  const featuredIndustries = Object.entries(industryPages).slice(0, 8);

  return (
    <>
      <Nav />
      <main>
        <section className="hero section-dark v6-hero">
          <div className="hero-copy">
            <div className="eyebrow">AI-powered business infrastructure</div>
            <h1>Answer faster. Follow up automatically. Book more customers.</h1>
            <p>
              Essential Solutions builds AI call handling, automated follow-up, CRM organization, appointment booking, review growth, and customer communication systems for businesses that cannot afford to miss opportunities.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/contact">Book Your Free Systems Audit</a>
              <a className="btn btn-outline" href={businessPhoneHref}>Call {businessPhoneDisplay}</a>
            </div>
            <div className="proof-row">
              <span>AI call handling</span>
              <span>Automated follow-up</span>
              <span>CRM + pipeline tracking</span>
            </div>
          </div>
          <div className="hero-visual hero-photo-wrap clean-hero-visual" aria-label="Essential Solutions business automation preview">
            <div className="hero-photo-card clean-photo-card">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Business team reviewing customer communication and automation systems"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
        </section>

        <section className="pain-band v6-pain-band">
          <h2>Most businesses do not need another app. They need a system that actually responds, tracks, and follows up.</h2>
          <div className="pain-grid">
            <div>Calls go unanswered</div><div>Leads fall through cracks</div><div>Follow-up is inconsistent</div><div>Reviews are not requested</div><div>No-shows waste time</div><div>Owners lack visibility</div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Services</span>
            <h2>Individual systems. One connected customer journey.</h2>
            <p className="section-subhead">Each service has its own role, but the real power comes from connecting calls, texts, forms, calendars, reviews, and lead tracking into one repeatable process.</p>
          </div>
          <div className="solution-grid deep-grid">
            {featuredServices.map(([slug, service], index) => (
              <a className="solution-link-card" href={`/services/${slug}`} key={slug}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.name}</h3>
                <p>{service.subhead}</p>
                <b>Learn more →</b>
              </a>
            ))}
          </div>
          <div className="center-action"><a className="btn btn-gold" href="/services">View All Services</a></div>
        </section>

        <section className="section-dark stat-strip">
          <div><strong>Capture</strong><span>calls, texts, forms, and chat</span></div>
          <div><strong>Respond</strong><span>before leads go cold</span></div>
          <div><strong>Book</strong><span>more qualified appointments</span></div>
          <div><strong>Track</strong><span>every lead source</span></div>
        </section>

        <section className="section split">
          <div>
            <span className="eyebrow dark">Implementation & Configuration</span>
            <h2>We audit, configure, launch, and improve the system with you.</h2>
            <p className="large-text">The implementation fee covers real setup work: AI configuration, communication channels, CRM structure, workflow deployment, testing, and onboarding.</p>
          </div>
          <div className="steps">
            <div><b>1</b><h3>Audit</h3><p>We map where calls, forms, appointments, and reviews are being lost.</p></div>
            <div><b>2</b><h3>Configure</h3><p>We set up the CRM, AI call handling, automations, calendars, and lead routing.</p></div>
            <div><b>3</b><h3>Launch</h3><p>We test the system and walk the team through how to use it.</p></div>
            <div><b>4</b><h3>Optimize</h3><p>We review performance and adjust the system as the business grows.</p></div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Industries</span>
            <h2>Built for businesses where every call can become revenue.</h2>
          </div>
          <div className="industry-grid">
            {featuredIndustries.map(([slug, industry]) => <a key={slug} href={`/${slug}`}>{industry.name}</a>)}
          </div>
          <div className="center-action"><a className="btn btn-gold" href="/industries">Explore Industry Pages</a></div>
        </section>

        <PricingSection bookingUrl={ghlBookingUrl} />
        <FAQ />

        <section className="audit section-dark">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Book a free systems audit.</h2>
            <p>We’ll look at where leads are being lost, what should be automated first, and which package makes the most sense for your business.</p>
            <div className="audit-points">
              <span>Call: {businessPhoneDisplay}</span>
              <span>No pressure</span>
              <span>Clear next steps</span>
            </div>
          </div>
          <div className="audit-card">
            <h3>Start with a quick conversation</h3>
            <p>Use ESA, our website chat assistant, or book a free audit. The written intake form lives on its own page so the main site stays clean.</p>
            <a className="btn btn-gold" href="/contact">Book Free Audit</a>
            <a className="btn btn-outline audit-secondary" href="/intake">Written Intake</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
