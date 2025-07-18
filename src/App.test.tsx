import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { it, describe, expect, vi, afterEach } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { mockSearch } from "@/services/__mocks__/StarwarsService";

vi.mock("@/services/StarwarsService");

describe("App Compoment", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("should save searchTerm to localstorage onSubmit and call Service", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const newValue = "Example People";

    render(<App />);

    waitForElementToBeRemoved(() => screen.getByRole("status"));

    await user.type(screen.getByRole("textbox"), newValue);
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockSearch).lastCalledWith(newValue);

    await waitFor(() =>
      expect(localStorage.getItem("searchTerm")).equals(newValue),
    );
  });

  it("should show error alert when api throws error", async () => {
    expect.hasAssertions();

    mockSearch.mockImplementationOnce(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("API ERROR")), 100),
        ),
    );

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should load searchTerm from local storage", async () => {
    expect.hasAssertions();

    const initialLocalStorageValue = "Luke";

    localStorage.setItem("searchTerm", initialLocalStorageValue);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("textbox")).toHaveValue(initialLocalStorageValue);
    expect(mockSearch).toHaveBeenCalledWith(initialLocalStorageValue);
  });
});
