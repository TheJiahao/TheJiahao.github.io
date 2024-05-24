import { SITE_OWNER, SITE_SOURCE, SITE_START_YEAR } from "../config";

interface SiteFooterProps {
    owner?: string;
    startYear?: number;
    source?: string;
}

const SiteFooter = ({
    owner = SITE_OWNER,
    startYear = SITE_START_YEAR,
    source = SITE_SOURCE,
}: SiteFooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer max-w-full flex="~ col" items-center py-8 line-height-loose>
            <p>
                © {startYear} - {year} {owner}
            </p>
            <a
                title="Site source"
                aria-label="Site source"
                href={source}
                className="i-logos-github-icon"
                block
                flex
                text-xl
            />
        </footer>
    );
};

export default SiteFooter;
