import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const htmlExt = new Set(['.html']);
const assetExt = new Set(['.avif', '.gif', '.jpg', '.jpeg', '.png', '.svg', '.webp', '.mp4', '.pdf']);
const imageExt = new Set(['.avif', '.gif', '.jpg', '.jpeg', '.png', '.svg', '.webp']);
const videoExt = new Set(['.mp4']);
const htmlFiles = [];
const files = [];
const requiredRoutes = [
  '/',
  '/about',
  '/productions',
  '/productions/death-of-a-salesman',
  '/timeline',
  '/credits',
  '/awards',
  '/press',
  '/contact',
];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else files.push(path);
  }
}

function distPathForUrl(url) {
  if (!url.startsWith('/')) return null;
  const clean = url.split('#')[0].split('?')[0];
  if (!clean || clean === '/') return join(dist, 'index.html');
  const noSlash = clean.replace(/^\/+/, '');
  const direct = join(dist, noSlash);
  const index = join(dist, noSlash, 'index.html');
  if (extname(noSlash)) return direct;
  return existsSync(index) ? index : direct;
}

if (!existsSync(dist)) {
  console.error('dist/ does not exist. Run npm.cmd run build first.');
  process.exit(1);
}

walk(dist);

let totalBytes = 0;
for (const file of files) {
  const size = statSync(file).size;
  totalBytes += size;
  if (htmlExt.has(extname(file))) htmlFiles.push(file);
}

const broken = [];
const external = new Set();
const missingRoutes = [];
const missingImageAlt = [];
const h1Issues = [];
const riskyVideoMarkup = [];
const attrPattern = /\b(?:href|src|action)=["']([^"']+)["']/gi;
const imgPattern = /<img\b[^>]*>/gi;
const videoPattern = /<video\b[^>]*>/gi;
const h1Pattern = /<h1\b/gi;

for (const route of requiredRoutes) {
  const routePath = distPathForUrl(route);
  if (!routePath || !existsSync(routePath)) missingRoutes.push(route);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const label = relative(root, file).split(sep).join('/');

  const h1Count = [...html.matchAll(h1Pattern)].length;
  if (h1Count !== 1) h1Issues.push(`${label} has ${h1Count} h1 elements`);

  for (const match of html.matchAll(imgPattern)) {
    if (!/\salt=(?:"[^"]*"|'[^']*')/i.test(match[0])) {
      missingImageAlt.push(label);
      break;
    }
  }

  for (const match of html.matchAll(videoPattern)) {
    const tag = match[0];
    if (/\sautoplay(?:\s|>|=)/i.test(tag) || /\spreload=(?:"auto"|'auto'|auto)/i.test(tag)) {
      riskyVideoMarkup.push(label);
      break;
    }
  }

  for (const match of html.matchAll(attrPattern)) {
    const raw = match[1];
    if (
      raw.startsWith('#') ||
      raw.startsWith('mailto:') ||
      raw.startsWith('tel:') ||
      raw.startsWith('data:') ||
      raw.startsWith('javascript:')
    ) continue;
    if (/^https?:\/\//i.test(raw)) {
      external.add(raw);
      continue;
    }
    const target = distPathForUrl(raw);
    if (!target) continue;
    const ext = extname(target).toLowerCase();
    const exists = existsSync(target) || (assetExt.has(ext) && existsSync(target));
    if (!exists) {
      broken.push(`${relative(root, file)} -> ${raw}`);
    }
  }
}

const topAssets = files
  .map((file) => ({ file, size: statSync(file).size }))
  .sort((a, b) => b.size - a.size)
  .slice(0, 20);

// /images/press/* are deliberate print-resolution downloads for media use, not
// page assets — they are supposed to be large, so they don't count as bloat.
const isPressDownload = (file) => file.replace(/\\/g, '/').includes('/images/press/');

const largeImages = files.filter(
  (file) =>
    imageExt.has(extname(file).toLowerCase()) &&
    !isPressDownload(file) &&
    statSync(file).size > 500 * 1024,
);
const videos = files
  .filter((file) => videoExt.has(extname(file).toLowerCase()))
  .map((file) => ({ file, size: statSync(file).size }))
  .sort((a, b) => b.size - a.size);
const largeVideos = videos.filter((video) => video.size > 3 * 1024 * 1024);
const homepage = join(dist, 'index.html');
const homepageBytes = existsSync(homepage) ? statSync(homepage).size : 0;

console.log(`Dist size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB across ${files.length} files`);
console.log(`Homepage HTML: ${(homepageBytes / 1024).toFixed(1)} KB`);
console.log(`External links referenced: ${external.size}`);
console.log(`Required routes: ${requiredRoutes.length - missingRoutes.length}/${requiredRoutes.length} present`);
console.log('Top assets:');
for (const asset of topAssets) {
  const label = relative(root, asset.file).split(sep).join('/');
  console.log(`- ${(asset.size / 1024 / 1024).toFixed(2)} MB ${label}`);
}

if (largeImages.length > 0) {
  console.warn('Images above 500 KB:');
  for (const image of largeImages) {
    const label = relative(root, image).split(sep).join('/');
    console.warn(`- ${(statSync(image).size / 1024).toFixed(0)} KB ${label}`);
  }
}

if (largeVideos.length > 0) {
  console.warn('Videos above 3 MB, verify these are intentional downloadable archive media:');
  for (const video of largeVideos) {
    const label = relative(root, video.file).split(sep).join('/');
    console.warn(`- ${(video.size / 1024 / 1024).toFixed(2)} MB ${label}`);
  }
}

if (missingRoutes.length > 0) {
  console.error('Missing required routes:');
  for (const route of missingRoutes) console.error(`- ${route}`);
}

if (broken.length > 0) {
  console.error('Broken internal references:');
  for (const item of broken) console.error(`- ${item}`);
}

if (missingImageAlt.length > 0) {
  console.error('Images missing alt attributes:');
  for (const item of missingImageAlt) console.error(`- ${item}`);
}

if (h1Issues.length > 0) {
  console.error('H1 issues:');
  for (const item of h1Issues) console.error(`- ${item}`);
}

if (riskyVideoMarkup.length > 0) {
  console.error('Video markup should not autoplay or preload full media:');
  for (const item of riskyVideoMarkup) console.error(`- ${item}`);
}

if (
  missingRoutes.length > 0 ||
  broken.length > 0 ||
  missingImageAlt.length > 0 ||
  h1Issues.length > 0 ||
  riskyVideoMarkup.length > 0
) {
  process.exit(1);
}

console.log('Internal references: ok');
console.log('Accessibility/content checks: ok');
