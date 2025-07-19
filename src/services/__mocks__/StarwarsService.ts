import { vi } from "vitest";

const mockSearch = vi.fn().mockResolvedValue({
  count: 1,
  next: null,
  prev: null,
  results: [{ name: "Luke Skywalker" }],
});

export default {
  search: mockSearch,
};

export { mockSearch };
