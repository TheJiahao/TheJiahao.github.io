import type { Page } from "interfaces/Page";

/**
 * Prepared page for fuzzysort searching.
 */
interface PreparedPage extends Omit<Page, "description"> {
    description: Fuzzysort.Prepared;
}

export type { PreparedPage };
