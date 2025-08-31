import type {
  CountryEntryData,
  CountryList,
  CountryWithName,
} from "@/types/Country";

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
    { searchTerm }: { searchTerm?: string }
  ): CountryWithName[] {
    return Object.entries(countryList)
      .filter(([countryName]) => {
        let matchesSearch = true;

        if (searchTerm) {
          matchesSearch = countryName
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
        }

        return matchesSearch;
      })
      .map(([countryName, country]) => ({ name: countryName, ...country }));
  }
}
