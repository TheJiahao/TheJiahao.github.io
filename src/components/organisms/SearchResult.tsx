import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
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

    return searchResult.length > 0 ? (
        <LinkList
            links={searchResult}
            aria-label={getTranslation(language).searchResults}
        />
    ) : null;
};

export default SearchResult;
