import { isValidOptionalColumn } from "@/helpers/isValidOptionalColumn";
import type { CountryList, OptionalCountryEntryData } from "@/types/Country";

const DOWNLOAD_URL = "/data/owid-co2-data.json";

export default class Co2Service {
  static async retrieveAllData() {
    const response = await fetch(DOWNLOAD_URL);

    if (response.ok) {
      const data: CountryList = await response.json();

      return data;
    }

    throw new Error("Error while download json");
  }

  static retrieveAllColumns(
    countryList: CountryList
  ): Array<keyof OptionalCountryEntryData> {
    const columns = new Set<keyof OptionalCountryEntryData>();

    for (const country of Object.values(countryList)) {
      country.data.forEach((entryData) => {
        for (const key in entryData) {
          if (isValidOptionalColumn(key)) {
            columns.add(key);
          }
        }
      });
    }

    return [...columns];
  }
}
