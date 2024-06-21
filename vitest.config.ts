/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
    test: {
        include: ["src/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
        exclude: ["src/tests/e2e/**"],
        environment: "jsdom",
        setupFiles: ["src/tests/setup.ts"],
        reporters: "default",
        coverage: {
            include: ["src/components", "src/utils"],
        },
    },
});
