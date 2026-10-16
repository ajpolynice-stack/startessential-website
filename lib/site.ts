export type PlanId = "connect" | "growth";
export type BillingCycle = "monthly" | "annual";

export const site = {
  name: "Essential Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://startessential.com",
  email: "info@startessential.com",
  login: process.env.NEXT_PUBLIC_CLIENT_LOGIN_URL || "https://app.gohighlevel.com/",
};

export const plans = {
  connect: {
    id: "connect" as PlanId,
    name: "Essential Connect",
    monthly: 497,
    annually: 5467,
    setup: 399,
    features: ["AI chat for your website", "Automated follow-up (text & email)", "Appointment reminders", "Review requests"],
  },
  growth: {
    id: "growth" as PlanId,
    name: "Essential Growth",
    monthly: 997,
    annually: 10967,
    setup: 799,
    features: ["Everything in Essential Connect", "AI phone receptionist", "Lead reactivation", "Advanced follow-up sequences"],
  },
};

export function checkoutUrl(plan: PlanId, cycle: BillingCycle): string | null {
  const urls: Record<string, string | undefined> = {
    "connect-monthly": process.env.NEXT_PUBLIC_CHECKOUT_CONNECT_MONTHLY,
    "connect-annual": process.env.NEXT_PUBLIC_CHECKOUT_CONNECT_ANNUAL,
    "growth-monthly": process.env.NEXT_PUBLIC_CHECKOUT_GROWTH_MONTHLY,
    "growth-annual": process.env.NEXT_PUBLIC_CHECKOUT_GROWTH_ANNUAL,
  };
  const candidate = urls[`${plan}-${cycle}`]?.trim();
  if (!candidate) return null;
  try {
    const u = new URL(candidate);
    return u.protocol === "https:" ? candidate : null;
  } catch { return null; }
}
