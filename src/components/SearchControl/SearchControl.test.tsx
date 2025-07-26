import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import SearchControl from "./SearchControl";
import userEvent from "@testing-library/user-event";

const searchControlMock = () => ({
  onSearch: vi.fn(),
  defaultValue: "search term",
  placeholder: "Mock Input",
});

describe("SearchControl Component", () => {
  it("should render input and button", () => {
    expect.hasAssertions();

    const mockedProps = searchControlMock();

    render(<SearchControl {...mockedProps} />);

    expect(
      screen.getByPlaceholderText(mockedProps.placeholder)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should call onSearch when submit", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const mockedProps = searchControlMock();

    render(<SearchControl {...mockedProps} />);

    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockedProps.onSearch).toHaveBeenCalled();
  });

  it("should not call onSearch when disabled is true", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const mockedProps = searchControlMock();

    render(<SearchControl {...mockedProps} disabled />);

    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockedProps.onSearch).not.toHaveBeenCalled();
  });
});
