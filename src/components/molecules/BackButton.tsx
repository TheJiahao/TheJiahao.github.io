import { getRelativeLocaleUrl } from "astro:i18n";
import IconComponent from "components/atoms/IconComponent";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface BackButtonProps extends TranslatedElement {
    label?: string;
    fontSize?: string;
}

const BackButton = ({
    language,
    label = getTranslation(language).back,
    fontSize = "lg",
}: BackButtonProps) => {
    return (
        <a
            href={getRelativeLocaleUrl(language, "/")}
            inline-flex
            card
            p-3
            text={fontSize}
        >
            <IconComponent icon={<LuChevronLeft />}>{label}</IconComponent>
        </a>
    );
};

export default BackButton;
