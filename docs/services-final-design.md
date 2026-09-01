# Services closing invitation

## Design
- Scope: only the closing CTA on Services Overview. The earlier proof-section proposal is not implemented.
- Audience: ecommerce operators deciding whether to request sourcing/fulfillment support.
- Direction: retained JW branding, variance 5 / motion 5 / density 4; a clear invitation with preparation information, not another card grid.
- Palette: existing #d9f6e7 section, #eff8f3 panel, #167449 action, #526a5f body; heading #000 as explicitly requested. Manrope retained, 8px button radius.
- Preserve container width, responsive inline padding, panel background/circle/border, CTA destination and multilingual content structure.
- Full-width heading and explanation above a compact preparation/action row. Mobile becomes a readable vertical stack. No new form, no submission behavior changes.

## Garden
- Asset review: no new image is necessary for this bounded closing CTA. Existing green circular backdrop retained; established react-icons/fi glyphs identify the three topics already mentioned in the invitation.
- No image generation or new raster asset was used.

## Taste
- Exact H2: clamp(28px, 4.45cqw, 32px), line-height 1.12, black. Container query units scoped to the panel.
- A single one-time observer triggers a 720ms entrance sequence with 90ms stagger; the CTA arrives last. Hover translates its arrow. No autoplay carousel, continuous animation, flashing or playback button.
- Keyboard focus bypasses entrance effects. Reduced-motion and no-observer environments render static content. Server markup stays visible without JavaScript. Observer and listener clean up on unmount.
- Three preparation labels support all six locales. German final copy corrected without adding service promises.
- Verified via targeted ESLint, lifecycle/content/style checks, and desktop/mobile browser inspection. Full production build and Lighthouse were not run.
