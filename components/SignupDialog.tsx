"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, LockKeyhole, X } from "lucide-react";
import { plans, site, type BillingCycle, type PlanId } from "@/lib/site";
import { businessIndustries, OTHER_BUSINESS_TYPE } from "@/lib/industries";

type Props = { open: boolean; onClose: () => void; plan: PlanId; cycle: BillingCycle; inline?: boolean };
type Status = "idle" | "loading" | "success";

export default function SignupDialog({ open, onClose, plan, cycle, inline = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PlanId>(plan);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const firstInput = useRef<HTMLInputElement>(null);
  const turnstileElement = useRef<HTMLDivElement>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    setSelectedPlan(plan);
  }, [plan]);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setError("");
    setConsent(false);
    setSelectedPlan(plan);
    setSelectedIndustry("");
    setIndustrySearch("");
    if (!inline) document.body.style.overflow = "hidden";
    firstInput.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (!inline && event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      if (!inline) document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, plan, inline]);

  useEffect(() => {
    if (!open || !turnstileSiteKey) return;
    let cancelled = false;
    let widgetId: string | number | undefined;
    type TurnstileApi = {
      render: (
        element: HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; "expired-callback": () => void },
      ) => string | number;
      remove: (id: string | number) => void;
    };
    const getApi = () => (window as Window & { turnstile?: TurnstileApi }).turnstile;
    const mount = () => {
      if (cancelled || !turnstileElement.current || !getApi() || widgetId !== undefined) return;
      widgetId = getApi()!.render(turnstileElement.current, {
        sitekey: turnstileSiteKey,
        callback: (token: string) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
      });
    };
    const existing = document.querySelector<HTMLScriptElement>('script[data-turnstile="essential"]');
    if (getApi()) mount();
    else if (existing) existing.addEventListener("load", mount);
    else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.dataset.turnstile = "essential";
      script.addEventListener("load", mount);
      document.body.append(script);
    }
    return () => {
      cancelled = true;
      existing?.removeEventListener("load", mount);
      if (widgetId !== undefined) getApi()?.remove(widgetId);
      setTurnstileToken("");
    };
  }, [open, turnstileSiteKey]);

  if (!open) return null;
  const selected = plans[selectedPlan];
  const total = cycle === "annual" ? selected.annually : selected.monthly;
  const search = industrySearch.trim().toLocaleLowerCase();
  const filteredIndustries = businessIndustries.map(({ group, items }) => ({
    group,
    items: !search || group.toLocaleLowerCase().includes(search)
      ? items
      : items.filter((industry) => industry.toLocaleLowerCase().includes(search)),
  })).filter(({ items }) => items.length > 0);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    const formData = new FormData(event.currentTarget);
    const selectedBusinessType = String(formData.get("industry") ?? "");
    const otherBusinessType = String(formData.get("otherIndustry") ?? "").trim();
    const industry = selectedBusinessType === OTHER_BUSINESS_TYPE
      ? `Other: ${otherBusinessType.slice(0, 65)}`
      : selectedBusinessType;
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      business: String(formData.get("business") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      industry,
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      marketingConsent: consent,
      turnstileToken,
      plan: selectedPlan,
      cycle,
    };
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      if (result.next === "checkout" && typeof result.checkoutUrl === "string") {
        const url = new URL(result.checkoutUrl);
        if (url.protocol !== "https:") throw new Error("Checkout URL is not configured securely.");
        window.location.assign(url.toString());
        return;
      }
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Please try again.");
      setStatus("idle");
    }
  }

  return (
    <div className={inline ? "inline-intake-wrap" : "dialog-backdrop"} onMouseDown={(event) => { if (!inline && event.target === event.currentTarget) onClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="signup-title" className="signup-dialog">
        {!inline && <button type="button" className="dialog-close" aria-label="Close form" onClick={onClose}><X size={21} /></button>}
        {status === "success" ? (
          <div className="dialog-success">
            <CheckCircle2 size={54} strokeWidth={1.5} color="#0868ec" />
            <h2 id="signup-title">You&apos;re on your way.</h2>
            <p>We received your request for {selected.name}. Our team will follow up using the contact information you provided.</p>
            <p className="quiet">No payment has been collected.</p>
            {inline ? <a href="/" className="btn btn-primary">Back to website <ArrowRight size={17} /></a> : <button type="button" className="btn btn-primary" onClick={onClose}>Back to website <ArrowRight size={17} /></button>}
          </div>
        ) : (
          <>
            <div className="eyebrow">LET&apos;S GET STARTED</div>
            <h2 id="signup-title">Tell us about your business.</h2>
            <p className="dialog-intro">Choose a package and share a few details so we can guide the setup.</p>
            <div className="dialog-plan-selector">
              <label>
                Package
                <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value as PlanId)}>
                  <option value="connect">Essential Connect</option>
                  <option value="growth">Essential Growth</option>
                </select>
              </label>
              <div className="dialog-plan-amount">
                <strong>{selected.name}</strong>
                <small>{cycle === "monthly" ? "Monthly billing" : "Annual billing · one month free"}</small>
                <span>${total.toLocaleString()}{cycle === "monthly" ? "/mo" : "/yr"}</span>
              </div>
            </div>
            <div className="dialog-plan-preview" aria-live="polite">
              <p>{selected.summary}</p>
              <ul>
                {(selectedPlan === "growth" ? selected.features.slice(1, 4) : selected.features.slice(0, 3)).map((item) => (
                  <li key={item}><CheckCircle2 size={14} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <form onSubmit={submit} className="signup-form">
              <div className="form-grid">
                <label>Full name <span>*</span><input ref={firstInput} autoComplete="name" name="name" required minLength={2} maxLength={100} placeholder="Your name" /></label>
                <label>Work email <span>*</span><input autoComplete="email" type="email" name="email" required maxLength={254} placeholder="you@business.com" /></label>
                <label>Business name <span>*</span><input autoComplete="organization" name="business" required minLength={2} maxLength={120} placeholder="Your business" /></label>
                <label>Phone number<input autoComplete="tel" type="tel" name="phone" maxLength={32} placeholder="(555) 000-0000" /></label>
              </div>
              <label>Find your type of business
                <input
                  type="search"
                  value={industrySearch}
                  onChange={(event) => { setIndustrySearch(event.target.value); setSelectedIndustry(""); }}
                  placeholder="Search e.g. plumber, salon, tutoring…"
                  aria-label="Search business types"
                  maxLength={80}
                />
              </label>
              <label>What type of business do you run? <span>*</span>
                <select
                  name="industry"
                  value={selectedIndustry}
                  onChange={(event) => { setSelectedIndustry(event.target.value); setIndustrySearch(""); }}
                  required
                  aria-describedby="industry-help"
                >
                  <option value="" disabled>Choose your specific business type</option>
                  {filteredIndustries.map(({ group, items }) => (
                    <optgroup label={group} key={group}>
                      {items.map((industry) => <option value={industry} key={industry}>{industry}</option>)}
                    </optgroup>
                  ))}
                  {filteredIndustries.length === 0 && <option value="" disabled>No matches? Use “Other” below.</option>}
                  <option value={OTHER_BUSINESS_TYPE}>{OTHER_BUSINESS_TYPE}</option>
                </select>
              </label>
              <p className="industry-help" id="industry-help">Search or browse the grouped list. We use this to tailor your setup.</p>
              {selectedIndustry === OTHER_BUSINESS_TYPE && (
                <label>Tell us your business type <span>*</span>
                  <input name="otherIndustry" maxLength={65} required placeholder="e.g., custom service or specialty" />
                </label>
              )}
              <label>Anything we should know?<textarea name="message" rows={2} maxLength={1200} placeholder="What would you like to automate first?" /></label>
              <label className="consent-line"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} /><span>I agree to receive optional promotional SMS messages from Essential Solutions at the number I provide. Consent is not required to purchase; message and data rates may apply. Reply STOP to opt out.</span></label>
              <p className="form-legal">By submitting, you agree to our <a href="/terms" target="_blank">Terms</a> and <a href="/privacy" target="_blank">Privacy Policy</a>. We may contact you about your requested service.</p>
              <div className="hidden-trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
              {turnstileSiteKey && <div ref={turnstileElement} role="group" aria-label="Security verification" className="turnstile-widget" />}
              {error && <p className="form-error" role="alert">{error} <a href={`mailto:${site.email}`}>Contact us directly</a>.</p>}
              <button className="btn btn-primary form-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="spin" size={18} /> Sending…</> : <>Continue <ArrowRight size={18} /></>}</button>
              <p className="security-note"><LockKeyhole size={13} /> Your information is submitted securely. If checkout is not configured, no payment is taken.</p>
            </form>
          </>
        )}
      </section>
    </div>
  );
}
