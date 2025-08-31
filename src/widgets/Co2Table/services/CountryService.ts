import {
  type CountryEntryData,
  type CountryList,
  type CountryWithName,
} from "@/types/Country";

export const sortOptions = [
  "name.asc",
  "name.desc",
  "population.asc",
  "population.desc",
] as const;

export type SortOption = (typeof sortOptions)[number];

export function isSortOption(value: string): value is SortOption {
  return (sortOptions as readonly string[]).includes(value);
}

export default class CountryService {
  static getAvailableYears(countryList: CountryList) {
    const years = new Set<number>();

    Object.values(countryList).forEach((country) => {
      country.data.forEach((countryEntries) => years.add(countryEntries.year));
    });

    return years;
  }

  static retrieveEntryData(entiresData: CountryEntryData[], year?: number) {
    if (!year) return entiresData.at(-1);

    return entiresData.find((entryData) => entryData.year === year);
  }

  static filterCountries(
    countryList: CountryList,
    {
      searchTerm,
      sort,
      selectedYear,
    }: { searchTerm?: string; sort: SortOption; selectedYear?: number }
  ): CountryWithName[] {
    return Object.entries(countryList)
      .map(([countryName, country]) => ({ name: countryName, ...country }))
      .sort((a, b) => {
        const dataFromA = CountryService.retrieveEntryData(
          a.data,
          selectedYear
        );
        const dataFromB = CountryService.retrieveEntryData(
          b.data,
          selectedYear
        );

        switch (sort) {
          case "name.asc":
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
          case "name.desc":
            return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
          case "population.asc":
            if (!dataFromA || !dataFromB) return 1;

            return dataFromA.population - dataFromB.population;
          case "population.desc":
            if (!dataFromA || !dataFromB) return 1;

            return dataFromB.population - dataFromA.population;
        }
      })
      .filter((country) => {
        let matchesSearch = true;

        if (searchTerm) {
          matchesSearch = country.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
        }

        return matchesSearch;
      });
  }
}
