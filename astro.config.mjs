import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ad-professor-swipe.vercel.app',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
