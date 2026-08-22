// Single source of truth for the canonical origin.
//
// Previously the domain was hardcoded in four places. BaseLayout used
// `Astro.site` for <link rel="canonical"> and og:image but a separate
// hardcoded string for every JSON-LD `@id`, so pointing the site at a custom
// domain would have moved the canonical URLs while leaving the structured-data
// entity anchored to robertfalls.netlify.app — splitting the Person/WebSite
// entity Google has been accumulating.
//
// `import.meta.env.SITE` is Astro's built-in mirror of the `site` option in
// astro.config.mjs, which in turn reads the SITE_URL env var. So switching
// domains is one environment variable in Netlify, and everything downstream
// (canonicals, OG tags, JSON-LD, sitemap, robots.txt) follows.

const FALLBACK_ORIGIN = 'https://robertfalls.netlify.app';

/** Canonical origin, never with a trailing slash. */
export const SITE_URL: string = (import.meta.env.SITE ?? FALLBACK_ORIGIN)
  .toString()
  .replace(/\/+$/, '');

/** Absolute URL for a site-relative path. */
export function absoluteUrl(pathname: string): string {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

/** Stable JSON-LD node identifiers, all anchored to the canonical origin. */
export const schemaIds = {
  person: `${SITE_URL}/#person`,
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
} as const;
