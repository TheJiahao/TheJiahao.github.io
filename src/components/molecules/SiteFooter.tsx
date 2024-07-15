import { SITE_OWNER, SITE_SOURCE, SITE_START_YEAR } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { SiGithub } from "react-icons/si";
import { getTranslation } from "utils/getTranslation";

interface SiteFooterProps extends TranslatedElement {
    owner?: string;
    startYear?: number;
    source?: string;
}

const SiteFooter = ({
    language,
    owner = SITE_OWNER,
    startYear = SITE_START_YEAR,
    source = SITE_SOURCE,
}: SiteFooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer
            text-secondary
            max-w-full
            flex="~ col"
            items-center
            line-height-loose
        >
            <p>
                © {startYear} - {year} {owner}
            </p>
            <a
                href={source}
                target="_blank"
                rel="noreferrer noopener"
                align-icon
                gap-2
            >
                {<SiGithub aria-hidden />}
                {getTranslation(language).siteSource}
            </a>
        </footer>
    );
};

export default SiteFooter;
