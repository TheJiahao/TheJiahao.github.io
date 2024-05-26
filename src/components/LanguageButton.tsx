import { getRelativeLocaleUrl } from "astro:i18n";
import type { ChangeEventHandler } from "react";
import { languages } from "../utils/translation";

const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const language = event.target.value;
    window.location.href = getRelativeLocaleUrl(language, "/");
};

const LanguageButton = ({ lang }: { lang: string }) => (
    <div inline-flex items-center gap-2>
        <span className="i-fluent-emoji-flat-globe-with-meridians" />
        <select onChange={onChange}>
            {languages.map(({ name, code }) => (
                <option key={code} value={code} selected={code === lang}>
                    {name}
                </option>
            ))}
        </select>
    </div>
);

export default LanguageButton;
