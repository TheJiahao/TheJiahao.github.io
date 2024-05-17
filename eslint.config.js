import eslint from "@eslint/js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import tseslint from "typescript-eslint";
import astroEslint from "eslint-plugin-astro";
import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownParser from "eslint-plugin-markdownlint/parser.js";

export default tseslint.config(
    reactRecommended,
    reactJSXRuntime,
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...astroEslint.configs.recommended,
    {
        files: ["*.md"],
        languageOptions: {
            parser: markdownParser,
        },
        plugins: {
            markdownlint: markdownlintPlugin,
        },
        rules: {
            ...markdownlintPlugin.configs.recommended.rules,
            "markdownlint/md034": "off",
            "markdownlint/md033": "off",
            "markdownlint/md013": "off",
            "markdownlint/md024": [
                "error",
                {
                    siblings_only: true,
                },
            ],
        },
    },
    {
        ignores: ["dist", ".astro"],
        languageOptions: { globals: globals.browser },
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
