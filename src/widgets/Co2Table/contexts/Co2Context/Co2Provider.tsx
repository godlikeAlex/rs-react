import { use, type ReactNode } from "react";
import { Co2Context } from "./Co2Context";

import Co2Service from "@/services/Co2Service";

const retrieveAllData = Co2Service.retrieveAllData();

export default function Co2ContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const co2Data = use(retrieveAllData);
  const columns = Co2Service.retrieveAllColumns(co2Data);

  return (
    <Co2Context.Provider
      value={{
        countryList: co2Data,
        columns,
      }}
    >
      {children}
    </Co2Context.Provider>
  );
}
