import useTable from "@/widgets/Co2Table/hooks/useTable";
import {
  TableHeader,
  TableFilters,
  SelectColumnsModal,
  TableRowCountry,
} from "@/widgets/Co2Table/components";
import clsx from "clsx";

export default function Table() {
  const {
    selectedYear,
    countries,
    isOpenSelectColumnsModal,
    closeSelectColumnsModal,
    visibleColumns,
  } = useTable();

  return (
    <div className="mt-10">
      <TableFilters />
      <SelectColumnsModal
        isOpen={isOpenSelectColumnsModal}
        onClose={closeSelectColumnsModal}
      />
      <div className="relative overflow-x-auto">
        <table className={clsx("table-auto overflow-scroll", "w-full mt-4")}>
          <TableHeader />

          <tbody>
            {countries.map((country) => (
              <TableRowCountry
                key={country.name}
                country={country}
                selectedYear={selectedYear}
                visibleColumns={visibleColumns}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
