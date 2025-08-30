import clsx from "clsx";

import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function YearSelect() {
  const { availableYears, selectYear, selectedYear } = useTable();

  return (
    <select
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500"
      )}
      onChange={(e) => selectYear(Number(e.target.value))}
      value={selectedYear}
    >
      <option>Latest Year</option>

      {[...availableYears].map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}
