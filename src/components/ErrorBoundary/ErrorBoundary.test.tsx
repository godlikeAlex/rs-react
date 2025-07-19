import { render, screen } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import ErrorBoundary from "./ErrorBoundary";
import { ErrorBoundaryTestButton } from "@/components";

describe("ErrorBoundary Component", () => {
  it("should reset error on button click", async () => {
    expect.hasAssertions();

    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});

    const user = userEvent.setup();

    render(
      <ErrorBoundary>
        <ErrorBoundaryTestButton />
      </ErrorBoundary>,
    );

    await user.click(screen.getByRole("button", { name: "Error Boundary" }));
    await user.click(screen.getByRole("button", { name: "Try Again" }));

    expect(
      screen.getByRole("button", { name: "Error Boundary" }),
    ).toBeInTheDocument();
  });
});
