import { Suspense } from "react";

import Co2ContextProvider from "@/widgets/Co2Table/contexts/Co2Provider";

import { Spinner } from "@/components";
import { Table, YearSelect } from "./components";
import clsx from "clsx";

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
        <div className={clsx("mt-10 mb-4", "flex justify-end")}>
          <YearSelect />
        </div>
        <Table />
      </Co2ContextProvider>
    </Suspense>
  );
}
