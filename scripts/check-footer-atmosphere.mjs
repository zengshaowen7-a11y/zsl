import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");
const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const css = postcss.parse(read("src/styles/footer-atmosphere.css"));
const footer = read("src/layouts/partials/Footer.js");
const backdrop = read("src/layouts/components/BrandBackdrop.js");
assert.ok(footer.includes('variant="network"'));
assert.ok(footer.includes('globe={false} watermark'));
assert.ok(footer.includes('data-jw-motion="playing"'));
assert.ok(footer.includes('className="ff-footer jw-scene jw-footer-atmosphere"'));
assert.ok(!footer.includes("BackgroundMotionControl"));
assert.ok(backdrop.includes('variant === "network"'));
assert.ok(backdrop.includes('aria-hidden="true"'));
assert.ok(backdrop.includes("observer.disconnect()"));
let keyframes = 0;
css.walkAtRules("keyframes", (rule) => {
  keyframes++;
  rule.walkDecls(({ prop }) => assert.ok(["opacity", "transform"].includes(prop)));
});
assert.equal(keyframes, 1);
css.walkDecls("animation", (decl) => {
  assert.ok(decl.parent.parent.params.includes("prefers-reduced-motion: no-preference"));
  assert.ok(decl.parent.parent.params.includes("min-width: 768px"));
});
const shared = read("src/styles/brand-atmosphere.css");
assert.ok(shared.includes('.jw-backdrop[data-visible="false"] *'));
assert.ok(shared.includes("pointer-events: none"));
assert.ok(shared.includes("prefers-reduced-motion: reduce"));
assert.ok(read("src/app/[locale]/layout.js").includes('import "../../styles/footer-atmosphere.css"'));
for (const key of ["lead", "services", "company", "contactUs", "rights", "serviceSummary"]) {
  assert.ok(footer.includes(`t("${key}")`));
}
console.log("PASS: footer watermark swap, compositor-only motion, mobile/reduced-motion gates, offscreen pausing and preserved translation keys.");
