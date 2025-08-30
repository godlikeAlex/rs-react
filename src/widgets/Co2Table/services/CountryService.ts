import type { CountryEntryData, CountryList } from "@/types/Country";

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
}
