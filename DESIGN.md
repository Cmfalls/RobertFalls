---
name: Robert Falls
description: The official site of Tony Award-winning theatre director Robert Falls — an archive that reads like a living career, not a memorial.
colors:
  ink: "#171210"
  ink-deep: "#0c0908"
  oxblood: "#6e1423"
  oxblood-deep: "#420c16"
  oxblood-bright: "#9a2235"
  gold: "#c9a227"
  gold-bright: "#e8c35c"
  cream: "#f1e7d3"
  cream-dim: "#d9cbac"
typography:
  display:
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif'
    fontSize: "clamp(3.5rem, 9vw, 10.5rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.01em"
  headline:
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif'
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  label:
    fontFamily: '"Big Shoulders Display", system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
  body:
    fontFamily: '"Newsreader", Georgia, serif'
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  pullquote:
    fontFamily: '"Newsreader", Georgia, serif'
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "italic"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  section-y: "5rem"
  section-y-lg: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.oxblood-bright}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
  button-outline-hover:
    textColor: "{colors.oxblood}"
---

# Design System: Robert Falls

## 1. Overview

**Creative North Star: "The Goodman Program Insert"**

This system is built to feel like the printed program you're handed walking into a major regional theater: heavy cream stock, oxblood and gold ink, a serif pulled from a body that's been setting type for centuries, and a display face with the blunt, condensed weight of a marquee. It is not a marketing site pretending to be a portfolio, and it is not a memorial pretending to be an archive. Every choice should read as institutional confidence: the kind of restraint that comes from not needing to perform enthusiasm, because the work already speaks.

The system explicitly rejects the generic actor/director portfolio template (headshot, bio, résumé list) and the corporate SaaS landing page (hero-metric tiles, gradient text, identical icon-card grids, rounded-corner everything). Surfaces are flat and square-cornered by default; elevation is earned only through interaction, never decoration. Color is used with discipline: cream and ink carry the great majority of every screen, oxblood is the single recurring accent, and gold is reserved for labels, hover states, and moments that need to feel lit from within, like a marquee bulb.

**Key Characteristics:**
- Flat, square-cornered surfaces; shadow only appears in response to hover, never at rest.
- A strict three-color discipline: cream/ink for structure, oxblood as the one accent, gold for labels and "lit" states.
- Display type set in heavy, condensed, almost-too-large sizes; body and quotes set in an italic literary serif.
- A fine film-grain texture layered over dark sections, never over light ones.
- Authority through specificity: real titles, real names, real years, real numbers. Never vague superlatives.

## 2. Colors

A two-tone foundation (warm cream paper, near-black ink) with a single recurring accent (oxblood) and one secondary "lit" tone (gold) used sparingly for emphasis, not decoration.

### Primary
- **Oxblood** (`#6e1423`): the one recurring accent. Section eyebrows, primary buttons, link hovers, the period in "FALLS." in the hero. Deepens to **Oxblood Deep** (`#420c16`) as a dark section background (e.g. "The Goodman Years"), brightens to **Oxblood Bright** (`#9a2235`) for hover states and the one word of color inside the hero headline.

### Secondary
- **Gold** (`#c9a227`): reserved for section eyebrows on dark backgrounds and the marquee-light motif. Brightens to **Gold Bright** (`#e8c35c`) for hover states on dark backgrounds and for pull-quote accents — the color of a bulb actually lit, not just present.

### Neutral
- **Ink** (`#171210`): primary text color on cream backgrounds; the near-black background for "dark mode" sections. Deepens to **Ink Deep** (`#0c0908`) for the darkest hero gradients.
- **Cream** (`#f1e7d3`): the page's paper. Primary background, and primary text color on dark (ink/oxblood) sections. Dims to **Cream Dim** (`#d9cbac`) for secondary text on cream backgrounds and muted captions.

### Named Rules
**The One Accent Rule.** Oxblood is the only saturated color carrying meaning (links, CTAs, emphasis). Gold never competes with it for the same job; gold marks labels and "lit" states, oxblood marks action and identity.

**The Paper-and-Ink Rule.** At least 80% of any given screen is cream or ink. If a section needs a third surface color, it should be a tint of one of those two, not a new hue.

## 3. Typography

**Display Font:** "Big Shoulders Display" (with system-ui, sans-serif fallback)
**Body Font:** "Newsreader" (with Georgia, serif fallback)

