import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ad-swipe-file.example.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
