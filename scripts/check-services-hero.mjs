import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const component = read("src/layouts/ServicesOverviewRedesign.js");
const css = read("src/styles/services-overview-launch.css");
assert.match(css, /font-size: clamp\(28px, 4\.45cqw, 32px\) !important/);
assert.match(css, /line-height: 1\.12 !important/);
assert.match(css, /color: #000 !important/);
// Button/card padding may change; outer section margins and backdrop may not.
const parsed = postcss.parse(css);
parsed.walkRules((rule) => {
  if (!rule.selector.endsWith("section.sov-hero.sov-hero.sov-launch")) return;
  rule.walkDecls((decl) => assert.ok(["padding-top", "padding-bottom"].includes(decl.prop)));
});
parsed.walkAtRules("keyframes", (rule) => {
  rule.walkDecls((decl) => assert.ok(["opacity", "transform"].includes(decl.prop)));
});
assert.match(css, /prefers-reduced-motion: no-preference/);
assert.match(component, /jw-receiving-team-v3\.png/);
assert.match(component, /sizes="100vw"/);
assert.match(component, /href="#service-catalog"/);
assert.match(component, /href="\/contact"/);
for (const locale of ["en", "de", "fr", "es", "nl", "pl"]) {
  const messages = JSON.parse(read(`src/messages/${locale}/services.json`)).ServicesOverview;
  assert.equal(messages.startingPoints.length, 4);
  assert.deepEqual(messages.startingPoints.map((item) => item[3]), [
    "/services/product-sourcing", "/services/dropshipping-supplier",
    "/services/3pl-fulfillment-services", "/services/private-label",
  ]);
  assert.equal(messages.hero.benefits.length, 3);
}

// Exercise the actual client effect: reveal once, focus safety, cleanup and fallbacks.
const motion = read("src/layouts/components/ServicesHeroEntrance.js");
const effect = motion.slice(motion.indexOf("    const root = rootRef.current;"), motion.indexOf("  }, []);"));
function harness({ reduced = false, available = true } = {}) {
  const targets = Array.from({ length: 10 }, () => ({ dataset: {} }));
  let callback, observerCount = 0, disconnected = false;
  const observed = new Set();
  const events = new Map();
  const root = { dataset: {}, querySelectorAll: () => targets,
    addEventListener: (name, fn) => events.set(name, fn),
    removeEventListener: (name) => events.delete(name),
  };
  class Observer {
    constructor(fn) { callback = fn; observerCount++; }
    observe(target) { observed.add(target); }
    unobserve(target) { observed.delete(target); }
    disconnect() { observed.clear(); disconnected = true; }
  }
  const context = vm.createContext({ rootRef: { current: root },
    window: { IntersectionObserver: available ? Observer : undefined, matchMedia: () => ({ matches: reduced }) },
    IntersectionObserver: Observer,
  });
  const cleanup = vm.runInContext(`(() => {${effect}})()`, context);
  return { root, targets, observed, events, cleanup, callback, observerCount, disconnected: () => disconnected };
}
const active = harness();
assert.equal(active.observed.size, 10);
assert.equal(active.root.dataset.servicesMotion, "ready");
active.callback([{ target: active.targets[0], isIntersecting: false }]);
assert.equal(active.targets[0].dataset.servicesVisible, undefined);
active.callback([{ target: active.targets[0], isIntersecting: true }]);
assert.equal(active.targets[0].dataset.servicesVisible, "true");
assert.equal(active.observed.size, 9);
active.events.get("focusin")({ target: { closest: () => active.targets[9] } });
assert.equal(active.targets[9].dataset.servicesVisible, "true");
active.cleanup();
assert.ok(active.disconnected());
assert.equal(active.events.size, 0);
assert.equal(active.root.dataset.servicesMotion, undefined);
assert.ok(active.targets.every((target) => target.dataset.servicesVisible === undefined));
for (const options of [{ reduced: true }, { available: false }]) {
  const fallback = harness(options);
  assert.equal(fallback.observerCount, 0);
  assert.equal(fallback.root.dataset.servicesMotion, undefined);
}
console.log("Services hero: heading, scoped layout, 6 locales, compositor motion, focus, cleanup and static fallbacks passed.");
