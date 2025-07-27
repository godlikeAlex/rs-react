import type { People } from "@/types/People";
import { vi } from "vitest";

const mockPeople: People = {
  id: "1",
  name: "Luke Skywalker",
  url: "people/1",
  height: "123",
  birth_year: "2000",
  gender: "M",
  mass: "130",
};

const mockSearch = vi.fn().mockResolvedValue({
  count: 1,
  next: null,
  prev: null,
  results: [mockPeople],
});
const mockGetPeople = vi.fn().mockResolvedValue({
  ...mockPeople,
});

export default {
  search: mockSearch,
  getPeople: mockGetPeople,
};

export { mockSearch, mockGetPeople, mockPeople };
