import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const component = await readFile(resolve(root, "src/layouts/components/HowItWorksTrackSelector.js"), "utf8");
const styles = await readFile(resolve(root, "src/styles/how-it-works-track-selector.css"), "utf8");
const layout = await readFile(resolve(root, "src/layouts/HowItWorksRedesign.js"), "utf8");
const imageSource = await readFile(resolve(root, "src/content/how-it-works-track-ui.js"), "utf8");

const images = [...imageSource.matchAll(/"(\/images\/[^"]+)"/g)].map((match) => match[1]);
assert.equal(images.length, 3, "The selector must map one real image to each starting stage");
await Promise.all(images.map((src) => access(resolve(root, "public", src.slice(1)))));

assert.match(layout, /id="current-stage"/);
assert.match(component, /useState\(0\)/, "The first stage must be active by default");
assert.match(component, /role="tablist"/);
assert.match(component, /role="tab"/);
assert.match(component, /role="tabpanel"/);
assert.match(component, /aria-selected=\{selected\}/);
assert.match(component, /ArrowDown/);
assert.match(component, /IntersectionObserver/);
assert.match(styles, /font-size:\s*clamp\(28px,\s*4\.45cqw,\s*32px\)/);
assert.match(styles, /line-height:\s*1\.12/);
assert.match(styles, /color:\s*#000/);
assert.match(styles, /hiw-track-panel-in/);
assert.match(styles, /hiw-track-rise/);
assert.match(styles, /prefers-reduced-motion:\s*reduce/);

console.log("How It Works current-stage checks passed.");
