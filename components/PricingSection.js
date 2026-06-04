'use client';
import { useState } from 'react';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Reviews & follow-up on autopilot.',
    monthly: 179,
    annual: 179 * 11,
    setup: 199,
    badge: null,
    features: [
      'Automated Google review requests',
      'Missed call text back',
      'Lead follow-up automation',
      'Website chat widget',
      'CRM contact organizer',
      '500 SMS / month',
      '1 phone number',
    ],
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'AI answers calls. Automation handles the rest.',
    monthly: 497,
    annual: 497 * 11,
    setup: 499,
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'ESA Voice AI — answers every call 24/7',
      'Appointment booking automation',
      'Facebook & Instagram DM AI',
      'Google Business messaging',
      'Full CRM pipeline + reporting',
      '2,500 SMS / 500 AI minutes / month',
    ],
    cta: 'Choose Growth',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Full business infrastructure, fully automated.',
    monthly: 997,
    annual: 997 * 11,
    setup: 799,
    badge: null,
    features: [
      'Everything in Growth',
      'Outbound AI campaigns',
      'Content AI & social planner',
      'Funnel & landing page builder',
      'Advanced workflow engineering',
      'Priority support',
      '10,000 SMS / 2,000 AI minutes / month',
    ],
    cta: 'Go Pro',
  },
];

const fmt = (n) => '$' + n.toLocaleString();

export default function PricingSection({ bookingUrl = '/contact' }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <span className="eyebrow dark">Pricing</span>
        <h2>Simple pricing. Real results from day one.</h2>
        <p className="pricing-subhead">One-time setup fee covers full configuration and onboarding. No surprises.</p>
        <div className="toggle-row">
          <button className={!annual ? 'tog active' : 'tog'} onClick={() => setAnnual(false)}>Monthly</button>
          <button className={annual ? 'tog active gold' : 'tog'} onClick={() => setAnnual(true)}>Annual <span className="save-badge">Save 1 month</span></button>
        </div>
      </div>

      <div className="plans-row">
        {plans.map((p) => (
          <div className={`plan-card${p.badge ? ' plan-featured' : ''}`} key={p.id}>
            {p.badge && <div className="plan-badge-top">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-tagline">{p.tagline}</div>
            <div className="plan-price">
              <span className="plan-amount">{fmt(annual ? p.annual : p.monthly)}</span>
              <span className="plan-per">{annual ? '/yr' : '/mo'}</span>
            </div>
            <div className="plan-setup">+ {fmt(p.setup)} one-time setup</div>
            <a className="plan-btn" href={bookingUrl}>{p.cta}</a>
            <ul className="plan-features">
              {p.features.map((f) => <li key={f}><span className="check">✓</span>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="pricing-custom-bar">
        <div>
          <strong>Need something custom?</strong>
          <span>Multi-location, franchises, logistics, complex workflows — we scope it after a discovery call.</span>
        </div>
        <a href={bookingUrl} className="btn btn-gold">Schedule a Consultation</a>
      </div>
      <p className="pricing-footnote">Usage-based SMS, phone, and AI costs apply at volume. All plans include clear usage tiers.</p>
    </section>
  );
}
