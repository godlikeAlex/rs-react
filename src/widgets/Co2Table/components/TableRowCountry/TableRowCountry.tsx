import type { Country } from "@/types/Country";
import CountryService from "@/widgets/Co2Table/services/CountryService";
import { TableColumn } from "@/widgets/Co2Table/components";
import useTable from "@/widgets/Co2Table/hooks/useTable";

interface Props {
  country: Country & { name: string };
  selectedYear?: number;
}

export default function TableRowCountry({ country, selectedYear }: Props) {
  const { visibleColumns } = useTable();

  const currentCountryEntryData = CountryService.retrieveEntryData(
    country.data,
    selectedYear
  );

  return (
    <tr className="border-b border-stone-200 text-xs">
      <TableColumn value={country.iso_code} />
      <TableColumn value={country.name} />
      <TableColumn
        value={currentCountryEntryData?.population}
        highlightOnUpdate
      />
      <TableColumn value={currentCountryEntryData?.year} highlightOnUpdate />
      <TableColumn
        value={currentCountryEntryData?.nitrous_oxide}
        highlightOnUpdate
      />
      <TableColumn
        value={currentCountryEntryData?.nitrous_oxide_per_capita}
        highlightOnUpdate
      />

      {visibleColumns.map((columnName) => (
        <TableColumn
          key={columnName}
          value={currentCountryEntryData?.[columnName]}
          highlightOnUpdate
        />
      ))}
    </tr>
  );
}
