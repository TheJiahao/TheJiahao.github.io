import Giscus from "@giscus/react";
import { GISCUS_CONFIG } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const CommentList = ({ language }: TranslatedElement) => {
    return <Giscus {...GISCUS_CONFIG} lang={language} />;
};

export default CommentList;
