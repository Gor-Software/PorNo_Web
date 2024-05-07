import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: "https://astroship.web3templates.com",
  site: "https://pornblocker.org",
  integrations: [tailwind(), mdx(), sitemap()],
});
