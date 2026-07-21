# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

AND STARS — a web/software agency. The repo holds the agency's brand definition (as Claude skills) and its own marketing website (`website/`). There is no client code here.

## Commands

All commands run from `website/`:

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build → website/dist/
npm run preview  # serve the built dist/
```

No test suite, no linter configured.

## Skills are the source of truth for content

`.claude/skills/` holds four agency skills. Invoke them before writing copy, choosing colors, or building pages — they define what the site says:

- `agency-website` — sitemap + page-by-page blueprint. Invoke first.
- `agency-brand` — palette, fonts, logo, tagline, voice.
- `agency-services` — service catalog + price tiers.
- `agency-clients` — target industries + pitch angles.

Known drift: `agency-website` mentions "gold accents" from an earlier direction. The confirmed palette in `agency-brand` (and in code) is violet/black/white. Trust `agency-brand`.

## Architecture

React 18 + Vite 6 + Tailwind CSS v4 + React Router 6 + framer-motion. No TypeScript, no state library.

Content/data separation is the key convention:

- [website/src/data/site.js](website/src/data/site.js) — single source of truth for all site copy: `brand`, `services`, `industries`, `stats`, `process`, `whyUs`, `testimonials`, `work`, `navLinks`. It mirrors the agency skills. Change copy here, not in JSX.
- `src/sections/` — homepage-style content blocks (Hero, Stats, Process, Industries, …). They consume `site.js` and are composed by pages.
- `src/pages/` — one per route, mostly `PageHero` + a few sections.
- `src/components/` — shared primitives.

Routing lives entirely in [website/src/App.jsx](website/src/App.jsx) (six routes, unknown paths fall back to Home). `App.jsx` also owns the scroll-progress bar and scroll-to-top on navigation; page transitions come from `PageTransition` wrapping `<Routes>` inside `<AnimatePresence mode="wait">` keyed on pathname.

Conventions worth following:

- Icons: never import from `lucide-react` in a component. Add the icon to the registry in [website/src/components/Icon.jsx](website/src/components/Icon.jsx) and reference it by string name from `site.js` — keeps the bundle small.
- Scroll animations: wrap blocks in `<Reveal delay={…}>` ([website/src/components/Reveal.jsx](website/src/components/Reveal.jsx)) rather than hand-rolling `whileInView`.
- Inner page headers: use the named export `PageHero` from [website/src/components/PageShell.jsx](website/src/components/PageShell.jsx) (default export of that file is `PageTransition`).

## Styling

Tailwind v4 — configured via CSS, not `tailwind.config.js`. Everything lives in [website/src/index.css](website/src/index.css):

- `@theme` defines the design tokens, so they become utilities: `ink`, `surface`, `surface-2`, `line`, `violet`, `violet-bright`, `violet-deep`, `indigo`, `cloud`, `mist`, plus `font-display` (Sora) / `font-sans` (Inter).
- `@layer components` defines the reusable classes used across the site: `container-x`, `eyebrow`, `text-gradient`, `glass`, `glass-hover`, `btn-primary`, `btn-ghost`.
- `@layer utilities` / keyframes: `glow`, `grid-bg`, `noise`, `animate-float`, `animate-twinkle`, `animate-marquee`.

Prefer these existing classes over new one-off CSS. Fonts are loaded from Google Fonts in [website/index.html](website/index.html).

## Video assets

Videos are drop-in by filename, no code change: `website/public/videos/hero.mp4`, `mockup-1.mp4`, `mockup-2.mp4`. Remote placeholder clips play until real files exist. See [website/public/videos/README.md](website/public/videos/README.md).

## Repo hygiene

There is no `.gitignore`, so `website/node_modules/` and `website/dist/` are currently committed. Avoid adding to that; adding a `.gitignore` and untracking them is a welcome cleanup.
