import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [
        mdx(),
        sitemap(),
        react(),
        UnoCSS({
            injectReset: true, // or a path to the reset file
        }),
    ],
});