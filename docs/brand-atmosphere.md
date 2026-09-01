# JW background system: Design → Garden → Taste

## Current homepage behavior

Latest placement revision: the quote watermark and footer globe have exchanged sections. Quote now uses `globe` at bottom-left; footer uses `watermark` at top-right. Hero watermark remains untouched, leaving two watermarks across the full Home page including its footer. The globe's existing animation is now shared, bringing shared keyframe families to ten; the footer retains one local flight keyframe.

Per the latest user request, Home starts motion automatically and no longer renders the top-right pause/resume button. Its motion state is fixed to `playing`; background and scroll entrances otherwise stay unchanged. System reduced-motion preferences are still respected. The shared optional control/pause implementation remains available for other pages. Earlier pause-button QA below records the preceding revision, not the current Home UI.

## Design

Preserve-mode refinement for independent eCommerce sellers. The existing mint-green, warehouse-led brand stays intact. Signature: globe/flight-path curves plus the supplied LINK / FULFILL / SCALE mark, not generic particles or glowing blobs.

Dials: DESIGN_VARIANCE 4 (existing layouts), MOTION_INTENSITY 5 (visible, pausable ambient loops), VISUAL_DENSITY 5 (existing content), brand fidelity 10.

Palette: forest #167449, ink #083b2f, leaf #42b978, mint #d9f6e7, paper #fbfdfc. Existing Manrope headings/body and all existing radii, shadows, copy, photos, links, forms and locale behavior remain unchanged. No new font or animation dependency.

Audit: ten homepage sections; hero, comparison and quote use green fills; process and testimonials use softer green; advantages, services, QC and FAQ use paper. Retain these base surfaces. Following the request for every module to look dynamic, all ten now have decorative motion, with lighter motifs on paper surfaces. Remove competing quote grid and process pseudo decoration only where the new layer is installed.

## Garden

Mode B (host-native). Prompt: `garden-gpt-image-2/prompt/jw-brand-watermark-20260831.md`. Generated candidate: `garden-gpt-image-2/image/jw-watermark-candidate-20260831.png`.

Candidate review: glow and translucency departed from the flat reference. It is retained for provenance but NOT imported into the website. Production uses the exact supplied poster copied to `public/images/brand/jw-link-fulfill-scale-source.jpg`. A CSS cropping window excludes the lower brand footer; multiply blending removes its white paper visually. No image resynthesis or logo replacement in the shipped design.

## Global reuse

Shared CSS is imported once in the locale layout but is opt-in, so other pages do not change until selected. Use on any existing light section:

```jsx
import BrandBackdrop from "@layouts/components/BrandBackdrop";

<section className="existing-section jw-scene">
  <BrandBackdrop variant="orbit" align="right" watermark />
  <div className="container">Existing content</div>
</section>
```

- `variant="arcs"` (default): two edge-cropped circular forms.
- `variant="orbit"`: adds two elliptical flight-path lines.
- `variant="flow"`: three connection lines with traveling highlights (platforms).
- `variant="tiles"`: three offset translucent sample/packaging shapes (advantages, services).
- `variant="scan"`: an outlined inspection frame with a moving scan line (QC).
- `variant="ripple"`: offset concentric waves (testimonials, FAQ).
- `motifs`: up to two small library glyphs: parcel, plane, globe, layers, message, shield. These are decorative symbols, not representations of actual inventory.
- `tint`: green, teal, blue or sand. Color changes apply only to artwork; brand fills, typography and CTAs retain existing colors.
- `align="left" | "right"`: varies edge placement.
- `watermark`: supplied brand motif, default off. At most two per long page.
- `eager`: load the above-fold watermark eagerly; keep lower sections lazy.
- Tokens: `--jw-atmosphere-disc-alpha`, `--jw-atmosphere-line-alpha`, `--jw-atmosphere-watermark-alpha`, `--jw-atmosphere-cycle-duration`.
- For pages using the optional `BackgroundMotionControl`, wire its `paused` and `onToggle` props to page state and set `data-jw-motion="paused" | "playing"` on the shared ancestor. Home explicitly uses automatic playback without that control, per user request.
- Optional existing dark section: `data-jw-atmosphere="dark"`. This does not enable a site-wide dark theme.
- `home-atmosphere.css` contains only homepage composition overrides; the shared component has no home selector or locale dependency.

Layers: section background, noninteractive clipped decoration at z-index 0, existing content at z-index 1. Avoid adding blanket overflow clipping to a section with menus or focus rings. All decoration is aria-hidden and never intercepts clicks.

Motion updated after feedback that the first version was barely perceptible: 8-10 second alternating loops, roughly 80-100px circle travel, 24-degree orbit sweep and a 22px watermark float. Stronger opacity and 2px route outlines make movement visible. The localized pause/resume button stops all backgrounds without resetting positions. Offscreen layers pause automatically. No scroll listeners, requestAnimationFrame loop, or per-frame React state updates. IntersectionObserver disconnects on unmount. Static on mobile and with reduced-motion; hidden in print.

