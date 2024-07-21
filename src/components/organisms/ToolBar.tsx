import SearchBox from "components/molecules/SearchBox";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const ToolBar = ({ language }: TranslatedElement) => {
    return (
        <aside mx-auto p-2 flex="~ row" gap-lg>
            <SearchBox language={language} card p-2 />
        </aside>
    );
};

export default ToolBar;
