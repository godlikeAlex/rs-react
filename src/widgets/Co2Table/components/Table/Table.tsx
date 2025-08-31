import useTable from "@/widgets/Co2Table/hooks/useTable";
import {
  TableHeader,
  TableFilters,
  SelectColumnsModal,
  TableRowCountry,
} from "@/widgets/Co2Table/components";

export default function Table() {
  const {
    selectedYear,
    countries,
    isOpenSelectColumnsModal,
    closeSelectColumnsModal,
  } = useTable();

  return (
    <div className="mt-10">
      <TableFilters />
      <SelectColumnsModal
        isOpen={isOpenSelectColumnsModal}
        onClose={closeSelectColumnsModal}
      />

      <table className="w-full mt-4">
        <TableHeader />

        <tbody>
          {countries.map((country) => (
            <TableRowCountry
              key={country.name}
              country={country}
              selectedYear={selectedYear}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
