import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind,
    transformerDirectives,
} from "unocss";

export default defineConfig({
    presets: [
        presetAttributify({
            prefixedOnly: true,
        }),
        presetWind(),
        presetTypography(),
        presetIcons(),
    ],
    transformers: [transformerDirectives()],
});
