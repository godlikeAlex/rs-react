import { Suspense } from "react";

import { Co2ContextProvider } from "@/widgets/Co2Table/contexts/Co2Context";
import { TableContextProvider } from "@/widgets/Co2Table/contexts/TableContext";

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
        <TableContextProvider>
          <Table />
        </TableContextProvider>
      </Co2ContextProvider>
    </Suspense>
  );
}
