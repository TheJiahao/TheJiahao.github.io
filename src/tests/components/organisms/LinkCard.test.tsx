import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import LinkCard from "../../../components/organisms/LinkCard";

describe("<LinkCard/>", () => {
    const url = "https://www.example.com/documentation";
    const title = "Documentation";
    const description = "Documentation of Example";
    const image = "https://www.example.com/favicon.ico";

    let link: HTMLElement;

    beforeEach(() => {
        render(<LinkCard {...{ url, title, description, image }} />);
        link = screen.getByRole("link");
    });

    test("is rendered", () => {
        expect(link).toBeVisible();
    });

    test("is valid", () => {
        expect(link).toHaveAttribute("href", url);
    });

    test("has title", () => {
        expect(screen.getByRole("heading")).toHaveTextContent(title);
    });

    test("has description", () => {
        expect(link).toHaveTextContent(description);
    });

    test("has icon", () => {
        expect(screen.getByRole("img")).toBeVisible();
    });
});
