import LinkList from "components/organisms/LinkList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler, type HTMLAttributes } from "react";
import { LuSearch } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

const SearchBox = ({
    language,
    ...props
}: TranslatedElement & HTMLAttributes<HTMLDivElement>) => {
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
        <div {...props}>
            <form align-icon gap-1>
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
                />
            </form>
            <LinkList language={language} links={searchResult} />
        </div>
    );
};

export default SearchBox;
