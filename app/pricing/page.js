import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PricingSection from '../../components/PricingSection';
import FAQ from '../../components/FAQ';
import { ghlBookingUrl } from '../../components/data';

export const metadata = {
  title: 'Pricing | Essential Solutions',
  description: 'Simple, transparent pricing for AI-powered business automation. Start at $179/month.',
};

export default function Pricing() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-dark page-hero-short">
          <span className="eyebrow">Pricing</span>
          <h1>Start small. Scale when it makes sense.</h1>
          <p>Every plan includes a one-time setup fee that covers full configuration and onboarding — so the system actually works from day one, not someday.</p>
        </section>
        <PricingSection bookingUrl={ghlBookingUrl} />
        <section className="section feature-compare-section">
          <div className="section-heading">
            <span className="eyebrow dark">Compare Plans</span>
            <h2>What is included at each tier.</h2>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter<br/><span>$179/mo</span></th>
                  <th className="featured-col">Growth<br/><span>$497/mo</span></th>
                  <th>Pro<br/><span>$997/mo</span></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Automated review requests', true, true, true],
                  ['Missed call text back', true, true, true],
                  ['Website chat widget', true, true, true],
                  ['CRM & contact organization', 'Basic', 'Full', 'Full'],
                  ['Lead follow-up automation', 'Basic', 'Advanced', 'Advanced'],
                  ['SMS included / month', '500', '2,500', '10,000'],
                  ['ESA Voice AI receptionist', false, true, true],
                  ['Appointment booking AI', false, true, true],
                  ['Facebook & Instagram DM AI', false, true, true],
                  ['Google Business messaging', false, true, true],
                  ['Review response AI', false, true, true],
                  ['Reporting dashboard', false, true, true],
                  ['AI voice minutes / month', '—', '500', '2,000'],
                  ['Phone numbers included', '1', '2', '4'],
                  ['Outbound AI campaigns', false, false, true],
                  ['Content AI & social planner', false, false, true],
                  ['Funnel & landing page builder', false, false, true],
                  ['Priority support', false, false, true],
                  ['User seats', '1', 'Multiple', 'Unlimited'],
                  ['One-time setup fee', '$199', '$499', '$799'],
                ].map(([feat, s, g, p]) => (
                  <tr key={feat}>
                    <td>{feat}</td>
                    <td>{s === true ? '✓' : s === false ? '—' : s}</td>
                    <td className="featured-col">{g === true ? '✓' : g === false ? '—' : g}</td>
                    <td>{p === true ? '✓' : p === false ? '—' : p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
