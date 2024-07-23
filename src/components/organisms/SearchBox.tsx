import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler } from "react";
import { LuSearch } from "react-icons/lu";
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

    return (
        <search card flex="~ col">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                align-icon
                gap-4
                p-4
                text="xl secondary"
                w-full
            >
                <label htmlFor="search">
                    <LuSearch aria-hidden />
                </label>
                <input
                    type="search"
                    id="search"
                    title={getTranslation(language).search}
                    placeholder={getTranslation(language).search}
                    value={keyword}
                    onChange={onChange}
                    w-full
                    outline-none
                    bg-transparent
                />
            </form>

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
