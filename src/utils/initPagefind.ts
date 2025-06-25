import type { Pagefind } from "interfaces/Pagefind";

export const initPagefind = async () => {
    const pagefindPath =
        import.meta.env.MODE === "development"
            ? "../../dist/pagefind/pagefind.js"
            : "/pagefind/pagefind.js";
    const pagefind = (await import(`${pagefindPath}?url`)) as Pagefind;
    await pagefind.init();

    return pagefind;
};
