// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://agustinfaure.github.io",
  vite: {
    plugins: [tailwind()]
  },

  integrations: [mdx()]
});
