"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, ChevronRight,
  CirclePlay, Clock3, Headphones, Menu, MessageCircle, Phone, Scissors,
  Send, ShieldCheck, Sparkles, Star, Wrench, X
} from "lucide-react";
import SignupDialog from "./SignupDialog";
import { plans, site, type BillingCycle, type PlanId } from "@/lib/site";

type DemoTab = "answer" | "book" | "followup";
const tabContent: Record<DemoTab, { title: string; description: string; example: string; first: string; second: string; third: string; voice: string }> = {
  answer: {
    title: "Every call answered.",
    description: "AI handles common questions, captures new inquiries, and helps customers get to the next step.",
    example: "Do you install water heaters?",
    first: "Yes, we do! Would you like to schedule a service call? I have openings this week.",
    second: "Yes, Friday morning works.",
    third: "Great! I've booked you for Friday at 9:00 AM. You'll receive a confirmation shortly.",
    voice: "Hi, thanks for calling. How can I help you today?",
  },
  book: {
    title: "Your calendar, filled.",
    description: "Turn customer interest into bookings without the back-and-forth. Keep appointments organized and confirmed.",
    example: "Is there an opening Thursday afternoon?",
    first: "Absolutely. I can help find a time that works with your schedule.",
    second: "2:30 would be perfect!",
    third: "You're all set for Thursday at 2:30 PM. Watch for your confirmation.",
    voice: "Let's find an appointment that works for you.",
  },
  followup: {
    title: "Follow-up, handled.",
    description: "Stay top of mind with timely reminders, helpful replies, and thoughtful follow-up after every interaction.",
    example: "I meant to schedule, but got busy.",
    first: "No problem at all. Want me to help you find another time?",
    second: "Yes, that would help a lot.",
    third: "Happy to help! Let's get you back on the calendar.",
    voice: "Hi! We're checking in to see if you still need a hand.",
  },
};

const faqs = [
  { question: "Can Essential Solutions work with my current website?", answer: "In many cases, yes. We'll review your existing website, inquiry forms, and calendar to choose the right connection method before activating anything." },
  { question: "Will you set everything up for me?", answer: "Setup is included as a service with a one-time setup fee. Our team will configure the approved features and integrations for your business, then test them with you." },
  { question: "What does 'communication usage extra' mean?", answer: "Your subscription covers the plan features listed. Certain usage-based costs, such as calls, texts, emails, or AI usage, may be charged separately based on your signed plan and actual usage. We'll explain these before activation." },
  { question: "Can I keep my existing business phone number?", answer: "Depending on your current provider and phone setup, call forwarding or number porting may be available. We'll confirm the supported option during onboarding." },
  { question: "When does my service start?", answer: "We activate each feature only after the required integrations, messaging permissions, and basic tests are complete. Your onboarding timeline depends on the services and connections you choose." },
];

function DecorativeRibbons() {
  return <div className="hero-ribbon-wrap" aria-hidden="true">
    <svg className="hero-ribbon left-ribbon" viewBox="0 0 500 455" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <defs>
        <linearGradient id="blueRibbon" x1="40" y1="95" x2="422" y2="180"><stop stopColor="#0d7cff"/><stop offset=".75" stopColor="#0459eb"/><stop offset="1" stopColor="#003fae"/></linearGradient>
        <linearGradient id="yellowRibbon" x1="46" y1="180" x2="383" y2="265"><stop stopColor="#ffc70d"/><stop offset=".65" stopColor="#ffe036"/><stop offset="1" stopColor="#ee9d0a"/></linearGradient>
        <linearGradient id="redRibbon" x1="6" y1="335" x2="343" y2="360"><stop stopColor="#fc3457"/><stop offset=".74" stopColor="#e71c3e"/><stop offset="1" stopColor="#c60c26"/></linearGradient>
      </defs>
      <path d="M-92 -34C-35 95 32 106 178 106C334 106 366 139 370 230" stroke="url(#blueRibbon)" strokeWidth="92" strokeLinecap="round"/>
      <path d="M-85 111C-19 186 69 186 188 198C293 210 333 232 331 291" stroke="url(#yellowRibbon)" strokeWidth="93" strokeLinecap="round"/>
      <path d="M-88 368C-27 324 46 301 142 291C240 282 290 302 302 336" stroke="url(#redRibbon)" strokeWidth="88" strokeLinecap="round"/>
    </svg>
    <svg className="hero-ribbon right-ribbon" viewBox="0 0 500 455" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
      <path d="M-92 -34C-35 95 32 106 178 106C334 106 366 139 370 230" stroke="#f62e50" strokeWidth="92" strokeLinecap="round"/>
      <path d="M-85 111C-19 186 69 186 188 198C293 210 333 232 331 291" stroke="#ffd526" strokeWidth="93" strokeLinecap="round"/>
      <path d="M-88 368C-27 324 46 301 142 291C240 282 290 302 302 336" stroke="#0872fa" strokeWidth="88" strokeLinecap="round"/>
    </svg>
  </div>;
}

