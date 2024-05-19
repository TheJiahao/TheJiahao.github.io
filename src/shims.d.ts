import type {
    AttributifyAttributes,
    PseudoPrefix,
} from "unocss/preset-attributify";

type customAttributes = "prose" | "card";
type customAttributifyNames<Prefix extends string = ""> =
    | `${Prefix}${customAttributes}`
    | `${Prefix}${PseudoPrefix}:${customAttributes}`;

type customAttribifyAttributes = Partial<
    Record<customAttributifyNames, string | boolean>
>;

declare module "react" {
    interface HTMLAttributes
        extends AttributifyAttributes,
            customAttribifyAttributes {}
}

declare global {
    namespace astroHTML.JSX {
        interface HTMLAttributes
            extends AttributifyAttributes,
                customAttribifyAttributes {}
    }
}
