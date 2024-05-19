import { getViteConfig } from "astro/config";

export default getViteConfig({
    test: {
        environment: "jsdom",
        setupFiles: ["/src/tests/setup.ts"],
    },
});
