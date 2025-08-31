import { produce } from "immer";

export type TableState = {
  selectedYear?: number;
  searchTerm?: string;
};

export type TableActionType =
  | { type: "SELECT_YEAR"; payload: number }
  | { type: "APPLY_SEARCH"; payload: string };

export const initialTableState: TableState = {
  selectedYear: undefined,
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
    default:
      throw Error("Unknown action:");
  }
}
