import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuSearchX } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface SearchResultProps extends TranslatedElement {
    keyword: string;
}

const SearchResult = ({ keyword, language }: SearchResultProps) => {
    const searchResult = useSearch(keyword, language).map(
        ({ title, content, url, image }) => ({
            title,
            description: content,
            url,
            image,
        }),
    );

    if (searchResult.length > 0) {
        return (
            <LinkList
                links={searchResult}
                aria-label={getTranslation(language).searchResults}
            />
        );
    }

    if (keyword != "") {
        return (
            <p align-icon gap-4 p-4 text="lg primary" justify-center>
                <LuSearchX />
                {getTranslation(language).noResults}
            </p>
        );
    }

    return null;
};

export default SearchResult;
