import { DEFAULT_COLUMNS } from "@/widgets/Co2Table/constants/defaultColumns";
import TableHeadColumn from "./TableHeadColumn";
import useTable from "@/widgets/Co2Table/hooks/useTable";
import { transformColumnNameToHuman } from "@/uitls/utils";

export default function TableHeader() {
  const { visibleColumns } = useTable();

  return (
    <thead className="text-sm uppercase bg-stone-50 w-full">
      <tr>
        {DEFAULT_COLUMNS.map(({ label }) => (
          <TableHeadColumn key={label} name={label} />
        ))}
        {visibleColumns.map((label) => (
          <TableHeadColumn
            key={label}
            name={transformColumnNameToHuman(label)}
          />
        ))}
      </tr>
    </thead>
  );
}
