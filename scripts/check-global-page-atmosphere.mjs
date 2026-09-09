import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const component = await readFile(resolve(root, "src/layouts/components/GlobalPageAtmosphere.js"), "utf8");
const styles = await readFile(resolve(root, "src/styles/global-page-atmosphere.css"), "utf8");
const layout = await readFile(resolve(root, "src/app/[locale]/layout.js"), "utf8");
const serviceSource = await readFile(resolve(root, "src/config/service-page-content.js"), "utf8");
const config = JSON.parse(await readFile(resolve(root, "src/config/config.json"), "utf8"));

assert.match(component, /\["orbit", "flow", "tiles", "ripple"\]/, "Four patterns must repeat in order");
assert.match(component, /index % 2 === 0 \? "right" : "left"/, "Pattern alignment must alternate");
assert.match(component, /\["mint", "white", "whisper", "soft"\]/, "Four green-white surfaces must repeat in order");
assert.match(component, /classList\.contains\("fh-home"\)/, "Home must keep its bespoke atmosphere");
assert.match(component, /hero\|proof\|evidence\|case\|final\|cta/, "Key sections must be eligible for a watermark");
assert.match(component, /IntersectionObserver/, "Offscreen motion must pause");
assert.match(styles, /prefers-reduced-motion:\s*reduce/, "Reduced motion must be supported");
assert.match(styles, /jw-global-backdrop--dark/, "Dark sections need a light-line treatment");
assert.match(styles, /#dff2e7/);
assert.match(styles, /#fff/);
assert.match(styles, /#f4fbf7/);
assert.match(styles, /#eaf7f0/);
assert.match(styles, /container-type:\s*inline-size/);
assert.match(styles, /font-size:\s*clamp\(28px,\s*4\.45cqw,\s*32px\)/, "Non-home H1 and H2 titles must match Home");
assert.match(styles, /line-height:\s*1\.12/, "Non-home title line height must match Home");
assert.match(styles, /jw-link-fulfill-scale-source\.jpg/, "The existing brand slogan asset must be reused");
assert.match(layout, /<GlobalPageAtmosphere \/>/, "The orchestrator must be mounted globally");
assert.match(layout, /global-page-atmosphere\.css/, "Global atmosphere styles must be loaded");
await access(resolve(root, "public/images/brand/jw-link-fulfill-scale-source.jpg"));

const serviceCount = [...serviceSource.matchAll(/^\s+slug:\s*"/gm)].length;
const blogFiles = (await readdir(resolve(root, `src/content/${config.settings.blog_folder}`))).filter((name) => /\.md$/.test(name) && !name.startsWith("_"));
const regularFiles = (await readdir(resolve(root, "src/content"))).filter((name) => /\.md$/.test(name) && !["_index.md", "404.md", "contact.md"].includes(name));
const fixedRoutesExcludingHome = 9;
const paginationRoutes = Math.max(0, Math.ceil(blogFiles.length / config.settings.pagination) - 1);
const nonHomeRoutes = fixedRoutesExcludingHome + serviceCount + blogFiles.length + regularFiles.length + paginationRoutes;
assert.equal(nonHomeRoutes, 26, "Expected 26 non-home page paths per locale");

console.log(`Global atmosphere checks passed across ${nonHomeRoutes} non-home routes per locale.`);
