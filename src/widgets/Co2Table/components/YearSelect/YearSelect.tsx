import clsx from "clsx";

import CountryService from "@/widgets/Co2Table/services/CountryService";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";

export default function YearSelect() {
  const countryList = useCo2Data();

  const years = CountryService.getAvailableYears(countryList);

  return (
    <select
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500"
      )}
    >
      <option>Latest Year</option>

      {[...years].map((year) => (
        <option key={year}>{year}</option>
      ))}
    </select>
  );
}
