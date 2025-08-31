import { useTableContext } from "@/widgets/Co2Table/contexts/TableContext";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import CountryService from "../services/CountryService";

export default function useTable() {
  const countryList = useCo2Data();
  const { state, dispatch } = useTableContext();

  const availableYears = CountryService.getAvailableYears(countryList);
  const actualCountries = CountryService.filterCountries(countryList, {
    searchTerm: state.searchTerm,
  });

  function selectYear(year: number) {
    dispatch({ type: "SELECT_YEAR", payload: year });
  }

  function applySearch(searchTerm: string) {
    dispatch({ type: "APPLY_SEARCH", payload: searchTerm });
  }

  return {
    availableYears,
    selectYear,
    selectedYear: state.selectedYear,
    applySearch,
    searchTerm: state.searchTerm,
    countries: actualCountries,
  };
}
