import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import { TableHeader } from "../TableHeader";
import { TableRowCountry } from "../TableRowCountry";
import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function Table() {
  const countries = useCo2Data();

  const { selectedYear } = useTable();

  return (
    <table className="w-full">
      <TableHeader />

      <tbody>
        {Object.entries(countries).map(([countryName, country]) => (
          <TableRowCountry
            key={countryName}
            country={{ ...country, name: countryName }}
            selectedYear={selectedYear}
          />
        ))}
      </tbody>
    </table>
  );
}
