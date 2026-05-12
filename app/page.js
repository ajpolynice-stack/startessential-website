/*
 * This is the main homepage for Start Essential.  It stitches together
 * multiple sections to tell a compelling story about the benefits of
 * AI‑powered business systems.  Each section is implemented as a
 * separate component for clarity and easier maintenance.
 */
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionsSection from '../components/SolutionsSection';
import StatsSection from '../components/StatsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import IndustriesSection from '../components/IndustriesSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <StatsSection />
        <HowItWorksSection />
        <IndustriesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}