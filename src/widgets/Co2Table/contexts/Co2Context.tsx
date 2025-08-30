import type { CountryList } from "@/types/Country";
import { createContext, use } from "react";

export const Co2Context = createContext<CountryList>({});

export function useCo2Data() {
  return use(Co2Context);
}
