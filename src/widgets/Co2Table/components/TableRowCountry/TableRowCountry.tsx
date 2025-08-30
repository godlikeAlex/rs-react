import type { Country } from "@/types/Country";

interface Props {
  country: Country & { name: string };
}

export default function TableRowCountry({ country }: Props) {
  const currentCountryEntryData = country.data.at(-1);

  return (
    <tr className="border-b border-stone-200 text-xs">
      <td className="p-4">{country.iso_code ?? "N/A"}</td>
      <td className="p-4">{country.name ?? "N/A"}</td>
      <td className="p-4">{currentCountryEntryData?.population ?? "N/A"}</td>
      <td className="p-4">{currentCountryEntryData?.year ?? "N/A"}</td>
      <td className="p-4">{currentCountryEntryData?.nitrous_oxide ?? "N/A"}</td>
      <td className="p-4">
        {currentCountryEntryData?.nitrous_oxide_per_capita}
      </td>
    </tr>
  );
}
