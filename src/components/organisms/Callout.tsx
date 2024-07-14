import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { type PropsWithChildren } from "react";

interface CalloutProps extends PropsWithChildren {
    type: string;
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
        <Disclosure defaultOpen={open}>
            <DisclosureButton>{title}</DisclosureButton>
            <DisclosurePanel>{children}</DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
