# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for **Lelis Consulting** (independent ML consultancy, Basel). React 19 + Vite + TypeScript, styled with Tailwind. Two client-routed pages — home (`#/`) and case studies (`#/case-studies`) — selected by hash. Originally scaffolded from AI Studio (https://ai.studio/apps/drive/1CVKyDcIWBPNQT3jjy7yykk7R1tuURQR0).

## Commands

```bash
npm install        # install deps
npm run dev        # vite dev server on http://0.0.0.0:3000
npm run build      # production build (vite build)
npm run preview    # serve the production build
```

There is **no test runner and no linter configured**. TypeScript is `noEmit` — type-checking happens only as part of editor tooling / `vite build`. To do a standalone typecheck, run `npx tsc --noEmit`.

## Architecture notes (non-obvious)

- **Hash routing without a router library.** `App.tsx` reads `window.location.hash` via `getRoute()`, listens to `hashchange`, and conditionally renders either the home content or `<CaseStudiesPage />` inside `<main>`. The nav and footer live outside the conditional so they appear on both routes. The post-route `useEffect` scrolls to top on route change, or to the targeted section anchor when the hash points to a section (`#solutions`, `#about`, etc.) on the home page — this is what makes nav anchors work both within the home and as cross-page links from the case studies view.
- **Dual module-resolution paths for React.** `package.json` declares the deps for type resolution and local tooling, but `index.html` also defines an `importmap` pointing `react` and `react-dom` to `https://esm.sh/...`. At runtime in the browser, the importmap wins. If you bump React in `package.json`, also bump the pin inside the importmap or you'll get drift between types and runtime behavior.
- **Tailwind via CDN.** `https://cdn.tailwindcss.com` is loaded in `index.html`. There is no `tailwind.config.js`, no PostCSS pipeline, and no `index.css` content shipped (despite the `<link rel="stylesheet" href="/index.css">` tag — that file does not exist in the repo). Custom CSS (CRT overlay, scanline, pixel-grid, `.ascii-border`) lives inline in `index.html`.
- **Path alias.** `@/*` maps to the project root in both `tsconfig.json` and `vite.config.ts`.

## File map

- `index.tsx` — React root; mounts `<App />` into `#root`.
- `App.tsx` — Layout shell + home content + hash-routing logic. Inline section components (`MetricBlock`, `StackGroup`, `SolutionCard`) live at the bottom of this file. Copy (metrics, solutions, stack, about, footer) is hardcoded here.
- `components/AsciiHeader.tsx` — Hero banner; consumes `LELIS_ASCII` / `CONSULTING_ASCII` from `constants.tsx`.
- `components/CaseStudiesPage.tsx` — The `#/case-studies` page; owns the `CaseStudy` helper and all six case-study copies.
- `constants.tsx` — ASCII art (`LELIS_ASCII`, `CONSULTING_ASCII`).
- `resume/resume.pdf` — Source of truth for copy. Any portfolio/metrics change must align with this file.
