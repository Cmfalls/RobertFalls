import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join, relative, sep } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const reportDir = join(root, 'audit');
const reportPath = join(reportDir, 'external-links.json');
const timeoutMs = Number(process.env.EXTERNAL_LINK_TIMEOUT_MS || 10000);
const concurrency = Number(process.env.EXTERNAL_LINK_CONCURRENCY || 8);
const htmlFiles = [];
const links = new Map();

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (extname(path) === '.html') htmlFiles.push(path);
  }
}

function cleanUrl(raw) {
  try {
    const url = new URL(raw);
    url.hash = '';
    return url.toString();
  } catch {
    return null;
  }
}

function addLink(url, file) {
  if (!links.has(url)) links.set(url, { url, pages: new Set() });
  links.get(url).pages.add(relative(root, file).split(sep).join('/'));
}

async function fetchWithTimeout(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'RobertFallsSiteAudit/1.0 (+https://robertfalls.netlify.app)',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
    });
    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      finalUrl: response.url,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      statusText: error?.name === 'AbortError' ? 'timeout' : String(error?.message || error),
      finalUrl: url,
    };
  } finally {
    clearTimeout(timer);
  }
}

async function checkLink(item) {
  const head = await fetchWithTimeout(item.url, 'HEAD');
  if (head.ok || ![0, 403, 405, 406, 429, 500, 501].includes(head.status)) {
    return { ...item, method: 'HEAD', ...head, pages: [...item.pages] };
  }
  const get = await fetchWithTimeout(item.url, 'GET');
  return { ...item, method: 'GET', ...get, pages: [...item.pages] };
}

async function runPool(items) {
  const results = [];
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const current = items[index++];
      results.push(await checkLink(current));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

walk(dist);

const attrPattern = /\b(?:href|src)=["']([^"']+)["']/gi;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(attrPattern)) {
    const raw = match[1];
    if (!/^https?:\/\//i.test(raw)) continue;
    const url = cleanUrl(raw);
    if (url) addLink(url, file);
  }
}

const results = (await runPool([...links.values()])).sort((a, b) => a.url.localeCompare(b.url));
const review = results.filter((result) => !result.ok);
mkdirSync(reportDir, { recursive: true });
writeFileSync(reportPath, `${JSON.stringify({ checkedAt: new Date().toISOString(), timeoutMs, concurrency, results }, null, 2)}\n`);

console.log(`Checked ${results.length} unique external links from ${htmlFiles.length} HTML files.`);
console.log(`OK: ${results.length - review.length}`);
console.log(`Review: ${review.length}`);
console.log(`Report: ${reportPath}`);

if (review.length > 0) {
  console.warn('Links needing review:');
  for (const result of review.slice(0, 40)) {
    console.warn(`- ${result.status || 'ERR'} ${result.url}`);
  }
  if (review.length > 40) console.warn(`...and ${review.length - 40} more in ${reportPath}`);
  process.exitCode = 1;
}
