/** @type {import("prettier").Config} */

export default {
    tabWidth: 4,
    plugins: ["prettier-plugin-astro", "prettier-plugin-toml"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
        {
            files: "*.toml",
            options: {
                indentEntries: true,
                indentTables: true,
            },
        },
        {
            files: "*.yml",
            options: {
                tabWidth: 2,
            },
        },
    ],
};
