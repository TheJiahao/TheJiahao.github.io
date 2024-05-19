import { getViteConfig } from "astro/config";

export default getViteConfig({
    test: {
        environment: "jsdom",
        setupFiles: ["src/tests/setup.ts"],
        reporters: "default",
        coverage: {
            reporter: ["json", "html"],
            include: ["src"],
            exclude: ["src/tests", "src/content", "src/pages", "**/*.d.ts"],
        },
    },
});
