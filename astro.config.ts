import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeFigure from "@microflash/rehype-figure";
import expressiveCode from "astro-expressive-code";
import robotsTxt from "astro-robots-txt";
import { defineConfig, envField } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeRewrite, { type RehypeRewriteOptions } from "rehype-rewrite";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";
import UnoCSS from "unocss/astro";
import { loadEnv } from "vite";
import { DEFAULT_LANGUAGE as defaultLocale } from "./src/config/languages";
import { languageCodes } from "./src/localization";
import { getLastModified } from "./src/utils/getLastModified";

const { PUBLIC_PORT } = loadEnv(
    process.env.NODE_ENV || "dev",
    process.cwd(),
    "",
);

const removeSpaceAfterSeparator: RehypeRewriteOptions["rewrite"] = (node) => {
    if (node.type == "text") {
        node.value = node.value
            .replaceAll(/。\s/g, "。")
            .replaceAll(/，\s/g, "，");
    }
};

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_BASE_URL,
    integrations: [
        expressiveCode(),
        mdx(),
        sitemap({
            lastmod: getLastModified("."),
            i18n: {
                defaultLocale,
                locales: {
                    "zh-cn": "zh-CN",
                    en: "en-US",
                },
            },
        }),
        robotsTxt({
            policy: [
                {
                    userAgent: "*",
                    disallow: ["/IndexNow-*"],
                },
            ],
        }),
        react(),
        UnoCSS({
            injectReset: true,
        }),
    ],
    server: {
        port: Number(PUBLIC_PORT) || 4321,
    },
    trailingSlash: "never",
    prefetch: {
        prefetchAll: true,
    },
    i18n: {
        defaultLocale,
        locales: languageCodes,
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        },
    },
    vite: {
        server: {
            watch: {
                ignored: [
                    "**/playwright-report/**",
                    "**/coverage/**",
                    "**/test-results/**",
                ],
            },
        },
        optimizeDeps: {
            exclude: ["@playwright/test"],
        },
    },
    markdown: {
        remarkPlugins: [
            remarkSectionize,
            remarkMath,
            [remarkAlert, { legacyTitle: true }],
        ],
        rehypePlugins: [
            rehypeKatex,
            rehypeFigure,
            [
                rehypeRewrite,
                {
                    rewrite: removeSpaceAfterSeparator,
                },
            ],
        ],
    },
    env: {
        schema: {
            SITE_BASE_URL: envField.string({
                context: "server",
                access: "public",
                optional: true,
            }),
        },
    },
    redirects: {
        "/zh-cn": {
            destination: "/zh-cn/posts",
            status: 301,
        },
        "/en": {
            destination: "/en/posts",
            status: 301,
        },
        "/about": {
            destination: "/zh-cn/about",
            status: 301,
        },
    },
});
