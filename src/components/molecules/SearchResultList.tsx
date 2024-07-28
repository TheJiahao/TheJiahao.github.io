import LinkList from "components/molecules/LinkList";
import type { Page } from "interfaces/Page";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuSearchX } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface SearchResultProps extends TranslatedElement {
    results?: Page[];
}

const SearchResultList = ({ results, language }: SearchResultProps) => {
    if (!results) {
        return null;
    }

    if (results.length > 0) {
        return (
            <LinkList
                links={results}
                aria-label={getTranslation(language).searchResults}
            />
        );
    }

    return (
        <p align-icon gap-4 p-4 text="lg primary" justify-center>
            <LuSearchX />
            {getTranslation(language).noResults}
        </p>
    );
};

export default SearchResultList;
