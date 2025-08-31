import { useTableContext } from "@/widgets/Co2Table/contexts/TableContext";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import CountryService, { type SortOption } from "../services/CountryService";

export default function useTable() {
  const countryList = useCo2Data();
  const { state, dispatch } = useTableContext();

  const availableYears = CountryService.getAvailableYears(countryList);
  const actualCountries = CountryService.filterCountries(countryList, {
    searchTerm: state.searchTerm,
    sort: state.sort,
  });

  function selectYear(year: number) {
    dispatch({ type: "SELECT_YEAR", payload: year });
  }

  function applySearch(searchTerm: string) {
    dispatch({ type: "APPLY_SEARCH", payload: searchTerm });
  }

  function applySort(sort: SortOption) {
    dispatch({ type: "APPLY_SORT", payload: sort });
  }

  return {
    availableYears,
    selectYear,
    selectedYear: state.selectedYear,
    applySearch,
    searchTerm: state.searchTerm,
    countries: actualCountries,
    sort: state.sort,
    applySort,
  };
}
