# AGENTS.md

Single-page portfolio app: React 19 + TypeScript + Vite 8 + Tailwind CSS v4
(via `@tailwindcss/vite`) + react-icons. Scaffolded from the official
`react-ts` template; the README is template boilerplate, not project fact.

## Commands

- `npm run dev` — Vite dev server with HMR.
- `npm run build` — `tsc -b && vite build` (typecheck is part of build; build
  fails on TS errors).
- `npm run lint` — ESLint (flat config) over TS/TSX; only `dist` is ignored.
- `npx tsc -b` — typecheck alone. Plain `tsc` does nothing: the root
  `tsconfig.json` has `files: []` and uses project references
  (`tsconfig.app.json`, `tsconfig.node.json`).
- `npm test` — does not exist; no test framework is installed.

## Structure & conventions

- Entrypoint: `index.html` → `src/main.tsx` (StrictMode, mounts `#root`) →
  `src/App.tsx` composes section components from `src/components/`.
- **All portfolio content lives in `src/data/portfolio.ts`** (nav links,
  socials, skills, projects, timeline, contact info) with shared types in
  `src/types.ts`. Most values are placeholders (social URLs, email/phone,
  project links) — a user must fill in real details there.
- Styling: Tailwind v4. Design tokens (dark palette `ink-*`/`brand-*`/`accent-*`,
  fonts, keyframes) are defined in the `@theme` block of `src/index.css`, along
  with a few hand-written classes (`.text-gradient`, `.reveal`). Google Fonts
  (Sora + Inter) load in `index.html`; no CSS modules/framework besides Tailwind.
- Reveal-on-scroll: wrap content in `src/components/ui/Reveal.tsx` or use
  `src/hooks/useInView.ts` / `useActiveSection.ts`; sections use
  `ui/Section.tsx` (`<Section id="...">` + `<SectionHeading />`). `html` uses
  smooth scrolling, so anchors must use ids matching `src/data/portfolio.ts`.
- `react-icons`: pre-2025 names change between majors — verify icon exports
  exist in the installed `react-icons` version before importing (e.g.
  `SiCss3` → `SiCss`).
- `src/assets/banner.png` is the owner's portrait used in the Hero;
  `public/resume.pdf` is a generated placeholder (buttons link to it).
- Package manager is npm (`package-lock.json` committed).
- This directory is not a git repository, so no git history/branches to rely on.
