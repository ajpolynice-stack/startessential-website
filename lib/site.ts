export type PlanId = "connect" | "growth";
export type BillingCycle = "monthly" | "annual";

export const site = {
  name: "Essential Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://startessential.com",
  email: "info@startessential.com",
  login: process.env.NEXT_PUBLIC_CLIENT_LOGIN_URL || "https://app.gohighlevel.com/",
};

/** One source of truth for both home and detailed pricing cards. Keep the
 * descriptions consistent with the services configured during onboarding. */
export const plans = {
  connect: {
    id: "connect" as PlanId,
    name: "Essential Connect",
    monthly: 299,
    annually: 3289,
    setup: 199,
    eyebrow: "STAY CONNECTED, EVEN WHEN YOU'RE BUSY",
    idealFor: "Best for businesses that want to capture leads and keep customers informed.",
    summary: "Never let a new inquiry get lost in the shuffle. Keep conversations, appointments, and follow-ups moving.",
    features: [
      "AI website chat that answers common questions",
      "Lead capture so inquiries aren't lost",
      "Fast acknowledgments for new leads",
      "Missed-call text-back to save opportunities",
      "Booking confirmations that build confidence",
      "Reminders that help reduce no-shows",
      "SMS & email follow-up without manual chasing",
      "Customer feedback collection after visits",
      "Google review invitations to build trust",
      "Team alerts when a customer needs help",
    ],
  },
  growth: {
    id: "growth" as PlanId,
    name: "Essential Growth",
    monthly: 599,
    annually: 6589,
    setup: 399,
    eyebrow: "MORE COVERAGE, MORE OPPORTUNITIES",
    idealFor: "Best for growing service businesses that need phone coverage and stronger lead nurturing.",
    summary: "Everything in Connect, plus an AI phone receptionist and more ways to turn missed opportunities into bookings.",
    features: [
      "All Essential Connect features included",
      "24/7 AI receptionist for incoming calls",
      "Quick answers to routine caller questions",
      "Captures caller needs and contact details",
      "AI-assisted appointment booking by phone",
      "After-hours coverage while you are busy",
      "Re-engagement for older opted-in leads",
      "Multi-stage follow-ups over several days",
      "Reply- and booking-aware follow-up paths",
      "More advanced lead routing and timing",
    ],
  },
};

/** Feature comparison for /pricing. Keep aligned with the packages above. */
export const comparisonFeatures: ReadonlyArray<{label: string; connect: boolean; growth: boolean}> = [
  { label: "AI website chat for common questions", connect: true, growth: true },
  { label: "Website lead capture and acknowledgment", connect: true, growth: true },
  { label: "Missed-call text-back", connect: true, growth: true },
  { label: "Appointment confirmations and reminders", connect: true, growth: true },
  { label: "SMS and email follow-up", connect: true, growth: true },
  { label: "Customer feedback and review requests", connect: true, growth: true },
  { label: "Internal follow-up alerts", connect: true, growth: true },
  { label: "24/7 AI phone receptionist", connect: false, growth: true },
  { label: "Caller question handling and details capture", connect: false, growth: true },
  { label: "AI-assisted booking by phone", connect: false, growth: true },
  { label: "Dormant-lead re-engagement", connect: false, growth: true },
  { label: "Advanced, multi-step lead-nurture sequences", connect: false, growth: true },
];

export function checkoutUrl(plan: PlanId, cycle: BillingCycle): string | null {
  const urls: Record<string, string | undefined> = {
    "connect-monthly": "https://link.fastpaydirect.com/payment-link/6ad54ad6c0e70c7fefb756d3",
    "connect-annual": "https://link.fastpaydirect.com/payment-link/6ad54a4bc0e70c7fefb756d1",
    "growth-monthly": "https://link.fastpaydirect.com/payment-link/6ad548ffc0e70c7fefb756cc",
    "growth-annual": "https://link.fastpaydirect.com/payment-link/6ad5495ac0e70c7fefb756cd",
  };
  const candidate = urls[`${plan}-${cycle}`]?.trim();
  if (!candidate) return null;
  try {
    const u = new URL(candidate);
    return u.protocol === "https:" ? candidate : null;
  } catch { return null; }
}
