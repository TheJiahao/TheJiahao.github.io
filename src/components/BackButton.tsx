import { getRelativeLocaleUrl } from "astro:i18n";
import { getTranslation } from "../utils/translation";
import NavigationLink from "./NavigationLink";

interface BackButtonProps {
    lang: string;
}

const BackButton = ({ lang }: BackButtonProps) => {
    return (
        <NavigationLink
            text={getTranslation(lang).back}
            url={getRelativeLocaleUrl(lang, "/")}
            icon="i-ic:round-arrow-back-ios-new"
            classNames={["card", "p-2"]}
        />
    );
};

export default BackButton;
