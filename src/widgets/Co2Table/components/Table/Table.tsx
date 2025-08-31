import { TableFilters } from "../TableFilters";
import { TableHeader } from "../TableHeader";
import { TableRowCountry } from "../TableRowCountry";
import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function Table() {
  const { selectedYear, countries } = useTable();

  return (
    <div className="mt-10">
      <TableFilters />

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
