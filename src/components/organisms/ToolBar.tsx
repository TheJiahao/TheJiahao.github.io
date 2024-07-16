import LanguageSelector from "components/molecules/LanguageSelector";
import SearchBox from "components/molecules/SearchBox";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const ToolBar = ({ language }: TranslatedElement) => {
    return (
        <aside card mx-auto p-2 flex="~ row" gap-lg>
            <SearchBox />
            <LanguageSelector defaultLanguage={language} />
        </aside>
    );
};

export default ToolBar;
