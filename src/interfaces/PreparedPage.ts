import type { Page } from "interfaces/Page";

/**
 * Prepared page for fuzzysort searching.
 */
interface PreparedPage extends Omit<Page, "title" | "description"> {
    title: Fuzzysort.Prepared;
    description: Fuzzysort.Prepared;
}

export type { PreparedPage };
