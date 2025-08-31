import { memo } from "react";
import type { Country } from "@/types/Country";
import CountryService from "@/widgets/Co2Table/services/CountryService";
import { TableColumn } from "@/widgets/Co2Table/components";
import type { VisibleColumns } from "../../contexts/TableContext/tableReducer";

interface Props {
  country: Country & { name: string };
  selectedYear?: number;
  visibleColumns: VisibleColumns;
}

function TableRowCountry({ country, selectedYear, visibleColumns }: Props) {
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

export default memo(TableRowCountry);
