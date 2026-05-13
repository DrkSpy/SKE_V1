---
name: Precision Engineering Identity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#454843'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#757873'
  outline-variant: '#c5c7c1'
  surface-tint: '#5e5f5c'
  primary: '#5e5f5c'
  on-primary: '#ffffff'
  primary-container: '#f9f8f4'
  on-primary-container: '#71726f'
  inverse-primary: '#c7c7c3'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#775a19'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff7ef'
  on-tertiary-container: '#8d6d2b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2df'
  primary-fixed-dim: '#c7c7c3'
  on-primary-fixed: '#1b1c1a'
  on-primary-fixed-variant: '#464744'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 72px
    fontWeight: '200'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '300'
    lineHeight: '1.2'
  technical-data:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  body-airy:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  section-gap: 160px
  element-gap: 24px
  margin-page: 64px
  border-width: 0.5px
---

## Brand & Style

This design system is built on the intersection of industrial precision and high-end luxury. It targets a sophisticated clientele—aerospace, medical, and high-tech sectors—where clinical cleanliness and microscopic accuracy are paramount. 

The aesthetic is **High-End Minimalism** fused with a **Blueprint** structural style. It evokes the feeling of a pristine white-room laboratory: silent, orderly, and technologically advanced. The UI should feel like a high-precision instrument—every pixel serves a functional purpose, surrounded by massive "negative space" that allows the technical specifications and macro-photography to resonate. 

The emotional response is one of total confidence: a "measure twice, cut once" philosophy translated into a digital interface.

## Colors

The palette is divided into two distinct environmental modes that signify the context of the information being viewed:

- **The Monolith (Light Mode):** Utilizes the primary Cream (#F9F8F4) as the canvas. This is used for brand storytelling, the 'Archive' of past works, and corporate overviews. It feels expansive and premium.
- **The Laboratory (Dark Mode):** Shifts to Obsidian Black (#0A0A0A). This mode is reserved for technical data, engineering specifications, and "live" production metrics.
- **Accents:** Gold (#C5A059) is used sparingly for high-value CTA elements or quality-check certifications. Silver and Steel tones (#B0B0B0) are used for technical borders and secondary data visualizations, reflecting the raw materials of the factory.

## Typography

The typographic hierarchy is designed to balance editorial elegance with engineering utility:

- **Headings:** Noto Serif is employed in its lightest weights. It provides a "literary" and "archival" feel, suggesting a long-standing heritage of craftsmanship.
- **Body:** Inter is chosen for its clinical clarity and neutrality. Set with high line-height to maintain the "airy" feel required by the brand aesthetic.
- **Technical/Data:** Space Grotesk provides a geometric, tech-forward contrast. It is used for all numerical data, dimensions, and manufacturing specs, mimicking the look of technical blueprints and machine readouts.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system (12-columns) with exaggerated margins to enforce a sense of "premium scarcity." 

- **Structural Borders:** 0.5px lines are used to divide sections, creating a blueprint or drafting paper effect. These lines should always be high-contrast against their background (Black lines on Cream; Silver lines on Obsidian).
- **Massive Whitespace:** Vertical spacing between major sections should be aggressive (160px+), forcing the user to focus on one "component" or "machine part" at a time.
- **Alignment:** Content is often strictly left-aligned to a single vertical axis to emphasize order and precision engineering.

## Elevation & Depth

This design system rejects shadows and blurs in favor of **Structural Layering** and **Low-Contrast Outlines**.

- **Flat Precision:** Elevation is not communicated through height (Z-axis) but through logical containment. Elements are housed within 0.5px bordered boxes.
- **The "Slide" Depth:** Depth is perceived during transitions. Using 'glide' and 'fade' motions, elements appear to move on a 2D plane like precision-machined parts sliding into place on a factory floor.
- **Macro-Focus:** Depth-of-field is handled by the photography, not the UI. Backgrounds should remain flat, allowing the high-detail macro-photography of steel and gold components to provide the only organic depth in the interface.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

In the world of precision engineering, sharp edges signify accuracy and exactness. Every container, button, and image frame must maintain a 90-degree angle. This reinforces the "Blueprint" aesthetic and ensures the UI feels like it was milled from a solid block of material rather than molded.

## Components

### Buttons
Buttons are strictly architectural. 
- **Primary:** A sharp rectangle with a 0.5px border. Hover state triggers a "fill" animation from left-to-right.
- **Ghost:** Text-only with a 0.5px underline that extends to 100% width on hover.
- **Technical:** Small, Space Grotesk labels with a [+] icon, signifying "Expand Data."

### Cards & Containers
Cards do not have shadows. They are defined by their 0.5px borders. In the 'Laboratory' section, these containers may have a very subtle dark-grey fill (#121212) to distinguish them from the pure Obsidian background.

### Inputs & Fields
Form fields are clinical. Labeling is always in `label-caps`. The input line is a single 0.5px bottom-border. On focus, the border color shifts to Gold (#C5A059).

### Data Tables
Tables are the heart of the "Technical Specs" section. They use 0.5px grids. Cells have generous padding, and all numerical data is right-aligned using the `technical-data` font style to ensure decimals align perfectly for comparison.

### Navigation
A minimalist top-bar with a "Monolith" (Light) or "Laboratory" (Dark) toggle. Navigation links use thin serif typography, spaced widely.