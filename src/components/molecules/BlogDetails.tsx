import { LuCalendar } from "react-icons/lu";
import formatDate from "utils/formatDate";

interface BlogDetailsProps {
    title: string;
    description?: string;
    date?: Date;
}

const BlogDetails = ({ title, description, date }: BlogDetailsProps) => (
    <div flex="~ col" gap-sm>
        <h1 text="primary 3xl" font-bold>
            {title}
        </h1>

        {description && <p text="secondary xl">{description}</p>}

        {date && (
            <time dateTime={formatDate(date)} text-secondary align-icon gap-2>
                <LuCalendar role="presentation" focusable="false" />
                {formatDate(date)}
            </time>
        )}
    </div>
);

export type { BlogDetailsProps };
export default BlogDetails;
