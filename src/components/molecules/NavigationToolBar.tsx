import Avatar from "components/atoms/Avatar";
import { SITE_AVATAR } from "config";
import type { MouseEventHandler } from "react";

interface NavigationToolBarProps {
    handleExpand: MouseEventHandler<HTMLButtonElement>;
    avatar?: ImageMetadata;
}

const NavigationToolBar = ({
    handleExpand,
    avatar = SITE_AVATAR,
}: NavigationToolBarProps) => (
    <div grid grid-cols-3 items-center>
        <Avatar image={avatar} size="15" />

        <div />

        <button
            className="i-ic-round-menu"
            onClick={handleExpand}
            justify-self-end
            size-15
            lg="hidden"
        />
    </div>
);

export default NavigationToolBar;
