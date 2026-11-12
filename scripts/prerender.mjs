// Pré-renderiza a página em HTML estático depois do build (melhora FCP/LCP e SEO).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = path.join(root, "dist-ssr");
const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const file = path.join(root, "dist", "index.html");
const template = fs.readFileSync(file, "utf8");
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error("prerender: <div id=\"root\"></div> não encontrado em dist/index.html");

const appHtml = render();
fs.writeFileSync(file, template.replace(placeholder, `<div id="root">${appHtml}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`✓ prerender: ${(appHtml.length / 1024).toFixed(1)} KB de HTML em dist/index.html`);
