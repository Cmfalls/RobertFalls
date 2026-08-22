import type { APIRoute } from 'astro';
import { SITE_URL } from '@data/site';

// Generated rather than served from public/ so the Sitemap line follows the
// canonical origin instead of hardcoding a domain that can change.
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
