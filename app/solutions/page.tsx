import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Headphones, MessageSquareText, PhoneCall, Send, Sparkles, Star, Workflow } from "lucide-react";
import { BenefitList, InteriorCta, PageFrame, PageHero } from "@/components/Interior";

export const metadata: Metadata = { title: "Solutions | Essential Solutions", description: "AI answering, smart booking, follow-up, reminders and reviews for busy service businesses." };

const items = [
  { icon: <MessageSquareText />, color: "blue", tag: "CONVERT VISITORS", title: "AI website chat", description: "Answer common website questions, guide visitors toward a next step, and capture inquiries without requiring someone to monitor the chat all day.", benefits: ["Available as an always-on first point of contact", "Captures contact details and questions", "Fits into your existing website journey"] },
  { icon: <PhoneCall />, color: "red", tag: "NEVER MISS A MOMENT", title: "AI phone receptionist", description: "Help callers get answers, share details, and request appointments even when your team is working with customers. Available in Essential Growth.", benefits: ["Helps cover after-hours and busy periods", "Handles approved frequently asked questions", "Passes inquiries into your follow-up process"] },
  { icon: <CalendarCheck />, color: "yellow", tag: "STAY ORGANIZED", title: "Smart booking & reminders", description: "Connect appointment requests with your business calendar and send useful confirmations and reminders once the relevant integrations are configured.", benefits: ["Reduces manual back-and-forth", "Keeps customers informed", "Uses configured business availability"] },
  { icon: <Send />, color: "blue", tag: "KEEP MOMENTUM", title: "Automated follow-up", description: "Build a consistent response process for new inquiries, appointments, and customers so opportunities do not get lost between tasks.", benefits: ["Timely communication", "Useful lead follow-up paths", "Consent-aware SMS and email setup"] },
  { icon: <Star />, color: "yellow", tag: "PROTECT REPUTATION", title: "Reviews & customer feedback", description: "Invite customers to share feedback and leave honest public reviews, while surfacing service concerns to your team for prompt follow-up.", benefits: ["Consistent review invitations", "Internal awareness of issues", "Customer feedback tracking"] },
  { icon: <Workflow />, color: "red", tag: "RETURN TO OLD LEADS", title: "Lead reactivation", description: "Reach back out to opted-in contacts who have gone quiet with a thoughtful, limited re-engagement sequence. Available in Essential Growth.", benefits: ["Makes use of existing lead interest", "Controlled, consent-aware outreach", "Keeps communication coordinated"] },
];

export default function SolutionsPage() {
  return <PageFrame>
    <PageHero kicker="ESSENTIAL SOLUTIONS" title="Less busywork." highlighted="More business." description="Answer questions, turn interest into bookings, and keep customers engaged. We help service businesses stay responsive while they focus on doing great work." />
    <section className="interior-section container"><div className="section-heading"><span className="eyebrow">WHAT WE HELP YOU DO</span><h2>One connected experience.<br/><span>Built around your business.</span></h2><p>Start with the essentials. Add advanced AI call handling and reactivation as you grow.</p></div>
      <div className="solution-grid">{items.map((item) => <article key={item.title} className="solution-card"><div className={`solution-icon tone-${item.color}`}>{item.icon}</div><span className="solution-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.description}</p><BenefitList items={item.benefits}/></article>)}</div>
    </section>
    <section className="soft-feature-section"><div className="container soft-feature-grid"><div className="feature-emblem"><Sparkles size={45}/><div className="emblem-orbit orbit-one"/><div className="emblem-orbit orbit-two"/></div><div><span className="eyebrow">YOU STAY IN CONTROL</span><h2>Automation that works with your team.</h2><p>Your setup is tailored to approved messaging, your actual calendar, and your business preferences. We'll help you choose what customers see and when a person should take over.</p><Link className="text-arrow" href="/how-it-works">See how setup works <ArrowRight size={17}/></Link></div></div></section>
    <section className="interior-section container"><div className="section-heading center"><span className="eyebrow">BUILT FOR SERVICE</span><h2>Flexible enough for how you work.</h2></div><div className="industry-grid"><div><Headphones/><strong>Salons & wellness</strong><p>Stay on top of appointments while your team serves customers.</p></div><div><Clock/><strong>Home services</strong><p>Capture calls and questions while you're out on a job.</p></div><div><CheckCircle2/><strong>Professional services</strong><p>Keep inquiries, follow-ups and scheduling organized.</p></div></div></section>
    <InteriorCta />
  </PageFrame>;
}
