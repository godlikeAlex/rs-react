import { Suspense } from "react";

import Co2ContextProvider from "@/widgets/Co2Table/contexts/Co2Provider";

import { Spinner } from "@/components";
import { Table } from "./components";

export default function Co2Table() {
  const fallbackSpinner = (
    <Spinner
      title="Please wait, data is loading."
      description=" This may take up to 3 minutes."
    />
  );

  return (
    <Suspense fallback={fallbackSpinner}>
      <Co2ContextProvider>
        <Table />
      </Co2ContextProvider>
    </Suspense>
  );
}
