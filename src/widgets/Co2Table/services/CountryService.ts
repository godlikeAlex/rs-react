import {
  type CountryEntryData,
  type CountryList,
  type CountryWithName,
} from "@/types/Country";
import type { SortColumn } from "../contexts/TableContext/tableReducer";

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
    }: { searchTerm?: string; sort: SortColumn; selectedYear?: number }
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

        if (sort.name === "name") {
          if (sort.direction === "asc") {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
          } else {
            return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
          }
        }

        if (sort.name === "iso_code") {
          if (!a.iso_code || !b.iso_code) return 1;

          if (sort.direction === "asc") {
            return a.iso_code > b.iso_code
              ? 1
              : a.iso_code < b.iso_code
                ? -1
                : 0;
          } else {
            return a.iso_code < b.iso_code
              ? 1
              : a.iso_code > b.iso_code
                ? -1
                : 0;
          }
        }

        if (sort.direction === "asc") {
          if (!dataFromA || !dataFromB) return 1;

          const sortA = dataFromA[sort.name];
          const sortB = dataFromB[sort.name];

          if (!sortA || !sortB) return 1;

          return sortA - sortB;
        } else {
          if (!dataFromA || !dataFromB) return 1;

          const sortA = dataFromA[sort.name];
          const sortB = dataFromB[sort.name];

          if (!sortA || !sortB) return 1;

          return sortB - sortA;
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