**Character:** A condensed, heavyweight, almost industrial display face (the kind you'd see on a marquee or a vintage playbill spine) paired against a literary, slightly old-fashioned serif body. The contrast is the point: blunt headlines over patient, readable text.

### Hierarchy
- **Display** (800 weight, `clamp(3.5rem, 9vw, 10.5rem)`, line-height 0.85): hero headlines only. Always uppercase, always tight leading, large enough to feel oversized on a phone screen.
- **Headline** (600 weight, `clamp(2.5rem, 5vw, 3.75rem)`, line-height 1.05): section headings (`.section-heading`). One trailing oxblood period is a recurring signature, not a rule to apply everywhere.
- **Label** (600 weight, 0.75rem, letter-spacing 0.18em, uppercase): section eyebrows, button text, metadata (venue/year tags, stat captions). Always uppercase, always wide-tracked.
- **Body** (400 weight, Newsreader, line-height 1.7, max 65–75ch): paragraph copy. Patient and readable; this is where the "literary" personality lives.
- **Pull-quote** (400 weight, Newsreader italic, 1.25rem): direct quotes from Falls or critics. Should always be a real, sourced quote, never invented filler.

### Named Rules
**The Marquee Rule.** Display type is reserved for moments that should feel like they're lit up on a theater facade: the hero name, and nothing smaller than a section heading. Never use the display face for body copy or captions.

## 4. Elevation

Flat by default, lifted only as feedback. Surfaces have no resting shadow; shadows exist exclusively to confirm an interactive element responded to a hover or focus. This keeps the page feeling like print (paper and ink) rather than like software (panels and layers).

### Shadow Vocabulary
- **Hover-lift** (`box-shadow: 0 18px 48px rgba(34,24,20,0.08)` at rest on interactive cards already in a soft border, intensifying to `0 24px 64px rgba(34,24,20,0.14)` on hover, paired with `translateY(-4px)`): the only shadow pattern in the system. Warm, ink-tinted, never pure black.
- **Pill-shell** (`box-shadow: 0 10px 30px rgba(34,24,20,0.06)`): the soft shadow under filter-pill containers and other small floating UI shells. Subtler than the card hover-lift.

### Named Rules
**The Earned-Elevation Rule.** Nothing has a shadow at rest except small floating UI shells (filter pills). Cards, images, and sections are flat until a user's cursor proves they're interactive.

## 5. Components

### Buttons
- **Shape:** square corners, no radius (`rounded-none`), full-bleed sharp rectangle.
- **Primary** (`.btn-primary`): oxblood background, cream text, uppercase Big Shoulders Display label, `padding: 14px 28px`. Hover shifts background to Oxblood Bright.
- **Outline** (`.btn-outline`): transparent background, ink (or cream, on dark sections) border at 30% opacity, same label treatment. Hover shifts border and text color to oxblood (or gold, on dark sections).
- Both variants are always uppercase, wide-tracked, and never rounded. There is no tertiary/ghost button; the two-variant system is deliberate.

### Cards (production thumbnails, archive cards, award tiles)
- **Corner Style:** square, no radius.
- **Background:** white at 80–90% opacity over cream, or transparent over ink.
- **Border:** hairline, ink or cream at 10–15% opacity, brightening to oxblood at ~25–30% opacity on hover.
- **Shadow Strategy:** flat at rest; hover-lift shadow (see Elevation) plus a 4px translateY lift.
- **Internal Padding:** 1.25–1.5rem (`p-5`/`p-6`).

### Pills (filter pills, jump-to pills, status pills)
- **Style:** fully rounded (`rounded-full`), the one place in the system radius is allowed. Small floating UI controls, not content containers.
- **State:** active/selected pills fill with oxblood and cream text; inactive pills stay transparent with low-opacity ink text.

### Navigation
- Wordmark + flat text links, uppercase Big Shoulders Display labels, wide letter-spacing. Transparent over the hero on the homepage (`transparentHeader`), solid cream elsewhere. Active/hover state shifts text to oxblood.

### Marquee Lights (signature component)
- A row of small lit "bulb" dots (gold-bright on dark, oxblood on light) bracketing the hero and the timeline header. This is the system's one decorative flourish and should not be overused outside hero-adjacent moments — it is a punctuation mark, not a background pattern.

## 6. Do's and Don'ts

### Do:
- **Do** lead every section with a real number, title, name, or date before any adjective.
- **Do** keep all card and button corners perfectly square; the one radius exception is small pill-shaped controls.
- **Do** reserve display type (Big Shoulders Display, 800 weight) for hero headlines and section headings only.
- **Do** treat the oxblood/cream/ink/gold palette as closed; if a fifth color feels necessary, use a tint of an existing one instead.
- **Do** let real photography (production stills, rehearsal photos) carry visual weight; the grain texture is for dark sections without a photo behind them.

### Don't:
- **Don't** build a generic actor/director portfolio template: no headshot-plus-bio-plus-résumé-list layout, no Squarespace-theatrical-template look.
- **Don't** build a corporate SaaS landing page: no hero-metric stat tiles with icons, no gradient text, no identical icon-card grids repeated three-plus times.
- **Don't** frame any section, including the 35-year Goodman tenure, as a retirement retrospective or memorial. Past-tense achievement should always imply present-tense standing.
- **Don't** add resting shadows to cards or sections; shadow is earned only through hover/focus interaction.
- **Don't** round corners on anything except small pill-shaped controls (filter pills, jump pills, status pills, the marquee dots).
- **Don't** use side-stripe borders (`border-left`/`border-right` as a colored accent) anywhere; use full borders, background tints, or the pull-quote's existing left-border-as-quote-mark treatment sparingly and only for direct quotations.
