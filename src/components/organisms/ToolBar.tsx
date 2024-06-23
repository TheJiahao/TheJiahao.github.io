import LanguageSelector from "components/molecules/LanguageSelector";
import { DEFAULT_LANGUAGE } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";

const ToolBar = ({ language = DEFAULT_LANGUAGE }: TranslatedElement) => {
    return (
        <aside card mx-auto p-2>
            <LanguageSelector defaultLanguage={language} />
        </aside>
    );
};

export default ToolBar;
