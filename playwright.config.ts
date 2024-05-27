import { defineConfig, devices } from "@playwright/test";
import "dotenv/config";

const PORT = Number(process.env.PUBLIC_PORT) || 4321;

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
    forbidOnly: !!process.env.CI,
    workers: process.env.CI ? "100%" : undefined,
    reporter: process.env.CI ? [["github"], ["dot"]] : [["html"], ["list"]],
    timeout: 10000,
    expect: {
        timeout: 3000,
    },
    use: {
        baseURL: process.env.BASE_URL || `http://localhost:${PORT}/zh-cn`,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
    },
    webServer: process.env.CI
        ? undefined
        : {
              command: "pnpm run dev",
              port: PORT,
              timeout: 120 * 1000,
              reuseExistingServer: true,
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
