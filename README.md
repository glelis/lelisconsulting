# Lelis Consulting — website

Single-page marketing site for **Lelis Consulting** (independent ML consultancy, Basel).
React 19 + Vite + TypeScript, styled with Tailwind. Two hash-routed pages — home (`#/`)
and case studies (`#/case-studies`).

Live at **https://lelisconsulting.com**

## Develop

```bash
npm install        # install deps
npm run dev        # vite dev server on http://0.0.0.0:3000
npm run build      # production build → dist/
npm run preview    # serve the production build
```

There is no test runner or linter. For a standalone typecheck: `npx tsc --noEmit`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build`
and publishes `dist/` to GitHub Pages. The custom domain is set via `public/CNAME`
(`lelisconsulting.com`), which Vite copies into every build.
