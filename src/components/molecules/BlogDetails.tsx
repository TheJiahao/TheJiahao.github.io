import LanguageSelector from "components/molecules/LanguageSelector";
import type { Multilingual } from "interfaces/Multilingual";
import type { TranslatedElement } from "interfaces/TranslatedElement";
import { LuCalendar } from "react-icons/lu";
import { formatDate } from "utils/formatDate";

interface BlogDetailsProps extends Partial<Multilingual & TranslatedElement> {
    title: string;
    description?: string;
    date?: Date;
    slug?: string;
}

const BlogDetails = ({
    title,
    description,
    date,
    languages,
    language,
    slug,
}: BlogDetailsProps) => (
    <div flex="~ col" gap-sm>
        <h1 text="primary 3xl" font-bold>
            {title}
        </h1>

        {description && <p text="secondary xl">{description}</p>}

        <div flex="~ row" gap-4>
            {date && (
                <time
                    dateTime={formatDate(date)}
                    text-secondary
                    align-icon
                    gap-2
                >
                    <LuCalendar role="presentation" focusable="false" />
                    {formatDate(date)}
                </time>
            )}

            {languages && language && languages.length > 1 && (
                <LanguageSelector
                    defaultLanguage={language}
                    languages={languages}
                    slug={slug}
                />
            )}
        </div>
    </div>
);

export type { BlogDetailsProps };
export default BlogDetails;
