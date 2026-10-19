import type { Metadata } from "next";
import { PageFrame, PageHero, InteriorCta } from "@/components/Interior";
import PricingInteractive from "@/components/PricingInteractive";

export const metadata: Metadata = { title: "Pricing | Essential Solutions", description: "Compare Essential Connect and Essential Growth. Clear pricing for answering, booking and customer follow-up." };

export default function PricingPage(){return <PageFrame>
  <PageHero kicker="SIMPLE, CLEAR PRICING" title="The right plan." highlighted="Room to grow." description="Pick the level of support your business needs today. Every plan is built to reduce missed opportunities and keep your customers engaged."/>
  <PricingInteractive />
  <InteriorCta title="Your next customer deserves a quick answer." description="Tell us what you need and we'll help you launch the right solution."/>
</PageFrame>}
