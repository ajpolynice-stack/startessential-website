# Essential Solutions — Launch Website

A responsive Next.js website rebuilt from the supplied Essential Solutions brand and homepage reference. Includes an interactive service demo, monthly/annual pricing, a lead/signup form, real GoHighLevel webhook integration hooks, optional GoHighLevel payment links, FAQ, legal-draft pages, and an integration health endpoint.

## Local setup

Requirements: Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run verify
npm run dev
```

Open http://localhost:3000.

## Deploy (GitHub → Vercel → Cloudflare)

The build runs `scripts/verify-project.mjs` first to detect missing or empty source files. This is an integrity check, not a substitute for a real Next.js build or runtime integration testing.


1. Use your existing GitHub repository `ajpolynice-stack/startessential-website`. **Delete all old empty placeholder files first**, especially the entries named `app`, `components`, `lib`, and `public` (these are broken files, not directories). Upload the extracted project folders and files through GitHub in your browser; **do not upload the ZIP itself**, and never upload a filled-in `.env.local`. Read `BROWSER_UPLOAD_GUIDE.txt` alongside this ZIP for exact steps.
2. Import the repository into Vercel. Framework preset: Next.js. Root directory: repository root.
3. Add environment variables from `.env.example` in **Vercel → Project → Settings → Environment Variables**.
4. Deploy and test the Vercel preview URL.
5. Add `startessential.com` and `www.startessential.com` in Vercel's Domains settings.
6. In Cloudflare DNS, create exactly the CNAME/A records recommended by Vercel for each domain. Avoid conflicting DNS entries; follow Vercel's current Cloudflare proxy/verification instructions. HTTPS must work before switching traffic.

## Connect GoHighLevel lead intake

1. In the **correct receiving GoHighLevel sub-account**, create a workflow with an **Inbound Webhook** trigger. Copy the unique POST webhook URL.
2. Put it in `GHL_LEAD_WEBHOOK_URL` on Vercel (**server-only**, never exposed to the browser). Redeploy.
3. Use a test inquiry on the website; use the GoHighLevel inbound webhook sample payload to map the fields into Create/Update Contact, assign a lead source, and notify your team.
4. Verify the contact and selected plan/billing cycle appear correctly. Explicit promotional SMS consent is sent separately as `marketing_consent`, and **must not be assumed true when false**. Do not auto-subscribe every lead to marketing messaging.
5. For production, finish sender registration, consent rules, spam protection, notification assignment, and monitoring.

Example webhook fields:

```json
{
  "source": "Essential Solutions website",
  "name": "Sample Customer",
  "email": "sample@example.com",
  "phone": "555-555-0100",
  "business_name": "Example Service Co",
  "industry": "Home services & trades",
  "selected_plan": "connect",
  "billing_cycle": "monthly",
  "marketing_consent": false,
  "message": "Please call me."
}
```

## Connect plans to payments

Create four correct **GoHighLevel checkout/payment links** and use the matching Vercel env variables:

- `NEXT_PUBLIC_CHECKOUT_CONNECT_MONTHLY`
- `NEXT_PUBLIC_CHECKOUT_CONNECT_ANNUAL`
- `NEXT_PUBLIC_CHECKOUT_GROWTH_MONTHLY`
- `NEXT_PUBLIC_CHECKOUT_GROWTH_ANNUAL`

Connect: $497/mo or $5,467/year, $399 setup. Growth: $997/mo or $10,967/year, $799 setup. **Do not assume a payment link automatically includes the setup fee.** Create and inspect the correct products, recurring subscription schedules, setup charges, tax behavior, cancellation terms, and checkout labels on the GHL side before publishing payment links. Successful inquiry submission redirects to the configured payment URL; when no payment link is set, the inquiry shows a confirmation and explicitly collects no payment.

A successful payment still needs **GoHighLevel-side workflows and/or agency API automations** to create the customer sub-account, deploy your tested snapshot, apply plan entitlements, send login/onboarding instructions, and configure account-specific integrations. None of that can be honestly represented as complete without access and testing.

## Important release blockers

- Legal review/approval of the **draft** `/privacy` and `/terms` pages before public use.
- Approved plan features, prices, usage fees, refund/cancellation terms, and setup billing configuration.
- Confirmed GoHighLevel webhook contact creation, authorization, onboarding workflow, and internal notifications.
- Verified payment checkout links and post-payment onboarding (or a clearly disclosed manual onboarding handoff).
- Configure real sending identities, A2P/consent requirements, and client phone/calendar integrations before enabling any messaging or AI calling.
- Spam defense: optional Cloudflare Turnstile is provided as a configuration hook. If enabled, verify the widget works end to end; add production rate limiting/WAF as needed.
- Confirm live support address `info@startessential.com` exists and receives messages.
- Test on mobile, test SEO/analytics preferences, test all links, inspect site accessibility.

## Available functionality

- Navigation links scroll to actual sections.
- Service demo tabs change interactive examples.
- Billing toggle recalculates and displays correct pricing.
- Every Get Started button opens a functional signup form with plan selection preserved.
- Form validates fields client/server, includes spam honeypot, sends through server-only GHL webhook, and only redirects to payment when configured.
- Contact Us starts an email, Client Login opens the configured portal URL.
- Accessible FAQ disclosure controls, reduced-motion support, mobile navigation, legal pages, SEO metadata, sitemap, robots, basic headers.

## Diagnostics

`GET /api/health` shows basic app state and whether a webhook is configured; it does not prove delivery or correct GHL mapping.

## Assets

`public/images/essential-logo.webp` and `essential-mark.png` are processed from the reference images supplied for this project. Use a designer-exported transparent SVG/PNG in the same paths when available for sharper brand reproduction.
