import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { type PropsWithChildren } from "react";
import { LuChevronDown, LuInfo, LuTriangleAlert } from "react-icons/lu";

interface CalloutProps extends PropsWithChildren {
    type: "info" | "warning";
    title: string;
    collapsible?: boolean;
    open?: boolean;
}

const icons = {
    info: <LuInfo />,
    warning: <LuTriangleAlert />,
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
            my-5
        >
            <DisclosureButton
                className="group"
                w-full
                flex
                justify-between
                items-center
                hover="brightness-80"
                active="brightness-70"
                dark="hover:brightness-120 active:brightness-140"
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
                    <LuChevronDown className="transition group-data-[open]:rotate-180" />
                )}
            </DisclosureButton>
            <DisclosurePanel static={!collapsible}>{children}</DisclosurePanel>
        </Disclosure>
    );
};

export default Callout;
