import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Button from "./Button";

describe("button Component", () => {
  it("should render with correct children", () => {
    expect.hasAssertions();

    const buttonLabel = "Click";

    render(<Button>{buttonLabel}</Button>);

    expect(
      screen.getByRole("button", { name: buttonLabel }),
    ).toBeInTheDocument();
  });

  it("should render primary variant", () => {
    expect.hasAssertions();

    render(<Button variant="primary">Example</Button>);

    expect(screen.getByRole("button")).toHaveClass(
      "bg-blue-700",
      "hover:bg-blue-800",
    );
  });

  it("should render danger variant", () => {
    expect.hasAssertions();

    render(<Button variant="danger">Example</Button>);

    expect(screen.getByRole("button")).toHaveClass(
      "bg-red-700",
      "hover:bg-red-800",
    );
  });

  it("should disable the button when props 'disabled' equals true", () => {
    expect.hasAssertions();

    render(<Button disabled>Example</Button>);

    expect(screen.getByRole("button")).toHaveProperty("disabled");
  });

  it("should apply correct classes when disabled", () => {
    expect.hasAssertions();

    render(<Button disabled>Example</Button>);

    expect(screen.getByRole("button")).toHaveClass(
      "bg-gray-400",
      "hover:bg-gray-400",
    );
  });

  it("should apply custom classes", () => {
    expect.hasAssertions();

    const customClass = "example-class";

    render(<Button className={customClass}>Example</Button>);

    expect(screen.getByRole("button")).toHaveClass(customClass);
  });
});
