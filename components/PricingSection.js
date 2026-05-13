'use client';

import { useState } from 'react';

const plans = [
  {
    name: 'Essential Core',
    label: 'Lead Response Foundation',
    monthly: 599,
    setup: 750,
    description: 'For small businesses that need faster response, cleaner lead tracking, and a modern front desk without hiring more staff.',
    bestFor: 'Best for contractors, solo operators, small offices, and local service businesses.',
    features: [
      'Esa Voice AI-powered call handling',
      'Smart text follow-up for fallback lead recovery',
      'CRM and lead pipeline setup',
      'Website chat widget',
      'Appointment booking and calendar reminders',
      'Automated review requests',
      'Basic follow-up automations',
      '1 phone number included',
      '500 SMS/month included',
      '150 AI voice minutes/month included',
      '1 user seat included',
    ],
    outcome: 'Core helps the business stop losing opportunities, organize customer communication, and turn more incoming interest into booked appointments.',
    cta: 'Start with Core',
    featured: false,
  },
  {
    name: 'Essential Growth',
    label: 'Most Popular',
    monthly: 999,
    setup: 1500,
    description: 'For growing businesses ready to automate communication across more channels and gain better visibility into lead flow.',
    bestFor: 'Best for established service businesses, teams, busy offices, and owners who want to scale.',
    features: [
      'Everything in Essential Core',
      'Esa Engage for Facebook, Instagram, and Google messaging',
      'Advanced conversational AI across connected channels',
      'Advanced automation workflows',
      'Lead routing and reactivation campaigns',
      'Reporting and analytics dashboard',
      'Funnel and landing page builder',
      'Social planner',
      'Multiple user seats',
      '2 phone numbers included',
      '3,000 SMS/month included',
      '750 AI voice minutes/month included',
    ],
    outcome: 'Growth turns the business into a communication hub where calls, texts, chat, social, and Google inquiries can be captured, organized, followed up with, and converted faster.',
    cta: 'Choose Growth',
    featured: true,
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
    <section className="section pricing v6-pricing" id="pricing">
      <div className="section-heading">
        <span className="eyebrow dark">Packages</span>
        <h2>Premium systems for businesses ready to stop leaking revenue.</h2>
        <p className="section-subhead">Choose monthly or pay annually and receive one month free. Implementation & Configuration is billed separately so your system is built correctly from day one.</p>
      </div>

      <div className="billing-toggle-wrap" aria-label="Billing toggle">
        <div className="billing-toggle">
          <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')} type="button">Monthly</button>
          <button className={billing === 'annual' ? 'active gold' : ''} onClick={() => setBilling('annual')} type="button">Annual</button>
        </div>
        <p>{billing === 'annual' ? 'Annual billing includes one month free.' : 'Switch to annual to get one month free.'}</p>
      </div>

      <div className="pricing-grid v6-pricing-grid">
        {plans.map((plan) => {
          const annual = plan.monthly * 11;
          const price = billing === 'annual' ? annual : plan.monthly;
          return (
            <article className={plan.featured ? 'featured v6-plan' : 'v6-plan'} key={plan.name}>
              <div className="plan-topline">
                <span className={plan.featured ? 'plan-badge gold-badge' : 'plan-badge'}>{plan.label}</span>
              </div>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price-row">
                <strong>{money(price)}</strong>
                <span>{billing === 'annual' ? '/year' : '/month'}</span>
              </div>
              {billing === 'annual' ? (
                <p className="annual-note">Paid upfront. Includes 1 month free.</p>
              ) : (
                <p className="annual-note muted-note">Annual option: {money(annual)}/year.</p>
              )}

              <div className="implementation-box">
                <span>Implementation & Configuration</span>
                <b>{money(plan.setup)}</b>
                <p>Includes AI configuration, communication setup, CRM structure, workflow deployment, and onboarding.</p>
              </div>

              <p className="best-for">{plan.bestFor}</p>

              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>

              <div className="outcome-box"><b>Why it matters:</b> {plan.outcome}</div>
              <a href={bookingUrl}>{plan.cta}</a>
            </article>
          );
        })}

        <article className="v6-plan custom-plan">
          <div className="plan-topline"><span className="plan-badge">Built Around Your Operation</span></div>
          <h3>Essential Custom Solutions</h3>
          <p className="plan-description">For businesses that need deeper operational automation, custom workflows, integrations, outbound engagement, or multi-location infrastructure.</p>
          <div className="custom-price-card">
            <span>Pricing</span>
            <strong>Custom</strong>
            <p>Scoped after a discovery call so pricing matches the actual business needs, usage, integrations, and implementation depth.</p>
          </div>
          <div className="implementation-box">
            <span>Implementation & Configuration</span>
            <b>Scoped after consultation</b>
            <p>Built around operational complexity, locations, workflows, integrations, and support requirements.</p>
          </div>
          <p className="best-for">Best for larger teams, logistics operations, dealerships, franchises, multi-location companies, and businesses with unique processes.</p>
          <ul>
            <li>Everything in Essential Growth</li>
            <li>Custom workflow engineering</li>
            <li>Outbound AI follow-up and reactivation systems</li>
            <li>API and software integrations</li>
            <li>Multi-location support options</li>
            <li>Custom reporting and operational dashboards</li>
            <li>Usage and pricing scoped to the business</li>
          </ul>
          <div className="outcome-box"><b>Why it matters:</b> Custom Solutions is a scoped operational buildout designed around the way your business actually works.</div>
          <a href={bookingUrl}>Schedule a Consultation</a>
        </article>
      </div>
      <p className="pricing-note">Usage-based phone, SMS, email, and AI costs may apply depending on volume. All packages are designed with clear usage expectations and scalable upgrade paths.</p>
    </section>
  );
}
