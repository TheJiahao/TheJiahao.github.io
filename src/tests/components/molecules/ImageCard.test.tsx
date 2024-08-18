import { render, screen } from "@testing-library/react";
import ImageCard from "components/molecules/ImageCard";
import { beforeEach, describe, expect, test } from "vitest";

describe("<ImageCard/>", () => {
    const title = "How to write unit tests for Astro components?";
    const description =
        "This blog post will teach you how to write unit tests for Astro components.";
    const url = "astro-unit-tests";
    const date = "2024-05-01";

    describe("with date", () => {
        let time: HTMLElement;

        beforeEach(() => {
            render(<ImageCard title={title} url={url} date={new Date(date)} />);
            time = screen.getByRole("time");
        });

        test("date is rendered", () => {
            expect(time).toBeVisible();
        });

        test("date is correct", () => {
            expect(time).toHaveAttribute("datetime", date);
            expect(time).toHaveTextContent(date);
        });

        test("has title", () => {
            expect(screen.getByRole("heading")).toHaveTextContent(title);
        });

        test("has link", () => {
            expect(screen.getByRole("link")).toHaveAttribute("href");
        });
    });

    describe("with description", () => {
        beforeEach(() => {
            render(
                <ImageCard
                    title={title}
                    url={url}
                    date={new Date(date)}
                    description={description}
                />,
            );
        });

        test("has description", () => {
            expect(screen.getByText(description)).toBeVisible();
        });
    });

    describe("without date", () => {
        beforeEach(() => {
            render(<ImageCard title={"Something"} url={url} />);
        });

        test("date is not rendered", () => {
            expect(screen.queryByRole("time")).not.toBeInTheDocument();
        });
    });
});
