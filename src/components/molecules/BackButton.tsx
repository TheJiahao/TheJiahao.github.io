import { getRelativeLocaleUrl } from "astro:i18n";
import { getTranslation } from "../../utils/translation";
import IconComponent from "../atoms/IconComponent";

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
