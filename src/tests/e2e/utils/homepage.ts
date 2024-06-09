import { expect, type Page } from "@playwright/test";
import { DEFAULT_LANGUAGE } from "config/languages";
import { getTranslation } from "utils/getTranslation";

export class HomePage {
    constructor(
        public readonly page: Page,
        public readonly isMobile: boolean,
    ) {}

    #getLanguage() {
        return this.page.url().split("/").at(-1) || DEFAULT_LANGUAGE;
    }

    async goto() {
        await this.page.goto("/");
    }

    async toggleMenu() {
        const languageCode = this.#getLanguage();

        const expandButton = this.page.getByRole("button", {
            name: getTranslation(languageCode).showNavigationMenu,
        });

        await expect.soft(expandButton).toBeEnabled();
        await expandButton.click({ force: true });
    }

    async selectLanguage(language: string) {
        if (this.isMobile) {
            await this.toggleMenu();
        }

        await this.page
            .getByRole("combobox", {
                name: "Select language",
            })
            .selectOption(language);
    }
}
