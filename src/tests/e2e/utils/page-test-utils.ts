import { test } from "@playwright/test";
import { DEFAULT_LANGUAGE } from "config/languages";
import { HomePage } from "./homepage";

type MyFixtures = {
    homepage: HomePage;
};

type MyOptions = {
    languageCode: string;
};

const pageTestUtils = test.extend<MyOptions & MyFixtures>({
    languageCode: [DEFAULT_LANGUAGE, { option: true }],
    homepage: async ({ page, isMobile, languageCode }, use) => {
        await use(new HomePage(page, isMobile, languageCode));
    },
});

export default pageTestUtils;
