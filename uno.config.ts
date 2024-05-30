import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind,
    transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
    presets: [
        presetAttributify(),
        presetWind(),
        presetTypography(),
        presetIcons(),
    ],
    transformers: [transformerAttributifyJsx()],
    shortcuts: {
        card: "rounded-md bg-white drop-shadow-md break-inside-avoid block overflow-hidden",
        "grid-sidebars":
            "grid grid-cols-[minmax(auto,1fr)_auto_minmax(auto,1fr)]",
    },
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                "src/**/*.{js,ts}",
            ],
        },
    },
});
