import formatDate from "../utils/formatDate";

interface BlogDetailsProps {
    title: string;
    description?: string;
    date: Date;
}

const BlogDetails = ({ title, description, date }: BlogDetailsProps) => (
    <div prose px-8 py-2 max-w-full>
        <h2>{title}</h2>
        {description && <h3 text-slate>{description}</h3>}
        <time>{formatDate(date)}</time>
    </div>
);

export default BlogDetails;
