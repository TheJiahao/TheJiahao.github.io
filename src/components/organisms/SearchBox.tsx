import SearchForm from "components/molecules/SearchForm";
import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler } from "react";
import { getTranslation } from "utils/getTranslation";

const SearchBox = ({ language }: TranslatedElement) => {
    const [keyword, setKeyword] = useState("");

    const searchResult = useSearch(keyword, language).map(
        ({ title, content, url, image }) => ({
            title,
            description: content,
            url,
            image,
        }),
    );

    const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setKeyword(target.value);
    };

    const clearKeyword = () => {
        setKeyword("");
    };

    return (
        <search card flex="~ col">
            <SearchForm
                value={keyword}
                language={language}
                handleSearch={onChange}
                handleReset={clearKeyword}
            />

            {searchResult.length > 0 && (
                <LinkList
                    links={searchResult}
                    aria-label={getTranslation(language).searchResults}
                />
            )}
        </search>
    );
};

export default SearchBox;
