import { TableHeader } from "../TableHeader";
import { TableRowCountry } from "../TableRowCountry";
import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function Table() {
  const { selectedYear, countries } = useTable();

  return (
    <table className="w-full">
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
  );
}
