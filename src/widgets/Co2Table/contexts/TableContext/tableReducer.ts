import { produce } from "immer";
import type { SortOption } from "@/widgets/Co2Table/services/CountryService";

export type TableState = {
  selectedYear?: number;
  searchTerm?: string;
  sort: SortOption;
};

export type TableActionType =
  | { type: "SELECT_YEAR"; payload: number }
  | { type: "APPLY_SEARCH"; payload: string }
  | { type: "APPLY_SORT"; payload: SortOption };

export const initialTableState: TableState = {
  selectedYear: undefined,
  sort: "name.asc",
};

export default function tableReducer(
  state: TableState,
  action: TableActionType
) {
  switch (action.type) {
    case "SELECT_YEAR":
      return produce(state, (currentState) => {
        currentState.selectedYear = action.payload;
      });
    case "APPLY_SEARCH":
      return produce(state, (currentState) => {
        currentState.searchTerm = action.payload;
      });
    case "APPLY_SORT":
      return produce(state, (currentState) => {
        currentState.sort = action.payload;
      });
    default:
      throw Error("Unknown action:");
  }
}
