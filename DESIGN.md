---
name: ka fe
description: Coffee made personal — a NYC neighborhood café, Spring 2027
colors:
  paper: "#F4EFE6"
  silk: "#EAD9BE"
  espresso: "#231A15"
  roast: "#C8772E"
  roast-dark: "#A85E1E"
  celadon: "#9DB0A1"
  text-muted: "#5A4F47"
  text-hint: "#8A7F77"
  divider: "#E0D5C7"
  glow-warm: "#F3E2CF"
  glow-silk: "#F0E3CC"
  glow-deep: "#E7D2B2"
  error: "#B54A32"
  ube: "#8A6FB0"
  sesame: "#3A332E"
  banana: "#D8A24A"
  matcha: "#7FA05A"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-1px"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.5px"
rounded:
  full: "100px"
  none: "0"
spacing:
  section: "4rem"
  element: "1.5rem"
  tight: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.espresso}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.espresso}"
    rounded: "{rounded.full}"
    padding: "0.875rem 1.75rem"
---

# Design System: ka fe

## 1. Overview

**Creative North Star: "The Neighborhood Counter"**

This is the visual language of a place where everyone belongs. The barista remembers your order. The taxi driver and the pour-over purist sit at the same counter. There's craft here — real craft, made from scratch — but it's never performed or explained to death. It just shows up in the cup.

The system practices warm minimalism: clean surfaces that breathe, but never cold or austere. Paper-warm backgrounds, hairline dividers, generous whitespace. The restraint creates room for what matters: the coffee, the story, the invitation. Every element earns its place.

What this system rejects: pretentious third-wave gatekeeping ("you're not cool enough" energy), generic chain-café corporate-ness, and the forced-artisanal aesthetic of reclaimed wood and mason jars. The visual language is modern and minimal, but the warmth is real.

**Key Characteristics:**
- Paper-warm palette: cream backgrounds, espresso text, roast accents
- Single typeface (Inter) in two weights — nothing to prove
- Hairline dividers, not heavy borders
- Generous breathing room; density is earned
- Motion that responds, never performs
- A flavor palette (ube, sesame, banana, matcha) that adds personality without overwhelming

## 2. Colors

A paper-and-espresso palette grounded in the materials of the craft: warm cream surfaces, deep coffee-dark text, and roast-orange accents. The flavor palette brings specific drinks to life without diluting the core identity.

### Primary

- **Roast** (`#C8772E`): The primary accent. Used sparingly for links, CTAs, and moments that need warmth. Appears in the logo's "fe" lettering, the nav accent line, and hover states. The numbered markers (01, 02, 03) use this to feel intentional, not decorative.

### Secondary

- **Celadon** (`#9DB0A1`): A quiet green-gray. Reserved for subtle differentiation or future secondary UI elements. Currently unused in the live site — a reserved lane.

### Neutral

- **Paper** (`#F4EFE6`): The body background. Warm off-white with a hint of cream. Sets the entire tone.
- **Silk** (`#EAD9BE`): Secondary surfaces (hero visual panel, signup section). Slightly deeper warmth.
- **Espresso** (`#231A15`): Primary text and button fills. Deep brown-black, never pure black.
- **Text Muted** (`#5A4F47`): Body copy in descriptive contexts. Warm gray.
- **Text Hint** (`#8A7F77`): Labels, placeholders, fineprint. Softer still.
- **Divider** (`#E0D5C7`): Hairline borders between sections. Nearly invisible until you need them.

### Flavor Palette

Four named colors for signature drinks. Each appears as a small dot on the menu:

- **Ube** (`#8A6FB0`): Purple-violet for the ube latte
- **Sesame** (`#3A332E`): Near-black for black sesame drinks
- **Banana** (`#D8A24A`): Golden caramel for the banana latte
- **Matcha** (`#7FA05A`): Soft green for matcha drinks

### Named Rules

**The Roast Scarcity Rule.** The primary accent (Roast) appears on ≤15% of any screen. Its warmth is the punctuation, not the sentence.

**The Flavor Dot Rule.** Flavor colors appear only as small dots (9px inline, 30px on cards) — never as backgrounds, never as large fills. They're garnish, not the dish.

## 3. Typography

**Display Font:** Inter (with system fallbacks)
**Body Font:** Inter (with system fallbacks)

**Character:** A single sans-serif in two weights. Nothing to prove. Inter's neutrality lets the words do the work; the medium weight for headings adds just enough presence without shouting. The system says "confident café owner," not "typography geek."

### Hierarchy

- **Display** (500, `clamp(2.25rem, 5vw, 3.5rem)`, 1.2): Hero headlines only. "Coffee made personal." One per page.
- **Headline** (500, `clamp(1.5rem, 3vw, 2rem)`, 1.2): Section headers. "The short version." "Be first in line."
- **Title** (500, `1.125rem`, 1.4): Card titles, promise titles. "Made here, from scratch."
- **Body** (400, `1.0625rem`, 1.7): Descriptive copy. Max line length: 55ch. Comfortable reading.
- **Label** (400, `0.8125rem`, tracking `0.5px`): Eyebrows, section hints, footer links. Lowercase, never shouted.

