import type { Country } from "@/types/Country";
import CountryService from "@/widgets/Co2Table/services/CountryService";
import { TableColumn } from "@/widgets/Co2Table/components";

interface Props {
  country: Country & { name: string };
  selectedYear?: number;
}

export default function TableRowCountry({ country, selectedYear }: Props) {
  const currentCountryEntryData = CountryService.retrieveEntryData(
    country.data,
    selectedYear
  );

  return (
    <tr className="border-b border-stone-200 text-xs">
      <TableColumn value={country.iso_code} />
      <TableColumn value={country.name} />
      <TableColumn value={currentCountryEntryData?.population} />
      <TableColumn value={currentCountryEntryData?.year} />
      <TableColumn value={currentCountryEntryData?.nitrous_oxide} />
      <TableColumn value={currentCountryEntryData?.nitrous_oxide_per_capita} />
    </tr>
  );
}
