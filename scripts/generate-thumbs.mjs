import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceRoot = path.resolve("public/images");
const outputRoot = path.resolve("public/images-thumbs");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      if (/\.(jpe?g|png|webp)$/i.test(entry.name)) return [fullPath];
      return [];
    })
  );
  return files.flat();
}

async function ensureDirFor(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function createThumb(srcPath) {
  const relative = path.relative(sourceRoot, srcPath);
  const outPath = path.join(outputRoot, relative);

  await ensureDirFor(outPath);

  await sharp(srcPath)
    .resize({ width: 640, withoutEnlargement: true })
    .jpeg({ quality: 62, mozjpeg: true })
    .toFile(outPath);

  return outPath;
}

async function main() {
  const files = await walk(sourceRoot);
  let done = 0;

  for (const file of files) {
    await createThumb(file);
    done += 1;
  }

  console.log(`Generated ${done} thumbnails in public/images-thumbs`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
