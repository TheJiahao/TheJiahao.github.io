import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import IconComponent from "components/atoms/IconComponent";
import { type PropsWithChildren } from "react";
import { LuAlertTriangle, LuChevronDown, LuInfo } from "react-icons/lu";

interface CalloutProps extends PropsWithChildren {
    type: "info" | "warning";
    title: string;
    collapsible?: boolean;
    open?: boolean;
}

const icons = {
    info: <LuInfo />,
    warning: <LuAlertTriangle />,
};

const Callout = ({
    type,
    title,
    collapsible = false,
    open = true,
    children,
}: CalloutProps) => {
    return (
        <Disclosure
            defaultOpen={open}
            as="div"
            className={`bg-${type}`}
            bg-opacity-10
            card
            p-lg
        >
            <DisclosureButton
                className="group"
                w-full
                flex
                justify-between
                items-center
            >
                <IconComponent icon={icons[type]} color={type}>
                    {title}
                </IconComponent>
                {collapsible && (
                    <LuChevronDown className="group-data-[open]:rotate-180 transition" />
                )}
            </DisclosureButton>
            <DisclosurePanel static={!collapsible}>{children}</DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
