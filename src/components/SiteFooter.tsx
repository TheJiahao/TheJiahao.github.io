import {
    SITE_LICENSE,
    SITE_OWNER,
    SITE_SOURCE,
    SITE_START_YEAR,
} from "../config";

interface License {
    name: string;
    url: string;
}

interface SiteFooterProps {
    owner?: string;
    startYear?: number;
    license?: License;
    source?: string;
}

const SiteFooter = ({
    owner = SITE_OWNER,
    startYear = SITE_START_YEAR,
    license = SITE_LICENSE,
    source = SITE_SOURCE,
}: SiteFooterProps) => {
    const year = new Date().getFullYear();

    return (
        <footer max-w-full flex="~ col" items-center py-8 line-height-loose>
            <p>
                © {startYear} - {year} {owner}，博客内容遵循{" "}
                <a rel="license" href={license.url} underline>
                    {license.name}
                </a>
                。
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
