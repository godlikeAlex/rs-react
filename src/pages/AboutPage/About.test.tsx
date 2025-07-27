import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./AboutPage";

describe("About Page", () => {
  it("should render headings", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("should render github link and rsschool link", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("link", { name: /my github/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /rs school react course/i })
    ).toBeInTheDocument();
  });
});
