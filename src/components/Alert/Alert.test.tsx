import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Alert from "./Alert";

describe("Alert Component", () => {
  it("should render with correct children", () => {
    expect.hasAssertions();

    const alertMessage = "Thank you.";

    render(<Alert variant="success">{alertMessage}</Alert>);

    expect(screen.getByText(alertMessage)).toBeInTheDocument();
  });

  it("should render success variant", () => {
    expect.hasAssertions();

    render(<Alert variant="success">example</Alert>);

    expect(screen.getByRole("alert")).toHaveClass(
      "text-green-600",
      "dark:text-green-400"
    );
  });

  it("should render danger variant", () => {
    expect.hasAssertions();

    render(<Alert variant="danger">example</Alert>);

    expect(screen.getByRole("alert")).toHaveClass(
      "text-red-800",
      "dark:text-red-400"
    );
  });
});
