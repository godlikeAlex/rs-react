import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Header from "./Header";
import { queryClientTest, renderWithProviders } from "@/tests/utils/render";
import userEvent from "@testing-library/user-event";

describe("Header Component", () => {
  it("should render correct menu items", () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  });

  it.todo("should active menu on target page", () => {
    renderWithProviders(<Header />);

    expect(screen.getByRole("link", { name: /home/i })).toHaveClass(
      "text-blue-700 underline"
    );
  });

  it.todo("should calls invalidate query on click refetch all", async () => {
    const user = userEvent.setup();

    const invalidateQueriesSpy = vi.spyOn(queryClientTest, "invalidateQueries");

    renderWithProviders(<Header />);

    await user.click(screen.getByRole("button", { name: /Refetch All/i }));

    expect(invalidateQueriesSpy).toHaveBeenCalled();
  });
});
