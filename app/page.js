import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';
import { servicePages, industryPages, ghlBookingUrl, businessPhoneDisplay, businessPhoneHref } from '../components/data';

export default function Home() {
  const featuredServices = Object.entries(servicePages);
  const featuredIndustries = Object.entries(industryPages);

  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section className="hero-v9 section-dark">
          <div className="hero-v9-copy">
            <div className="eyebrow">AI-powered business systems</div>
            <h1>Your business loses money every time a call goes unanswered.</h1>
            <p>Essential Solutions builds review automation, AI call handling, and lead follow-up systems that run 24/7 — so you stop losing customers to missed calls and forgotten follow-ups.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="/contact">Book a Free Audit</a>
              <a className="btn btn-outline" href={businessPhoneHref}>{businessPhoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <div><strong>62%</strong><span>of calls go unanswered</span></div>
              <div><strong>$105K+</strong><span>lost per year per contractor</span></div>
              <div><strong>Day 1</strong><span>results from automation</span></div>
            </div>
          </div>
          <div className="hero-v9-visual">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business team using Essential Solutions automation"
            />
            <div className="hero-v9-overlay" />
            <div className="hero-float-card">
              <div className="hfc-row"><span className="hfc-dot green" />New review received — 5 stars</div>
              <div className="hfc-row"><span className="hfc-dot gold" />Missed call — auto text sent</div>
              <div className="hfc-row"><span className="hfc-dot blue" />Appointment booked — confirmed</div>
            </div>
          </div>
        </section>

        {/* PAIN */}
        <section className="pain-v9">
          <div className="pain-v9-headline">
            <h2>Most businesses don't lose customers from bad service.<br/>They lose them from bad follow-up.</h2>
          </div>
          <div className="pain-v9-grid">
            {[
              ['📞', 'Unanswered calls', 'A customer calls once. If you miss it, they call your competitor.'],
              ['⭐', 'No review requests', 'Happy customers forget to leave reviews unless someone asks them.'],
              ['💬', 'Slow follow-up', 'Leads go cold in hours. Manual follow-up is always too late.'],
              ['📅', 'No-shows', 'Appointments fall apart without reminders and confirmations.'],
              ['📊', 'No visibility', 'Owners have no idea where leads come from or where they go.'],
              ['🔁', 'Inconsistent process', 'What gets done depends on who\'s working that day.'],
            ].map(([icon, title, desc]) => (
              <div className="pain-card" key={title}>
                <span className="pain-icon">{icon}</span>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALUE LADDER */}
        <section className="section section-cream">
          <div className="section-heading">
            <span className="eyebrow dark">How it works</span>
            <h2>Start with what moves the needle. Add more as you grow.</h2>
            <p className="section-subhead">Most clients start with reviews and follow-up, then upgrade to AI call handling once they see results. Every tier builds on the last.</p>
          </div>
          <div className="ladder-v9">
            <div className="lv9-step">
              <div className="lv9-num">01</div>
              <h3>Reviews & Follow-Up</h3>
              <p>Automated review requests. Missed call text back. Basic lead nurturing. Runs itself from day one.</p>
              <span className="lv9-price">Starter — $179/mo</span>
            </div>
            <div className="lv9-arrow">→</div>
            <div className="lv9-step lv9-featured">
              <div className="lv9-num">02</div>
              <h3>AI Receptionist + Full Automation</h3>
              <p>ESA Voice answers every call 24/7. Bookings, social DMs, and Google messages handled automatically.</p>
              <span className="lv9-price">Growth — $497/mo</span>
            </div>
            <div className="lv9-arrow">→</div>
            <div className="lv9-step">
              <div className="lv9-num">03</div>
              <h3>Full Business Infrastructure</h3>
              <p>Advanced automations, outbound campaigns, content AI, and custom workflows. Everything on autopilot.</p>
              <span className="lv9-price">Pro — $997/mo</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow dark">Services</span>
            <h2>One connected system for every customer touchpoint.</h2>
            <p className="section-subhead">Each service plays a role, but the real power is connecting calls, texts, reviews, bookings, and follow-up into one repeatable process.</p>
          </div>
          <div className="services-v9-grid">
            {featuredServices.map(([slug, service], i) => (
              <a className="svc-card" href={`/services/${slug}`} key={slug}>
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{service.name}</h3>
                <p>{service.eyebrow}</p>
                <span className="svc-arrow">→</span>
              </a>
            ))}
          </div>
          <div className="center-action"><a className="btn btn-gold" href="/services">View All Services</a></div>
        </section>

        {/* HOW WE WORK */}
        <section className="section-dark how-v9">
          <div className="section-heading" style={{textAlign:'left',margin:'0 0 48px'}}>
            <span className="eyebrow">Process</span>
            <h2>We build it. You run it.</h2>
            <p style={{color:'rgba(255,255,255,.72)',lineHeight:'1.75',maxWidth:'560px',marginTop:'12px'}}>The setup fee covers real labor — not just software access. We configure, test, and hand off a system that actually works.</p>
          </div>
          <div className="how-v9-steps">
            {[
              ['Audit', 'We map every place calls, leads, and reviews are being lost.'],
              ['Configure', 'AI, CRM, automations, phone numbers, calendars — all built for your business.'],
              ['Launch', 'We test everything and walk your team through how it works.'],
              ['Optimize', 'We review performance and adjust the system as you grow.'],
            ].map(([title, desc], i) => (
              <div className="how-step" key={title}>
                <div className="how-num">{i + 1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section section-cream">
          <div className="section-heading">
            <span className="eyebrow dark">Industries</span>
            <h2>Built for businesses where every call is revenue.</h2>
          </div>
          <div className="industries-v9">
            {featuredIndustries.map(([slug, ind]) => (
              <a className="ind-chip" key={slug} href={`/${slug}`}>{ind.name}</a>
            ))}
          </div>
        </section>

        <PricingSection bookingUrl={ghlBookingUrl} />
        <FAQ />

        {/* CTA */}
        <section className="audit section-dark">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>See exactly where you're losing leads.</h2>
            <p>Free audit. No pressure. We'll show you what to fix first and which plan makes sense.</p>
            <div className="audit-points">
              <span>{businessPhoneDisplay}</span>
              <span>No pressure</span>
              <span>Clear next steps</span>
            </div>
          </div>
          <div className="audit-card">
            <h3>Book a free systems audit</h3>
            <p>Talk to a real person. We'll map out where leads are slipping and show you how automation fixes it.</p>
            <a className="btn btn-gold" href="/contact">Book Free Audit</a>
            <a className="btn btn-outline audit-secondary" href="/intake">Written Intake</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
