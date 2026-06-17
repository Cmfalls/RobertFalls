/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Big Shoulders Display"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Newsreader"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          ink: '#171210',
          inkDeep: '#0c0908',
          oxblood: '#6e1423',
          oxbloodDeep: '#420c16',
          oxbloodBright: '#9a2235',
          gold: '#c9a227',
          goldBright: '#e8c35c',
          cream: '#f1e7d3',
          creamDim: '#d9cbac',
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
