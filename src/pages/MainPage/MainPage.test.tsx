import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

describe("Select Component", () => {
  it("should render heading", () => {
    render(<MainPage />);

    expect(
      screen.getByRole("heading", { name: "React Forms" })
    ).toBeInTheDocument();
  });

  it("should render button", () => {
    render(<MainPage />);

    expect(
      screen.getByRole("button", { name: "Controlled Form" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Uncontrolled Form" })
    ).toBeInTheDocument();
  });
});
