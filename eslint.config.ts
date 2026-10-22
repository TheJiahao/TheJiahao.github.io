import eslintReact from "@eslint-react/eslint-plugin";
import eslint from "@eslint/js";
import unocss from "@unocss/eslint-config/flat";
import astroEslint from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
    {
        ...eslintReact.configs["recommended-type-checked"],
        ignores: ["**/*.astro"],
    },
    {
        extends: [
            eslintReact.configs["jsx"],
            eslint.configs.recommended,
            tseslint.configs.strictTypeChecked,
            astroEslint.configs.recommended,
            unocss,
        ],
    },
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
