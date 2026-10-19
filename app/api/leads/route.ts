import { NextRequest, NextResponse } from "next/server";
import { checkoutUrl, type BillingCycle, type PlanId } from "@/lib/site";

export const runtime = "nodejs";
const jsonHeaders = { "Cache-Control": "no-store" };
const MAX_BODY = 16_000;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const webhook = process.env.GHL_LEAD_WEBHOOK_URL?.trim();
  if (!webhook) {
    return NextResponse.json({ error: "Online signup is being connected. Please email info@startessential.com for help." }, { status: 503, headers: jsonHeaders });
  }
  // Prevent arbitrary destinations if a bad environment value is supplied.
  let target: URL;
  try { target = new URL(webhook); if (target.protocol !== "https:") throw new Error("Invalid protocol"); }
  catch { return NextResponse.json({ error: "Signup is temporarily unavailable. Please contact support." }, { status: 503 }); }

  let raw: string;
  try { raw = await request.text(); if (raw.length > MAX_BODY) throw new Error("Request too large"); }
  catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  let body: Record<string, unknown>;
  try { body = JSON.parse(raw); if (!body || Array.isArray(body) || typeof body !== "object") throw new Error(); }
  catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  if (clean(body.website, 200)) {
    // Honeypot: give bots no useful signal and do not forward.
    return NextResponse.json({ ok: true, next: "confirmation" }, { headers: jsonHeaders });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 32);
  const business = clean(body.business, 120);
  const industry = clean(body.industry, 80);
  const message = clean(body.message, 1200);
  const plan: PlanId = body.plan === "growth" ? "growth" : "connect";
  const cycle: BillingCycle = body.cycle === "annual" ? "annual" : "monthly";
  const marketingConsent = body.marketingConsent === true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (name.length < 2 || business.length < 2 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter your name, business name, and a valid email address." }, { status: 422 });
  }

  // Optional server-side Cloudflare Turnstile verification.
  if (process.env.TURNSTILE_SECRET_KEY) {
    const token = clean(body.turnstileToken, 2048);
    if (!token) return NextResponse.json({ error: "Please complete the verification." }, { status: 422 });
    try {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token }),
        signal: AbortSignal.timeout(7500),
      });
      const result = await verify.json();
      if (!result.success) return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 422 });
    } catch { return NextResponse.json({ error: "Verification unavailable. Please try again shortly." }, { status: 503 }); }
  }

  try {
    const response = await fetch(target.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        source: "Essential Solutions website", submittedAt: new Date().toISOString(),
        contact: { name, email, phone, businessName: business },
        name, email, phone, business_name: business,
        industry, message, selected_plan: plan, billing_cycle: cycle,
        marketing_consent: marketingConsent,
        marketing_consent_source: marketingConsent ? "Explicit website signup checkbox" : "Not granted",
      }),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Webhook HTTP ${response.status}`);
    const paymentLink = checkoutUrl(plan, cycle);
    // Client separately checks the redirect to avoid charging without user's action.
    return NextResponse.json({ ok: true, next: paymentLink ? "checkout" : "confirmation", checkoutUrl: paymentLink }, { headers: jsonHeaders });
  } catch {
    return NextResponse.json({ error: "We couldn't submit your request right now. Please email info@startessential.com." }, { status: 502, headers: jsonHeaders });
  }
}
