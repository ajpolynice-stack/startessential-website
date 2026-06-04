import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms & Conditions | Essential Solutions',
  description: 'Terms and conditions for Essential Solutions services.',
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-dark page-hero-short">
          <span className="eyebrow">Legal</span>
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2026</p>
        </section>
        <section className="section legal-content">
          <div className="legal-body">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing or using Essential Solutions services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>

            <h2>2. Services Description</h2>
            <p>Essential Solutions provides AI-powered business automation services including but not limited to: AI call handling, automated follow-up, CRM setup, appointment booking, review growth workflows, and automation systems. Services are delivered through a software platform and include configuration, onboarding, and ongoing support as outlined in your selected plan.</p>

            <h2>3. Fees and Payment</h2>
            <p>Services are billed on a monthly or annual basis as selected at signup. A one-time setup fee is required for all plans and is billed at the start of service. Setup fees are non-refundable as they represent labor for configuration and onboarding. Monthly subscriptions may be cancelled at any time with effect from the next billing cycle. Annual subscriptions are non-refundable after the setup has been completed.</p>

            <h2>4. Usage and Fair Use</h2>
            <p>All plans include defined usage allowances for SMS, phone minutes, and AI processing. Overages are billed separately at published rates. Excessive or abusive use of the platform may result in service throttling or termination. You agree not to use the platform for spam, illegal communications, or any activity that violates carrier guidelines or applicable law.</p>

            <h2>5. A2P 10DLC Compliance</h2>
            <p>All SMS messaging through Essential Solutions must comply with A2P 10DLC registration requirements. You are responsible for providing accurate business information for brand and campaign registration. Essential Solutions will assist with registration but is not liable for delays or rejections caused by inaccurate information you provide.</p>

            <h2>6. Intellectual Property</h2>
            <p>Essential Solutions retains all rights to its platform, workflows, automation templates, and proprietary systems. You retain ownership of your business data and customer contacts stored within the platform.</p>

            <h2>7. Data and Privacy</h2>
            <p>We take data privacy seriously. Please review our Privacy Policy for full details on how we collect, store, and use your data and your customers' data.</p>

            <h2>8. Limitation of Liability</h2>
            <p>Essential Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our total liability for any claim shall not exceed the total fees paid by you in the three months preceding the claim.</p>

            <h2>9. Termination</h2>
            <p>Either party may terminate services with written notice. Upon termination, your access to the platform will cease at the end of the current billing period. We will provide a reasonable data export window of 30 days following termination.</p>

            <h2>10. Governing Law</h2>
            <p>These terms are governed by the laws of the Commonwealth of Massachusetts. Any disputes shall be resolved in the courts of Essex County, Massachusetts.</p>

            <h2>11. Contact</h2>
            <p>For questions about these terms, contact us at <a href="tel:19789156499">1-978-915-6499</a> or through our <a href="/contact">contact page</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
