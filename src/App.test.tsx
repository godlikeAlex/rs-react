import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router";
import { withQueryClient } from "./tests/utils/render";

describe("App routing", () => {
  it("should render MainPage on /home", () => {
    render(
      withQueryClient(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>
      )
    );
    expect(
      screen.getByPlaceholderText(/Star Wars Person 🌚/i)
    ).toBeInTheDocument();
  });

  it("should render About on /about", () => {
    render(
      withQueryClient(
        <MemoryRouter initialEntries={["/about"]}>
          <App />
        </MemoryRouter>
      )
    );
    expect(
      screen.getByRole("heading", { name: "About Me" })
    ).toBeInTheDocument();
  });
});
