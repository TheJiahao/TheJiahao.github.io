import {
    defineConfig,
    presetAttributify,
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
    ],
    transformers: [transformerDirectives()],
});
