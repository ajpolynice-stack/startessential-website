"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CirclePlay,
  MessageCircle,
  Phone,
  Scissors,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import SignupDialog from "./SignupDialog";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { plans, site, type BillingCycle, type PlanId } from "@/lib/site";

type DemoTab = "answer" | "book" | "followup";
const tabContent: Record<
  DemoTab,
  { title: string; description: string; example: string; first: string; second: string; third: string; voice: string }
> = {
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
  {
    question: "Can Essential Solutions work with my current website?",
    answer:
      "In many cases, yes. We'll review your current website, forms, and calendar setup to choose the right connection method before activation.",
  },
  {
    question: "Will you set everything up for me?",
    answer:
      "Yes. Setup is included as a one-time service. We configure the approved features, connect the right tools, and test everything with you before launch.",
  },
  {
    question: "What does communication usage extra mean?",
    answer:
      "Your subscription covers the platform features in your plan. Usage-based items such as calls, texts, emails, and certain AI activity may be billed separately based on actual usage.",
  },
  {
    question: "Can I keep my existing business phone number?",
    answer:
      "Often, yes. Depending on your provider, we can discuss number porting or call forwarding during onboarding.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "That depends on your plan and integrations, but we keep the process simple: choose a package, complete intake, approve setup details, and then we activate after testing.",
  },
];

function DecorativeRibbons() {
  return <div className="hero-ribbon-wrap" aria-hidden="true">
    <Image className="hero-ribbon left-ribbon" src="/images/ribbon-left.svg" width={921} height={1248} alt="" unoptimized priority />
    <Image className="hero-ribbon right-ribbon" src="/images/ribbon-right.svg" width={891} height={1248} alt="" unoptimized priority />
  </div>;
}

