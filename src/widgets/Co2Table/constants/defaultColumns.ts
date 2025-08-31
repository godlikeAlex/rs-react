import type { SortColumns } from "../contexts/TableContext/tableReducer";

export const DEFAULT_COLUMNS: Array<{
  label: string;
  columnName: SortColumns;
}> = [
  {
    label: "ISO Code",
    columnName: "iso_code",
  },
  {
    label: "Name",
    columnName: "name",
  },
  {
    label: "Population",
    columnName: "population",
  },
  {
    label: "Year",
    columnName: "year",
  },
  {
    label: "CO₂",
    columnName: "nitrous_oxide",
  },
  {
    label: "CO₂ Per capita",
    columnName: "nitrous_oxide_per_capita",
  },
];
