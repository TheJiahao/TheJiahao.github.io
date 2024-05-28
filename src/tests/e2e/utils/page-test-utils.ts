import { test } from "@playwright/test";
import { HomePage } from "./homepage";

type MyFixtures = {
    homepage: HomePage;
};

const pageTestUtils = test.extend<MyFixtures>({
    homepage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});

export default pageTestUtils;
