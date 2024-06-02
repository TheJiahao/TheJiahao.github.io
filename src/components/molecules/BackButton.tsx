import { getRelativeLocaleUrl } from "astro:i18n";
import IconComponent from "components/atoms/IconComponent";
import { getTranslation } from "utils/getTranslation";

interface BackButtonProps {
    language: string;
}

const BackButton = ({ language }: BackButtonProps) => {
    return (
        <a href={getRelativeLocaleUrl(language, "/")} flex card p-2>
            <IconComponent icon="i-ic:round-arrow-back-ios-new">
                {getTranslation(language).back}
            </IconComponent>
        </a>
    );
};

export default BackButton;
