import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy | Essential Solutions',
  description: 'Privacy policy for Essential Solutions services.',
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main>
        <section className="section-dark page-hero-short">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </section>
        <section className="section legal-content">
          <div className="legal-body">
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you sign up for services, complete intake forms, or contact us. This includes business name, contact name, email address, phone number, and business information. We also collect usage data from your use of the platform, including call logs, SMS records, and automation activity.</p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services; process transactions; send service-related communications; respond to inquiries; and comply with legal obligations. We do not sell your personal information to third parties.</p>

            <h2>3. Customer Data</h2>
            <p>Your customers' contact information stored in the CRM is your data. We process it only to provide you the services you have contracted for. We do not use your customers' data for our own marketing or share it with third parties except as required to provide the service (e.g., SMS carriers, AI processing providers).</p>

            <h2>4. Third-Party Services</h2>
            <p>Our platform integrates with third-party services including but not limited to Twilio for phone and SMS, and AI processing providers. These providers have their own privacy policies and data handling practices. We select providers with strong data protection standards.</p>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. Following account termination, we retain data for up to 30 days to allow for export, after which it is deleted from active systems.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at the information below. We will respond to requests within 30 days.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses cookies for basic functionality and analytics. You may disable cookies in your browser settings, though this may affect site functionality.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of material changes by posting the new policy on our website and updating the effective date.</p>

            <h2>10. Contact</h2>
            <p>For privacy-related questions or requests, contact us at <a href="tel:19789156499">1-978-915-6499</a> or through our <a href="/contact">contact page</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