### Named Rules

**The One Family Rule.** Inter only. No pairing, no display font. The restraint is the statement.

**The Eyebrow Restraint Rule.** Eyebrows (small label text above headlines) appear only where they add real information — location, timing, category. One per page, maximum. They are not scaffolding; they are address labels.

## 4. Elevation

The system is nearly flat. Depth comes from tonal layering (Paper → Silk → subtle background shifts), not from shadows. This reinforces the paper-and-craft metaphor: surfaces are materials, not floating cards.

### Shadow Vocabulary

- **Nav scroll shadow** (`0 1px 0 rgba(35,26,21,0.04), 0 8px 24px -16px rgba(35,26,21,0.25)`): Appears only when the nav is scrolled. Subtle, warm-tinted.
- **Button hover lift** (`0 10px 22px -12px rgba(35,26,21,0.55)`): Primary buttons lift slightly on hover. The shadow is directional and warm.
- **Signature card hover** (`0 18px 40px -24px rgba(35,26,21,0.45)`): Cards lift on hover with a diffuse, grounded shadow.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as feedback (hover, scroll, focus) — never decorative, never at rest.

## 5. Components

### Buttons

The feel: confident and tactile. Pill-shaped, full-radius corners. Clear distinction between primary (filled) and secondary (outlined).

- **Shape:** Full pill radius (100px)
- **Primary:** Espresso fill, Paper text, `0.875rem 1.75rem` padding
- **Hover:** Lifts 2px with warm shadow; opacity to 0.85
- **Secondary:** Transparent background, Divider border, Espresso text
- **Hover:** Border darkens to Text Muted; lifts 2px

### Navigation

Sticky header with logo left, links right. Hairline border below. On scroll: shadow + rainbow accent line (flavor palette gradient).

- **Logo:** "ka fe" with "fe" in Roast accent
- **Links:** Text Muted default, Espresso on hover, animated underline accent
- **Mobile:** Hamburger toggle, full-width dropdown
- **Scroll state:** Shadow + gradient accent line (Ube → Roast → Banana → Matcha) animates in from left

### Cards / Containers

No heavy card chrome. Grid cells separated by hairline dividers (0.5px Divider color), not by shadows or borders. Background is Paper.

- **Corner Style:** None (square edges for grid cells)
- **Background:** Paper
- **Border:** 0.5px Divider hairlines between cells
- **Internal Padding:** 1.5rem–2rem
- **Hover:** Subtle gradient wash (Roast at 5% opacity) or lift with shadow

### Inputs / Fields

Used in the email signup form.

- **Style:** Paper background, Divider border, full pill radius
- **Padding:** `0.875rem 1.25rem`
- **Focus:** Border changes to Roast accent
- **Placeholder:** Text Hint color

### Promise Grid (Signature Component)

Three-column grid with numbered promises (01, 02, 03). Numbers in Roast accent. Hairline vertical dividers between columns. On mobile: single column with hairline horizontal dividers.

### Flavor Dots (Signature Component)

Small (9px) and large (30px) circular swatches in the flavor palette colors. Used inline before menu item names and on signature cards. On hover: scale up slightly with a subtle glow ring.

## 6. Do's and Don'ts

### Do:

- **Do** use Paper (`#F4EFE6`) as the primary body background. The warmth is the identity.
- **Do** use Espresso (`#231A15`) for primary text, never pure black.
- **Do** use hairline dividers (0.5px) to separate sections. They're architectural, not decorative.
- **Do** let content breathe. Generous whitespace (4rem section padding) is the norm.
- **Do** use motion as feedback: hover lifts, scroll reveals, focus transitions. Motion responds to interaction.
- **Do** respect reduced motion. Every animation has a `prefers-reduced-motion` alternative.
- **Do** keep the accent (Roast) scarce. It should feel like a warm surprise, not wallpaper.

### Don't:

- **Don't** use pretentious third-wave coffee language. No "artisanal," "curated," or gatekeeping vibes. (From PRODUCT.md: *"No intimidating coffee-snob vibes."*)
- **Don't** use generic stock photography. No people laughing at salads. (From PRODUCT.md: *"Nothing mass-produced or corporate."*)
- **Don't** use reclaimed wood textures, mason jar imagery, or chalkboard fonts. (From PRODUCT.md: *"No reclaimed wood clichés, no forced 'artisanal' aesthetic."*)
- **Don't** use gradient text, glassmorphism, or side-stripe borders. These are AI slop tells.
- **Don't** add numbered eyebrows (01 / 02 / 03) to every section as scaffolding. Numbers appear only where they carry meaning (the three promises, menu item numbering).
- **Don't** use multiple typefaces. Inter is the only face.
- **Don't** use flavor palette colors as backgrounds or large fills. Dots only.
- **Don't** add shadows to resting elements. Flat by default; shadows are feedback.
- **Don't** add complexity that doesn't serve the user. The short menu philosophy applies to the interface too.
