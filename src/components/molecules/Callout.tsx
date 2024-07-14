import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import IconComponent from "components/atoms/IconComponent";
import { type PropsWithChildren } from "react";
import { LuAlertTriangle, LuInfo } from "react-icons/lu";

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
        <Disclosure defaultOpen={open} as="div" card p-lg>
            <DisclosureButton>
                <IconComponent icon={icons[type]}>{title}</IconComponent>
            </DisclosureButton>
            <DisclosurePanel static={!collapsible}>{children}</DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
