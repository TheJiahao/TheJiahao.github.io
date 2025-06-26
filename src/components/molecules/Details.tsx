import parse from "html-react-parser";
import type { AnimatedElement } from "interfaces/AnimatedElement";
import { renderMarkdown } from "utils/renderMarkdown";
interface DetailsProps extends AnimatedElement {
    title: string;
    description?: string;
}

const Details = ({ title, description, viewTransitionName }: DetailsProps) => (
    <div text="secondary xl" flex="~ col" gap-3>
        <h1 text="primary 3xl" font-bold style={{ viewTransitionName }}>
            {title}
        </h1>

        {description && parse(renderMarkdown(description))}
    </div>
);

export type { DetailsProps };
export default Details;
