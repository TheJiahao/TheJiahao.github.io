import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler } from "react";
import { LuSearch } from "react-icons/lu";

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
            <form align-icon gap-1>
                <label htmlFor="search">
                    <LuSearch />
                </label>
                <input
                    type="search"
                    id="search"
                    value={keyword}
                    onChange={onChange}
                />
            </form>
            <LinkList language={language} links={searchResult} />
        </div>
    );
};

export default SearchBox;
