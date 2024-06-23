import IconComponent from "components/atoms/IconComponent";
import {
    DEFAULT_LANGUAGE,
    SITE_OWNER,
    SITE_SOURCE,
    SITE_START_YEAR,
} from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { getTranslation } from "utils/getTranslation";

interface SiteFooterProps extends TranslatedElement {
    owner?: string;
    startYear?: number;
    source?: string;
}

const SiteFooter = ({
    language = DEFAULT_LANGUAGE,
    owner = SITE_OWNER,
    startYear = SITE_START_YEAR,
    source = SITE_SOURCE,
}: SiteFooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer max-w-full flex="~ col" items-center line-height-loose>
            <p>
                © {startYear} - {year} {owner}
            </p>
            <a href={source}>
                <IconComponent icon="i-logos-github-icon">
                    {getTranslation(language).siteSource}
                </IconComponent>
            </a>
        </footer>
    );
};

export default SiteFooter;
