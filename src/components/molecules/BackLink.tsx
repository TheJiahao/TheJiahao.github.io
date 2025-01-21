import { getRelativeLocaleUrl } from "astro:i18n";
import IconLink from "components/atoms/IconLink";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuChevronLeft } from "react-icons/lu";
import { getTranslation } from "utils/getTranslation";

interface BackLinkProps extends TranslatedElement {
    label?: string;
}

const BackLink = ({
    language,
    label = getTranslation(language).back,
}: BackLinkProps) => (
    <IconLink
        url={getRelativeLocaleUrl(language)}
        label={label}
        icon={<LuChevronLeft />}
        card
        text="secondary lg"
    />
);

export default BackLink;
