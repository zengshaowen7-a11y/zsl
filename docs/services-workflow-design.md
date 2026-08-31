# Services workflow module

## Design → Garden → Taste

- Design: retained JW's Manrope typography, green palette, existing `.sov-container` width and section background. Replaced five narrow text cards with five selectable stages and one shared photo/detail panel. Variance 5, motion 6, density 4.
- Garden: reviewed and reused five existing illustrative assets: account support, sourcing, QC, packing and dispatch. These are existing generated site illustrations, not new documentary evidence. No image generation or editing was needed.
- Taste: compact semantic stage labels, a clear current selection, previous/next/restart actions, reduced-motion support, mobile numbered navigation and a shared grid sizing all panels to the longest localized content.

## Contracts

- Section H2 is exactly `font-size: clamp(28px, 4.45cqw, 32px); line-height: 1.12; color: #000`.
- Container widths and horizontal spacing are inherited unchanged. Desktop title measured 32px / 35.84px; mobile measured 28px / 31.36px. Mobile gutters remain 16px.
- Background colors and original radial wash remain. Its oversized 116% paint is now rendered with background-size inside a 100%-width pseudo-element, preserving the visual while removing decoration overflow from this section.
- Five original workflow titles/descriptions are retained. Three awkward German descriptions were clarified without adding service guarantees.
- No timers or auto-advancing text. Entrance starts in view; selecting a stage replays the image/text transition. Reading stays under user control.
- Tabs support ArrowLeft/ArrowRight, Home/End and native Enter/Space. One tab is in the Tab sequence. Inactive panels use `aria-hidden`, `inert` and `visibility:hidden`: they reserve height but cannot be read or focused. The first previous button is disabled; the final forward button explicitly returns to the start.
- No-JS fallback shows the complete ordered workflow; print shows all five stages. New motion animates only transform and opacity and is gated by `prefers-reduced-motion: no-preference`.

## Verification

- `node scripts/check-services-workflow.mjs`: six locales, five existing assets, keyboard target boundaries, ARIA/control contracts, observer entrance and cleanup, CSS heading/background/gutter contracts and compositor-only motion.
- ESLint on changed components, UI copy and test; existing six-locale translation check.
- Browser visual checks: German desktop 1920px, tablet 768px and mobile 375px/320px; stage 3 and stage 5 image/content selection and next-step action were observed. Heading styles and all five panel heights were inspected. Only one panel appears in the accessibility snapshot.
- The workflow itself has no overflowing children at 768px, 375px or 320px. Page-level overflow outside this module is not covered by this change.
- Browser snapshots occasionally returned the initial selection even when live screenshots showed the selected stage. Final live screenshot/CUA verification confirmed stable selection across calls and the complete 3 → 4 → 5 → 1 next/restart sequence, with unchanged panel bounds. English at 1280px was also visually verified. No production build, Lighthouse score or OS-level reduced-motion emulation is claimed. Reduced-motion handling is covered by CSS inspection; keyboard target selection by automated tests.

Files: `ServicesWorkflow.js`, `services-workflow-ui.js`, `services-workflow.css`, and its scoped integration in `ServicesOverviewRedesign.js`.
