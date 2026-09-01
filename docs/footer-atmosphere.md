# Shared footer: Design → Garden → Taste

Latest placement revision: swap the two motifs identified by the user. The Home quote section now carries the floating globe at bottom-left; the shared footer carries the LINK / FULFILL / SCALE watermark at top-right. Globe geometry/motion has moved into the shared backdrop CSS and is selectable through `globe`. Footer keeps the network tracks but opts out of its default globe with `globe={false}`. Mobile placement is reduced and static. Other text, links and animations are unchanged; the checks below describe the initial footer revision unless noted.

## Design

Preserve-mode refinement of the shared JW footer for eCommerce sellers. Keep the four columns, logo, all translation keys, contact information, URLs and footer height. Global rollout is limited to this shared module; page sections are unchanged. DESIGN_VARIANCE 3, MOTION_INTENSITY 5, VISUAL_DENSITY 5. Existing Manrope typography and rounded logo lockup remain.

Palette: forest #167449, ink #193d30, readable muted #52685e, mint #edf8f1, paper #f8fcf9, leaf wash #e5f4ec. Signature: an edge-cropped globe and moving shipping connections, suggesting the global fulfillment theme without representing live shipment data.

## Garden

Mode B available; no raster generation necessary. Reuse the site's existing BrandBackdrop, FiGlobe/FiSend/FiPackage library glyphs and geometric flight paths, which stay crisp and independently animatable. Add the opt-in `network` variant; all existing variants remain unchanged. No new fonts, dependencies or image requests.

## Taste

Flat translucent art at edges and bottom, no glow/particles/extra slogans. Keep primary copy still and deepen muted text to balance the mint surface. Decorative wrapper is aria-hidden, clipped, pointer-events:none; content remains above it with no clipping of focus outlines. Two new compositor-only animation families: 12s globe drift and 8s flight; flow highlights reuse the shared animation at 10s. Existing observer pauses all decorative descendants and highlights offscreen. Desktop plays automatically without a toggle, following the user's prior preference. Mobile and reduced-motion stay static; print removes decoration. Shared component's effect cleanup remains intact.

Preserve-mode exceptions: no page-wide typography, content, dark-mode or layout overhaul. This task does not invoke greenfield image-generation, hero-composition or new-copy rules. No change to contact methods, forms, metadata or link destinations.

## Checks

- Footer height stayed 500.02px at the default desktop viewport.
- All 15 links and complete visible text match the recorded pre-change DOM.
- Browser observed globe and plane transforms changing between samples; decoration pointer-events is none.
- No horizontal document overflow at 1280, 1920 or 375 CSS pixels. Mobile has no active decorative animations.
- ESLint clean for Footer, BrandBackdrop and the new check script. `check-footer-atmosphere.mjs` and existing `check-brand-atmosphere.mjs` pass.
- No production build, full-route audit, Lighthouse or OS reduced-motion emulation claimed. Reduced-motion and print checked in CSS assertions.
