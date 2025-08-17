import { renderWithProviders } from "@/tests/utils/render";
import { describe, expect, it, vi } from "vitest";
import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import {
  mockGetPeople,
  mockPeople,
} from "@/services/__mocks__/StarwarsService";
import { beforeEach } from "node:test";

vi.mock("@/services/StarwarsService");

const DetailPage = () => <></>;

describe.todo("Detail Page", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should show loading while call api", () => {
    renderWithProviders(<DetailPage />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(mockGetPeople).toHaveBeenCalled();
  });

  it("should show error when service throw error", async () => {
    mockGetPeople.mockImplementationOnce(
      () =>
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("API ERROR")), 100)
        )
    );
    renderWithProviders(<DetailPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should render details", async () => {
    renderWithProviders(<DetailPage />);

    await waitForElementToBeRemoved(() => screen.getByRole("status"));

    expect(screen.getByText(mockPeople.name)).toBeInTheDocument();
    expect(screen.getByText(mockPeople.gender)).toBeInTheDocument();
    expect(screen.getByText(mockPeople.height)).toBeInTheDocument();
    expect(screen.getByText(mockPeople.mass)).toBeInTheDocument();
  });
});
