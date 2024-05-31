import LanguageSelector from "../LanguageSelector";

const ToolBar = ({ language }: { language: string }) => {
    return (
        <aside card mx-auto p-2>
            <LanguageSelector defaultLanguage={language} />
        </aside>
    );
};

export default ToolBar;
