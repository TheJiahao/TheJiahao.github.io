import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { type PropsWithChildren } from "react";

interface CalloutProps extends PropsWithChildren {
    type: "info" | "warning";
    title: string;
    collapsible?: boolean;
    open?: boolean;
}

const Callout = ({
    type,
    title,
    collapsible = false,
    open = true,
    children,
}: CalloutProps) => {
    return (
        <Disclosure defaultOpen={open} as="div" card p-lg>
            <DisclosureButton>{title}</DisclosureButton>
            <DisclosurePanel static={!collapsible}>{children}</DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
