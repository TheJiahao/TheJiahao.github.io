import IconLink, { type IconLinkProps } from "components/atoms/IconLink";

type SocialLinkProps = Pick<IconLinkProps, "url" | "icon" | "label">;

const SocialLink = ({ url, icon, label }: SocialLinkProps) => (
    <IconLink
        label={label}
        rel="me"
        url={url}
        icon={
            <icon.type
                className="color-secondary size-10"
                role="presentation"
                focusable={false}
            />
        }
        onlyIcon={true}
    />
);

export default SocialLink;
export type { SocialLinkProps };
