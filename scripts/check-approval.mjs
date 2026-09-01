import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");
const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const source = read("src/layouts/components/ApprovalEntrance.js");
const css = read("src/styles/how-it-works-approval.css");
assert.match(css, /font-size: clamp\(28px, 4\.45cqw, 32px\) !important/);
assert.match(css, /line-height: 1\.12 !important/);
assert.match(css, /color: #000 !important/);
assert.match(css, /prefers-reduced-motion: no-preference/);
assert.match(css, /max-width: 767px/);
const parsed = postcss.parse(css);
parsed.walkAtRules("keyframes", (rule) => rule.walkDecls((decl) => assert.ok(["opacity", "transform"].includes(decl.prop))));
parsed.walkRules((rule) => {
  if (!rule.selector.endsWith(".hiw-approval-grid.hiw-gates-layout")) return;
  rule.walkDecls((decl) => assert.ok(["grid-template-columns", "gap", "container-type"].includes(decl.prop)));
});
for (const locale of ["en", "de", "fr", "es", "nl", "pl"]) {
  const data = JSON.parse(read(`src/messages/${locale}/how-it-works.json`)).HowItWorks;
  assert.equal(data.checkpoints.length, 3);
  assert.ok(data.checkpoints.every(([title, copy]) => title && copy));
  assert.ok(data.approval.title && data.approval.lead && data.approval.proofs[2]);
}
const effect = source.slice(source.indexOf("    const root = rootRef.current;"), source.indexOf("  }, []);"));
function harness(reduced = false, available = true) {
  const targets = Array.from({length: 4}, () => ({dataset: {}}));
  const observed = new Set();
  let callback;
  class Observer {
    constructor(fn) { callback = fn; }
    observe(target) { observed.add(target); }
    unobserve(target) { observed.delete(target); }
    disconnect() { observed.clear(); }
  }
  const cleanup = vm.runInNewContext(`(() => {${effect}})()`, {
    rootRef: {current: {querySelectorAll: () => targets}}, IntersectionObserver: Observer,
    window: {IntersectionObserver: available ? Observer : undefined, matchMedia: () => ({matches: reduced})},
  });
  return {targets, observed, callback, cleanup};
}
const active = harness();
assert.equal(active.observed.size, 4);
active.callback([{target: active.targets[0], isIntersecting: false}]);
assert.equal(active.targets[0].dataset.gateVisible, undefined);
active.callback([{target: active.targets[0], isIntersecting: true}]);
assert.equal(active.targets[0].dataset.gateVisible, "true");
assert.equal(active.observed.size, 3);
active.cleanup();
assert.equal(active.observed.size, 0);
assert.ok(active.targets.every((target) => !target.dataset.gateVisible));
assert.equal(harness(true).observed.size, 0);
assert.equal(harness(false, false).observed.size, 0);
console.log("Approval checks passed: 6 locales, 3 gates, exact H2, preserved outer styling, transform/opacity only, cleanup and static fallbacks.");
