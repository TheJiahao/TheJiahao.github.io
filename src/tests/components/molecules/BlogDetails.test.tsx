import { render, screen } from "@testing-library/react";
import BlogDetails from "components/molecules/BlogDetails";
import { beforeEach, describe, expect, test } from "vitest";

describe("<BlogDetails/>", () => {
    describe("with date", () => {
        const date = "2024-01-01";
        let time: HTMLElement;
        beforeEach(() => {
            render(<BlogDetails title={"Something"} date={new Date(date)} />);
            time = screen.getByRole("time");
        });

        test("date is rendered", () => {
            expect(time).toBeVisible();
        });

        test("date is correct", () => {
            expect(time).toHaveAttribute("datetime", date);
            expect(time).toHaveTextContent(date);
        });
    });

    describe("without date", () => {
        beforeEach(() => {
            render(<BlogDetails title={"Something"} />);
        });

        test("date is not rendered", () => {
            expect(screen.queryByRole("time")).not.toBeInTheDocument();
        });
    });

    describe("with description", () => {
        const description = "This card describes how to write a blog";
        let descriptionElement: HTMLElement;

        beforeEach(() => {
            render(
                <BlogDetails title={"Something"} description={description} />,
            );
            descriptionElement = screen.getByRole("paragraph");
        });

        test("description is rendered", () => {
            expect(descriptionElement).toBeVisible();
        });

        test("description is correct", () => {
            expect(descriptionElement).toHaveTextContent(description);
        });
    });

    describe("without description", () => {
        beforeEach(() => {
            render(<BlogDetails title={"Something"} />);
        });

        test("description is not rendered", () => {
            expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
        });
    });

    describe("language selector is rendered", () => {
        test("when language and more than one languages are given", () => {
            render(
                <BlogDetails
                    title={"Something"}
                    language="zh-cn"
                    languages={["en", "zh-cn"]}
                />,
            );

            expect(screen.getByRole("combobox")).toBeVisible();
        });
    });

    describe("language selector is not rendered with", () => {
        test("no languages", () => {
            render(<BlogDetails title={"Something"} />);

            expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
        });

        test.each([
            ["zh-cn", undefined],
            [undefined, ["zh-cn", "en"]],
        ])("only language or languages", (language, languages) => {
            render(
                <BlogDetails
                    title={"Something"}
                    language={language}
                    languages={languages}
                />,
            );

            expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
        });

        test("only one language", () => {
            render(
                <BlogDetails
                    title={"Something"}
                    language="en"
                    languages={["en"]}
                />,
            );

            expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
        });
    });
});
