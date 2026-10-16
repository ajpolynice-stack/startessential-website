import type { Metadata } from "next";
import { PageFrame } from "@/components/Interior";
import IntakeClient from "@/components/IntakeClient";
import type { PlanId, BillingCycle } from "@/lib/site";

export const metadata: Metadata = { title: "Get Started | Essential Solutions", description: "Choose Essential Connect or Essential Growth and tell us about your service business." };

type Search = {plan?: string; cycle?: string};
export default async function GetStartedPage({ searchParams }: { searchParams: Promise<Search> }) {
  const query = await searchParams;
  const plan: PlanId = query?.plan === "growth" ? "growth" : "connect";
  const cycle: BillingCycle = query?.cycle === "annual" ? "annual" : "monthly";
  return <PageFrame><section className="intake-hero"><div className="container"><div className="eyebrow">LET'S GET STARTED</div><h1>A better way to follow up starts here<span className="yellow-dot">.</span></h1><p>Select a package and tell us about your business. We'll help you figure out the right next steps.</p></div></section><section className="intake-section container"><IntakeClient plan={plan} cycle={cycle} /><aside className="intake-aside"><h2>What happens after you submit?</h2><div><span>01</span><p><strong>We review your request.</strong><br/>We'll look at the package and details you choose.</p></div><div><span>02</span><p><strong>We talk through setup.</strong><br/>We'll confirm compatibility, integration needs and billing terms.</p></div><div><span>03</span><p><strong>We configure and test.</strong><br/>Once everything is approved, your selected services can be activated.</p></div><p className="intake-aside-note">Submitting this form does not collect payment or activate a subscription.</p></aside></section></PageFrame>;
}
