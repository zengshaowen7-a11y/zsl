import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const source = read("src/layouts/components/PreparationEntrance.js");
const css = read("src/styles/how-it-works-preparation.css");
assert.match(css, /font-size: clamp\(28px, 4\.45cqw, 32px\) !important/);
assert.match(css, /line-height: 1\.12 !important/);
assert.match(css, /color: #000 !important/);
assert.match(css, /prefers-reduced-motion: no-preference/);
assert.match(css, /max-width: 640px/);
assert.doesNotMatch(css, /background\s*:/);
for (const locale of ["en", "de", "fr", "es", "nl", "pl"]) {
  const data = JSON.parse(read(`src/messages/${locale}/how-it-works.json`)).HowItWorks;
  assert.equal(data.startingDetails.length, 4);
  assert.ok(data.start.title && data.start.lead);
  assert.ok(data.startingDetails.every((item) => item.title && item.copy));
}
const effect = source.slice(source.indexOf("    const root = rootRef.current;"), source.indexOf("  }, []);"));
function run(reduced = false, available = true) {
  const targets = Array.from({length: 5}, () => ({dataset: {}}));
  const observed = new Set();
  let callback;
  class Observer {
    constructor(fn) { callback = fn; }
    observe(target) { observed.add(target); }
    unobserve(target) { observed.delete(target); }
    disconnect() { observed.clear(); }
  }
  const cleanup = vm.runInNewContext(`(() => {${effect}})()`, {
    rootRef: {current: {querySelectorAll: () => targets}},
    window: {IntersectionObserver: available ? Observer : undefined, matchMedia: () => ({matches: reduced})},
    IntersectionObserver: Observer,
  });
  return {targets, observed, callback, cleanup};
}
const active = run();
assert.equal(active.observed.size, 5);
active.callback([{target: active.targets[0], isIntersecting: false}]);
assert.equal(active.targets[0].dataset.preparationVisible, undefined);
active.callback([{target: active.targets[0], isIntersecting: true}]);
assert.equal(active.targets[0].dataset.preparationVisible, "true");
assert.equal(active.observed.size, 4);
active.cleanup();
assert.equal(active.observed.size, 0);
assert.ok(active.targets.every((target) => !target.dataset.preparationVisible));
assert.equal(run(true).observed.size, 0);
assert.equal(run(false, false).observed.size, 0);
console.log("Preparation checks passed: 6 locales, four topics, heading contract, unchanged backgrounds, one-time reveals, cleanup and reduced-motion/static fallbacks.");
