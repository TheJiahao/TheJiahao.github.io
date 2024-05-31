import { getRelativeLocaleUrl } from "astro:i18n";
import { getTranslation } from "../utils/translation";
import IconText from "./IconText";

interface BackButtonProps {
    language: string;
}

const BackButton = ({ language }: BackButtonProps) => {
    return (
        <a href={getRelativeLocaleUrl(language, "/")} flex card p-2>
            <IconText icon="i-ic:round-arrow-back-ios-new">
                {getTranslation(language).back}
            </IconText>
        </a>
    );
};

export default BackButton;
