import type { Page } from "interfaces/Page";

interface PreparedPage extends Omit<Page, "title" | "description"> {
    title: Fuzzysort.Prepared;
    description: Fuzzysort.Prepared;
}

export type { PreparedPage };
