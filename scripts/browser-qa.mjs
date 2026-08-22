import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.QA_BASE_URL || 'http://localhost:4321';
const screenshotDir = join(process.cwd(), 'audit', 'browser-qa');
const routes = [
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
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 900 },
  { name: 'wide', width: 1440, height: 900 },
];

const failures = [];
const warnings = [];

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

async function assertNoHorizontalOverflow(page, label) {
  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: Math.max(
      document.documentElement.scrollWidth,
      document.body?.scrollWidth || 0,
    ),
  }));
  if (metrics.scrollWidth > metrics.innerWidth + 2) {
    fail(`${label}: horizontal overflow ${metrics.scrollWidth}px > ${metrics.innerWidth}px`);
  }
}

async function assertRoute(page, route, viewportName) {
  const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'networkidle' });
  if (!response || response.status() >= 400) {
    fail(`${viewportName} ${route}: HTTP ${response?.status() ?? 'no response'}`);
    return;
  }
  await assertNoHorizontalOverflow(page, `${viewportName} ${route}`);
  const h1Count = await page.locator('main h1').filter({ visible: true }).count();
  if (h1Count !== 1) fail(`${viewportName} ${route}: expected 1 h1, found ${h1Count}`);
  const missingAlt = await page.locator('img:not([alt])').count();
  if (missingAlt > 0) fail(`${viewportName} ${route}: ${missingAlt} images missing alt`);
}

async function runInteractionChecks(page) {
  await page.setViewportSize(viewports[0]);
  await page.goto(baseUrl, { waitUntil: 'networkidle' });

  const menuButton = page.locator('[data-mobile-menu-button]');
  await menuButton.click();
  if ((await menuButton.getAttribute('aria-expanded')) !== 'true') {
    fail('mobile nav: menu button did not expose aria-expanded=true after opening');
  }
  if (!(await page.locator('[data-mobile-menu]').isVisible())) {
    fail('mobile nav: menu panel was not visible after opening');
  }
  await page.keyboard.press('Escape');
  if ((await menuButton.getAttribute('aria-expanded')) !== 'false') {
    fail('mobile nav: Escape did not close the menu');
  }

  await page.goto(new URL('/productions', baseUrl).toString(), { waitUntil: 'networkidle' });
  const initialProductionCount = Number(await page.locator('[data-visible-count]').innerText());
  await page.locator('[data-production-search]').fill('death of a salesman');
  await page.waitForTimeout(100);
  const searchedProductionCount = Number(await page.locator('[data-visible-count]').innerText());
  if (!(searchedProductionCount > 0 && searchedProductionCount < initialProductionCount)) {
    fail(`production search: expected narrowed nonzero results, saw ${searchedProductionCount}/${initialProductionCount}`);
  }
  await page.locator('[data-filter="opera"]').click();
  await page.waitForTimeout(100);
  if ((await page.locator('[data-filter="opera"]').getAttribute('aria-pressed')) !== 'true') {
    fail('production filters: opera filter did not set aria-pressed=true');
  }

  await page.goto(new URL('/timeline', baseUrl).toString(), { waitUntil: 'networkidle' });
  const initialTimelineCount = Number(await page.locator('[data-timeline-visible-count]').innerText());
  await page.locator('[data-timeline-filters] [data-filter="Award"]').click();
  await page.waitForTimeout(100);
  const awardTimelineCount = Number(await page.locator('[data-timeline-visible-count]').innerText());
  if (!(awardTimelineCount > 0 && awardTimelineCount < initialTimelineCount)) {
    fail(`timeline filter: expected narrowed award results, saw ${awardTimelineCount}/${initialTimelineCount}`);
  }

  await page.goto(new URL('/productions/death-of-a-salesman', baseUrl).toString(), { waitUntil: 'networkidle' });
  const strip = page.locator('[data-asset-strip]');
  if (await strip.count()) {
    await strip.focus();
    const before = await strip.evaluate((el) => el.scrollLeft);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(250);
    const after = await strip.evaluate((el) => el.scrollLeft);
    if (after <= before) warn('production media strip: ArrowRight did not move this strip, likely already fits viewport');
  }

  await page.goto(new URL('/contact', baseUrl).toString(), { waitUntil: 'networkidle' });
  const firstInput = page.locator('input:not([type="hidden"]), textarea').filter({ visible: true }).first();
  await firstInput.focus();
  const activeTag = await page.evaluate(() => document.activeElement?.tagName);
  if (!['INPUT', 'TEXTAREA'].includes(activeTag || '')) fail('contact form: first field did not accept focus');
}

async function main() {
  await mkdir(screenshotDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => consoleErrors.push(error.message));

  try {
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      for (const route of routes) {
        await assertRoute(page, route, viewport.name);
      }
      for (const route of ['/', '/productions', '/productions/death-of-a-salesman', '/timeline', '/contact']) {
        const safeRoute = route === '/' ? 'home' : route.replace(/^\/|\/$/g, '').replaceAll('/', '-');
        await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'networkidle' });
        await page.screenshot({
          path: join(screenshotDir, `${viewport.name}-${safeRoute}.png`),
          fullPage: true,
        });
      }
    }

    await runInteractionChecks(page);
  } finally {
    await browser.close();
  }

  const ignoredConsole = consoleErrors.filter((message) => !/favicon/i.test(message));
  if (ignoredConsole.length > 0) {
    for (const message of ignoredConsole.slice(0, 10)) warn(`console error: ${message}`);
  }

  if (warnings.length > 0) {
    console.warn('Warnings:');
    for (const message of warnings) console.warn(`- ${message}`);
  }

  if (failures.length > 0) {
    console.error('Browser QA failed:');
    for (const message of failures) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log(`Browser QA passed for ${routes.length} routes across ${viewports.length} viewports.`);
  console.log(`Screenshots written to ${screenshotDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
