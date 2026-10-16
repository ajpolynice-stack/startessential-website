# Essential Solutions — Multipage Website Refresh

This is a refreshed Next.js website using the existing working project as its foundation, updated to more closely match the provided original Essential Solutions mockup.

## What's changed

- Replaced the flat, tube-like SVG ribbons with dimensional ribbon artwork derived from the user-provided reference mockup. The ribbon image assets have transparent backgrounds and soft shadows.
- Enlarged desktop page content and reduced excessive side whitespace and vertical padding.
- Added real, separate website pages: `/solutions`, `/pricing`, `/how-it-works`, `/support`, `/get-started`.
- Updated the primary navigation to route to these pages instead of scrolling to homepage anchors.
- Added detailed solution descriptions, a plan comparison, step-by-step onboarding information, a support/FAQ page and dedicated intake page.
- Added a package dropdown for Essential Connect and Essential Growth inside the intake form; plan choice is sent to the existing API endpoint.
- Kept existing `/api/leads` logic, optional payment links, GoHighLevel webhook integration hooks, brand images, privacy and terms pages.
- Updated the sitemap with the new pages.

## Important: deploying through GitHub's website

1. Extract this ZIP on your computer. **Do not upload the ZIP itself.**
2. Open your existing GitHub repository that is connected to Vercel.
3. Upload the files and folders inside this extracted project directory into the repository root (`app`, `components`, `lib`, `public`, `scripts`, `package.json`, etc.). Preserve the nested folders and overwrite the old files with matching paths. If GitHub's browser uploader refuses to replace existing nested files, open the target file and use its pencil/Edit control or use the existing Vercel/GitHub workflow you've successfully used; do not put the new files into a subfolder.
4. Commit the changes to `main`. Vercel will attempt a fresh deployment from the updated repository.
5. Open the deployment logs and verify a **successful Next.js build** before testing the new live pages on `startessential.com`.
6. Test desktop and mobile layouts, navigation, all Get Started buttons, both plan selections, and a test lead submission.

**No `.gitignore` or `.env.example` hidden files are included.** These are optional and not necessary for Vercel.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Refreshed homepage with dimensional ribbons and a compact layout |
| `/solutions` | Detailed capabilities and industries |
| `/pricing` | Plan comparison, annual/monthly pricing, plan-specific signup |
| `/how-it-works` | Four-stage setup/onboarding process |
| `/support` | Contact options and FAQ |
| `/get-started` | Full intake form with a Connect/Growth dropdown |
| `/privacy` | Existing draft privacy policy |
| `/terms` | Existing draft terms |

## Vercel environment variables (optional/required by feature)

Set these in **Vercel → Project → Settings → Environment Variables**. Never put actual secrets into source code or commit them to GitHub.

- `GHL_LEAD_WEBHOOK_URL` — **Required for website lead submissions to succeed.** Create an Inbound Webhook in your receiving GoHighLevel workflow and paste its HTTPS URL here. Without it, `/api/leads` returns an explanatory 503 error.
- `NEXT_PUBLIC_SITE_URL` — normally `https://startessential.com`.
- `NEXT_PUBLIC_CLIENT_LOGIN_URL` — your chosen real client portal URL; without it, the login points to HighLevel's generic login page.
- `NEXT_PUBLIC_CHECKOUT_CONNECT_MONTHLY`, `NEXT_PUBLIC_CHECKOUT_CONNECT_ANNUAL`, `NEXT_PUBLIC_CHECKOUT_GROWTH_MONTHLY`, `NEXT_PUBLIC_CHECKOUT_GROWTH_ANNUAL` — optional verified HTTPS payment links. Only configure them when products, setup charges, consent, cancellation terms, and payment flow have been confirmed.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` — optional Cloudflare bot verification keys; configure both together.

**Do not assume a successful form submission has created a customer sub-account or activated services.** Webhook mapping and all HighLevel workflows still need to be tested separately. If the form currently lacks a webhook URL, leads cannot be submitted yet; email support is available as a fallback.

## Pricing currently displayed

- Essential Connect — $497/month or $5,467/year; $399 setup.
- Essential Growth — $997/month or $10,967/year; $799 setup.
- Communication and qualifying AI usage are described as potentially additional.

Update these terms in `lib/site.ts` and the corresponding plan/marketing content once final business terms have been approved.

## Testing and build

Run locally with Node.js 20+:

```sh
npm install
npm run verify
npm run typecheck
npm run build
npm run dev
```

A file integrity check and TypeScript *syntax* check were performed when this package was prepared. A complete Next.js build could not be performed in the preparation environment because installing dependencies timed out. **Vercel must report a successful build before you treat this update as deployed.**

## Release reminders

The site's Privacy Policy and Terms still contain draft/legal review language. Verify them before treating this as production-ready. Check live intake submissions, spam protection, messaging consent, email/phone sender configuration, HighLevel contact field mapping and optional checkout links. Ribbon images have been derived from the provided mockup and rendered as optimized transparent image assets rather than attempting to reproduce the reference with generic CSS curves.
