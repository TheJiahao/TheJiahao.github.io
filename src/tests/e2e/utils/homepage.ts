import { type Page } from "@playwright/test";
import { getTranslation } from "utils/getTranslation";

export class HomePage {
    constructor(
        public readonly page: Page,
        public readonly isMobile: boolean,
        public readonly languageCode: string,
    ) {}

    async goto() {
        await this.page.goto(`/${this.languageCode}`);
    }

    async toggleMenu() {
        const expandButton = this.page.getByRole("button", {
            name: getTranslation(this.languageCode).showNavigationMenu,
        });

        await expandButton.click();
    }

    async selectLanguage(language: string) {
        if (this.isMobile) {
            await this.toggleMenu();
        }

        await this.page
            .getByRole("combobox", {
                name: "Select language",
            })
            .click();

        await this.page.getByRole("option", { name: language }).click();
    }
}
