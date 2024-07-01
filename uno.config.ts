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
        presetTypography(),
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
                        primary: "white",
                        secondary: "hsl(0 0% 70%)",
                        background: "hsl(0 0% 9%)",
                        card: "hsl(0 0% 15%)",
                    },
                },
            },
        }),
    ],
    theme: {
        colors: {
            primary: "black",
            secondary: "hsl(0 0% 25%)",
            background: "hsl(0 0% 96%)",
            card: "hsl(0 0% 100%)",
        },
    },
    transformers: [transformerAttributifyJsx()],
    shortcuts: {
        card: "rounded-md bg-card shadow-md break-inside-avoid overflow-hidden",
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
});
