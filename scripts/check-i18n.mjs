import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const messagesRoot = path.join(projectRoot, "src", "messages");
const activeLocales = ["en", "fr", "de", "nl", "pl", "es"];
const plannedLocales = [];

function flatten(value, prefix = "", keys = new Set()) {
  if (Array.isArray(value) || value === null || typeof value !== "object") {
    if (prefix) keys.add(prefix);
    return keys;
  }

  for (const [key, child] of Object.entries(value)) {
    flatten(child, prefix ? `${prefix}.${key}` : key, keys);
  }
  return keys;
}

function readCatalog(locale) {
  const files = [];
  const commonFile = path.join(messagesRoot, `${locale}.json`);
  const localeDir = path.join(messagesRoot, locale);

  if (fs.existsSync(commonFile)) files.push(commonFile);
  if (fs.existsSync(localeDir)) {
    files.push(
      ...fs.readdirSync(localeDir)
        .filter((file) => file.endsWith(".json"))
        .map((file) => path.join(localeDir, file)),
    );
  }

  if (files.length === 0) throw new Error(`No message files found for locale: ${locale}`);

  const catalog = {};
  for (const file of files) Object.assign(catalog, JSON.parse(fs.readFileSync(file, "utf8")));
  return flatten(catalog);
}

const englishKeys = readCatalog("en");
let failed = false;

for (const locale of activeLocales) {
  const localeKeys = readCatalog(locale);
  const missing = [...englishKeys].filter((key) => !localeKeys.has(key));
  const extra = [...localeKeys].filter((key) => !englishKeys.has(key));

  if (missing.length || extra.length) {
    failed = true;
    console.error(`${locale}: ${missing.length} missing, ${extra.length} extra keys`);
    if (missing.length) console.error(`  Missing: ${missing.join(", ")}`);
    if (extra.length) console.error(`  Extra: ${extra.join(", ")}`);
  } else {
    console.log(`${locale}: ${localeKeys.size} message keys complete`);
  }
}

console.log(`Planned (not active yet): ${plannedLocales.join(", ")}`);
if (failed) process.exitCode = 1;