## Taste

Preserve reference geometry and flat brand artwork; reject glowy generation. Keep effects at edges, content first. No particle confetti, no repeating slogan in every section, no animated forms. Existing content/layout exceptions in the source are preserved rather than rewritten for generic taste rules. Other pages are not blindly decorated; the shared layer is ready for deliberate rollout after homepage approval.

## Verification (2026-08-31)

- `node scripts/check-brand-atmosphere.mjs`: passed. CSS parsed; ten scoped decorations/two watermarks; source asset and existing anchors present; compositor-only loops, page pause control, reduced-motion/mobile gates and observer cleanup.
- ESLint: new component and check script clean. Existing homepage retains one pre-existing next/no-img-element warning for a testimonial flag image.
- Browser: homepage checked at 1280, 1440, 1920 and 375 CSS-pixel viewport widths. No document horizontal overflow. Wide header remains 1320px. Desktop process backdrop enters only while visible; mobile has zero active backdrop animations.
- Quote country-code menu opens successfully; no submission performed. Both watermark images load. Decoration is aria-hidden and pointer-events:none.
- Existing small-screen header wraps the menu button; existing hero proof strip is dense on phones. These are outside this background-only change and are not claimed fixed.
- Reduced-motion behavior checked through CSS regression assertions, not OS media emulation. Production build, Lighthouse/Core Web Vitals and a site-wide route audit were not run. Local development recompiles can show transient unstyled frames; inspection used settled styles.
- Loop revision: browser computed transforms change over time; pause sets animation-play-state to paused and holds the same transform across checks; resume returns to running. No horizontal overflow at the tested desktop viewport. New control and updated regression script pass ESLint.

## All-module revision

Ten sections / ten backgrounds / fourteen small motifs. Hero: orbit + plane + watermark. Platforms: flowing connections. Advantages: sand-colored sample layers, parcel/globe. Process: circular forms, parcel/plane. Services: teal layers, package icons. Comparison: orbit/globe. QC: pale-blue scan frame, shield/parcel. Testimonials: teal ripples/message. FAQ: pale-blue ripples/message/plane. Quote: green arcs/plane/watermark.

All nine keyframe families animate only transform/opacity. Pseudo-element traveling highlights respect the same pause and offscreen rules. Mobile remains a simplified static treatment; reduced motion and print remain respected. No imagery service or new dependency was needed for these code-native diagrams and existing react-icons glyphs.

Browser revision checks: all ten sections contain their backgrounds and fourteen motifs are mounted. QC scan translation changed from 2.7px to 200.8px between observations. The shared pause button stops both the scan and the flow pseudo-element; resume works. Desktop screenshots reviewed for hero, advantages, QC and FAQ; moved the hero plane away from its heading. No desktop horizontal overflow. Regression script passes.

## Home entrances: Design → Garden → Taste

Design read: preserve-mode B2B fulfillment homepage for independent sellers. Keep the green brand, Manrope, photography, hierarchy, form, URLs and existing background motion. Dials: DESIGN_VARIANCE 4 / MOTION_INTENSITY 6 / VISUAL_DENSITY 5. Add presentation-like hierarchy through brief staged entrances, without flashes of light, pinned scrolling or layout changes.

Garden review: mode B is available; reuse the existing approved photography and brand poster. No new bitmap is appropriate for this motion-only revision. Implement code-native entrances instead of replacing brand assets or generating static mockups.

Choreography lives in `HomeEntranceMotion.js`: all ten sections, 57 rendered targets in English. Hero copy cascades before the media panel; platform stats rise; advantages stagger upward; process steps arrive in order; services scale/rise; comparison and quote use directional entrances; QC combines checklist slides with report zoom; testimonials rise; FAQ rows rise. Desktop duration 620-880ms, delay capped at 320ms; mobile 520ms, 22px maximum travel and 100ms maximum delay. Horizontal travel is clamped to actual viewport gutters.

Targets are observed individually, not as one oversized section, so lower service cards animate when reached. Entrances play once per mount. Only opacity/transform animate, with no per-frame React updates or new dependency. Web Animations effects are removed on completion to restore original hover transforms. Pausing settles active entrances in their readable final state. Focus/pointer interaction settles that target immediately. Reduced-motion changes and printing settle all targets. Cleanup disconnects observers, cancels animation handles and removes listeners/attributes. Server/no-JS content is visible by default.

Taste scope: retain existing copy/layout/theme and library icons; do not apply greenfield copy-length, dark-mode, image-generation or restructuring rules to this motion-only request. Existing header/mobile issues noted above remain outside scope. Browser verified coverage, final opacity/transform, no horizontal overflow and FAQ interaction. `check-home-entrance.mjs` exercises ten scene definitions, finite animation properties, reduced motion, paused entry, focus, cancellation and cleanup. ESLint and the existing backdrop regression pass. No new production build or Lighthouse measurement is claimed.
