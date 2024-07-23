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
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                gap-1
                align-icon
            >
                <label htmlFor="search">
                    <LuSearch />
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
                />
            </form>
            <LinkList
                links={searchResult}
                aria-label={getTranslation(language).searchResults}
            />
        </div>
    );
};

export default SearchBox;
