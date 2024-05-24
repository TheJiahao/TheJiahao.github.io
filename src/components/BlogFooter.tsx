import { SITE_LICENSE } from "../config";
import type { License } from "../interfaces/License";

interface BlogFooterProps {
    license?: License;
}

const BlogFooter = ({ license = SITE_LICENSE }: BlogFooterProps) => {
    return (
        <footer card p-2>
            <p>
                博客内容遵循{" "}
                <a rel="license" href={license.url} underline>
                    {license.name}
                </a>
            </p>
        </footer>
    );
};

export default BlogFooter;
