'use client';

import { useState } from 'react';

const plans = [
  {
    id: 'starter',
    name: 'Essential Starter',
    label: 'Start Here',
    tagline: 'More reviews. Faster follow-up. Zero extra effort.',
    monthly: 179,
    setup: 199,
    description: 'Built for businesses that want immediate results without complexity. Automated reviews and follow-up start working the day you launch.',
    bestFor: 'Best for local service businesses, contractors, solo operators, and anyone tired of chasing reviews manually.',
    features: [
      'Automated review requests after every job',
      'Missed call text back — instant response to every missed call',
      'Basic lead follow-up automation',
      'Website chat widget',
      'Unified inbox (SMS + web chat)',
      'CRM contact organization',
      '1 phone number included',
      '500 SMS/month included',
      '1 user seat',
    ],
    notIncluded: ['AI voice receptionist', 'Appointment booking AI', 'Social channel automation'],
    outcome: 'Starter puts your reputation on autopilot and makes sure no missed call goes cold — without requiring your time to manage it.',
    cta: 'Get Started',
    featured: false,
  },
  {
    id: 'growth',
    name: 'Essential Growth',
    label: 'Most Popular',
    tagline: 'AI answers your phones. Automation handles the rest.',
    monthly: 497,
    setup: 499,
    description: 'For businesses ready to stop missing calls and automate their entire front-desk communication — calls, texts, bookings, and social.',
    bestFor: 'Best for established service businesses, busy offices, and owners who want to scale without hiring.',
    features: [
      'Everything in Essential Starter',
      'ESA Voice — AI answers every call 24/7',
      'Appointment booking and calendar automation',
      'Facebook & Instagram DM automation',
      'Google Business messaging',
      'Review response AI',
      'Full CRM pipeline + reporting dashboard',
      'Advanced follow-up workflows',
      '2 phone numbers included',
      '2,500 SMS/month included',
      '500 AI voice minutes/month',
      'Multiple user seats',
    ],
    outcome: 'Growth turns your business into a communication machine — calls answered, leads followed up, bookings filled, and reviews growing, automatically.',
    cta: 'Choose Growth',
    featured: true,
  },
  {
    id: 'pro',
    name: 'Essential Pro',
    label: 'Full System',
    tagline: 'Complete AI-powered business infrastructure.',
    monthly: 997,
    setup: 799,
    description: 'For businesses that want the full operational stack — every channel automated, advanced workflows, and a system built to scale.',
    bestFor: 'Best for larger teams, multi-location businesses, and owners who want full automation across every touchpoint.',
    features: [
      'Everything in Essential Growth',
      'Advanced automation workflow engineering',
      'Outbound AI follow-up and reactivation campaigns',
      'Social media content planner',
      'Content AI for emails and campaigns',
      'Funnel and landing page builder',
      'Lead routing and advanced pipeline logic',
      'Priority support and system optimization',
      '4 phone numbers included',
      '10,000 SMS/month included',
      '2,000 AI voice minutes/month',
      'Unlimited user seats',
    ],
    outcome: 'Pro is a complete operational buildout — every call, text, review, booking, and follow-up running automatically so you can focus on the work.',
    cta: 'Go Pro',
    featured: false,
  },
];

function money(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function PricingSection({ bookingUrl = '/contact' }) {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="section pricing v8-pricing" id="pricing">
      <div className="section-heading">
        <span className="eyebrow dark">Packages</span>
        <h2>Simple pricing. Real results from day one.</h2>
        <p className="section-subhead">Every plan includes a one-time setup fee covering full configuration, onboarding, and launch. Pay annually and get one month free.</p>
      </div>

      <div className="billing-toggle-wrap" aria-label="Billing toggle">
        <div className="billing-toggle">
          <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')} type="button">Monthly</button>
          <button className={billing === 'annual' ? 'active gold' : ''} onClick={() => setBilling('annual')} type="button">Annual — Save 1 Month</button>
        </div>
        {billing === 'annual' && <p>Annual billing includes one month free.</p>}
      </div>

      <div className="pricing-grid v8-pricing-grid">
        {plans.map((plan) => {
          const annual = plan.monthly * 11;
          const price = billing === 'annual' ? annual : plan.monthly;
          return (
            <article className={`v8-plan${plan.featured ? ' featured' : ''}`} key={plan.id}>
              <div className="plan-topline">
                <span className={`plan-badge${plan.featured ? ' gold-badge' : ''}`}>{plan.label}</span>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-tagline">{plan.tagline}</p>
              <p className="plan-description">{plan.description}</p>

              <div className="plan-price-row">
                <strong>{money(price)}</strong>
                <span>{billing === 'annual' ? '/year' : '/month'}</span>
              </div>
              {billing === 'annual' ? (
                <p className="annual-note">Paid upfront. Includes 1 month free.</p>
              ) : (
                <p className="annual-note muted-note">Annual: {money(annual)}/year — save {money(plan.monthly)}.</p>
              )}

              <div className="implementation-box">
                <span>One-Time Setup Fee</span>
                <b>{money(plan.setup)}</b>
                <p>Covers full configuration, AI setup, CRM build-out, workflow deployment, and onboarding. Billed once at start.</p>
              </div>

              <p className="best-for">{plan.bestFor}</p>

              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <div className="outcome-box"><b>Why it matters:</b> {plan.outcome}</div>
              <a className="plan-cta-btn" href={bookingUrl}>{plan.cta}</a>
            </article>
          );
        })}
      </div>

      <div className="custom-tier-band">
        <div className="custom-tier-inner">
          <div>
            <span className="eyebrow">Custom Solutions</span>
            <h3>Need something built around your operation?</h3>
            <p>Multi-location, logistics, dealerships, franchises, or businesses with unique workflows. We scope everything after a discovery call.</p>
          </div>
          <a className="btn btn-gold" href={bookingUrl}>Schedule a Consultation</a>
        </div>
      </div>

      <p className="pricing-note">Usage-based phone, SMS, and AI costs may apply at volume. All plans include clear usage tiers and scalable upgrade paths.</p>
    </section>
  );
}
