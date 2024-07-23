import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler } from "react";
import { LuSearch, LuX } from "react-icons/lu";
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                hoverable
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
                    placeholder={getTranslation(language).typeToSearch}
                    value={keyword}
                    onChange={onChange}
                    className="[&::-webkit-search-cancel-button]:hidden"
                    w-full
                    outline-none
                    bg-transparent
                />
                {keyword != "" && (
                    <button
                        type="reset"
                        onClick={clearKeyword}
                        title={getTranslation(language).clear}
                        transition
                        ease-in-out
                        hover:text-accent-primary
                        active="text-accent-primary brightness-70 dark:brightness-125"
                    >
                        <LuX />
                    </button>
                )}
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
