import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ErrorBoundaryTestButton from "./ErrorBoundaryTestButton";
import userEvent from "@testing-library/user-event";
import { ErrorBoundary } from "@/components";

describe("ErrorBoundaryTestButton Component", () => {
  it("should render button", () => {
    expect.hasAssertions();

    render(<ErrorBoundaryTestButton />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should throw render error when click button", async () => {
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

    await user.click(screen.getByRole("button"));

    expect(
      screen.getByRole("heading", {
        name: "An unexpected error has occurred.",
      }),
    ).toBeInTheDocument();
  });
});
