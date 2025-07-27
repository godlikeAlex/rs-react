import { api } from "@/core/api";
import type { People } from "@/types/People";

export const BASE_URL = "https://swapi.py4e.com/api";

interface SearchResponse {
  count: number;
  next?: string;
  prev?: string;
  results: People[];
}

export default class StarWarsService {
  static async search(params: { search?: string; page?: string }) {
    const searchParams = new URLSearchParams(params);

    return api<SearchResponse>(`${BASE_URL}/people?${searchParams.toString()}`);
  }
}
