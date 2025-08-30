import { use, type ReactNode } from "react";
import { Co2Context } from "@/widgets/Co2Table/contexts/Co2Context";

import Co2Service from "@/services/Co2Service";

const retrieveAllData = Co2Service.retrieveAllData();

export default function Co2ContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const co2Data = use(retrieveAllData);

  return <Co2Context.Provider value={co2Data}>{children}</Co2Context.Provider>;
}
