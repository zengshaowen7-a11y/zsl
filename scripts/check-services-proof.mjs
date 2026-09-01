import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const component = await readFile(resolve(root, "src/layouts/components/ServicesProofScene.js"), "utf8");
const styles = await readFile(resolve(root, "src/styles/services-proof-scene.css"), "utf8");
const layout = await readFile(resolve(root, "src/layouts/ServicesOverviewRedesign.js"), "utf8");
const imageSource = await readFile(resolve(root, "src/content/services-proof-ui.js"), "utf8");

const images = [...imageSource.matchAll(/"(\/images\/generated\/[^"]+)"/g)].map((match) => match[1]);
assert.equal(images.length, 4, "The proof scene must provide four synchronized images");
await Promise.all(images.map((src) => access(resolve(root, "public", src.slice(1)))));

assert.match(layout, /id="service-proof"/);
assert.match(component, /aria-expanded=\{isOpen\}/);
assert.match(component, /aria-controls=\{panelId\}/);
assert.match(component, /setActive\(null\)/, "An open item must support collapsing");
assert.match(component, /setShownIndex\(index\)/, "Selecting an item must synchronize its image");
assert.match(component, /IntersectionObserver/);
assert.match(styles, /font-size:\s*clamp\(28px,\s*4\.45cqw,\s*32px\)/);
assert.match(styles, /line-height:\s*1\.12/);
assert.match(styles, /color:\s*#000/);
assert.match(styles, /proof-media-enter/);
assert.match(styles, /proof-item-enter/);
assert.match(styles, /prefers-reduced-motion:\s*reduce/);

console.log("Services proof scene checks passed.");
