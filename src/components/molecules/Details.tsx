import parse from "html-react-parser";
import { renderMarkdown } from "utils/renderMarkdown";
interface DetailsProps {
    title: string;
    description?: string;
}

const Details = ({ title, description }: DetailsProps) => (
    <div text="secondary xl" flex="~ col" gap-sm>
        <h1 text="primary 3xl" font-bold>
            {title}
        </h1>

        {description && parse(renderMarkdown(description))}
    </div>
);

export type { DetailsProps };
export default Details;
