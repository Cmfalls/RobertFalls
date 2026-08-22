import { existsSync, renameSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
// Only files that must live in public/ (linked directly, or referenced by
// absolute URL) belong here. Anything imported from src/images/ is already
// optimized by Astro's <Image> pipeline and must not be listed.
// amadeus-1/2/3.jpg were removed: unreferenced public/ copies of photos that
// src/images/amadeus/ already serves through Astro.
const targets = [
  'public/images/robert-falls-portrait-2025.jpg',
  'public/images/amadeus-mozart.jpg',
  'src/images/web-sourced/death-of-a-salesman-goodman-willy.jpg',
];

async function optimize(file) {
  const path = join(root, file);
  if (!existsSync(path)) return null;

  const original = statSync(path).size;
  let pipeline = sharp(path, { limitInputPixels: false }).rotate().resize({
    width: 1800,
    height: 1800,
    fit: 'inside',
    withoutEnlargement: true,
  });

  const ext = extname(path).toLowerCase();
  if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 78, effort: 5 });
  } else {
    pipeline = pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
  }

  const output = await pipeline.toBuffer();
  if (output.length >= original) {
    return { file, original, optimized: original, changed: false };
  }

  const tempPath = `${path}.optimized`;
  writeFileSync(tempPath, output);
  unlinkSync(path);
  renameSync(tempPath, path);
  return { file, original, optimized: output.length, changed: true };
}

const results = [];
for (const target of targets) {
  const result = await optimize(target);
  if (result) results.push(result);
}

for (const result of results) {
  const before = (result.original / 1024 / 1024).toFixed(2);
  const after = (result.optimized / 1024 / 1024).toFixed(2);
  const marker = result.changed ? 'optimized' : 'kept';
  console.log(`${marker}: ${result.file} ${before} MB -> ${after} MB`);
}
