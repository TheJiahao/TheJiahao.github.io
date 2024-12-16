import eslint from "@eslint/js";
import unocss from "@unocss/eslint-config/flat";
import astroEslint from "eslint-plugin-astro";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ...reactRecommended, ignores: ["**/*.astro"] },
    reactJSXRuntime,
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...astroEslint.configs.recommended,
    unocss,
    {
        ignores: [
            "dist",
            ".astro",
            "*.config.{js,ts,mjs}",
            "playwright-report",
            "coverage",
        ],
    },
    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/no-unknown-property": ["off"],
        },
    },
);
