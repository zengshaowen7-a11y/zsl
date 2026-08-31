# Services overview hero refresh

Scope: only the introductory hero in `ServicesOverviewRedesign.js`. Catalog, comparison, FAQ, footer, routing and SEO content remain unchanged.

## Design → Garden → Taste

- Design: retained JW's green palette and existing typeface; changed the bottom four-card row into a split composition with the message/quote on the left and four direct service choices on the right. Variance 5, motion 6, density 4. Long German button text now has intrinsic width rather than a fixed 220px slot.
- Garden: reviewed the existing warehouse backdrop. Reused `jw-receiving-team-v3.png`; no generated assets were needed. Background image position, filters, green overlay and original section inline padding are unchanged. The image `sizes` now correctly reflects its full-width presentation.
- Taste: removed numbered decorative labels and proof-chip boxes, exposed each service's actual description, retained all destinations, and corrected the German hero's awkward category/benefit labels. No new dependencies.

## Layout contract

- H1: `font-size: clamp(28px, 4.45cqw, 32px); line-height: 1.12; color: #000`.
- The content wrapper is the inline-size query container; measured H1 is 32px / 35.84px on desktop and 28px / 31.36px on a 375px phone.
- The existing background CSS and inline gutters are deliberately not overridden. Desktop 1920px gutters remain 370px; 1280px remains 40px; mobile remains 24px.
- Above 1099px: two columns. Tablet: intro followed by a two-column service grid. Below 768px: single-column choices.
- User-specified background and black heading take precedence over generic skill theme/color recommendations. No dark-mode redesign of this one module.

## Motion and access

The isolated client wrapper progressively enhances server-rendered content. Title and actions rise in sequence; service choices slide in from the right. The IntersectionObserver reveals each item once, so mobile choices animate when scrolled into view rather than while off-screen. CSS animates only opacity/transform. Hover and keyboard focus provide directional link feedback; focus bypasses entrance delays. Reduced motion, unavailable observers, no JavaScript, and print retain readable static content. The observer and focus listener are cleaned up on unmount.

## Verification

- ESLint on changed components/test and the six-locale translation check pass.
- `node scripts/check-services-hero.mjs` checks exact title rules, section scope, existing image, six locales' service routes, transform/opacity-only keyframes, reveal-once, focus safety, cleanup and reduced-motion/no-observer fallbacks.
- Browser: German at 1920px and 375px, English at 1280px; checked title computed styles, overflow, margins, visible entrance hooks, mobile off-screen-to-visible transitions, service-detail navigation and catalog anchor.
- Additional checks at 320px and 768px: hero content stays inside the viewport. At 320px, the long German quote label can wrap within the button without clipping. At 768px, the existing later `.sov-process` section causes page-level overflow (813px scroll width on a 753px client width); the refreshed hero is 753px with no overflowing children. That unrelated module was left unchanged.
- No production build, Lighthouse score or measured Core Web Vitals are claimed. Lighthouse is not installed; browser checks used the available in-app browser. Reduced motion was covered by effect tests and media-rule inspection, not an OS setting change.
