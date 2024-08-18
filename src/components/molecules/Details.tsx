import { renderMarkdown } from "utils/renderHTML";

interface DetailsProps {
    title: string;
    description?: string;
}

const Details = ({ title, description }: DetailsProps) => (
    <div flex="~ col" gap-sm>
        <h1 text="primary 3xl" font-bold>
            {title}
        </h1>

        {description && (
            <p
                text="secondary xl"
                dangerouslySetInnerHTML={{
                    __html: renderMarkdown(description),
                }}
            />
        )}
    </div>
);

export type { DetailsProps };
export default Details;
