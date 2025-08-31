import { produce } from "immer";
import type { SortOption } from "@/widgets/Co2Table/services/CountryService";
import type { OptionalCountryEntryData } from "@/types/Country";

export type TableState = {
  selectedYear?: number;
  searchTerm?: string;
  sort: SortOption;
  isOpenSelectColumnsModal: boolean;
  visibleColumns: Array<keyof OptionalCountryEntryData>;
};

export type TableActionType =
  | { type: "SELECT_YEAR"; payload: number }
  | { type: "APPLY_SEARCH"; payload: string }
  | { type: "APPLY_SORT"; payload: SortOption }
  | { type: "SHOW_SELECT_COLUMN_MODAL" }
  | { type: "CLOSE_SELECT_COLUMN_MODAL" }
  | {
      type: "TOGGLE_COLUMN";
      payload: { columnName: keyof OptionalCountryEntryData };
    };

export const initialTableState: TableState = {
  selectedYear: undefined,
  sort: "name.asc",
  isOpenSelectColumnsModal: false,
  visibleColumns: [],
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
    case "SHOW_SELECT_COLUMN_MODAL":
      return produce(state, (currentState) => {
        currentState.isOpenSelectColumnsModal = true;
      });
    case "CLOSE_SELECT_COLUMN_MODAL":
      return produce(state, (currentState) => {
        currentState.isOpenSelectColumnsModal = false;
      });
    case "TOGGLE_COLUMN":
      return produce(state, (currentState) => {
        if (currentState.visibleColumns.includes(action.payload.columnName)) {
          currentState.visibleColumns = currentState.visibleColumns.filter(
            (column) => column !== action.payload.columnName
          );
        } else {
          currentState.visibleColumns.push(action.payload.columnName);
        }
      });
    default:
      throw Error("Unknown action:");
  }
}
