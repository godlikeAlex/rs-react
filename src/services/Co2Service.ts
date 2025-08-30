import type { CountryList } from "@/types/Country";

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
}
