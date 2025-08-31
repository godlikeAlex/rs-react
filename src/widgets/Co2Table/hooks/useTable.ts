import { useTableContext } from "@/widgets/Co2Table/contexts/TableContext";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import CountryService, { type SortOption } from "../services/CountryService";
import type { OptionalCountryEntryData } from "@/types/Country";

export default function useTable() {
  const { countryList, columns } = useCo2Data();
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

  function openSelectColumnsModal() {
    dispatch({ type: "SHOW_SELECT_COLUMN_MODAL" });
  }

  function closeSelectColumnsModal() {
    dispatch({ type: "CLOSE_SELECT_COLUMN_MODAL" });
  }

  function toggleVisibleColumn(columnName: keyof OptionalCountryEntryData) {
    dispatch({ type: "TOGGLE_COLUMN", payload: { columnName } });
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
    openSelectColumnsModal,
    closeSelectColumnsModal,
    isOpenSelectColumnsModal: state.isOpenSelectColumnsModal,
    columns,
    toggleVisibleColumn,
    visibleColumns: state.visibleColumns,
  };
}
