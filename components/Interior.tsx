import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { site } from "@/lib/site";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageHero({ kicker, title, highlighted, description }: { kicker: string; title: string; highlighted?: string; description: string }) {
  return <section className="interior-hero"><div className="container">
    <span className="eyebrow">{kicker}</span>
    <h1>{title} {highlighted && <span>{highlighted}</span>}</h1>
    <p>{description}</p>
  </div></section>;
}

export function InteriorCta({ title = "Ready to put your follow-up on autopilot?", description = "Choose the Essential Solutions plan that fits your business. We'll walk you through the rest." }: { title?: string; description?: string }) {
  return <section className="interior-cta"><div className="container interior-cta-inner"><div><h2>{title}</h2><p>{description}</p></div><div className="interior-cta-actions"><Link href="/get-started" className="btn btn-yellow btn-large">Get Started <ArrowRight size={18}/></Link><a href={`mailto:${site.email}`} className="btn btn-dark-outline btn-large"><MessageCircle size={18}/> Contact us</a></div></div></section>;
}

export function BenefitList({ items }: { items: string[] }) {
  return <ul className="benefit-list">{items.map(t => <li key={t}><CheckCircle2 size={20}/><span>{t}</span></li>)}</ul>;
}
