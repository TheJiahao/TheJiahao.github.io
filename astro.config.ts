import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import paraglide from "@inlang/paraglide-astro";
import { defineConfig } from "astro/config";
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
    site:
        process.env.NODE_ENV == "test"
            ? undefined
            : "https://thejiahao.github.io",
    integrations: [
        mdx(),
        sitemap(),
        react(),
        UnoCSS({
            injectReset: true, // or a path to the reset file
        }),
        paraglide({
            project: "./project.inlang",
            outdir: "./src/paraglide",
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
