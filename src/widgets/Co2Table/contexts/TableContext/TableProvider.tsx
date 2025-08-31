import { useReducer, type ReactNode } from "react";

import { TableContext } from "./TableContext";
import tableReducer, { initialTableState } from "./tableReducer";

export default function TableContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(tableReducer, initialTableState);

  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
}
