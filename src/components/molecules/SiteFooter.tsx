import { SITE_OWNER, SITE_SOURCE, SITE_START_YEAR } from "config";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { SiGithub } from "react-icons/si";
import { getTranslation } from "utils/getTranslation";

interface SiteFooterProps extends TranslatedElement {
    owner?: string;
    startYear?: number;
    source?: string;
    currentYear?: number;
}

const SiteFooter = ({
    language,
    owner = SITE_OWNER,
    startYear = SITE_START_YEAR,
    source = SITE_SOURCE,
    // eslint-disable-next-line @eslint-react/purity
    currentYear = new Date().getFullYear(),
}: SiteFooterProps) => {
    return (
        <footer
            text-secondary
            max-w-full
            flex="~ col"
            items-center
            line-height-loose
            lg="mt-auto"
        >
            <p>
                © {startYear} - {currentYear} {owner}
            </p>
            <a href={source} align-icon gap-2>
                {<SiGithub aria-hidden />}
                {getTranslation(language).siteSource}
            </a>
        </footer>
    );
};

export default SiteFooter;
