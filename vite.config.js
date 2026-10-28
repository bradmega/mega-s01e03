import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: { alias: { '#lib': resolve('src/lib') } },
  plugins: [svelte({ extensions: ['.svelte', '.svx'], preprocess: [mdsvex({ extensions: ['.svx'] })] })],
});
