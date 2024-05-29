import { getRelativeLocaleUrl } from "astro:i18n";
import { getTranslation } from "../utils/translation";
import NavigationLink from "./NavigationLink";

interface BackButtonProps {
    language: string;
}

const BackButton = ({ language }: BackButtonProps) => {
    return (
        <NavigationLink
            text={getTranslation(language).back}
            url={getRelativeLocaleUrl(language, "/")}
            icon="i-ic:round-arrow-back-ios-new"
            classNames={["card", "p-2"]}
        />
    );
};

export default BackButton;
