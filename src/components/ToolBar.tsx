import LanguageSelector from "./LanguageSelector";

const ToolBar = ({ lang }: { lang: string }) => {
    return (
        <aside card mx-auto p-2>
            <LanguageSelector lang={lang} />
        </aside>
    );
};

export default ToolBar;