export default function HomePage() {
  const [tab, setTab] = useState<DemoTab>("answer");
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [dialog, setDialog] = useState<{ plan: PlanId; cycle: BillingCycle } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const closeDialog = useCallback(() => setDialog(null), []);
  const showSignup = (plan: PlanId = "growth") => setDialog({ plan, cycle });
  const demo = tabContent[tab];

  return (
    <>
      <SiteHeader />
      <main id="home">
        <section className="hero-section home-hero-tight">
          <DecorativeRibbons />
          <div className="hero-content container">
            <div className="hero-topline">
              <Sparkles size={15} /> More time for the work that matters
            </div>
            <h1>
              Keep working<span className="blue-dot">.</span>
              <br />
              <span className="hero-blue">We&apos;ll handle</span>
              <br />
              the follow-up<span className="yellow-dot">.</span>
            </h1>
            <p>
              AI-powered answering, booking, and follow-up for busy service businesses.
            </p>
            <div className="hero-buttons">
              <Link href="/pricing" className="btn btn-yellow btn-large">
                Find your plan <ArrowRight size={19} />
              </Link>
              <Link href="/solutions" className="btn btn-outline btn-large">
                <CirclePlay size={20} fill="#10244c" color="#10244c" stroke="white" /> See how it works
              </Link>
            </div>
            <div className="industry-types">
              <div>
                <Wrench size={27} />
                <span>
                  <strong>Trades &amp; Home Services</strong>
                  <small>Contractors · Plumbers · Electricians</small>
                </span>
              </div>
              <i />
              <div>
                <Scissors size={29} />
                <span>
                  <strong>Salons &amp; Appointments</strong>
                  <small>Nail Salons · Beauty · Wellness</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="demo-area container" id="demo" aria-label="How Essential Solutions works">
          <div className="demo-card">
            <div className="demo-tabs" role="tablist" aria-label="Product examples">
              <button role="tab" aria-selected={tab === "answer"} className={tab === "answer" ? "active" : ""} onClick={() => setTab("answer")}>
                <Phone size={19} fill="currentColor" /> Answer
              </button>
              <button role="tab" aria-selected={tab === "book"} className={tab === "book" ? "active" : ""} onClick={() => setTab("book")}>
                <CalendarDays size={19} /> Book
              </button>
              <button role="tab" aria-selected={tab === "followup"} className={tab === "followup" ? "active" : ""} onClick={() => setTab("followup")}>
                <Send size={19} /> Follow up
              </button>
              <span className="example-pill">Example</span>
            </div>
            <div className="demo-main" role="tabpanel">
              <div className="demo-explainer">
                <h2>{demo.title}</h2>
                <p>{demo.description}</p>
                <div className="voice-demo">
                  <div className="voice-avatar">
                    <Image src="/images/essential-mark.png" alt="" width={46} height={45} />
                  </div>
                  <div className="voice-body">
                    <div className="voice-bubble">{demo.voice}</div>
                    <div className="wave-row">
                      <span className="wave-bars" aria-hidden="true">
                        {Array.from({ length: 37 }, (_, i) => (
                          <b key={i} style={{ height: `${7 + Math.round((Math.sin(i * 1.8) + 1) * 9 + (i % 4) * 2)}px` }} />
                        ))}
                      </span>
                      <span>0:04</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-example">
                <div className="chat-line chat-right">{demo.example}</div>
                <div className="chat-line-wrapper">
                  <div className="chat-avatar">
                    <Image src="/images/essential-mark.png" alt="" width={27} height={27} />
                  </div>
                  <div className="chat-line chat-ai">{demo.first}</div>
                </div>
                <div className="chat-line chat-right">{demo.second}</div>
                <div className="chat-line-wrapper">
                  <div className="chat-avatar">
                    <Image src="/images/essential-mark.png" alt="" width={27} height={27} />
                  </div>
                  <div className="chat-line chat-ai">{demo.third}</div>
                </div>
                <span className="demo-disclaimer">Illustrative conversation</span>
              </div>
            </div>
          </div>
        </section>

        <section className="features container">
          <h2>Everything you need to stay booked and grow.</h2>
          <div className="feature-grid">
            <article>
              <div className="feature-icon icon-blue"><Phone fill="white" size={25} /></div>
              <h3>24/7 Answering</h3>
              <p>Help customers get answers, share their needs, and request appointments — even after hours.</p>
            </article>
            <article>
              <div className="feature-icon icon-yellow"><CalendarDays size={28} /></div>
              <h3>Smart Booking</h3>
              <p>Connect appointments to your calendar and make scheduling easier for everyone.</p>
            </article>
            <article>
              <div className="feature-icon icon-red"><Send size={27} /></div>
              <h3>Automated Follow-Up</h3>
              <p>Keep leads moving with timely texts, emails, confirmations, and reminders.</p>
            </article>
            <article>
              <div className="feature-icon icon-navy"><Star fill="white" size={27} /></div>
              <h3>Built to Grow</h3>
              <p>Reviews, reactivation, and consistent communication help you stay top of mind.</p>
            </article>
          </div>
        </section>

        <section className="how-section">
          <div className="container how-layout">
            <div className="how-heading">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>
                Get started
                <br />
                <span>
                  in three simple steps<span className="yellow-dot">.</span>
                </span>
              </h2>
            </div>
            <div className="steps">
              <article>
                <div className="step-icon step-blue">1</div>
                <h3>Tell us about your business</h3>
                <p>Choose your plan, tell us what you do, and share your preferences.</p>
              </article>
              <ChevronRight className="step-chevron" />
              <article>
                <div className="step-icon step-yellow">2</div>
                <h3>We set it up for you</h3>
                <p>We configure your approved AI features and connect your tools.</p>
              </article>
              <ChevronRight className="step-chevron" />
              <article>
                <div className="step-icon step-red">3</div>
                <h3>Start getting more bookings</h3>
                <p>Once tested, your system goes to work while you focus on customers.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="container pricing-layout">
            <div className="pricing-intro">
              <div className="eyebrow">SIMPLE PRICING</div>
              <h2>
                Choose the plan
                <br />
                <span>
                  that fits your business<span className="yellow-dot">.</span>
                </span>
              </h2>
              <p>Flexible AI assistance to match the way your business works.</p>
              <div className="billing-switch" role="group" aria-label="Billing frequency">
                <button className={cycle === "monthly" ? "selected" : ""} aria-pressed={cycle === "monthly"} onClick={() => setCycle("monthly")}>Monthly</button>
                <button className={cycle === "annual" ? "selected" : ""} aria-pressed={cycle === "annual"} onClick={() => setCycle("annual")}>Annual <small>1 month free</small></button>
              </div>
              <div className="pricing-subnav">
                <Link href="/pricing">Compare plans</Link>
                <Link href="/get-started">Go to intake</Link>
              </div>
            </div>
            <div className="pricing-cards">
              {(["connect", "growth"] as const).map((id) => {
                const p = plans[id];
                const annual = cycle === "annual";
                return (
                  <article className={`price-card ${id === "growth" ? "popular" : ""}`} key={id}>
                    {id === "growth" && <span className="popular-label">Most Popular</span>}
                    <h3>{p.name}</h3>
                    <p className="plan-card-summary">{p.summary}</p>
                    <div className="price-line">
                      <strong>${(annual ? p.annually : p.monthly).toLocaleString()}</strong>
                      <span>/{annual ? "year" : "month"}</span>
                    </div>
                    <p className="setup-fee">${p.setup} one-time setup</p>
                    <div className="card-divider" />
                    <p className="plan-includes-heading">What's included</p>
                    <ul>
                      {p.features.map((f) => (
                        <li key={f}><Check size={17} /><span>{f}</span></li>
                      ))}
                    </ul>
                    <p className="plan-card-ideal">{p.idealFor}</p>
                    <button className={id === "growth" ? "btn btn-primary price-action" : "btn btn-outline price-action"} onClick={() => showSignup(id)}>
                      Get Started <ArrowRight size={17} />
                    </button>
                  </article>
                );
              })}
              <div className="pricing-footnote">
                <ShieldCheck size={18} />
                <span>
                  {cycle === "annual"
                    ? "Annual pricing includes one month free: Connect $5,467/year · Growth $10,967/year."
                    : "Annual billing is available with one month free."}{" "}
                  Setup and communication usage are extra.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section container">
          <div>
            <div className="eyebrow">GOT QUESTIONS?</div>
            <h2>
              Answers before
              <br />
              <span>you get started.</span>
            </h2>
            <p>
              Need a hand choosing the right plan? <a href={`mailto:${site.email}`}>Talk to our team</a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }, i) => (
              <article key={question} className={openFaq === i ? "faq-open" : ""}>
                <button aria-expanded={openFaq === i} onClick={() => setOpenFaq((v) => (v === i ? null : i))}>
                  {question}
                  <ChevronDown size={18} />
                </button>
                {openFaq === i && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-cta">
          <div className="container bottom-cta-inner">
            <h2>
              Ready to keep working
              <br />
              <span>while we handle the follow-up?</span>
            </h2>
            <div className="bottom-actions">
              <Link className="btn btn-yellow btn-large" href="/get-started">
                Get Started <ArrowRight size={17} />
              </Link>
              <Link className="btn btn-dark-outline btn-large" href="/support">
                <MessageCircle size={17} /> Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <SignupDialog open={dialog !== null} onClose={closeDialog} plan={dialog?.plan ?? "connect"} cycle={dialog?.cycle ?? "monthly"} />
    </>
  );
}
