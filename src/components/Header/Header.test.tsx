import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";
import { renderWithProviders } from "@/tests/utils/render";
import { MemoryRouter } from "react-router";

describe("Header Component", () => {
  it("should render correct menu items", () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  it("should active menu on target page", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /home/i })).toHaveClass(
      "text-blue-700 underline"
    );
  });
});
