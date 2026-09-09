# Global page atmosphere

## Design

Mode: Redesign · Preserve. Existing routes, content, section fills, containers, forms, and page-specific interactions stay unchanged. The Home page remains the visual source of truth and keeps its bespoke per-module composition.

The non-home system follows one repeating rhythm:

1. Orbit — disc, arc, and route line.
2. Flow — three logistics lanes and a moving signal.
3. Tiles — layered operational records.
4. Ripple — expanding handoff rings.

Alignment alternates right, left, right, left. The cycle repeats for long service-detail pages.

The surface sequence repeats with the same four-beat rhythm: mint `#dff2e7`, white `#ffffff`, whisper green `#f4fbf7`, and soft green `#eaf7f0`. Existing dark modules remain protected instead of being recolored.

All non-home page H1 and module H2 titles inherit the Home title scale: `clamp(28px, 4.45cqw, 32px)` with `1.12` line height. Each decorated section establishes its own inline-size container so the scale remains component-responsive.

## Garden

The implementation reuses the existing `LINK · FULFILL · SCALE` brand image. No external or fabricated imagery is introduced. Watermarks are restricted to hero, proof, evidence, case, final, CTA, invitation, and quote sections.

## Taste

- A shared route-aware orchestrator assigns the sequence to direct page sections.
- Home is excluded to prevent duplicate decoration; the footer retains its own network background.
- Dark sections automatically use pale green lines and a screen-blended watermark.
- Decorative layers are pointer-free, isolated behind content, and do not change container widths or section colors.
- Desktop movement runs for 8–12 seconds and pauses offscreen.
- Mobile uses a lighter, static composition.
- Reduced-motion and print modes disable or remove decorative movement.

Coverage: 26 non-home routes per locale, or 156 localized non-home URLs across six active locales.
