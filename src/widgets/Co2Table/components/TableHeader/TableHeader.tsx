import { DEFAULT_COLUMNS } from "@/widgets/Co2Table/constants/defaultColumns";
import TableHeadColumn from "./TableHeadColumn";
import useTable from "@/widgets/Co2Table/hooks/useTable";
import { transformColumnNameToHuman } from "@/uitls/utils";

export default function TableHeader() {
  const { visibleColumns, sortColumn, toggleSort } = useTable();

  return (
    <thead className="text-sm uppercase bg-stone-50 w-full">
      <tr>
        {DEFAULT_COLUMNS.map(({ label, columnName }) => (
          <TableHeadColumn
            key={label}
            name={label}
            sort={
              sortColumn.name === columnName ? sortColumn.direction : undefined
            }
            onClick={() => toggleSort(columnName)}
          />
        ))}
        {visibleColumns.map((columnName) => (
          <TableHeadColumn
            key={columnName}
            name={transformColumnNameToHuman(columnName)}
            sort={
              sortColumn.name === columnName ? sortColumn.direction : undefined
            }
            onClick={() => toggleSort(columnName)}
          />
        ))}
      </tr>
    </thead>
  );
}
