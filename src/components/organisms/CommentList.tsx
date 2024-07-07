import Giscus from "@giscus/react";
import { GISCUS_CONFIG } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const CommentList = ({ language }: TranslatedElement) => {
    if (language.includes("-")) {
        const [languageTag, countryCode] = language.split("-");

        language = [languageTag, countryCode.toUpperCase()].join("-");
    }

    return <Giscus {...GISCUS_CONFIG} lang={language} />;
};

export default CommentList;
