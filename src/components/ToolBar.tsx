import LanguageButton from "./LanguageButton";

const ToolBar = ({ lang }: { lang: string }) => {
    return (
        <aside card mx-auto p-2>
            <LanguageButton lang={lang} />
        </aside>
    );
};

export default ToolBar;
