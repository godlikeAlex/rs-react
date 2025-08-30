import { createContext, use } from "react";

export const Co2Context = createContext(null);

export function useCo2Data() {
  return use(Co2Context);
}
