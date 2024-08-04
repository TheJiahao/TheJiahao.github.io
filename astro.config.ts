import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import rehypeFigure from "@microflash/rehype-figure";
import expressiveCode from "astro-expressive-code";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";
import UnoCSS from "unocss/astro";
import { loadEnv } from "vite";
import { DEFAULT_LANGUAGE as defaultLocale } from "./src/config/languages";
import { languageCodes } from "./src/localization";
const { PUBLIC_PORT } = loadEnv(
    process.env.NODE_ENV || "dev",
    process.cwd(),
    "",
);

// https://astro.build/config
export default defineConfig({
    site: process.env.SITE_BASE_URL,
    integrations: [
        expressiveCode({
            themes: ["one-light", "one-dark-pro"],
            styleOverrides: {
                codeFontFamily:
                    "monospace, ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",
                codeFontSize: "large",
            },
        }),
        mdx(),
        sitemap({
            i18n: {
                defaultLocale,
                locales: Object.fromEntries(
                    languageCodes.map((language) => [language, language]),
                ),
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
    },
    markdown: {
        remarkPlugins: [remarkSectionize, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeFigure],
    },
    redirects: {
        "/": {
            destination: "/zh-cn",
            status: 301,
        },
        "/about": {
            destination: "/zh-cn/about",
            status: 301,
        },
        "/posts/nushell-setup": {
            destination: "/zh-cn/posts/nushell-setup",
            status: 301,
        },
        "/posts/vscode-affinity-issues": {
            destination: "/zh-cn/posts/vscode-affinity-issues",
            status: 301,
        },
        "/posts/zsh-zim-setup": {
            destination: "/zh-cn/posts/zsh-zim-setup",
            status: 301,
        },
        "/posts/edge-window-different-profile-issue": {
            destination: "/zh-cn/posts/edge-window-different-profile-issue",
            status: 301,
        },
        "/posts/windows-vscode-clangd-setup": {
            destination: "/zh-cn/posts/windows-vscode-clangd-setup",
            status: 301,
        },
    },
});
