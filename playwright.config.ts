import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PUBLIC_PORT) || 4321;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "src/tests/e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    workers: "75%",
    reporter: process.env.CI ? [["github"], ["dot"]] : [["html"], ["list"]],
    retries: 1,
    timeout: 10000,
    maxFailures: process.env.CI ? 5 : undefined,
    use: {
        baseURL: `http://localhost:${PORT}`,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
    },
    webServer: {
        command: process.env.CI ? "pnpm run start" : "pnpm run dev",
        port: PORT,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: "Desktop Chrome",
            use: { ...devices["Desktop Chrome"] },
            grepInvert: /@mobile/,
        },
        {
            name: "Desktop Firefox",
            use: { ...devices["Desktop Firefox"] },
            grepInvert: /@mobile/,
        },
        {
            name: "Desktop Safari",
            use: { ...devices["Desktop Safari"] },
            grepInvert: /@mobile/,
        },
        /* Test against mobile viewports. */
        {
            name: "Mobile Chrome",
            use: { ...devices["Pixel 5"] },
            grepInvert: /@desktop/,
        },
        {
            name: "Mobile Safari",
            use: { ...devices["iPhone 12"] },
            grepInvert: /@desktop/,
        },
    ],
});
