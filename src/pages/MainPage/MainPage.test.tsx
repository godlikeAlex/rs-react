import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { it, describe, expect, vi, afterEach } from "vitest";
import MainPage from "./MainPage";
import userEvent from "@testing-library/user-event";
import { mockSearch } from "@/services/__mocks__/StarwarsService";
import { SEARCH_TERM } from "@/constants/storageKeys";

vi.mock("@/services/StarwarsService");

describe("App Compoment", () => {
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should save searchTerm to localstorage onSubmit", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const newValue = "Example People";

    render(<MainPage />);

    waitForElementToBeRemoved(() => screen.getByRole("status"));

    await user.type(screen.getByRole("textbox"), newValue);
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockSearch).toHaveBeenCalledWith(newValue);

    await waitFor(() =>
      expect(localStorage.getItem(SEARCH_TERM)).equals(JSON.stringify(newValue))
    );
  });

  it("should call api on search submit", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const newValue = "Luke";

    render(<MainPage />);

    waitForElementToBeRemoved(() => screen.getByRole("status"));

    await user.type(screen.getByRole("textbox"), newValue);
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockSearch).toHaveBeenCalledWith(newValue);
  });

  it("should show error alert when api throws error", async () => {
    expect.hasAssertions();

    mockSearch.mockImplementationOnce(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("API ERROR")), 100)
        )
    );

    render(<MainPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should load searchTerm from local storage", async () => {
    expect.hasAssertions();

    const initialLocalStorageValue = "Luke";

    localStorage.setItem(SEARCH_TERM, JSON.stringify(initialLocalStorageValue));

    render(<MainPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("textbox")).toHaveValue(initialLocalStorageValue);
    expect(mockSearch).toHaveBeenCalledWith(initialLocalStorageValue);
  });
});
