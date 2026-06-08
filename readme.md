# Súbete y Gana — Design System

## Overview

**Súbete y Gana** is a Chilean raffle (sorteo) web platform where users purchase exclusive smartphone wallpapers to earn unique participation numbers in a prize draw. The inaugural prize is a **Chevrolet Silverado Z71**. Each wallpaper purchase = one participation ticket at **$3.000 CLP**.

The business model mirrors sorteorayo.com (a proven Chilean precedent): sell digital products (wallpapers), assign participation IDs automatically, and hold a live notarized draw.

### Products / Surfaces
1. **Landing one-page** — Marketing site presenting the prize, participation flow, trust signals, and main CTA.
2. **Purchase flow** — Modal/overlay checkout with participation quantity selector, price calculator, and payment gateway handoff (mock, ready to connect to Webpay / Flow / MercadoPago).

### Source Materials
- Logo: `assets/logo.jpg` (1080×1080 JPEG, supplied)
- Design spec: Detailed brand notes in the project prompt (colors, typography, effects, components)
- Reference: [sorteorayo.com](https://sorteorayo.com) (Next.js + TypeScript + Supabase + Vercel) — architecture only, not copied

### Technical Context
- **Intended stack:** Next.js (App Router) + TypeScript + Supabase + Vercel
- **Payments (Chile):** Webpay/Transbank, Flow, or MercadoPago (not Stripe — per-ticket margin is too thin)
- **Auth:** Google Sign-In via Supabase
- **Email:** Resend or Mailgun with dedicated IP (cold-start email deliverability was the #1 pain point in the reference case)
- **Scale target:** 2,000+ concurrent users
- **PWA:** Installable manifest recommended

---

## Content Fundamentals

### Voice & Tone
- **Language:** Spanish (Chile). Informal but aspirational — speaks *directly* to the user as "tú".
- **Tone:** Exciting without being pushy. Confident. Celebratory but trustworthy. Think: a friend telling you about an amazing opportunity.
- **Energy:** High energy for CTAs and hero copy; calm and clear for instructions and legal disclaimers.
- **Trust signals:** Always reinforce legitimacy (ante notario, pago seguro, transmisión en vivo).

### Casing & Punctuation
- Headlines: **Title Case in Spanish** (only first word + proper nouns capitalized). Never all-caps for full sentences.
- Labels/badges: **ALL CAPS** with `letter-spacing: 0.08em` (e.g. "SORTEO ANTE NOTARIO").
- No exclamation points in headlines — the gold color and scale already convey excitement.
- Currency: **$3.000** format (dot thousands separator, no decimals for round amounts).

### Copy Examples
- Hero: *"Súbete a la Silverado. Gana a lo grande."*
- CTA primary: *"Participar ahora"* / *"Comprar participación"*
- Participation counter: *"Tienes X oportunidades de ganar"*
- Trust: *"Sorteo ante notario · Pago 100% seguro · Transmisión en vivo"*
- Email notice: *"Los correos de confirmación pueden tardar unos minutos. Tu participación queda registrada inmediatamente tras el pago."*
- Steps: *"Compra un fondo de pantalla"* → *"Recibes tu número único"* → *"Sorteo en vivo ante notario"*

### No Emoji in UI
The brand does not use emoji in the interface. Trust badges and icons use clean SVG/icon sets only.

---

## Visual Foundations

### Color Vibe
Deep-black luxury automotive aesthetic. The page is predominantly dark (`#0A0A0B`), with gold as the commanding accent and chrome/white for primary text. Occasional warm amber glows give depth without crossing into casino neon. The palette reads as: *a premium car dealership crossed with a sports award ceremony*.

### Backgrounds
- **Base:** Pure near-black (`#0A0A0B`) — never use pure `#000`.
- **Elevated surfaces:** `#141416` for cards and section panels.
- **Glow effect:** A radial golden halo (`--grad-glow`) is placed behind hero product imagery and key price figures to create a "spotlight on stage" effect.
- **No background imagery or textures on UI** — the car image itself is the only photographic element; it uses a fade-to-black mask at the bottom.
- **No gradients as full-page backgrounds** — gradient is reserved for *text* and *button fills* only.

### Typography
- **Display/Headlines:** Poppins ExtraBold (700–900) — condensed weight, high impact. *Note: Clash Display is the ideal choice; replace Poppins once font files are available.*
- **Body/UI:** Inter — clean, highly legible at small sizes.
- **Numeric/Mono:** Geist Mono or Inter with `font-variant-numeric: tabular-nums` — used for prices, countdown timers, ticket numbers.
- Headlines sit at `line-height: 1.05` for tighter stacking. Body at `1.6` for breathing room.
- ALL-CAPS labels always carry `letter-spacing: 0.08em`.

### Gold Treatment
The primary brand expression. Used for:
- Main CTA button fills (`--grad-gold` with `--shadow-inset-metal`)
- Key headline words / price figures (gradient clipped to text)
- Card borders in "premium" variant
- Progress bar fill
- Countdown number backgrounds

Gold is used sparingly but boldly — it must always feel earned and special, not decorative wallpaper.

### Chrome/Silver Treatment
Used for "Súbete" in the logo and for primary body text (`--silver-100`). Secondary text is `--silver-300`; tertiary / placeholder text is `--silver-500`.

### Borders
- Standard cards: `1px solid rgba(255,255,255,.06)` — barely-there separation.
- Premium card variant: `1px solid transparent` with `background-image: var(--grad-border)` clipped to border-box — a metallic gold gradient border.
- Inputs: `1px solid rgba(255,255,255,.12)`, focus → `1px solid var(--gold-500)`.

### Shadows
- Card depth: `--shadow-card` (0 10px 30px black at 45% opacity)
- Gold glow on CTAs: `--shadow-gold` (warm amber at 35% opacity)
- Inset metallic emboss on buttons: `--shadow-inset-metal`

### Corner Radii
- Small chips/badges: `--radius-sm` (8px)
- Standard cards / inputs: `--radius-md` (14px)
- Large panels / hero cards: `--radius-lg` (22px)
- Pill buttons / tags: `--radius-pill` (999px)

### Motion
- All UI transitions: `200–300ms cubic-bezier(.22,.61,.36,1)` (`--ease-ui`)
- CTA hover: gold brightens + `translateY(-2px)` + shadow intensifies
- Section reveal: `opacity 0→1` + `translateY(16px→0)` on scroll entry
- Confetti: slow random-drift particle fall; gated behind `@media (prefers-reduced-motion: no-preference)`
- Count-up numerics: animated on viewport entry
- No infinite decorative loops on visible page content (confetti only in hero + purchase confirmation)

### Hover / Press States
- Primary button: brightness up + lift 2px
- Secondary button: background fills with gold at 10% opacity
- Cards: border brightens subtly (`rgba(255,255,255,.12)`)
- Links: color shifts from `--silver-500` to `--silver-100`

### Imagery
- Only the car (Chevrolet Silverado Z71) is used as a photo. Style: well-lit on dark/neutral background.
- Double-image technique: one crisp copy layered over a blurred (`filter: blur(40px)`) copy at reduced opacity to create color halo.
- Bottom fade: `mask-image: linear-gradient(180deg, #000 60%, transparent)` to blend car into page background.

### Cards
Three variants:
1. **Default** — `bg: --bg-elevated`, `border: 1px solid rgba(255,255,255,.06)`, `box-shadow: --shadow-card`, `border-radius: --radius-md`
2. **Premium** — above + gradient metal border + `--shadow-gold`
3. **Surface** — `bg: --bg-surface`, tighter padding, for form groups / modals

### Layout
- Max content width: `1200px` centered.
- Horizontal padding: `--space-6` (mobile) → `--space-12` (desktop).
- Section vertical rhythm: `--space-16` to `--space-24` between major sections.
- Flexbox and CSS Grid preferred; `gap` always used over margin between siblings.

### Blur / Transparency
- Backdrop blur: used on modal overlay (`backdrop-filter: blur(8px)`)
- Card blur: NOT used on standard cards — only behind-image blur effect
- Glass morphism: avoided (would dilute the premium dark aesthetic)

---

## Iconography

### Approach
No dedicated icon font or third-party icon system is specified in the brand. The design uses minimal, purposeful iconography:
- **Trust badges:** Simple bold SVG icons inline (shield, checkmark, gavel/notary)
- **Navigation:** Standard chevrons, X close, hamburger (SVG)
- **UI affordances:** Stepper +/− buttons use plain text glyphs

### No Emoji
Emoji are not part of this brand's visual language in UI contexts.

### SVG Philosophy
- Stroke-based, 2px, rounded caps/joins
- Color: `currentColor` so they inherit text color
- Size: typically 20×20 or 24×24 in UI

---

## File Index

```
/
├── styles.css                    ← Design system entry point (import only)
├── readme.md                     ← This file
├── SKILL.md                      ← Skill manifest for Claude Code
│
├── tokens/
│   ├── colors.css                ← All color + gradient tokens
│   ├── typography.css            ← Font families, scale, weights
│   └── spacing.css               ← Spacing, radii, shadows, motion
│
├── assets/
│   └── logo.jpg                  ← Primary brand logo (1080×1080)
│
├── guidelines/
│   ├── colors-brand.card.html    ← Specimen: brand gold palette
│   ├── colors-neutral.card.html  ← Specimen: silver/chrome palette
│   ├── colors-semantic.card.html ← Specimen: success/warning/danger/info
│   ├── gradients.card.html       ← Specimen: all gradient tokens
│   ├── type-display.card.html    ← Specimen: display / headline type
│   ├── type-body.card.html       ← Specimen: body / UI type
│   ├── type-mono.card.html       ← Specimen: numeric / mono type
│   ├── spacing.card.html         ← Specimen: spacing scale
│   ├── radii-shadows.card.html   ← Specimen: radii + shadow tokens
│   ├── motion.card.html          ← Specimen: easing + duration tokens
│   └── brand-logo.card.html      ← Specimen: logo usage
│
├── components/
│   ├── buttons/
│   │   ├── Button.jsx            ← Primary / secondary / ghost button
│   │   ├── Button.d.ts
│   │   ├── Button.prompt.md
│   │   └── buttons.card.html
│   ├── cards/
│   │   ├── Card.jsx              ← Default / premium / surface card
│   │   ├── Card.d.ts
│   │   ├── Card.prompt.md
│   │   └── cards.card.html
│   ├── badge/
│   │   ├── Badge.jsx             ← Trust / status / count badge
│   │   ├── Badge.d.ts
│   │   ├── Badge.prompt.md
│   │   └── badge.card.html
│   ├── forms/
│   │   ├── Input.jsx             ← Text input field
│   │   ├── Input.d.ts
│   │   ├── Input.prompt.md
│   │   └── forms.card.html
│   ├── participation/
│   │   ├── ParticipationSelector.jsx  ← Quantity stepper + package chips
│   │   ├── ParticipationSelector.d.ts
│   │   ├── ParticipationSelector.prompt.md
│   │   └── participation.card.html
│   ├── countdown/
│   │   ├── Countdown.jsx         ← Days/hrs/min/sec countdown blocks
│   │   ├── Countdown.d.ts
│   │   ├── Countdown.prompt.md
│   │   └── countdown.card.html
│   └── progress/
│       ├── ProgressBar.jsx       ← Sold-participation progress bar
│       ├── ProgressBar.d.ts
│       ├── ProgressBar.prompt.md
│       └── progress.card.html
│
└── ui_kits/
    ├── landing/
    │   └── index.html            ← Full landing one-page prototype
    └── purchase/
        └── index.html            ← Purchase flow / modal prototype
```

---

## Components Summary

| Component | Purpose |
|---|---|
| `Button` | Primary CTA (gold), Secondary (outlined), Ghost |
| `Card` | Content container in default / premium / surface variants |
| `Badge` | Trust labels, status chips, count indicators |
| `Input` | Form text input with dark-theme styling |
| `ParticipationSelector` | Core commerce widget — stepper + quick-pick chips + live price |
| `Countdown` | Sorteo deadline countdown (days/hrs/min/sec) |
| `ProgressBar` | Participations sold vs. total — drives FOMO |
