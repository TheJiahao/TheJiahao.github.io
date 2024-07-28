import SearchForm from "components/molecules/SearchForm";
import SearchResultList from "components/molecules/SearchResultList";
import useSearch from "hooks/useSearch";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { useState, type ChangeEventHandler } from "react";

const SearchBox = ({ language }: TranslatedElement) => {
    const [keyword, setKeyword] = useState("");
    const results = useSearch(keyword, language);

    const handleSearch: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setKeyword(target.value);
    };
    const handleReset = () => {
        setKeyword("");
    };

    return (
        <search card flex="~ col">
            <SearchForm
                value={keyword}
                language={language}
                onChange={handleSearch}
                onReset={handleReset}
            />
            <SearchResultList
                results={keyword ? results : undefined}
                language={language}
            />
        </search>
    );
};

export default SearchBox;
