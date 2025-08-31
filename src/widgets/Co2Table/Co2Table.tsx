import { Suspense } from "react";
import clsx from "clsx";

import { Co2ContextProvider } from "@/widgets/Co2Table/contexts/Co2Context";
import { TableContextProvider } from "@/widgets/Co2Table/contexts/TableContext";

import { Spinner } from "@/components";
import { Search, Table, YearSelect } from "./components";

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
        <TableContextProvider>
          <div className={clsx("mt-10 mb-4", "flex justify-end gap-3")}>
            <Search />

            <YearSelect />
          </div>
          <Table />
        </TableContextProvider>
      </Co2ContextProvider>
    </Suspense>
  );
}
