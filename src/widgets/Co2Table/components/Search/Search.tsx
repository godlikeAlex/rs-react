import clsx from "clsx";
import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function Search() {
  const { searchTerm, applySearch } = useTable();

  return (
    <input
      onChange={(e) => applySearch(e.target.value)}
      value={searchTerm}
      placeholder="Search Country"
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500"
      )}
    />
  );
}
