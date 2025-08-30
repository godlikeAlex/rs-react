import { produce } from "immer";

export type TableState = {
  selectedYear?: number;
};

export type TableActionType = { type: "SELECT_YEAR"; payload: number };

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
  }

  throw Error("Unknown action:");
}
