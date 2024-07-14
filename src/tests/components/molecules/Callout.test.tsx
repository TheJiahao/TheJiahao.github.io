import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Callout from "components/molecules/Callout";
import { beforeEach, describe, expect, test } from "vitest";

describe("<Callout/>", () => {
    const title = "Click me!";
    const content = "Some secrets";

    describe("when collapsible", () => {
        beforeEach(() => {
            render(
                <Callout type="info" title={title} collapsible open>
                    {content}
                </Callout>,
            );
        });

        test("shows title", () => {
            expect(
                screen.getByRole("button", { name: title }),
            ).toBeInTheDocument();
        });

        test("clicking title collapses content", async () => {
            const button = screen.getByRole("button", { name: title });
            const user = userEvent.setup();

            expect(screen.getByText(content)).toBeVisible();

            await user.click(button);

            await waitFor(() => {
                expect(screen.queryByText(content)).not.toBeInTheDocument();
            });
        });
    });

    describe("when not collapsible", () => {
        describe.each([
            ["open", true],
            ["open", false],
        ])("%s=%o", (_, open) => {
            beforeEach(() => {
                render(
                    <Callout
                        type="info"
                        title={title}
                        collapsible={false}
                        open={open}
                    >
                        {content}
                    </Callout>,
                );
            });

            test("shows title", () => {
                expect(
                    screen.getByRole("button", { name: title }),
                ).toBeInTheDocument();
            });

            test("shows content", () => {
                expect(screen.getByText(content)).toBeVisible();
            });

            test("clicking has no effect", async () => {
                const button = screen.getByRole("button", { name: title });
                const user = userEvent.setup();

                expect(screen.getByText(content)).toBeVisible();

                await user.click(button);

                expect(screen.getByText(content)).toBeVisible();
            });
        });
    });
});
