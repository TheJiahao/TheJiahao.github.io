import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuButton from "components/atoms/MenuButton";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<MenuButton/>", () => {
    const onClick = vi.fn();

    beforeEach(() => {
        render(<MenuButton onClick={onClick} />);
    });

    test("calls onClick when clicked", async () => {
        const user = userEvent.setup();
        const button = screen.getByRole("button");

        await user.click(button);

        expect(onClick).toHaveBeenCalledOnce();
    });
});
