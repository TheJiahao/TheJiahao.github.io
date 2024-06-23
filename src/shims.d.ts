import type {
    AttributifyAttributes,
    PseudoPrefix,
} from "unocss/preset-attributify";

type customAttributes = "prose" | "card" | "grid-sidebars";
type customAttributifyNames<Prefix extends string = ""> =
    | `${Prefix}${customAttributes}`
    | `${Prefix}${PseudoPrefix}:${customAttributes}`;

type CustomAttribifyAttributes = AttributifyAttributes &
    Partial<Record<customAttributifyNames, string | boolean>>;

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "react" {
    interface HTMLAttributes extends CustomAttribifyAttributes {}
}

declare global {
    namespace astroHTML.JSX {
        interface HTMLAttributes extends CustomAttribifyAttributes {}
    }
}
