import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import LinkCard from "../../components/LinkCard";

describe("<LinkCard/>", () => {
    const url = "https://www.example.com/documentation";
    const title = "Documentation";
    const description = "Documentation of Example";
    const icon = "i-ui-library-user";

    let link: HTMLElement;

    beforeEach(() => {
        render(<LinkCard {...{ url, title, description, icon }} />);
        link = screen.getByRole("link");
    });

    test("is rendered", () => {
        expect(link).toBeInTheDocument();
    });

    test("is valid", async () => {
        expect(link).toHaveAttribute("href", url);
    });

    test("has title", () => {
        expect(screen.getByRole("heading")).toHaveTextContent(title);
    });

    test("has description", () => {
        expect(link).toHaveTextContent(description);
    });

    test("has icon", () => {
        expect(screen.getByRole("img")).toBeInTheDocument();
    });
});
