import { getRelativeLocaleUrl } from "astro:i18n";
import IconComponent from "components/atoms/IconComponent";
import { getTranslation } from "utils/getTranslation";

interface BackButtonProps {
    language: string;
    label?: string;
}

const BackButton = ({
    language,
    label = getTranslation(language).back,
}: BackButtonProps) => {
    return (
        <a href={getRelativeLocaleUrl(language, "/")} inline-flex card p-2>
            <IconComponent icon="i-lucide:chevron-left">{label}</IconComponent>
        </a>
    );
};

export default BackButton;
