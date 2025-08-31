import type { CountryList, OptionalCountryEntryData } from "@/types/Country";
import { createContext, use } from "react";

export const Co2Context = createContext<{
  countryList: CountryList;
  columns: Array<keyof OptionalCountryEntryData>;
}>({
  countryList: {},
  columns: [],
});

export function useCo2Data() {
  return use(Co2Context);
}
