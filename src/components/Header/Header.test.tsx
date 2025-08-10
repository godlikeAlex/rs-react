import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";
import {
  queryClientTest,
  renderWithProviders,
  withQueryClient,
} from "@/tests/utils/render";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("Header Component", () => {
  it("should render correct menu items", () => {
    renderWithProviders(withQueryClient(<Header />));

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  it("should active menu on target page", () => {
    render(
      withQueryClient(
        <MemoryRouter initialEntries={["/home"]}>
          <Header />
        </MemoryRouter>
      )
    );

    expect(screen.getByRole("link", { name: /home/i })).toHaveClass(
      "text-blue-700 underline"
    );
  });

  it("should calls invalidate query on click refetch all", async () => {
    const user = userEvent.setup();

    const invalidateQueriesSpy = vi.spyOn(queryClientTest, "invalidateQueries");

    render(
      withQueryClient(
        <MemoryRouter initialEntries={["/home"]}>
          <Header />
        </MemoryRouter>
      )
    );

    await user.click(screen.getByRole("button", { name: /Refetch All/i }));

    expect(invalidateQueriesSpy).toHaveBeenCalled();
  });
});
