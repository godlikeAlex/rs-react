import { produce } from "immer";
import type {
  CountryEntryData,
  OptionalCountryEntryData,
} from "@/types/Country";

type StaticColumns = "name" | "iso_code";
export type SortColumns = StaticColumns | keyof CountryEntryData;

export type SortColumn = { name: SortColumns; direction: "desc" | "asc" };

export type VisibleColumns = Array<keyof OptionalCountryEntryData>;

export type TableState = {
  selectedYear?: number;
  searchTerm?: string;
  sortColumn: SortColumn;
  isOpenSelectColumnsModal: boolean;
  visibleColumns: VisibleColumns;
};

export type TableActionType =
  | { type: "SELECT_YEAR"; payload: number }
  | { type: "APPLY_SEARCH"; payload: string }
  | { type: "TOGGLE_SORT"; payload: { columnName: SortColumns } }
  | { type: "SHOW_SELECT_COLUMN_MODAL" }
  | { type: "CLOSE_SELECT_COLUMN_MODAL" }
  | {
      type: "TOGGLE_COLUMN";
      payload: { columnName: keyof OptionalCountryEntryData };
    };

export const initialTableState: TableState = {
  selectedYear: undefined,
  sortColumn: { name: "name", direction: "asc" },
  isOpenSelectColumnsModal: false,
  visibleColumns: [],
  searchTerm: "",
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
    case "TOGGLE_SORT":
      return produce(state, (currentState) => {
        if (currentState.sortColumn.name === action.payload.columnName) {
          currentState.sortColumn.direction =
            currentState.sortColumn.direction == "asc" ? "desc" : "asc";

          return;
        }

        currentState.sortColumn.name = action.payload.columnName;
        currentState.sortColumn.direction = "asc";
      });
    default:
      throw Error("Unknown action:");
  }
}
