import { render } from 'svelte/server';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import App from './App.svelte';

const { body, head } = render(App);
const css = readdirSync('dist/assets').filter((f) => f.endsWith('.css')).map((f) => readFileSync(`dist/assets/${f}`, 'utf8')).join('\n');
writeFileSync('rendered-page.html', `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${head}<style>${css}</style></head><body>${body}</body></html>`);
