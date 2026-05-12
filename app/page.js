import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

const ghlBookingUrl = process.env.NEXT_PUBLIC_GHL_BOOKING_URL || '#audit';
const ghlFormUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL || '';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero section-dark">
          <div className="hero-copy">
            <div className="eyebrow">AI-powered revenue recovery systems</div>
            <h1>Stop missing calls. Start booking more customers.</h1>
            <p>
              Essential Solutions builds AI receptionist, follow-up, CRM, review growth, and appointment systems for service businesses that need more revenue without hiring more staff.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href={ghlBookingUrl}>Book Your Free Systems Audit</a>
              <a className="btn btn-outline" href="#solutions">See How It Works</a>
            </div>
            <div className="proof-row">
              <span>Missed-call recovery</span>
              <span>AI appointment booking</span>
              <span>Automated follow-up</span>
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
            <div className="dashboard-card floating-card main-card">
              <div className="card-top">
                <span>Live Lead Activity</span>
                <strong>AI Active</strong>
              </div>
              <div className="metric-grid">
                <div><strong>37</strong><span>Missed calls recovered</span></div>
                <div><strong>24</strong><span>Appointments booked</span></div>
                <div><strong>4.8★</strong><span>Review rating</span></div>
              </div>
              <div className="activity-feed">
                <p><b>New call summary:</b> Customer asked for brake repair quote.</p>
                <p><b>AI follow-up sent:</b> Appointment link delivered by SMS.</p>
                <p><b>Pipeline updated:</b> Lead moved to Scheduled.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pain-band">
          <h2>Every unanswered call is a customer your competitor might win.</h2>
          <div className="pain-grid">
            <div>Missed calls</div><div>Slow follow-up</div><div>Messy lead tracking</div><div>No review system</div><div>No-shows</div><div>Wasted admin time</div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-heading">
            <span className="eyebrow dark">What we install</span>
            <h2>Business systems that capture, follow up, book, and track.</h2>
          </div>
          <div className="solution-grid">
            <article><span>01</span><h3>AI Receptionist</h3><p>Answers common questions, screens calls, qualifies leads, and pushes serious prospects toward booking.</p></article>
            <article><span>02</span><h3>Missed-Call Text Back</h3><p>When your team misses a call, the system responds immediately so the lead does not go cold.</p></article>
            <article><span>03</span><h3>Automated Follow-Up</h3><p>SMS, email, and voice follow-up sequences keep prospects engaged until they book or reply.</p></article>
            <article><span>04</span><h3>CRM & Pipeline Tracking</h3><p>Every call, form, message, lead source, and appointment gets tracked in one clean customer pipeline.</p></article>
            <article><span>05</span><h3>Review Growth</h3><p>Automated review requests help happy customers build your reputation without manual chasing.</p></article>
            <article><span>06</span><h3>Calendar Booking</h3><p>Customers can book, confirm, reschedule, and receive reminders without tying up your staff.</p></article>
          </div>
        </section>

        <section className="section-dark stat-strip" id="roi">
          <div>
            <strong>Recover</strong>
            <span>missed opportunities</span>
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
            <span className="eyebrow dark">Simple process</span>
            <h2>We audit, build, launch, and improve the system with you.</h2>
            <p className="large-text">The offer is not “software access.” The offer is a working revenue recovery system installed into your business.</p>
          </div>
          <div className="steps">
            <div><b>1</b><h3>Audit</h3><p>We map where calls, forms, appointments, and reviews are being lost.</p></div>
            <div><b>2</b><h3>Build</h3><p>We create the CRM, AI workflows, automations, calendars, and lead routing.</p></div>
            <div><b>3</b><h3>Launch</h3><p>We test the system and train the team on how to use it.</p></div>
            <div><b>4</b><h3>Optimize</h3><p>We review performance and adjust the system as your business grows.</p></div>
          </div>
        </section>

        <section className="section" id="industries">
          <div className="section-heading">
            <span className="eyebrow dark">Built for service businesses</span>
            <h2>Start with the businesses where every call matters.</h2>
          </div>
          <div className="industry-grid">
            <a href="/auto-repair">Auto Repair</a><a href="/med-spas">Med Spas</a><a href="/dental">Dental Offices</a><a href="/home-services">Home Services</a><a href="/law-offices">Law Offices</a><a href="/logistics">Logistics</a><a href="/contractors">Contractors</a><a href="/cleaning-companies">Cleaning Companies</a>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="section-heading">
            <span className="eyebrow dark">Packages</span>
            <h2>Premium systems for businesses ready to stop leaking revenue.</h2>
          </div>
          <div className="pricing-grid">
            <article>
              <h3>Starter</h3><strong>$499/mo</strong><p>For basic lead capture and follow-up.</p>
              <ul><li>CRM setup</li><li>Missed-call text-back</li><li>Appointment calendar</li><li>Review request automation</li></ul>
              <a href={ghlBookingUrl}>Get Started</a>
            </article>
            <article className="featured">
              <div className="badge">Most Popular</div>
              <h3>Growth</h3><strong>$899/mo</strong><p>For businesses ready to automate calls, booking, follow-up, and reviews.</p>
              <ul><li>Everything in Starter</li><li>AI receptionist setup</li><li>Advanced follow-up workflows</li><li>Unified conversation inbox</li><li>Monthly optimization report</li></ul>
              <a href={ghlBookingUrl}>Get Started</a>
            </article>
            <article>
              <h3>Pro</h3><strong>$1,499/mo</strong><p>For deeper automation and heavier support.</p>
              <ul><li>Everything in Growth</li><li>Advanced AI training</li><li>Multi-team setup</li><li>Priority support</li><li>Quarterly strategy session</li></ul>
              <a href={ghlBookingUrl}>Get Started</a>
            </article>
          </div>
          <p className="pricing-note">Usage-based phone, SMS, email, and AI costs may apply depending on volume.</p>
        </section>

        <FAQ />

        <section className="audit section-dark" id="audit">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Book a free systems audit.</h2>
            <p>We’ll look at where leads are being lost and show you what should be automated first.</p>
          </div>
          {ghlFormUrl ? (
            <iframe className="ghl-frame" src={ghlFormUrl} title="Essential Solutions audit form" />
          ) : (
            <div className="audit-card">
              <h3>Connect GoHighLevel here</h3>
              <p>This block is ready for your GoHighLevel form or calendar embed. Once you create the form, add the URL in Vercel as <b>NEXT_PUBLIC_GHL_FORM_URL</b>.</p>
              <a className="btn btn-gold" href={ghlBookingUrl}>Book Demo</a>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
