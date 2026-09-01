import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");
const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const component = read("src/layouts/components/ServicesFinalCTA.js");
const css = read("src/styles/services-final-invitation.css");
const uiSource = read("src/content/services-final-ui.js");
const ui = vm.runInNewContext(`${uiSource.replace("export const", "const")}\nservicesFinalUi`);
for (const locale of ["en", "de", "es", "fr", "nl", "pl"]) {
  assert.equal(ui[locale].items.length, 3);
  assert.ok(ui[locale].label);
  const content = JSON.parse(read(`src/messages/${locale}/services.json`)).ServicesOverview.final;
  for (const key of ["kicker", "title", "lead", "button"]) assert.ok(content[key]);
}
assert.match(component, /href="\/contact"/);
assert.match(component, /aria-label=\{ui.label\}/);
assert.match(css, /font-size: clamp\(28px, 4\.45cqw, 32px\) !important/);
assert.match(css, /line-height: 1\.12 !important/);
assert.match(css, /color: #000 !important/);
assert.match(css, /prefers-reduced-motion: no-preference/);
assert.match(css, /focus-visible/);
const parsed = postcss.parse(css);
parsed.walkAtRules("keyframes", (rule) => {
  rule.walkDecls((decl) => assert.ok(["transform", "opacity"].includes(decl.prop)));
});
// Existing outer geometry/background is not redefined by the new stylesheet.
parsed.walkRules((rule) => {
  if (!rule.selector.endsWith(".sov-final-invitation")) return;
  rule.walkDecls((decl) => assert.ok(!/^(padding|margin|width|background|border)/.test(decl.prop), decl.prop));
});
const effect = component.slice(component.indexOf("    const root = rootRef.current;"), component.indexOf("  }, []);"));
function harness({ reduced = false, available = true } = {}) {
  let callback;
  let disconnected = false;
  let count = 0;
  const events = new Map();
  const root = { dataset: {}, addEventListener: (name, fn) => events.set(name, fn), removeEventListener: (name) => events.delete(name) };
  class Observer {
    constructor(fn) { callback = fn; count++; }
    observe(target) { assert.equal(target, root); }
    disconnect() { disconnected = true; }
  }
  const cleanup = vm.runInNewContext(`(() => {${effect}})()`, {
    rootRef: { current: root }, IntersectionObserver: Observer,
    window: { IntersectionObserver: available ? Observer : undefined, matchMedia: () => ({ matches: reduced }) },
  });
  return { root, events, cleanup, callback, count, disconnected: () => disconnected };
}
const active = harness();
active.callback([{ isIntersecting: false }]);
assert.equal(active.root.dataset.entered, undefined);
active.callback([{ isIntersecting: true }]);
assert.equal(active.root.dataset.entered, "true");
assert.ok(active.disconnected());
active.events.get("focusin")();
assert.equal(active.root.dataset.focused, "true");
active.cleanup();
assert.equal(active.events.size, 0);
assert.deepEqual(active.root.dataset, {});
assert.equal(harness({ reduced: true }).count, 0);
assert.equal(harness({ available: false }).count, 0);
console.log("Services final CTA passed: 6 locales, contact route, title contract, retained outer geometry, compositor-only motion, focus, cleanup and static fallbacks.");
