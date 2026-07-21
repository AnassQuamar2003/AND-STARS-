---
name: agency-website
description: Blueprint for the official AND STARS agency website — page structure, section-by-section content, and which other agency skills to pull from. Invoke this first when building or editing the agency's own site.
---

# AND STARS — Website Blueprint

Master skill for building the agency's own website. When invoked, also load:
- `agency-brand` — colors, fonts, logo, voice
- `agency-services` — services + pricing
- `agency-clients` — target industries

## Stack (recommended)
- Front-end: React (or Next.js for SEO). Modern, responsive, dark theme with gold accents.
- Match brand: near-black backgrounds, gold CTAs, cream text, subtle star/glow motifs.

## Sitemap
1. **Home** (`/`)
2. **Services** (`/services`)
3. **Industries** (`/industries`) — one section per target client
4. **Portfolio / Work** (`/work`)
5. **About** (`/about`)
6. **Contact** (`/contact`)

## Page-by-page

### Home
- **Hero:** logo + "Young Minds. Bright Future." + one-line mission + primary CTA ("Get a Quote").
- **Services strip:** 5 service cards (from `agency-services`).
- **Industries strip:** icons for the 8 target industries (from `agency-clients`).
- **Why us:** 3–4 points (fast, modern, results, fair pricing).
- **Portfolio preview:** 3 featured builds.
- **CTA band:** "Ready to launch? Let's talk." + contact button.
- **Footer:** logo, links, professional email, socials (later).

### Services
- Full catalog with tiers + pricing bands from `agency-services`.
- Each service = card → detail. "Get a Quote" CTA on each.

### Industries
- One section per industry using the hooks in `agency-clients`.

### Portfolio / Work
- Grouped by industry. Placeholder/demo projects allowed early. Each: screenshot, problem, what we built, result.

### About
- Story, mission, the "reach for the stars" positioning. Keep it human and confident.

### Contact
- Form (name, email, business, service interested, message) + email + response-time promise.

## Build order
1. Set up project + design tokens (colors/fonts from `agency-brand`).
2. Layout shell (header, footer, theme).
3. Home.
4. Services + Industries (data-driven from the skills above).
5. Portfolio, About, Contact.
6. SEO, performance, deploy.

## Notes
- Keep all service/price data in one config file that mirrors `agency-services`, so updates are one place.
- The agency's own site is the #1 portfolio piece — it must be excellent.
