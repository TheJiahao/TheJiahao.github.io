import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
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
                <span
                    className={`text-${type}`}
                    text-lg
                    font-bold
                    flex
                    items-center
                    gap-4
                >
                    {icons[type]}
                    {title}
                </span>

                {collapsible && (
                    <LuChevronDown className="group-data-[open]:rotate-180 transition" />
                )}
            </DisclosureButton>
            <DisclosurePanel
                static={!collapsible}
                transition={true}
                unmount={false}
                duration-200
                ease-in-out
                origin-top
                className="transition-all data-[leave]:scale-y-0 data-[leave]:overflow-hidden"
            >
                {children}
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
