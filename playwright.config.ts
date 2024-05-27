import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

const PORT = process.env.PUBLIC_PORT || "4321";
const BASE_URL = `http://localhost:${PORT}/`;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: "src/tests/e2e",
    fullyParallel: true,
    maxFailures: process.env.CI ? 3 : undefined,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? "100%" : undefined,
    reporter: process.env.CI ? [["github"], ["dot"]] : [["html"], ["list"]],
    timeout: 10000,
    expect: {
        timeout: 3000,
    },
    use: {
        baseURL: BASE_URL,
        trace: "on-first-retry",
    },
    webServer: {
        command: process.env.CI ? "pnpm run start" : "pnpm run dev",
        url: BASE_URL,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
        /* Test against mobile viewports. */
        {
            name: "Mobile Chrome",
            use: { ...devices["Pixel 5"] },
            testMatch: /.*mobile.test.ts$/,
        },
        {
            name: "Mobile Safari",
            use: { ...devices["iPhone 12"] },
            testMatch: /.*mobile.test.ts$/,
        },
    ],
});
