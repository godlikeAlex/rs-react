import { DEFAULT_COLUMNS } from "@/widgets/Co2Table/constants/defaultColumns";
import TableHeadColumn from "./TableHeadColumn";

export default function TableHeader() {
  return (
    <thead className="text-sm uppercase bg-stone-50 w-full">
      <tr>
        {DEFAULT_COLUMNS.map(({ label }) => (
          <TableHeadColumn key={label} name={label} />
        ))}
      </tr>
    </thead>
  );
}
