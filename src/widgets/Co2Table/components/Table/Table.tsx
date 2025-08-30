import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import { TableHeader } from "../TableHeader";
import { TableRowCountry } from "../TableRowCountry";

export default function Table() {
  const countries = useCo2Data();

  return (
    <table className="w-full">
      <TableHeader />

      <tbody>
        {Object.entries(countries).map(([countryName, country]) => (
          <TableRowCountry
            key={countryName}
            country={{ ...country, name: countryName }}
          />
        ))}
      </tbody>
    </table>
  );
}
