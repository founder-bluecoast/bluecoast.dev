// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bluecoast.dev',
  integrations: [mdx(), tailwind(), sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
