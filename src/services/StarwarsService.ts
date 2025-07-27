import { api } from "@/core/api";
import type { People } from "@/types/People";

export const BASE_URL = "https://swapi.py4e.com/api";

interface SearchResponse {
  count: number;
  next?: string;
  prev?: string;
  results: Omit<People, "id">[];
}

export default class StarWarsService {
  static async search(params: { search?: string; page?: string }) {
    const searchParams = new URLSearchParams(params);

    const response = await api<SearchResponse>(
      `${BASE_URL}/people?${searchParams.toString()}`
    );

    return {
      ...response,
      results: response.results.map(this.extractPersonWithID),
    };
  }

  static async getPeople(peopleID: string) {
    return api<People>(`${BASE_URL}/people/${peopleID}`);
  }

  private static extractPersonWithID(people: Omit<People, "id">): People {
    const result = people.url.match(/\/(\d+)\/?$/);
    const peopleID = result?.[1] ?? "";

    return {
      ...people,
      id: peopleID,
    };
  }
}
