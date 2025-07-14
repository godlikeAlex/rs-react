import { api } from "../core/api";
import type { People } from "../types/People";

interface SearchResponse {
  count: number;
  next?: string;
  prev?: string;
  results: People[];
}

export default class StarWarsService {
  static async search(searchTerm: string) {
    return api<SearchResponse>(
      `https://swapi.py4e.com/api/people?search=${searchTerm}`,
    );
  }
}
