import type { languageCodes } from "localization";

interface TranslatedElement {
    language?: (typeof languageCodes)[number];
}

export type { TranslatedElement };
