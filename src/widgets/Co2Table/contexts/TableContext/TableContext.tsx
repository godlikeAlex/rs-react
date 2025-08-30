import { createContext, useContext, type Dispatch } from "react";
import { type TableActionType, type TableState } from "./tableReducer";

export const TableContext = createContext<
  | {
      state: TableState;
      dispatch: Dispatch<TableActionType>;
    }
  | undefined
>(undefined);

export function useTableContext() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("useTableContext must be used within TableProvider");
  }

  return context;
}
