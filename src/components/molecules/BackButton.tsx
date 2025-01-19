import { getRelativeLocaleUrl } from "astro:i18n";
import LabeledIconLink from "components/atoms/LabeledIconLink";
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
    <LabeledIconLink
        url={getRelativeLocaleUrl(language)}
        label={label}
        icon={<LuChevronLeft />}
    />
);

export default BackButton;
