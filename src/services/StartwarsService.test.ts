import { it, describe, vi, expect } from "vitest";
import * as apiModule from "@/core/api";
import StarWarsService, { BASE_URL } from "./StarwarsService";

vi.mock("@/core/api");

describe("StarwarsService", () => {
  it("should call api with correct searchTerm", async () => {
    expect.hasAssertions();

    const searchTerm = "Luke";

    const mockResponse = {
      count: 1,
      results: [{ name: "Luke Skywalker" }],
    };

    const apiMock = vi.spyOn(apiModule, "api").mockResolvedValue(mockResponse);

    const result = await StarWarsService.search({
      search: searchTerm,
      page: "1",
    });

    expect(apiMock).toHaveBeenCalledWith(
      `${BASE_URL}/people?search=${searchTerm}`
    );

    expect(result.results).toHaveLength(mockResponse.count);
  });
});
