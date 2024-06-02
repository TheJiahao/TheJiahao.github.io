import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR } from "config";

interface NavigationToolBarProps {
    avatar?: ImageMetadata;
}

const NavigationToolBar = ({
    avatar = SITE_AVATAR,
}: NavigationToolBarProps) => (
    <div grid grid-cols-3 items-center>
        <Avatar image={avatar} size="15" />

        <div />

        <div className="i-ic-round-menu" justify-self-end size-15 lg="hidden" />
    </div>
);

export default NavigationToolBar;
