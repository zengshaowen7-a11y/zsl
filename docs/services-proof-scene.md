# Services proof scene

## Design

The repeated four-card proof block is replaced by a single quality-control scene: the heading and introduction establish context, then one operational image and a four-step inspection checklist form the main composition. Existing section background, container gutters, and Manrope typography remain unchanged.

## Garden

The scene reuses four existing JW operational photographs for receiving, QC inspection, branded packing, and dispatch scanning. Each photograph maps directly to one checklist item, avoiding decorative or unrelated imagery.

## Taste

- The first item is open by default.
- Selecting an item expands its explanation and crossfades the matching photograph.
- Selecting the open item again collapses it while retaining the current photograph.
- On viewport entry, the photograph eases in from the left and checklist rows rise in sequence.
- Reduced-motion preferences disable all entrance and transition motion.
- The title uses `clamp(28px, 4.45cqw, 32px)`, `1.12` line height, and black text.
