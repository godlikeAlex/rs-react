import { describe, it, expect, vi, beforeEach } from "vitest";
import { api } from "./api";

describe("api", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return parsed JSON when response success", async () => {
    const mockData = { example: "success" };

    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData),
        } as Response)
      )
    );

    const data = await api<typeof mockData>("/test");
    expect(data).toEqual(mockData);
  });

  it("should throw error when response is not sucess", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: false,
          statusText: "Not Found",
        } as Response)
      )
    );

    await expect(api("/not-found")).rejects.toThrow("Not Found");
  });
});
