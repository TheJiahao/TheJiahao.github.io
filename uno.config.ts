import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerAttributifyJsx,
    transformerDirectives,
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
                        code: "#2eb172",
                        link: "#84c5e6",
                        "surface-tertiary": "hsl(0 0% 9%)",
                        "code-background": "#272a2f",
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
            code: "#18794e",
            link: "#005782",
            "surface-tertiary": "hsl(0 0% 96%)",
            "code-background": "#f2f1f1",
            card: "hsl(0 0% 100%)",
        },
    },
    transformers: [transformerAttributifyJsx(), transformerDirectives()],
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
    safelist: [
        "size-15",
        "size-30",
        "size-40",
        "text-code",
        "text-link",
        "bg-code-background",
    ],
});
