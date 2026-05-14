import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PricingSection from '../../components/PricingSection';
import FAQ from '../../components/FAQ';
import { ghlBookingUrl } from '../../components/data';

export const metadata = { title: 'Pricing | Essential Solutions', description: 'Essential Solutions service packages and implementation options.' };

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-dark page-hero-short">
          <span className="eyebrow">Pricing</span>
          <h1>Simple packages built around business outcomes.</h1>
          <p>Choose the level of implementation and support that matches your current growth stage. Exact recommendations are finalized after a free systems audit.</p>
        </section>
        <PricingSection bookingUrl={ghlBookingUrl} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
