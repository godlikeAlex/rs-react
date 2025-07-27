import { renderWithProviders } from "@/tests/utils/render";
import { describe, expect, it } from "vitest";
import MainLayout from "./MainLayout";
import { screen } from "@testing-library/dom";

describe("Main Layout component", () => {
  it("should render header", () => {
    renderWithProviders(<MainLayout />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
