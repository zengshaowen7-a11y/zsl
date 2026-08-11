import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.join(process.cwd(), "public", "images", "generated");
const files = (await fs.readdir(sourceDirectory)).filter((file) => file.endsWith(".png"));

for (const file of files) {
  const sourcePath = path.join(sourceDirectory, file);
  const outputPath = path.join(sourceDirectory, file.replace(/\.png$/i, ".webp"));

  await sharp(sourcePath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 84, effort: 5 })
    .toFile(outputPath);

  console.log(`${file} -> ${path.basename(outputPath)}`);
}
