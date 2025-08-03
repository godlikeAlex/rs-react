import { afterEach, describe, expect, it } from "vitest";
import ThemeProvider from "./ThemeContextProvider";
import ThemeContext from "./ThemeContext";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Theme Provider Component", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("should get initial theme from localstorage", () => {
    const theme = "dark";
    localStorage.setItem("theme", JSON.stringify(theme));

    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => <h2>{theme}</h2>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    expect(screen.getByText("dark"));
  });

  it("should toggle theme", async () => {
    const theme = "dark";
    localStorage.setItem("theme", JSON.stringify(theme));

    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <button onClick={toggleTheme}>{theme}</button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );

    await user.click(screen.getByRole("button"));

    expect(screen.getByText("light"));
  });
});
