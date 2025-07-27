import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router";

describe("App routing", () => {
  it("should render MainPage on /home", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByPlaceholderText(/Star Wars Person 🌚/i)
    ).toBeInTheDocument();
  });

  it("should render About on /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", { name: "About Me" })
    ).toBeInTheDocument();
  });
});
