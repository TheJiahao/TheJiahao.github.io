import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetUno,
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
        presetTheme({
            theme: {
                dark: {
                    colors: {
                        primary: "white",
                        secondary: "hsl(0 0% 70%)",
                        accent: {
                            primary: "hsl(215 60% 70%)",
                            secondary: "hsl(195 50% 20%)",
                        },
                        disabled: "hsl(0 0% 30%)",
                        code: "#2eb172",
                        link: "#84c5e6",
                        surface: {
                            primary: "hsl(0 0% 15%)",
                            tertiary: "hsl(0 0% 9%)",
                        },
                        "code-background": "#272a2f",
                    },
                },
            },
        }),
    ],
    theme: {
        colors: {
            primary: "black",
            secondary: "hsl(0 0% 25%)",
            accent: {
                primary: "hsl(215 60% 50%)",
                secondary: "hsl(195 100% 95%)",
            },
            disabled: "hsl(0 0% 70%)",
            code: "#18794e",
            link: "#005782",
            surface: {
                primary: "hsl(0 0% 100%)",
                tertiary: "hsl(0 0% 96%)",
            },
            "code-background": "#f2f1f1",
        },
    },
    transformers: [transformerAttributifyJsx(), transformerDirectives()],
    shortcuts: {
        card: "rounded-md bg-surface-primary shadow-md break-inside-avoid overflow-hidden",
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
