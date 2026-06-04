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
        {/* HERO */}
        <section className="hero section-dark v6-hero">
          <div className="hero-copy">
            <div className="eyebrow">AI-powered business systems</div>
            <h1>Stop losing customers to missed calls and no follow-up.</h1>
            <p>
              Essential Solutions builds review automation, AI call handling, lead follow-up, and booking systems for local businesses that cannot afford to keep losing opportunities.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/contact">Book Your Free Audit</a>
              <a className="btn btn-outline" href={businessPhoneHref}>Call {businessPhoneDisplay}</a>
            </div>
            <div className="proof-row">
              <span>Review automation</span>
              <span>Missed call recovery</span>
              <span>AI call answering</span>
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

        {/* PAIN BAND */}
        <section className="pain-band v6-pain-band">
          <h2>Most businesses lose money not from bad service — but from bad follow-up.</h2>
          <div className="pain-grid">
            <div>Calls go unanswered</div>
            <div>Reviews never requested</div>
            <div>Follow-up is inconsistent</div>
            <div>Leads fall through cracks</div>
            <div>No-shows waste time</div>
            <div>Owners lack visibility</div>
          </div>
        </section>

        {/* HOW IT STARTS — new value ladder section */}
        <section className="section value-ladder-section">
          <div className="section-heading">
            <span className="eyebrow dark">How it works</span>
            <h2>Start simple. Scale as you grow.</h2>
            <p className="section-subhead">Most businesses start with reviews and follow-up, then add AI call handling once they see results. Every plan builds on the last.</p>
          </div>
          <div className="ladder-grid">
            <div className="ladder-step">
              <div className="ladder-num">01</div>
              <h3>Reviews &amp; Follow-Up</h3>
              <p>Automated review requests after every job. Missed call text back. Basic lead nurturing. This is what moves the needle immediately — and it runs itself.</p>
              <span className="ladder-plan">Essential Starter — $179/mo</span>
            </div>
            <div className="ladder-arrow">→</div>
            <div className="ladder-step featured-step">
              <div className="ladder-num">02</div>
              <h3>AI Receptionist + Full Automation</h3>
              <p>ESA Voice answers every call 24/7. Appointments book automatically. Facebook, Instagram, and Google messages handled. Your whole front desk on autopilot.</p>
              <span className="ladder-plan">Essential Growth — $497/mo</span>
            </div>
            <div className="ladder-arrow">→</div>
            <div className="ladder-step">
              <div className="ladder-num">03</div>
              <h3>Full Business Infrastructure</h3>
              <p>Advanced automation, outbound campaigns, content AI, social planning, and custom workflows. Everything automated so you can focus entirely on the work.</p>
              <span className="ladder-plan">Essential Pro — $997/mo</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section-cream">
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

        {/* STAT STRIP */}
        <section className="section-dark stat-strip">
          <div><strong>62%</strong><span>of calls to small businesses go unanswered</span></div>
          <div><strong>$105K+</strong><span>in annual revenue lost per contractor from missed calls</span></div>
          <div><strong>4×</strong><span>higher click-through rate for UGC-style ads vs polished brand creative</span></div>
          <div><strong>Day 1</strong><span>results — review automation and follow-up start working immediately</span></div>
        </section>

        {/* HOW WE WORK */}
        <section className="section split">
          <div>
            <span className="eyebrow dark">Implementation & Configuration</span>
            <h2>We audit, configure, launch, and improve the system with you.</h2>
            <p className="large-text">The one-time setup fee covers real work: AI configuration, communication channels, CRM structure, workflow deployment, testing, and onboarding.</p>
          </div>
          <div className="steps">
            <div><b>1</b><h3>Audit</h3><p>We map where calls, forms, appointments, and reviews are being lost.</p></div>
            <div><b>2</b><h3>Configure</h3><p>We set up the CRM, AI call handling, automations, calendars, and lead routing.</p></div>
            <div><b>3</b><h3>Launch</h3><p>We test the system and walk the team through how to use it.</p></div>
            <div><b>4</b><h3>Optimize</h3><p>We review performance and adjust the system as the business grows.</p></div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Industries</span>
            <h2>Built for businesses where every call can become revenue.</h2>
          </div>
          <div className="industry-grid">
            {featuredIndustries.map(([slug, industry]) => (
              <a key={slug} href={`/${slug}`}>{industry.name}</a>
            ))}
          </div>
          <div className="center-action"><a className="btn btn-gold" href="/industries">Explore Industry Pages</a></div>
        </section>

        <PricingSection bookingUrl={ghlBookingUrl} />
        <FAQ />

        {/* AUDIT CTA */}
        <section className="audit section-dark">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Book a free systems audit.</h2>
            <p>We will look at where leads are being lost, what should be automated first, and which package makes the most sense for your business.</p>
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
