import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchButton from "components/atoms/SearchButton";
import { beforeEach, describe, expect, test, vi } from "vitest";

describe("<SearchButton/>", () => {
    const onClick = vi.fn();

    beforeEach(() => {
        render(<SearchButton onClick={onClick} />);
    });

    test("calls onClick when clicked", async () => {
        const user = userEvent.setup();
        const button = screen.getByRole("button");

        await user.click(button);

        expect(onClick).toHaveBeenCalledOnce();
    });
});
