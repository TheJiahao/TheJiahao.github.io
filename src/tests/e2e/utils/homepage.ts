import { type Page } from "@playwright/test";
import { getTranslation } from "utils/getTranslation";

export class HomePage {
    constructor(
        public readonly page: Page,
        public readonly isMobile: boolean,
        public readonly languageCode: string,
    ) {}

    async goto(linkName?: string) {
        if (!linkName) {
            await this.page.goto(`/${this.languageCode}`);
            return;
        }

        if (this.isMobile) {
            await this.toggleMenu();
        }

        await this.page.getByRole("link", { name: linkName }).click();
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

    async search(keyword: string) {
        const searchBox = this.page.getByRole("searchbox");

        await searchBox.fill(keyword);
    }
}
