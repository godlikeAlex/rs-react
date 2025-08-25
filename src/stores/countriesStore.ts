import { create } from "zustand";
import { countries } from "@/constants/countries";

interface CountryStore {
  countries: string[];
}

export const useCountryStore = create<CountryStore>(() => ({
  countries,
}));
