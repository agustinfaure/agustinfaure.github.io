// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://agustinfaure.github.io",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), tailwind()]
});
