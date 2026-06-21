import type { APIRoute } from 'astro';
import { productions } from '@data/productions';

const staticRoutes = ['/', '/about/', '/productions/', '/timeline/', '/credits/', '/awards/', '/press/', '/contact/'];

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://robertfalls.netlify.app');
  const routes = [
    ...staticRoutes,
    ...productions.map((production) => `/productions/${production.slug}/`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url><loc>${escapeXml(new URL(route, base).toString())}</loc></url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
