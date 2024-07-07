import Giscus from "@giscus/react";
import { GISCUS_CONFIG } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";

/**
 * Component for comments.
 *
 * @param {string} language RFC 5646 language code with language tag and country code like zh-cn or en-us
 * @see config.comments for configuration
 */
const CommentList = ({ language }: TranslatedElement) => {
    if (language.includes("-")) {
        const [languageTag, countryCode] = language.split("-");

        language = [languageTag, countryCode.toUpperCase()].join("-");
    }

    return <Giscus {...GISCUS_CONFIG} lang={language} inputPosition="top" />;
};

export default CommentList;
