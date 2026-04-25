import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://changepro.me',
  server: { port: 4321, host: true },
  build: { inlineStylesheets: 'auto' },
});
