import Avatar from "components/atoms/Avatar";
import { DEFAULT_LANGUAGE, SITE_AVATAR } from "config";
import { getTranslation } from "utils/getTranslation";

interface InfoCardProps {
    avatar?: ImageMetadata;
    language?: string;
}

const InfoCard = ({
    language = DEFAULT_LANGUAGE,
    avatar = SITE_AVATAR,
}: InfoCardProps) => (
    <div flex="~ col" items-center p-2>
        <Avatar image={avatar} size="30" />

        <h1 className="hidden" lg="block text-center text-xl font-bold">
            {getTranslation(language).siteTitle}
        </h1>
    </div>
);

export default InfoCard;
