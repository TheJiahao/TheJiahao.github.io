import type { CollectionEntry } from "astro:content";
import { execSync } from "child_process";

export const getLastModified = ({
    collection,
    id,
}: CollectionEntry<"posts">): Date => {
    const filePath = `src/content/${collection}/${id}`;
    const result = new Date(
        execSync(`git log -1 --pretty="format:%cI" "${filePath}"`).toString(),
    );

    return result;
};
