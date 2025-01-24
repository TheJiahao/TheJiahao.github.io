import parse from "html-react-parser";
import type { HTMLAttributes } from "react";
import { getUUID } from "utils/getUUID";
import { renderMarkdown } from "utils/renderMarkdown";
interface DetailsProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
}

const Details = ({ title, description }: DetailsProps) => (
    <div text="secondary xl" flex="~ col" gap-sm>
        <h1
            text="primary 3xl"
            font-bold
            style={{ viewTransitionName: `title-${getUUID(title)}` }}
        >
            {title}
        </h1>

        {description && parse(renderMarkdown(description))}
    </div>
);

export type { DetailsProps };
export default Details;
