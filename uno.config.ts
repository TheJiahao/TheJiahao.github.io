import {
    defineConfig,
    presetAttributify,
    presetTypography,
    presetWind4,
    transformerAttributifyJsx,
    transformerDirectives,
} from "unocss";
import presetTheme from "unocss-preset-theme";
import type { Theme } from "unocss/preset-wind4";

export default defineConfig({
    presets: [
        presetAttributify(),
        presetWind4({
            dark: "media",
        }),
        presetTypography(),
        presetTheme<Theme>({
            theme: {
                dark: {
                    colors: {
                        primary: "white",
                        secondary: "hsl(0 0% 70%)",
                        accent: "hsl(215 60% 50%)",
                        surface: {
                            primary: "hsl(0 0% 15%)",
                            secondary: "hsl(0 0% 9%)",
                            code: "#272a2f",
                        },
                        code: "#2eb172",
                        link: "#84c5e6",
                        disabled: "hsl(0 0% 30%)",
                        hover: "hsl(0 0% 20%)",
                        clicked: "hsl(0 0% 30%)",
                    },
                },
            },
        }),
    ],
    theme: {
        colors: {
            primary: "black",
            secondary: "hsl(0 0% 25%)",
            accent: "hsl(215 60% 50%)",
            surface: {
                primary: "hsl(0 0% 100%)",
                secondary: "hsl(0 0% 96%)",
                code: "#f2f1f1",
            },
            code: "#18794e",
            link: "#005782",
            disabled: "hsl(0 0% 70%)",
            hover: "hsl(0 0% 92%)",
            clicked: "hsl(0 0% 90%)",
        },
    },
    transformers: [transformerAttributifyJsx(), transformerDirectives()],
    shortcuts: {
        card: "rounded-lg bg-surface-primary drop-shadow-md break-inside-avoid overflow-hidden transition ease-in-out hover:drop-shadow-lg",
        hoverable: "transition ease-in-out hover:bg-accent/10",
        clickable: "cursor-pointer hoverable active:bg-accent/20",
        "grid-sidebars": "grid-cols-[minmax(auto,1fr)_auto_minmax(auto,1fr)]",
        "align-icon": "flex items-center",
        highlighted: "text-accent font-bold",
    },
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                "src/**/*.{js,ts}",
            ],
        },
    },
    safelist: ["size-15", "size-30", "size-40", "text-code", "text-link"],
});
