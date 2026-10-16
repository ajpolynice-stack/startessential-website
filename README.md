# Essential Solutions — Expanded Plan Value & Business-Type Intake Update

This is the complete, updated Next.js project for the existing live Essential Solutions website. It preserves the HD vector ribbons, brand lockup, multipage layout, GoHighLevel chat-widget loader, and lead-submission endpoint, while improving how packages and business types are presented.

## What's new in this version

- **Both pricing cards now explain their value:** 10 benefit-led, customer-friendly inclusions per plan instead of four generic bullets, plus a short plan overview and “best for” guidance. The homepage cards and full `/pricing` cards read their copy from the same `lib/site.ts` source so they stay consistent. **Essential Growth stays Most Popular.**
- **A clearer full comparison table:** `/pricing` includes 12 feature comparisons covering lead handling, missed calls, reviews, reminders, AI phone answering, booking, and re-engagement.
- **A more helpful intake plan preview:** Choosing Connect or Growth on the signup form now shows a brief description and three immediate highlights. It does not change plan selection, prices, checkout configuration, or current submit behavior.
- **A specific, grouped business type selector:** Replaces the old five-category dropdown with a searchable list of 110 business types in 10 labeled industry groups. The list covers home trades, beauty and wellness, automotive, professional services, property, health appointments, pets, education, events, and retail services. “Other — describe my business” opens a small required field for a custom type.
- **The industry selection remains compatible with your existing GoHighLevel lead webhook.** The signup form still sends a single `industry` string in the existing payload; custom types are sent as `Other: <description>`.

**No changes to package prices, setup fees, billing cycles, message sending, backend webhook configuration, live chat activation, or payment settings.** Package features are the intended offer; they still require per-client configuration, consent safeguards, and testing before service activation. The site's existing onboarding/usage disclaimers remain in place.

## Upload through GitHub's website (no GitHub Desktop)

1. Extract the ZIP file on your computer.
2. Open your existing repository `ajpolynice-stack/startessential-website` in GitHub, on the `main` branch.
3. Upload the **contents** of the extracted folder to the repository root, preserving paths. Do **not** upload the ZIP file itself or create another nested project folder.
4. Commit the changes; Vercel should then start a new production build.
5. Verify the new deployment and check the homepage on a large desktop monitor, on mobile, and the `/pricing` and `/get-started` routes.
6. If GitHub's browser refuses to overwrite a file, open that individual file in GitHub and use the Edit (pencil) button, then commit; the critical changes are listed in `BROWSER_UPLOAD_GUIDE.txt`.
7. The old two `ribbon-*.png` files are no longer referenced anywhere and may be removed from GitHub later. They are omitted from this new package.

No `.gitignore` or `.env.example` dotfiles are included, as requested. Your environment variables must be stored in Vercel, **never** committed to GitHub.

## Enable GoHighLevel chat later (no code changes required)

In HighLevel, open your Essential Solutions sub-account, go to **Sites → Chat Widget**, and configure a new **Live Chat** widget (or your approved chat type). Customize colors, greeting, message routing, agent/avatar and floating launcher position (bottom right) inside HighLevel. HighLevel's **Get Code** gives the actual widget ID.

Set these values in **Vercel → Project → Settings → Environment Variables**, using exactly the widget ID from your own HighLevel account:

```
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=your-real-highlevel-widget-id
NEXT_PUBLIC_GHL_CHAT_ENABLED=true
```

Redeploy once both values are saved. With either variable absent (or `NEXT_PUBLIC_GHL_CHAT_ENABLED=false`), the chat widget stays hidden. The connector uses HighLevel's native loader at `https://widgets.leadconnectorhq.com/loader.js`, with its official `data-widget-id` and `data-resources-url` attributes. The chatbot/AI agent and Conversation automations are **not** configured by this website change—those still need to be set up in HighLevel.

HighLevel installation guide: https://help.gohighlevel.com/support/solutions/articles/155000005067-getting-started-setup-live-chat-widget

## Existing website environment configuration

These existing variables are unchanged:

- `GHL_LEAD_WEBHOOK_URL` — Required for the lead intake form to submit to HighLevel.
- `NEXT_PUBLIC_SITE_URL` — Normally `https://startessential.com`.
- `NEXT_PUBLIC_CLIENT_LOGIN_URL` — Client portal destination.
- `NEXT_PUBLIC_CHECKOUT_CONNECT_MONTHLY`, `NEXT_PUBLIC_CHECKOUT_CONNECT_ANNUAL`, `NEXT_PUBLIC_CHECKOUT_GROWTH_MONTHLY`, `NEXT_PUBLIC_CHECKOUT_GROWTH_ANNUAL` — Optional verified payment links.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` — Optional bot protection.

**Visual deployment does not prove that webhook, checkout, consent compliance, HighLevel Conversations, or automations work.** Test these separately before treating the site as fully ready to acquire customers.

## Verification

Run `npm install && npm run verify && npm run typecheck && npm run build` in a Node 20+ environment. The source package was checked for source integrity, SVG validity, and TypeScript/JSX syntax in this preparation environment. A full production build may require Vercel because dependencies are not cached here; Vercel must show a successful deployment before release.
