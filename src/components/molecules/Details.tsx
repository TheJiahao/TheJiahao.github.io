import DateComponent from "components/atoms/DateComponent";
import LanguageSelector from "components/molecules/LanguageSelector";
import type { Multilingual } from "interfaces/Multilingual";
import type { TranslatedElement } from "interfaces/TranslatedElement";

interface DetailsProps extends Partial<Multilingual & TranslatedElement> {
    title: string;
    description?: string;
    date?: Date;
    slug?: string;
}

const Details = ({
    title,
    description,
    date,
    languages,
    language,
    slug,
}: DetailsProps) => (
    <div flex="~ col" gap-sm>
        <h1 text="primary 3xl" font-bold>
            {title}
        </h1>

        {description && <p text="secondary xl">{description}</p>}

        <div flex="~ row" gap-4>
            {date && <DateComponent date={date} />}

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

export type { DetailsProps };
export default Details;
