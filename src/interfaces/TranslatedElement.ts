import type { languageCodes } from "localization";

/**
 * Element with translations.
 */
interface TranslatedElement {
    language: (typeof languageCodes)[number];
}

export type { TranslatedElement };
