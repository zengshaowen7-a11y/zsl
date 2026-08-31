import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postcss = createRequire(require.resolve("next/package.json"))("postcss");
const read = (path) =>
  fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const data = vm.runInNewContext(
  read("src/content/services-workflow-ui.js").replaceAll("export ", "") +
    ";({ servicesWorkflowUi, servicesWorkflowImages, workflowKeyTarget });",
);
for (const locale of ["en", "de", "fr", "es", "nl", "pl"]) {
  const copy = data.servicesWorkflowUi[locale];
  assert.equal(copy.labels.length, 5);
  for (const value of Object.values(copy).flat()) assert.ok(value.length > 0);
  const stages = JSON.parse(read(`src/messages/${locale}/services.json`))
    .ServicesOverview.workflowSteps;
  assert.equal(stages.length, 5);
  assert.equal(stages.map(([number]) => number).join(","), "01,02,03,04,05");
}
for (const image of data.servicesWorkflowImages)
  assert.ok(fs.existsSync(new URL(`../public${image}`, import.meta.url)));
const key = data.workflowKeyTarget;
assert.equal(key("ArrowRight", 0, 5), 1);
assert.equal(key("ArrowRight", 4, 5), 0);
assert.equal(key("ArrowLeft", 0, 5), 4);
assert.equal(key("Home", 3, 5), 0);
assert.equal(key("End", 0, 5), 4);
assert.equal(key("Tab", 0, 5), null);
assert.equal(key("ArrowRight", 0, 0), null);

const source = read("src/layouts/components/ServicesWorkflow.js");
for (const token of [
  'role="tablist"',
  'role="tab"',
  'role="tabpanel"',
  "aria-controls",
  "aria-labelledby",
  "aria-selected",
  "tabIndex={active === index ? 0 : -1}",
  "event.preventDefault()",
  "disabled={index === 0}",
  "<noscript>",
])
  assert.ok(source.includes(token));
assert.doesNotMatch(
  source,
  /setInterval|requestAnimationFrame|addEventListener\(["']scroll/,
);
const effect = source.slice(
  source.indexOf("    const root = rootRef.current;"),
  source.indexOf("  }, []);"),
);
const root = { dataset: {} };
let callback,
  observed,
  disconnected = 0;
class Observer {
  constructor(fn) {
    callback = fn;
  }
  observe(target) {
    observed = target;
  }
  disconnect() {
    disconnected++;
  }
}
const cleanup = vm.runInNewContext(`(() => {${effect}})()`, {
  rootRef: { current: root },
  window: { IntersectionObserver: Observer },
  IntersectionObserver: Observer,
});
assert.equal(observed, root);
callback([{ isIntersecting: false }]);
assert.equal(root.dataset.entered, undefined);
callback([{ isIntersecting: true }]);
assert.equal(root.dataset.entered, "true");
assert.equal(disconnected, 1);
cleanup();
assert.equal(disconnected, 2);
assert.equal(
  vm.runInNewContext(`(() => {${effect}})()`, {
    rootRef: { current: root },
    window: {},
  }),
  undefined,
);

const css = read("src/styles/services-workflow.css");
const tree = postcss.parse(css);
assert.match(css, /font-size: clamp\(28px, 4\.45cqw, 32px\) !important/);
assert.match(css, /line-height: 1\.12 !important/);
assert.match(css, /color: #000 !important/);
assert.match(css, /prefers-reduced-motion: no-preference/);
assert.match(css, /grid-area: 1 \/ 1/);
assert.match(
  css,
  /\[aria-hidden="true"\] \{ visibility: hidden; pointer-events: none/,
);
assert.ok(source.includes("inert={active !== index}"));
tree.walkAtRules("keyframes", (rule) =>
  rule.walkDecls((decl) =>
    assert.ok(["transform", "opacity"].includes(decl.prop)),
  ),
);
tree.walkRules((rule) => {
  if (rule.selector === ".sov-workflow-section")
    rule.walkDecls((decl) =>
      assert.ok(["overflow", "scroll-margin-top"].includes(decl.prop)),
    );
  if (rule.selector === ".sov-workflow-section .sov-container")
    rule.walkDecls((decl) => assert.equal(decl.prop, "container-type"));
});
console.log(
  "Workflow checks passed: 6 locales, 5 assets, keyboard routing, tab semantics, one-time observer/cleanup, reduced motion, fixed stage sizing and retained background/gutters.",
);
