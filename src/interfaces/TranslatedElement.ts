import type { languageCodes } from "localization";

/**
 * Element with translations.
 */
interface TranslatedElement {
    /**
     * RFC 5646 language code with language tag and country code like zh-cn or en-us
     */
    language: (typeof languageCodes)[number];
}

export type { TranslatedElement };
