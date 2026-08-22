// Keyboard-operability check for the mobile nav (finding #4).
// The original implementation used a display:none checkbox, which is
// unreachable by keyboard. This verifies the replacement is actually operable
// without a mouse — which a click-driven QA sweep would not catch.
import { chromium } from 'playwright';

const BASE = process.argv[2] || process.env.QA_BASE_URL || 'http://localhost:4321';

const results = [];
const check = (name, pass, detail = '') =>
  results.push({ name, pass, detail });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 780 } });
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

const button = page.locator('[data-mobile-menu-button]');
const menu = page.locator('[data-mobile-menu]');

check('menu button is visible at 390px', await button.isVisible());
check('menu starts closed', !(await menu.isVisible()));
check(
  'aria-expanded starts false',
  (await button.getAttribute('aria-expanded')) === 'false',
);

// Tab from the top of the document until the menu button takes focus.
await page.keyboard.press('Tab');
let tabs = 1;
let focused = false;
for (; tabs <= 12; tabs++) {
  focused = await button.evaluate((el) => el === document.activeElement);
  if (focused) break;
  await page.keyboard.press('Tab');
}
check(`menu button reachable by Tab (${tabs} presses)`, focused);

// Activate with the keyboard.
await page.keyboard.press('Enter');
await page.waitForTimeout(120);
check('Enter opens the menu', await menu.isVisible());
check(
  'aria-expanded flips to true',
  (await button.getAttribute('aria-expanded')) === 'true',
);
check(
  'aria-label updates to Close',
  (await button.getAttribute('aria-label')) === 'Close navigation menu',
);

// Tab should move into the menu's links.
await page.keyboard.press('Tab');
const inMenu = await page.evaluate(() => {
  const m = document.querySelector('[data-mobile-menu]');
  return !!m && m.contains(document.activeElement);
});
check('Tab moves focus into the menu', inMenu);

// Escape should close it.
await page.keyboard.press('Escape');
await page.waitForTimeout(120);
check('Escape closes the menu', !(await menu.isVisible()));

const focusAfterEscape = await page.evaluate(() => {
  const el = document.activeElement;
  if (!el || el === document.body) return 'body (focus lost)';
  return el.tagName.toLowerCase() + (el.hasAttribute('data-mobile-menu-button') ? '[menu-button]' : '');
});
check(
  'focus returns to the menu button after Escape',
  focusAfterEscape.includes('menu-button'),
  `focus landed on: ${focusAfterEscape}`,
);

await browser.close();

let failed = 0;
for (const r of results) {
  if (!r.pass) failed++;
  console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` — ${r.detail}` : ''}`);
}
console.log(`\n${results.length - failed}/${results.length} passed`);

process.exit(failed > 0 ? 1 : 0);
