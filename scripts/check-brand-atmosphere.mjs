import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");
const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const shared = postcss.parse(read("src/styles/brand-atmosphere.css"));
postcss.parse(read("src/styles/home-atmosphere.css"));

const keyframes = [];
shared.walkAtRules("keyframes", (rule) => {
  keyframes.push(rule.params);
  rule.walkDecls((declaration) => {
    assert.ok(["transform", "opacity"].includes(declaration.prop), "Only composite properties may animate");
  });
});
assert.equal(keyframes.length, 10);
assert.ok(shared.nodes.some((rule) => rule.type === "atrule" && rule.params?.includes("prefers-reduced-motion: reduce")));
assert.ok(shared.nodes.some((rule) => rule.type === "atrule" && rule.params?.includes("min-width: 768px") && rule.params.includes("no-preference")));
shared.walkDecls("animation", (declaration) => assert.ok(declaration.value === "none" || declaration.value.includes("infinite alternate")));
assert.ok(read("src/styles/brand-atmosphere.css").includes('[data-jw-motion="paused"] .jw-backdrop *'));
assert.ok(read("src/styles/brand-atmosphere.css").includes('animation-play-state: paused !important'));
assert.ok(read("src/layouts/components/BackgroundMotionControl.js").includes('onClick={onToggle}'));

const component = read("src/layouts/components/BrandBackdrop.js");
assert.ok(component.includes('aria-hidden="true"'));
assert.ok(component.includes("observer.disconnect()"));
assert.ok(!component.includes('addEventListener("scroll"'));
assert.ok(!component.includes("requestAnimationFrame"));
assert.ok(fs.existsSync(new URL("../public/images/brand/jw-link-fulfill-scale-source.jpg", import.meta.url)));

const home = read("src/layouts/FulfillmentHome.js");
assert.equal((home.match(/<BrandBackdrop\b/g) || []).length, 10);
assert.equal((home.match(/<section\b/g) || []).length, 10);
for (const sectionTag of home.match(/<section\b[^>]*>/g) || []) assert.ok(sectionTag.includes("jw-scene"));
for (const variant of ["flow", "tiles", "scan", "ripple", "orbit"]) assert.ok(home.includes(`variant="${variant}"`));
assert.ok(read("src/styles/brand-atmosphere.css").includes('[data-jw-motion="paused"] .jw-backdrop *::after'));
assert.equal((home.match(/<BrandBackdrop[^>]*\bwatermark\b/g) || []).length, 1);
assert.ok(home.includes('<BrandBackdrop align="left" globe motifs='));
for (const anchor of ["platforms", "process", "services", "faq", "quote"]) {
  assert.ok(home.includes(`id="${anchor}"`), `${anchor} anchor preserved`);
}
assert.ok(read("src/app/[locale]/layout.js").includes('import "../../styles/brand-atmosphere.css"'));
assert.ok(home.includes('data-jw-motion="playing"'));
assert.ok(!home.includes("BackgroundMotionControl"), "Home has no motion toggle, as requested");
assert.ok(!home.includes("backgroundMotionPaused"), "Home always starts automatically");
console.log("PASS: CSS syntax, scoped integration, assets, anchors, reduced-motion/mobile gates and pausable compositor-only loops.");
