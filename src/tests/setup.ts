import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

vi.mock("utils/initPagefind", () => ({
    initPagefind: vi.fn().mockResolvedValue(undefined),
}));

beforeAll(() => {
    const ResizeObserverMock = vi.fn(
        class {
            observe = vi.fn();
            unobserve = vi.fn();
            disconnect = vi.fn();
        },
    );

    const IntersectionObserverMock = vi.fn(
        class {
            disconnect = vi.fn();
            observe = vi.fn();
            takeRecords = vi.fn();
            unobserve = vi.fn();
        },
    );

    vi.stubGlobal("ResizeObserver", ResizeObserverMock);
    vi.stubGlobal(`IntersectionObserver`, IntersectionObserverMock);
});

afterEach(() => {
    cleanup();
});
