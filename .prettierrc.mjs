export default {
    tabWidth: 4,
    plugins: [import("prettier-plugin-go-template")],
    overrides: [
        {
            files: ["*.html", "*.css"],
            options: {
                parser: "go-template",
                singleQuote: false,
            },
        },
        {
            files: ["*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
