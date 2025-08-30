export interface Country {
  iso_code?: string;
  data: CountryEntryData[];
}

export interface CountryEntryData {
  year: number;
  population: number;
  nitrous_oxide: number;
  nitrous_oxide_per_capita: number;
}

export type CountryList = Record<string, Country>;
