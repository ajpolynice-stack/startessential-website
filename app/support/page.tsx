import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, HelpCircle, LifeBuoy, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { PageFrame, PageHero, InteriorCta } from "@/components/Interior";
import { site } from "@/lib/site";

export const metadata: Metadata = {title:"Support & FAQ | Essential Solutions",description:"Answers to common Essential Solutions questions. Contact us about setup, plans, onboarding, and integrations."};
const faq=[
 ["Can Essential Solutions connect to my existing website?","In many cases, yes. We'll review your existing website and forms, then connect them through a supported integration or form workflow. Exact compatibility depends on your current setup."],
 ["Can I use my own business phone number?","Possibly. We can evaluate call forwarding or number porting based on your provider and account. We'll review this as part of onboarding."],
 ["Do I need to understand any of the technology?","No. You provide business information, approve the setup, and test key scenarios. We handle configuration of the approved features."],
 ["When does billing begin?","Pricing and setup terms are reviewed with you before activation or checkout. The website intake form only submits an inquiry and does not itself charge a card."],
 ["What if my business already has a calendar?","We'll discuss which calendars and appointment sources are supported and how they should connect. Not every calendar is supported in the same way."],
 ["Is unlimited calling or messaging included?","Not automatically. Subscription prices and usage-based communication charges are separate when specified. We clarify expected usage and any applicable costs during onboarding."],
 ["How is customer consent handled?","Text and email outreach needs appropriate permissions and must respect opt-outs. We review relevant settings and test consent and messaging restrictions before activating automated outreach."],
 ["Can I change plans later?","Contact us to discuss an upgrade, feature changes, or a revised setup. We'll explain any billing or implementation differences before making changes."]
];
export default function SupportPage(){return <PageFrame><PageHero kicker="WE'RE HERE TO HELP" title="Questions?" highlighted="We've got answers." description="Understand your options before you commit. We can help with plan selection, business setup, integrations and next steps."/>
<section className="interior-section container"><div className="support-contact-grid"><article><div className="solution-icon tone-blue"><Mail/></div><h2>Talk to our team</h2><p>Ask about your business, package options or an existing inquiry.</p><a href={`mailto:${site.email}`} className="text-arrow">{site.email} <ArrowRight size={17}/></a></article><article><div className="solution-icon tone-yellow"><CalendarClock/></div><h2>Ready to begin?</h2><p>Our short intake form helps us understand what you need first.</p><Link href="/get-started" className="text-arrow">Start your intake <ArrowRight size={17}/></Link></article><article><div className="solution-icon tone-red"><LifeBuoy/></div><h2>Already a customer?</h2><p>Use your existing client portal for account access.</p><a href={site.login} target="_blank" rel="noopener noreferrer" className="text-arrow">Client login <ArrowRight size={17}/></a></article></div></section>
<section className="soft-feature-section"><div className="container interior-section"><div className="section-heading center"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Everything you're wondering.</h2></div><div className="support-faq-grid">{faq.map(([q,a])=><article key={q}><HelpCircle size={21}/><div><h3>{q}</h3><p>{a}</p></div></article>)}</div><div className="support-bottom-note"><ShieldCheck size={19}/> Have another question? Email <a href={`mailto:${site.email}`}>{site.email}</a> and we'll help you find the next step.</div></div></section>
<InteriorCta title="Make customer follow-up one less thing to worry about." description="Get started with Connect or Growth and take the first step toward simpler communication."/>
</PageFrame>}
