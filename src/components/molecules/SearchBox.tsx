import SearchButton from "components/atoms/SearchButton";
import useSearch from "hooks/useSearch";
import { useState, type ChangeEventHandler } from "react";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");

    const searchResult = useSearch(keyword, "zh-cn");

    const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setKeyword(target.value);
    };

    return (
        <form align-icon gap-sm>
            <input type="search" value={keyword} onChange={onChange} />
            <SearchButton type="submit" />
            {searchResult.map(({ title }) => (
                <div key={title}>{title}</div>
            ))}
        </form>
    );
};

export default SearchBox;
