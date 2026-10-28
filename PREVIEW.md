# Preview of the #4471 review

The signed page is `src/routes/kb/incidents/4471-review/+page.svx`. `rendered-page.html` contains its rendered HTML and styles. `rendered-page.jpg` shows the page rendered with the exported runbook and components using the supplied snapshot data.

After `npm run build`, generate the HTML with `npx vite build --ssr src/render.js --outDir build-ssr` and `node build-ssr/render.js`.

To rebuild and view it locally, run `npm ci`, `npm run build`, and `npm run preview`. The preview entry point mounts the page inside the exported runbook layout and passes its frontmatter to the page and layout. The counts and timeline come from the export; they are not a live connection to the desk.
