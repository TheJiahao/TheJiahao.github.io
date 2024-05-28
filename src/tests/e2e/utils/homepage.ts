import type { Page } from "@playwright/test";

export class HomePage {
    constructor(public readonly page: Page) {}

    async goto() {
        await this.page.goto("/");
    }

    async selectLanguage(language: string) {
        const languageSelector = this.page.getByRole("combobox", {
            name: "Select language",
        });

        await languageSelector.selectOption(language);
    }
}
