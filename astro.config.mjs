import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quintonpang.github.io',
  base: '/ahsk-static-website',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
