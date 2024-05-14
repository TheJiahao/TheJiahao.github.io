import eslint from "@eslint/js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: ["dist", ".astro"],
    },
    {
        languageOptions: { globals: globals.browser },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    reactRecommended,
    reactJSXRuntime,
);
