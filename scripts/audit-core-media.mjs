import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const files = [
  "src/config/service-page-content.js",
  "src/config/service-catalog.js",
  "src/config/service-story-content.js",
  "src/config/home-materials.js",
  "src/config/about-materials.js",
  "src/layouts/FulfillmentHome.js",
  "src/layouts/FulfillmentServicesPage.js",
  "src/layouts/ServiceDetailPage.js",
  "src/layouts/FulfillmentAboutPage.js",
  "src/layouts/FulfillmentContactPage.js",
];

const mediaPattern = /["'`](\/(?:images|videos)\/[^"'`]+\.(?:avif|jpe?g|png|svg|webp|mp4|webm))["'`]/gi;
const uses = new Map();

for (const file of files) {
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) continue;
  const source = fs.readFileSync(absolute, "utf8");
  for (const match of source.matchAll(mediaPattern)) {
    const asset = match[1];
    if (asset.startsWith("/images/brand/")) continue;
    const list = uses.get(asset) ?? [];
    list.push(file);
    uses.set(asset, list);
  }
}

const duplicates = [...uses.entries()].filter(([, locations]) => locations.length > 1);
console.log(`Core content media references: ${uses.size}`);

if (duplicates.length) {
  console.error("Duplicate content media detected:");
  for (const [asset, locations] of duplicates) console.error(`- ${asset}: ${locations.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("PASS: every referenced core content asset is unique (brand assets excluded). ");
}
