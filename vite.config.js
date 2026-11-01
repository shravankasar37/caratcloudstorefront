import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { PAGES, headHtml, fallbackHtml, robotsTxt, sitemapXml, llmsTxt } from "./src/lib/seo.js";


// Writes each page's <head> tags and plain-HTML copy into its own index.html,
// plus robots.txt, sitemap.xml and llms.txt.
function seoPages() {
  let template = "";
  let outDir = "dist";
  const render = (html, page) =>
    html
      .replace("<!--seo:head-->", headHtml(page))
      .replace('<div id="root"></div>', `<div id="root"><div class="seo-copy">${fallbackHtml(page)}</div></div>`);
  return {
    name: "seo-pages",
    configResolved(c) { outDir = c.build.outDir; },
    transformIndexHtml: {
      order: "post",
      handler(html) {
        template = html;
        return render(html, "/");
      },
    },
    closeBundle() {
      if (!template) return;
      for (const page of Object.keys(PAGES)) {
        if (page === "/") continue;
        const dir = path.join(outDir, page);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), render(template, page));
      }
      fs.writeFileSync(path.join(outDir, "robots.txt"), robotsTxt());
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), sitemapXml());
      fs.writeFileSync(path.join(outDir, "llms.txt"), llmsTxt());
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    port: 3000,
    open: false,
  },
});
