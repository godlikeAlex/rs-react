import type { CountryList } from "@/types/Country";

export default class CountryService {
  static getAvailableYears(countryList: CountryList) {
    const years = new Set<number>();

    Object.values(countryList).forEach((country) => {
      country.data.forEach((countryEntries) => years.add(countryEntries.year));
    });

    return years;
  }
}
