import LanguageSelector from "components/molecules/LanguageSelector";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const ToolBar = ({ language }: TranslatedElement) => {
    return (
        <aside card mx-auto p-2>
            <LanguageSelector defaultLanguage={language} />
        </aside>
    );
};

export default ToolBar;
