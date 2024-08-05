import { getRelativeLocaleUrl } from "astro:i18n";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface BackButtonProps extends TranslatedElement {
    label?: string;
}

const BackButton = ({
    language,
    label = getTranslation(language).back,
}: BackButtonProps) => {
    return (
        <a
            href={getRelativeLocaleUrl(language)}
            text="secondary lg"
            clickable
            card
            align-icon
            inline-flex
            p-2
            gap-2
        >
            <LuChevronLeft />
            {label}
        </a>
    );
};

export default BackButton;
