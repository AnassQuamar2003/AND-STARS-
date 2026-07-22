---
name: light-mode
description: Light-mode design system for AND STARS — palette, Poppins type scale, gradients, buttons, card/badge/icon styles, and the hero pattern. Sourced from `light mode vibe.png`. Invoke when building or theming a light-mode page or variant of the agency site.
---

# AND STARS — Light Mode Design System

Extracted from the moodboard `light mode vibe.png` in this skill's folder. That mockup is branded "PathGen Studio" — that's the reference template's own placeholder name, **not ours**. Keep the AND STARS name, tagline ("Young Minds. Bright Future."), mission, and voice from `agency-brand` — only the visual system (color, type, components) below is pulled from this reference.

Load this skill whenever building a light-mode page or a light/dark theme toggle for the site. `agency-brand` remains the source of truth for the current dark theme; this skill is its light counterpart.

## Color Palette
| Role | Hex | Use |
|------|-----|-----|
| Primary (indigo-violet) | `#635BFF` | Primary buttons, links, active states |
| Accent purple | `#7E40FF` | Gradient partner, secondary accent, icon strokes |
| Accent cyan | `#00D4FF` | Gradient partner, highlight accents |
| Text primary (navy-black) | `#0F172A` | Headings, primary body text |
| Text secondary (slate) | `#64748B` | Body copy, captions, muted labels |
| Background | `#F8FAFC` | Page background (soft off-white, faint lavender tint) |

Rules:
- Background is never pure white — a whisper of lavender (`#F8FAFC`) keeps it from feeling clinical.
- Text is navy-black (`#0F172A`), not true black — softer against the tinted background.
- Violet/indigo (`#635BFF`) is the one accent that carries over conceptually from the dark theme's `violet` — treat it as the light-mode equivalent of `--color-violet`.

## Gradients
| Name | Stops | Use |
|------|-------|-----|
| Primary Gradient | `#635BFF → #4C46D9`-ish (blue → deeper indigo) | Primary buttons, key CTAs |
| Blue Gradient | `#635BFF → #00D4FF` | Accent panels, chart fills |
| Purple Gradient | `#7E40FF → #635BFF` | Secondary CTAs, icon chip backgrounds |

## Typography
**Font:** Poppins (geometric sans — distinct from the dark theme's Sora/Inter pairing).

| Style | Size / Line-height | Weight |
|-------|---------------------|--------|
| H1 | 64px / 120% | Bold |
| H2 | 48px / 120% | SemiBold |
| H3 | 32px / 120% | SemiBold |
| Body Large | 18px / 160% | Regular |
| Body Regular | 16px / 150% | Regular |
| Small Text | 14px / 140% | Regular |

**Open decision — flag to owner:** the dark theme uses Sora (headings) + Inter (body). This reference uses Poppins for everything. Pick one:
- Keep Sora/Inter in light mode too, for cross-theme brand consistency, or
- Adopt Poppins for light mode as its own distinct type voice.
Do not decide silently — ask, or default to Sora/Inter (matches existing `font-display`/`font-sans` tokens in [website/src/index.css](../../../website/src/index.css)) if no answer is available.

## Buttons
- **Primary:** solid fill (Primary Gradient or flat `#635BFF`), white text, full pill radius (`rounded-full`), trailing arrow icon. Equivalent to the dark theme's `.btn-primary`.
- **Outline / Ghost:** white/transparent fill, thin `#635BFF` border, `#635BFF` text, same pill radius, trailing arrow. Equivalent to `.btn-ghost`.
- **Icon button:** small circle, thin border, single centered icon (e.g. play triangle) — used for "watch/play" actions next to a primary CTA.

## Icon Style
Line icons (2px stroke, `#635BFF`/`#7E40FF`), each sitting inside its own small white rounded-square chip (`rounded-xl`, soft drop shadow, ~48px). Used for feature lists, service cards, and the icon grid. This is the light-mode equivalent of the dark theme's flat lucide icons — same icon set works, just wrap each one in a white chip instead of rendering it bare.

## Card Style
- **Base card:** white background, `rounded-2xl`, soft ambient shadow (no border needed — shadow does the separation work light-mode cards need instead of the dark theme's `glass` border+blur).
- **Feature/service card:** icon chip top-left, bold title, gray (`#64748B`) description line, small arrow link bottom.
- **Stat/pricing card:** large bold number or price, small label below in gray, optional sparkline or bar-chart accent in the primary gradient color.
- **Testimonial card:** circular avatar, quote text, name + role in gray beneath.
- **Status badge/pill:** small rounded-full chip, tinted background (light violet or light green), colored dot + label (e.g. "Active Project").
- **Search bar:** white pill, thin border, icon at trailing edge.
- **Step indicator:** row of circular icon nodes connected by a thin line; the active/current step is filled solid in the primary color, others are outlined gray.
- **Radial progress ring:** small donut chart (e.g. "75%") paired with a rating line (e.g. "4.9/5") — used in stat callouts.

## Hero Pattern
- Eyebrow: small uppercase label in the primary color, above the headline.
- H1: navy-black, with one phrase highlighted in the primary color (not full-gradient text like the dark theme — just a solid accent-colored span).
- Subtext in slate gray, max ~2 lines.
- Two CTAs side by side: solid primary pill + a plain "Play showreel"-style ghost/icon link (no border box around the second one — just icon + text).
- Grayscale client-logo strip beneath the CTAs.
- Signature hero visual: an isometric arrangement of translucent glass cubes/blocks in violet-to-blue tones, with a couple of small floating glowing spheres for depth — sits opposite or behind the copy. This is the light-mode equivalent of the dark theme's glowing globe video; same "premium 3D tech" role, different motif (blocks instead of a sphere).

## Navigation
Logo mark (hex/rounded-hex icon) + two-line wordmark (name / sub-label) on the left, center nav links, a solid pill CTA button on the right (e.g. "Book a call"). Mobile collapses to a hamburger icon, same header height.

## Mapping to this codebase
When implementing, this system should become a `light` variant of the tokens already defined in [website/src/index.css](../../../website/src/index.css) `@theme` block (`ink`, `surface`, `violet`, etc.) — e.g. via a `[data-theme="light"]` override or a parallel token set — rather than a one-off page. Component classes (`glass`, `btn-primary`, `btn-ghost`, `container-x`) should keep their names and just resolve to different values per theme, so `sections/`/`pages/` markup doesn't need to change to support both modes.
