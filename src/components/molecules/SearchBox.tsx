import SearchButton from "components/atoms/SearchButton";
import { useState, type ChangeEventHandler } from "react";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");

    const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        setKeyword(target.value);
    };

    return (
        <form>
            <input type="search" value={keyword} onChange={onChange} />
            <SearchButton type="submit" />
        </form>
    );
};

export default SearchBox;
