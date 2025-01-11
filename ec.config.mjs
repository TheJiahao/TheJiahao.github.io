import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { defineEcConfig } from "astro-expressive-code";

export default defineEcConfig({
    plugins: [pluginCollapsibleSections()],
    themes: ["one-light", "one-dark-pro"],
    styleOverrides: {
        codeFontFamily:
            "monospace, ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",
        codeFontSize: "large",
        borderRadius: "0.5rem",
    },
});
