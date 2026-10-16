"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { plans, type BillingCycle } from "@/lib/site";

const matrix = [
  ["AI chat on your website", true, true],
  ["Lead capture and initial response", true, true],
  ["Appointment confirmation and reminders", true, true],
  ["Review request automation", true, true],
  ["Automated email and SMS follow-up", true, true],
  ["AI phone receptionist", false, true],
  ["Lead reactivation", false, true],
  ["Advanced follow-up sequences", false, true],
] as const;
export default function PricingInteractive(){
 const [cycle,setCycle]=useState<BillingCycle>("monthly");
 return <section className="interior-section container pricing-detailed">
  <div className="pricing-toolbar"><div><span className="eyebrow">COMPARE PACKAGES</span><h2>Pick your starting point.</h2></div><div className="billing-switch" role="group" aria-label="Billing frequency"><button aria-pressed={cycle==="monthly"} className={cycle==="monthly"?"selected":""} onClick={()=>setCycle("monthly")}>Monthly</button><button aria-pressed={cycle==="annual"} className={cycle==="annual"?"selected":""} onClick={()=>setCycle("annual")}>Annual <small>1 month free</small></button></div></div>
  <div className="pricing-expanded-cards">{(["connect","growth"] as const).map(id=>{const p=plans[id];return <article className={`expanded-price-card ${id==="growth"?"recommended":""}`} key={id}>
   {id==="growth"&&<span className="expanded-ribbon">Most Popular</span>}
   <span className="plan-eyebrow">{id==="connect"?"THE EVERYDAY ESSENTIALS":"MORE AUTOMATION, MORE COVERAGE"}</span><h3>{p.name}</h3>
   <p>{id==="connect"?"Make sure inquiries are captured, customers stay informed, and follow-ups happen on time.":"Add an AI receptionist and advanced lead reactivation to your Connect foundation."}</p>
   <div className="expanded-price"><strong>${(cycle==="annual"?p.annually:p.monthly).toLocaleString()}</strong><span>/{cycle==="annual"?"year":"month"}</span></div>
   <div className="expanded-setup">${p.setup} one-time setup</div>
   <ul>{p.features.map(f=><li key={f}><Check size={18}/>{f}</li>)}</ul>
   <Link className={`btn ${id==="growth"?"btn-primary":"btn-outline"}`} href={`/get-started?plan=${id}&cycle=${cycle}`}>Choose {p.name} <ArrowRight size={18}/></Link>
  </article>})}</div>
  <div className="pricing-disclaimer"><ShieldCheck size={20}/><p>All plans require onboarding and successful configuration before services are activated. Communication and qualifying AI usage costs may be additional. Annual pricing reflects one month free, paid upfront. Your intake form does not collect payment.</p></div>
  <div className="comparison-wrap"><h2>Feature-by-feature comparison</h2><p>See what is included before you choose.</p><table className="comparison-table"><thead><tr><th>Feature</th><th>Connect</th><th>Growth</th></tr></thead><tbody>{matrix.map(([name,c,g])=><tr key={name}><td>{name}</td><td>{c?<Check aria-label="Included"/>:<span aria-label="Not included">—</span>}</td><td>{g?<Check aria-label="Included"/>:<span aria-label="Not included">—</span>}</td></tr>)}</tbody></table></div>
 </section>
}
