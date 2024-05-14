import {
    defineConfig,
    presetAttributify,
    presetWind,
    transformerDirectives,
} from "unocss";

export default defineConfig({
    presets: [
        presetAttributify({
            prefixedOnly: true,
        }),
        presetWind(),
    ],
    transformers: [transformerDirectives()],
});
