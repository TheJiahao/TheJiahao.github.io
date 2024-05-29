import formatDate from "../utils/formatDate";

interface BlogDetailsProps {
    title: string;
    description?: string;
    date: Date;
}

const BlogDetails = ({ title, description, date }: BlogDetailsProps) => (
    <div prose px-8 py-2 max-w-full>
        <h2>{title}</h2>
        {description && <p text="slate lg">{description}</p>}
        <time>{formatDate(date)}</time>
    </div>
);

export default BlogDetails;
