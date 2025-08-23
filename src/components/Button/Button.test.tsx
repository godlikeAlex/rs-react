import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render with correct children", () => {
    expect.hasAssertions();

    const children = "Register Now";

    render(<Button>{children}</Button>);

    expect(screen.getByRole("button", { name: children })).toBeInTheDocument();
  });

  it("should render button primary variant", () => {
    expect.hasAssertions();

    const children = "Register Now";

    render(<Button variant="primary">{children}</Button>);

    expect(screen.getByRole("button", { name: children })).toHaveClass(
      "bg-violet-500 text-white"
    );
  });

  it("should render button ghost variant", () => {
    expect.hasAssertions();

    const children = "Register Now";

    render(<Button variant="ghost">{children}</Button>);

    expect(screen.getByRole("button", { name: children })).toHaveClass(
      "border-1 border-solid border-violet-700"
    );
  });
});
