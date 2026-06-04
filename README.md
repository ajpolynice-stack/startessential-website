# Essential Solutions Website v6 - Vercel Fixed

This version removes the package-lock.json that was pointing Vercel to an internal OpenAI npm mirror and adds `.npmrc` to force installs from the public npm registry.

## Deploy notes

1. Upload/commit the full folder contents to GitHub.
2. In Vercel, use the default settings:
   - Framework: Next.js
   - Install Command: npm install
   - Build Command: npm run build
   - Output Directory: leave blank
3. If Vercel still uses old cached dependencies, redeploy with **Clear Build Cache**.

## Important

The prior deployment failed before code compilation because npm tried to fetch packages from:
`packages.applied-caas-gateway1.internal.api.openai.org`

This package removes that dependency source.
