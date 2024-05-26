import { DEFAULT_LOCALE } from "../config";
import LanguageButton from "./LanguageButton";

const ToolBar = ({ lang = DEFAULT_LOCALE }: { lang?: string }) => {
    return (
        <aside card mx-auto p-2>
            <LanguageButton lang={lang} />
        </aside>
    );
};

export default ToolBar;
