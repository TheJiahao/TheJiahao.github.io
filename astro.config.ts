import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { loadEnv } from "vite";
import { locales } from "./src/utils/translation";
import { DEFAULT_LOCALE as defaultLocale } from "./src/config";

const { PUBLIC_PORT } = loadEnv(
    process.env.NODE_ENV || "dev",
    process.cwd(),
    "",
);

// https://astro.build/config
export default defineConfig({
    site: "https://thejiahao.github.io",
    integrations: [
        mdx(),
        sitemap(),
        react(),
        UnoCSS({
            injectReset: true, // or a path to the reset file
        }),
    ],
    server: {
        port: Number(PUBLIC_PORT) || 4321,
    },
    i18n: {
        defaultLocale,
        locales,
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
});
