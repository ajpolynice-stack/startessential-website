import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import PricingSection from '../components/PricingSection';

const ghlBookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || '#audit';
const ghlFormUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL || '';
const businessPhoneDisplay = '978-915-6499';
const businessPhoneHref = 'tel:9789156499';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero section-dark v6-hero">
          <div className="hero-copy">
            <div className="eyebrow">AI-powered business infrastructure</div>
            <h1>Answer faster. Follow up automatically. Book more customers.</h1>
            <p>
              Essential Solutions builds AI call handling, CRM, customer messaging, appointment booking, review growth, and follow-up automation for businesses that need more revenue without more chaos.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={ghlBookingUrl}>Book Your Free Systems Audit</a>
              <a className="btn btn-outline" href={businessPhoneHref}>Call {businessPhoneDisplay}</a>
            </div>
            <div className="proof-row">
              <span>AI call handling</span>
              <span>Automated follow-up</span>
              <span>CRM + pipeline tracking</span>
            </div>
          </div>
          <div className="hero-visual hero-photo-wrap" aria-label="Essential Solutions business automation preview">
            <div className="hero-photo-card">
              <img
                src="https://images.pexels.com/photos/7643724/pexels-photo-7643724.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Business professional handling a customer phone call while using a laptop"
              />
              <div className="photo-overlay"></div>
            </div>
            <div className="dashboard-card floating-card main-card v6-dashboard-card">
              <div className="card-top">
                <span>Live Lead Activity</span>
                <strong>Esa Active</strong>
              </div>
              <div className="metric-grid">
                <div><strong>37</strong><span>Recovered opportunities</span></div>
                <div><strong>24</strong><span>Appointments booked</span></div>
                <div><strong>4.8★</strong><span>Review rating</span></div>
              </div>
              <div className="activity-feed">
                <p><b>New call:</b> Customer asked for a service quote.</p>
                <p><b>Follow-up:</b> Booking link delivered by SMS.</p>
                <p><b>Pipeline:</b> Lead moved to Scheduled.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pain-band v6-pain-band">
          <h2>Most businesses do not need another app. They need a system that actually responds, tracks, and follows up.</h2>
          <div className="pain-grid">
            <div>Calls go unanswered</div><div>Leads fall through cracks</div><div>Follow-up is inconsistent</div><div>Reviews are not requested</div><div>No-shows waste time</div><div>Owners lack visibility</div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-heading">
            <span className="eyebrow dark">What we build</span>
            <h2>A complete lead response and customer communication system.</h2>
            <p className="section-subhead">We are not selling plain software access. We configure the system around how the business receives leads, books customers, follows up, and tracks opportunities.</p>
          </div>
          <div className="solution-grid">
            <article><span>01</span><h3>Esa Voice</h3><p>AI-powered call handling that answers, collects customer details, routes serious requests, and helps push prospects toward booking.</p></article>
            <article><span>02</span><h3>Smart Text Follow-Up</h3><p>Fallback text response and automated SMS follow-up keep leads engaged when calls disconnect, staff are busy, or customers need a quick link.</p></article>
            <article><span>03</span><h3>CRM & Pipeline Tracking</h3><p>Every call, form, message, lead source, and appointment gets organized inside a clear customer pipeline.</p></article>
            <article><span>04</span><h3>Appointment Booking</h3><p>Customers can book, confirm, reschedule, and receive reminders without tying up staff all day.</p></article>
            <article><span>05</span><h3>Review Growth</h3><p>Automated review requests help happy customers build your reputation without manual chasing.</p></article>
            <article><span>06</span><h3>Automation Workflows</h3><p>Lead nurture, reminders, reactivation, internal notifications, and follow-up sequences reduce manual work and missed opportunities.</p></article>
          </div>
        </section>

        <section className="section-dark stat-strip" id="roi">
          <div>
            <strong>Capture</strong>
            <span>calls, texts, forms, and chat</span>
          </div>
          <div>
            <strong>Respond</strong>
            <span>before leads go cold</span>
          </div>
          <div>
            <strong>Book</strong>
            <span>more qualified appointments</span>
          </div>
          <div>
            <strong>Track</strong>
            <span>every lead source</span>
          </div>
        </section>

        <section className="section split" id="how">
          <div>
            <span className="eyebrow dark">Implementation & Configuration</span>
            <h2>We audit, configure, launch, and improve the system with you.</h2>
            <p className="large-text">The implementation fee covers the actual setup work: AI configuration, communication channels, CRM structure, workflow deployment, testing, and onboarding.</p>
          </div>
          <div className="steps">
            <div><b>1</b><h3>Audit</h3><p>We map where calls, forms, appointments, and reviews are being lost.</p></div>
            <div><b>2</b><h3>Configure</h3><p>We set up the CRM, AI call handling, automations, calendars, and lead routing.</p></div>
            <div><b>3</b><h3>Launch</h3><p>We test the system and walk the team through how to use it.</p></div>
            <div><b>4</b><h3>Optimize</h3><p>We review performance and adjust the system as the business grows.</p></div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="section-heading">
            <span className="eyebrow dark">Built for businesses where speed matters</span>
            <h2>Start with the industries where every call can become revenue.</h2>
          </div>
          <div className="industry-grid">
            <a href="/auto-repair">Auto Repair</a><a href="/med-spas">Med Spas</a><a href="/dental">Dental Offices</a><a href="/home-services">Home Services</a><a href="/law-offices">Law Offices</a><a href="/logistics">Logistics</a><a href="/contractors">Contractors</a><a href="/cleaning-companies">Cleaning Companies</a>
          </div>
        </section>

        <PricingSection bookingUrl={ghlBookingUrl} />

        <FAQ />

        <section className="audit section-dark" id="audit">
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
          {ghlFormUrl ? (
            <iframe className="ghl-frame" src={ghlFormUrl} title="Essential Solutions audit form" />
          ) : (
            <div className="audit-card">
              <h3>Start with a quick conversation</h3>
              <p>This area is ready for your GoHighLevel form or calendar embed. For now, prospects can call or request a demo directly.</p>
              <a className="btn btn-gold" href={businessPhoneHref}>Call {businessPhoneDisplay}</a>
              <a className="btn btn-outline audit-secondary" href={ghlBookingUrl}>Book Demo</a>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
