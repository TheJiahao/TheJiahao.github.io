import { getRelativeLocaleUrl } from "astro:i18n";
import Avatar from "components/atoms/Avatar";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import { getTranslation } from "utils/getTranslation";

interface InfoCardProps {
    avatar?: ImageMetadata;
    language?: string;
}

const NavigationHeader = ({
    language = DEFAULT_LANGUAGE,
    avatar = SITE_AVATAR,
}: InfoCardProps) => (
    <>
        <a href={getRelativeLocaleUrl(language, "/about")}>
            <Avatar image={avatar} size="30" />
        </a>

        <h1 className="hidden" lg="block text-center text-xl font-bold">
            {getTranslation(language).siteTitle}
        </h1>
    </>
);

export default NavigationHeader;
