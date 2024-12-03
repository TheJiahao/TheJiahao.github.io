import { glob, type Loader, type LoaderContext } from "astro/loaders";
import { getLastModified } from "utils/getLastModified";

export const blogLoader = (): Loader => {
    const loader = glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/posts",
    });

    const wrapper = {
        ...loader,
        load: async (context: LoaderContext) => {
            await loader.load(context);
            const store = context.store;

            for (const entry of store.values()) {
                const path = entry.filePath;

                if (!path) {
                    throw Error(`Blog ${entry.id} missing path`);
                }

                entry.data.lastModified = getLastModified(path);
                store.set(entry);
            }
        },
    };

    return wrapper;
};
