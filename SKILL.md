---
name: subete-y-gana-design
description: Use this skill to generate well-branded interfaces and assets for Súbete y Gana, a Chilean raffle platform (sorteo) for a Chevrolet Silverado Z71, sold via exclusive smartphone wallpapers. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping or production.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick brand summary

- **Product:** Raffle platform — Chevrolet Silverado Z71 prize, sold via wallpaper purchases at $3.000 CLP each
- **Aesthetic:** Premium dark luxury automotive — deep black, metallic gold, chrome silver
- **Primary palette:** `#0A0A0B` base, `#D4AF37` gold brand, `#F5C842` gold bright, `#FFFFFF` chrome
- **Fonts:** Poppins ExtraBold (display/headlines), Inter (body/UI), tabular-nums for prices
- **Key gradient:** `linear-gradient(180deg, #FFF1B8 0%, #F5C842 28%, #D4AF37 55%, #B8860B 100%)` — gold
- **Components available:** Button, Card, Badge, Input, ParticipationSelector, Countdown, ProgressBar
- **Namespace:** `window.SBeteYGanaDesignSystem_9297b8` (after loading `_ds_bundle.js`)
- **Entry CSS:** `styles.css` (imports all tokens)
- **Logo:** `assets/logo.jpg`
- **Language:** Spanish (Chile), informal "tú" address, aspirational tone
- **Price format:** `$3.000` (dot separator, no decimals)
- **Anti-patterns:** No emoji in UI, no neon colors, no casino aesthetic, no gradients as full-page backgrounds
