import { SITE_LICENSE } from "../config";
import type { License } from "../interfaces/License";
import formatDate from "../utils/formatDate";

interface BlogFooterProps {
    license?: License;
    lastModified: Date;
}

const BlogFooter = ({
    license = SITE_LICENSE,
    lastModified,
}: BlogFooterProps) => {
    return (
        <footer card prose p-2>
            <time>{formatDate(lastModified)}</time>
            <p>
                博客内容遵循{" "}
                <a rel="license" href={license.url}>
                    {license.name}
                </a>
            </p>
        </footer>
    );
};

export default BlogFooter;
