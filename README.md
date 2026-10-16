# Essential Solutions — HD Ribbon / Brand / Growth Update

This is the complete, updated Next.js project for the existing Essential Solutions website. It keeps all multipage routes and the lead-submission endpoint from the previous version, adds high-resolution vector ribbon artwork, cleans up the brand lockup, highlights Essential Growth, and prepares the HighLevel chat integration.

## What changed

- Replaced `/public/images/ribbon-left.png` and `ribbon-right.png` references with new vector `/public/images/ribbon-left.svg` and `ribbon-right.svg`. SVG art remains sharp at any screen size and includes ribbon folds, gradients and shading. The old right-hand image contained an accidental fragment of text; the new asset contains no text.
- The top-left logo on all routes (and footer) now uses a shared `BrandLockup` component. The S-shaped mark and two lines of text are separate aligned elements, preventing the old compressed look. The existing full logo is preserved separately for social previews/metadata.
- Essential Growth, not Essential Connect, receives the “Most Popular” badge and emphasized button on the homepage and `/pricing` page.
- The generic `/get-started` page now preselects Essential Growth, but explicit Connect links still select Connect correctly and customers can choose either package via the intake dropdown.
- Added `components/HighLevelChatWidget.tsx` sitewide via `app/layout.tsx`. It loads HighLevel's native floating chat widget **only after explicitly enabled**, and only with a real widget ID. By default, it does nothing and displays no broken/fake launcher.

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
