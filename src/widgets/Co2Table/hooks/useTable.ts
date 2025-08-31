import { useTableContext } from "@/widgets/Co2Table/contexts/TableContext";
import { useCo2Data } from "@/widgets/Co2Table/contexts/Co2Context";
import CountryService from "../services/CountryService";
import type { OptionalCountryEntryData } from "@/types/Country";
import type { SortColumns } from "../contexts/TableContext/tableReducer";
import { useCallback, useMemo } from "react";

export default function useTable() {
  const { countryList, columns } = useCo2Data();
  const { state, dispatch } = useTableContext();

  const availableYears = useMemo(
    () => CountryService.getAvailableYears(countryList),
    [countryList]
  );
  const actualCountries = useMemo(() => {
    return CountryService.filterCountries(countryList, {
      searchTerm: state.searchTerm,
      sort: state.sortColumn,
    });
  }, [state.searchTerm, state.sortColumn, countryList]);

  const selectYear = useCallback(
    (year: number) => dispatch({ type: "SELECT_YEAR", payload: year }),
    []
  );

  function applySearch(searchTerm: string) {
    dispatch({ type: "APPLY_SEARCH", payload: searchTerm });
  }

  const toggleSort = useCallback((columnName: SortColumns) => {
    dispatch({ type: "TOGGLE_SORT", payload: { columnName } });
  }, []);

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
    sortColumn: state.sortColumn,
    toggleSort,
    openSelectColumnsModal,
    closeSelectColumnsModal,
    isOpenSelectColumnsModal: state.isOpenSelectColumnsModal,
    columns,
    toggleVisibleColumn,
    visibleColumns: state.visibleColumns,
  };
}
