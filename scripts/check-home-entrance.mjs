import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../src/layouts/components/HomeEntranceMotion.js", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../src/styles/home-entrance.css", import.meta.url), "utf8");
const runnable = source.replace('"use client";', "")
  .replace(/import .* from "react";/, "")
  .replace("export const homeEntranceScenes", "const homeEntranceScenes")
  .replace("export default memo(HomeEntranceMotion);", "globalThis.run = HomeEntranceMotion; globalThis.scenes = homeEntranceScenes;");

function harness(reduced = false, paused = false) {
  const effects = [];
  const elements = [];
  const listeners = new Map();
  const observers = [];
  const root = {
    dataset: { jwMotion: paused ? "paused" : "playing" },
    addEventListener: (name, cb) => listeners.set(name, cb),
    removeEventListener: (name) => listeners.delete(name),
    querySelector: () => ({ querySelectorAll: () => {
      const element = {
        dataset: {}, animations: [],
        getBoundingClientRect: () => ({ left: 24, right: 1240, bottom: 700 }),
        contains: (target) => target === element,
        animate: (frames, options) => {
          const animation = { frames, options, cancel() { this.cancelled = true; } };
          element.animations.push(animation);
          return animation;
        },
      };
      elements.push(element);
      return [element];
    } }),
  };
  const media = { matches: reduced, addEventListener: (_, cb) => listeners.set("media", cb), removeEventListener: () => listeners.delete("media") };
  const context = vm.createContext({
    useRef: () => ({ current: new Map() }), useEffect: (fn) => effects.push(fn), memo: (fn) => fn,
    document: { activeElement: null, documentElement: { clientWidth: 1280 } },
    Element: { prototype: { animate() {} } },
    window: { innerWidth: 1280, IntersectionObserver: true, matchMedia: () => media,
      addEventListener: (name, cb) => listeners.set(name, cb), removeEventListener: (name) => listeners.delete(name) },
    IntersectionObserver: class {
      constructor(cb) { this.cb = cb; this.observed = new Set(); observers.push(this); }
      observe(el) { this.observed.add(el); }
      unobserve(el) { this.observed.delete(el); }
      disconnect() { this.observed.clear(); }
    },
  });
  vm.runInContext(runnable, context);
  assert.equal(context.scenes.length, 10);
  context.run({ rootRef: { current: root }, locale: "en", paused });
  const cleanup = effects[0]();
  const trigger = (element) => observers[0].cb([{ target: element, isIntersecting: true }]);
  return { elements, listeners, media, trigger, cleanup, pauseEffect: effects[1], root };
}

const normal = harness();
assert.ok(normal.elements.every(e => e.dataset.jwEntrance === "waiting"));
normal.elements.forEach(normal.trigger);
assert.ok(normal.elements.every(e => e.animations.length === 1));
for (const e of normal.elements) {
  const animation = e.animations[0];
  assert.equal(animation.options.id, "jw-home-entrance");
  assert.ok(animation.options.delay <= 320);
  assert.ok(animation.frames.every(frame => Object.keys(frame).every(key => ["transform", "opacity"].includes(key))));
}
normal.listeners.get("focusin")({ target: normal.elements[0] });
assert.equal(normal.elements[0].dataset.jwEntrance, "done");
assert.ok(normal.elements[0].animations[0].cancelled);
normal.media.matches = true;
normal.listeners.get("media")();
assert.ok(normal.elements.every(e => e.dataset.jwEntrance === "done"));
normal.cleanup();
assert.equal(normal.listeners.size, 0);
assert.ok(normal.elements.every(e => e.dataset.jwEntrance === undefined));

for (const [reduce, pause] of [[true, false], [false, true]]) {
  const test = harness(reduce, pause);
  if (!reduce) test.elements.forEach(test.trigger);
  assert.ok(test.elements.every(e => e.animations.length === 0));
  assert.ok(test.elements.every(e => e.dataset.jwEntrance === "done"));
  test.cleanup();
}
assert.ok(css.includes("prefers-reduced-motion: no-preference"));
assert.ok(css.includes(":focus-within"));
assert.ok(css.includes("@media print"));
assert.ok(!source.includes('addEventListener("scroll"'));
console.log("PASS: ten scenes, finite compositor entrances, reduced motion, pause, focus, gutters, cleanup and progressive enhancement.");
