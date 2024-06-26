import IconComponent from "components/atoms/IconComponent";
import { LuCalendar } from "react-icons/lu";
import formatDate from "utils/formatDate";

interface BlogDetailsProps {
    title: string;
    description?: string;
    date: Date;
}

const BlogDetails = ({ title, description, date }: BlogDetailsProps) => (
    <div prose max-w-full>
        <h2>{title}</h2>
        {description && <p text="slate lg">{description}</p>}
        <IconComponent
            icon={<LuCalendar role="presentation" focusable="false" />}
        >
            <time>{formatDate(date)}</time>
        </IconComponent>
    </div>
);

export default BlogDetails;
