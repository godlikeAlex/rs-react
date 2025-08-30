import { useTableContext } from "@/widgets/Co2Table/contexts/TableContext";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import CountryService from "../services/CountryService";

export default function useTable() {
  const countryList = useCo2Data();
  const { state, dispatch } = useTableContext();

  const availableYears = CountryService.getAvailableYears(countryList);

  function selectYear(year: number) {
    dispatch({ type: "SELECT_YEAR", payload: year });
  }

  return {
    availableYears,
    selectYear,
    selectedYear: state.selectedYear,
  };
}
