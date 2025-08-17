import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { it, describe, expect, vi, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { mockSearch } from "@/services/__mocks__/StarwarsService";
import { SEARCH_TERM } from "@/constants/storageKeys";
import { renderWithProviders } from "@/tests/utils/render";

vi.mock("@/services/StarwarsService");

const MainPage = () => <></>;

describe.todo("App Compoment", () => {
  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("should save searchTerm to localstorage onSubmit", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const newValue = "Example People";

    renderWithProviders(<MainPage />);

    waitForElementToBeRemoved(() => screen.getByRole("status"));

    await user.type(screen.getByRole("textbox"), newValue);
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockSearch).toHaveBeenCalledWith({ search: newValue, page: "1" });

    await waitFor(() =>
      expect(localStorage.getItem(SEARCH_TERM)).equals(JSON.stringify(newValue))
    );
  });

  it("should call api on search submit", async () => {
    expect.hasAssertions();

    const user = userEvent.setup();

    const newValue = "Luke";

    renderWithProviders(<MainPage />);

    waitForElementToBeRemoved(() => screen.getByRole("status"));

    await user.type(screen.getByRole("textbox"), newValue);
    await user.click(screen.getByRole("button", { name: "Search" }));

    expect(mockSearch).toHaveBeenCalledWith({ search: newValue, page: "1" });
  });

  it("should show error alert when api throws error", async () => {
    expect.hasAssertions();

    mockSearch.mockImplementationOnce(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("API ERROR")), 100)
        )
    );

    renderWithProviders(<MainPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should load searchTerm from local storage", async () => {
    expect.hasAssertions();

    const initialLocalStorageValue = "Luke";

    localStorage.setItem(SEARCH_TERM, JSON.stringify(initialLocalStorageValue));

    renderWithProviders(<MainPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("textbox")).toHaveValue(initialLocalStorageValue);
    expect(mockSearch).toHaveBeenCalledWith({
      search: initialLocalStorageValue,
      page: "1",
    });
  });
});
