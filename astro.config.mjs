import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Set SITE_URL in the Netlify environment to move to a custom domain;
  // canonicals, OG tags, JSON-LD, sitemap, and robots.txt all derive from it.
  site: process.env.SITE_URL ?? 'https://robertfalls.netlify.app',
});