export default function HomePage() {
  const [tab, setTab] = useState<DemoTab>("answer");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dialog, setDialog] = useState<{ plan: PlanId; cycle: BillingCycle } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const closeDialog = useCallback(() => setDialog(null), []);
  const showSignup = (plan: PlanId = "connect") => setDialog({ plan, cycle });
  const demo = tabContent[tab];
  const nav = [{ label: "Home", href: "#home" }, { label: "Solutions", href: "#solutions" }, { label: "Pricing", href: "#pricing" }, { label: "How It Works", href: "#how-it-works" }, { label: "Support", href: "#support" }];

  return <>
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#home" className="brand-logo" aria-label="Essential Solutions, home"><Image src="/images/essential-logo.webp" width={1212} height={371} alt="Essential Solutions" priority /></a>
        <nav className={`primary-nav ${isMenuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {nav.map(({label,href}, i) => <a onClick={() => setMenuOpen(false)} className={i===0 ? "nav-active" : ""} key={href} href={href}>{label}</a>)}
          <a className="mobile-login" href={site.login} target="_blank" rel="noopener noreferrer">Client login <ArrowUpRight size={15}/></a>
        </nav>
        <div className="header-actions"><a className="btn btn-outline btn-login" href={site.login} target="_blank" rel="noopener noreferrer">Client Login</a><button className="btn btn-yellow btn-get-started" onClick={() => showSignup()}>Get Started</button></div>
        <button type="button" className="mobile-menu-toggle" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(v=>!v)}>{isMenuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="home">
      <section className="hero-section">
        <DecorativeRibbons />
        <div className="hero-content container">
          <div className="hero-topline"><Sparkles size={15}/> More time for the work that matters</div>
          <h1>Keep working<span className="blue-dot">.</span><br/><span className="hero-blue">We&apos;ll handle</span><br/>the follow-up<span className="yellow-dot">.</span></h1>
          <p>AI-powered answering, booking, and follow-up<br className="desktop-only"/> for busy service businesses.</p>
          <div className="hero-buttons"><a href="#pricing" className="btn btn-yellow btn-large">Find your plan <ArrowRight size={19}/></a><a href="#demo" className="btn btn-outline btn-large"><CirclePlay size={20} fill="#10244c" color="#10244c" stroke="white"/> See how it works</a></div>
          <div className="industry-types"><div><Wrench size={27}/><span><strong>Trades &amp; Home Services</strong><small>Contractors · Plumbers · Electricians</small></span></div><i></i><div><Scissors size={29}/><span><strong>Salons &amp; Appointments</strong><small>Nail Salons · Beauty · Wellness</small></span></div></div>
        </div>
      </section>

      <section className="demo-area container" id="demo" aria-label="How Essential Solutions works">
        <div className="demo-card">
          <div className="demo-tabs" role="tablist" aria-label="Product examples">
            <button role="tab" aria-selected={tab === "answer"} className={tab === "answer" ? "active" : ""} onClick={() => setTab("answer")}><Phone size={19} fill="currentColor"/> Answer</button>
            <button role="tab" aria-selected={tab === "book"} className={tab === "book" ? "active" : ""} onClick={() => setTab("book")}><CalendarDays size={19}/> Book</button>
            <button role="tab" aria-selected={tab === "followup"} className={tab === "followup" ? "active" : ""} onClick={() => setTab("followup")}><Send size={19}/> Follow up</button>
            <span className="example-pill">Example</span>
          </div>
          <div className="demo-main" role="tabpanel">
            <div className="demo-explainer"><h2>{demo.title}</h2><p>{demo.description}</p><div className="voice-demo"><div className="voice-avatar"><Image src="/images/essential-mark.png" alt="" width={46} height={45}/></div><div className="voice-body"><div className="voice-bubble">{demo.voice}</div><div className="wave-row"><span className="wave-bars" aria-hidden="true">{Array.from({length:37}, (_,i)=><b key={i} style={{ height: `${7 + Math.round((Math.sin(i * 1.8) + 1) * 9 + (i%4)*2)}px` }}/>)}</span><span>0:04</span></div></div></div></div>
            <div className="chat-example"><div className="chat-line chat-right">{demo.example}</div><div className="chat-line-wrapper"><div className="chat-avatar"><Image src="/images/essential-mark.png" alt="" width={27} height={27}/></div><div className="chat-line chat-ai">{demo.first}</div></div><div className="chat-line chat-right">{demo.second}</div><div className="chat-line-wrapper"><div className="chat-avatar"><Image src="/images/essential-mark.png" alt="" width={27} height={27}/></div><div className="chat-line chat-ai">{demo.third}</div></div><span className="demo-disclaimer">Illustrative conversation</span></div>
          </div>
        </div>
      </section>

      <section id="solutions" className="features container"><h2>Everything you need to stay booked and grow.</h2><div className="feature-grid">
        <article><div className="feature-icon icon-blue"><Phone fill="white" size={25}/></div><h3>24/7 Answering</h3><p>Help customers get answers, share their needs, and request appointments—even after hours.</p></article>
        <article><div className="feature-icon icon-yellow"><CalendarDays size={28}/></div><h3>Smart Booking</h3><p>Connect appointments to your calendar and make scheduling easier for everyone.</p></article>
        <article><div className="feature-icon icon-red"><Send size={27}/></div><h3>Automated Follow-Up</h3><p>Keep leads moving with timely texts, emails, confirmations, and reminders.</p></article>
        <article><div className="feature-icon icon-navy"><Star fill="white" size={27}/></div><h3>Built to Grow</h3><p>Reviews, reactivation, and consistent communication help you stay top of mind.</p></article>
      </div></section>

      <section id="how-it-works" className="how-section"><div className="container how-layout"><div className="how-heading"><div className="eyebrow">HOW IT WORKS</div><h2>Get started<br/><span>in three simple steps<span className="yellow-dot">.</span></span></h2></div><div className="steps">
        <article><div className="step-icon step-blue">1</div><h3>Tell us about<br/>your business</h3><p>Choose your plan, tell us what you do, and share your preferences.</p></article><ChevronRight className="step-chevron"/>
        <article><div className="step-icon step-yellow">2</div><h3>We set it up<br/>for you</h3><p>We configure your approved AI features and connect your tools.</p></article><ChevronRight className="step-chevron"/>
        <article><div className="step-icon step-red">3</div><h3>Start getting<br/>more bookings</h3><p>Once tested, your system goes to work while you focus on customers.</p></article>
      </div></div></section>

      <section id="pricing" className="pricing-section"><div className="container pricing-layout"><div className="pricing-intro"><div className="eyebrow">SIMPLE PRICING</div><h2>Choose the plan<br/><span>that fits your business<span className="yellow-dot">.</span></span></h2><p>Flexible AI assistance to match the way your business works.</p><div className="billing-switch" role="group" aria-label="Billing frequency"><button className={cycle === "monthly" ? "selected" : ""} aria-pressed={cycle === "monthly"} onClick={() => setCycle("monthly")}>Monthly</button><button className={cycle === "annual" ? "selected" : ""} aria-pressed={cycle === "annual"} onClick={() => setCycle("annual")}>Annual <small>1 month free</small></button></div></div>
        <div className="pricing-cards">
          {(["connect","growth"] as const).map(id => { const p = plans[id]; const annual = cycle === "annual"; return <article className={`price-card ${id === "connect" ? "popular" : ""}`} key={id}>{id === "connect" && <span className="popular-label">Most Popular</span>}<h3>{p.name}</h3><div className="price-line"><strong>${(annual ? p.annually : p.monthly).toLocaleString()}</strong><span>/{annual ? "year" : "month"}</span></div><p className="setup-fee">${p.setup} one-time setup</p><div className="card-divider"/><ul>{p.features.map(f=><li key={f}><Check size={17}/><span>{f}</span></li>)}</ul><button className={id === "connect" ? "btn btn-primary price-action" : "btn btn-outline price-action"} onClick={() => showSignup(id)}>Get Started <ArrowRight size={17}/></button></article>; })}
          <div className="pricing-footnote"><ShieldCheck size={18}/><span>{cycle === "annual" ? "Annual pricing includes one month free: Connect $5,467/year · Growth $10,967/year." : "Annual billing available with one month free."} Setup and communication usage are extra. See plan details during onboarding.</span></div>
        </div>
      </div></section>

      <section id="support" className="faq-section container"><div><div className="eyebrow">GOT QUESTIONS?</div><h2>Answers before<br/><span>you get started.</span></h2><p>Need a hand choosing the right plan? <a href={`mailto:${site.email}`}>Talk to our team <ArrowUpRight size={15}/></a></p></div><div className="faq-list">{faqs.map(({question,answer},i)=><article key={question} className={openFaq === i ? "faq-open" : ""}><button aria-expanded={openFaq === i} onClick={()=>setOpenFaq(v=>v===i ? null : i)}>{question}<ChevronDown size={18}/></button>{openFaq === i && <p>{answer}</p>}</article>)}</div></section>

      <section className="bottom-cta"><div className="container bottom-cta-inner"><h2>Ready to keep working<br/><span>while we handle the follow-up?</span></h2><div className="bottom-actions"><button className="btn btn-yellow btn-large" onClick={() => showSignup()}>Get Started <ArrowRight size={17}/></button><a className="btn btn-dark-outline btn-large" href={`mailto:${site.email}`}><MessageCircle size={17}/> Contact Us</a></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a href="#home" aria-label="Essential Solutions, back to top"><Image src="/images/essential-logo.webp" width={1212} height={371} alt="Essential Solutions"/></a><div className="footer-links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href={`mailto:${site.email}`}>{site.email}</a></div><small>© {new Date().getFullYear()} Essential Solutions · Essential Funding LLC</small></div></footer>
    <SignupDialog open={dialog !== null} onClose={closeDialog} plan={dialog?.plan ?? "connect"} cycle={dialog?.cycle ?? "monthly"}/>
  </>;
}
