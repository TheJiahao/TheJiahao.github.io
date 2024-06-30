import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerAttributifyJsx,
} from "unocss";
import presetTheme from "unocss-preset-theme";

export default defineConfig({
    presets: [
        presetAttributify(),
        presetUno({
            dark: "media",
        }),
        presetTypography({
            cssExtend: {
                ":not(pre) > code::before,:not(pre) > code::after": {
                    content: "unset",
                },
                ":not(pre) > code": {
                    "background-color": "#f2f1f1",
                    padding: "0.3em 0.2em",
                    "border-radius": "0.375em",
                    color: "darkGreen",
                },
                a: {
                    "text-decoration": "underline 2px",
                    "text-underline-offset": "0.25em",
                },
                ".data-footnote-backref": {
                    "text-decoration": "none",
                },
            },
        }),
        presetWebFonts({
            provider: "bunny",
            fonts: {
                "sans-serif": "Noto Sans SC",
                mono: "JetBrains Mono",
            },
        }),
        presetTheme({
            theme: {
                dark: {
                    colors: {
                        background: "hsl(0 0% 9%)",
                    },
                },
            },
        }),
    ],
    transformers: [transformerAttributifyJsx()],
    shortcuts: {
        card: "rounded-md bg-white shadow-md break-inside-avoid overflow-hidden",
        "grid-sidebars": "grid-cols-[minmax(auto,1fr)_auto_minmax(auto,1fr)]",
    },
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                "src/**/*.{js,ts}",
            ],
        },
    },
    safelist: ["size-15", "size-30", "size-40"],
    theme: {
        colors: {
            background: "hsl(0 0% 96%)",
        },
    },
});
