import { DEFAULT_LOCALE } from "../config";
import { languages } from "../utils/translation";

const LanguageButton = () => {
    return (
        <div inline-flex items-center gap-2>
            <span className="i-fluent-emoji-flat-globe-with-meridians" />
            <select
                onChange={(event) =>
                    (window.location.href = event.target.value)
                }
            >
                {languages.map(({ name, code }) => (
                    <option
                        key={code}
                        value={code}
                        selected={code === DEFAULT_LOCALE}
                    >
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageButton;
