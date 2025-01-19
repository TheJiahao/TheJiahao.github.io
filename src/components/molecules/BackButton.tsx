import { getRelativeLocaleUrl } from "astro:i18n";
import IconLink from "components/atoms/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface BackButtonProps extends TranslatedElement {
    label?: string;
}

const BackButton = ({
    language,
    label = getTranslation(language).back,
}: BackButtonProps) => (
    <IconLink
        url={getRelativeLocaleUrl(language)}
        label={label}
        icon={<LuChevronLeft />}
    />
);

export default BackButton;
