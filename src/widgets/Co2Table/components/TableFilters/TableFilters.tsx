import type { ChangeEvent } from "react";

import { Input, Select } from "@/components";
import clsx from "clsx";

import useTable from "@/widgets/Co2Table/hooks/useTable";
import {
  isSortOption,
  type SortOption,
} from "@/widgets/Co2Table/services/CountryService";

const SORT_OPTIONS_LIST: { value: SortOption; label: string }[] = [
  { value: "name.asc", label: "Name ↑" },
  { value: "name.desc", label: "Name ↓" },
  { value: "population.asc", label: "Population ↑" },
  { value: "population.desc", label: "Population ↓" },
];

export default function TableFilters() {
  const {
    searchTerm,
    applySearch,
    selectYear,
    availableYears,
    sort,
    applySort,
    selectedYear,
  } = useTable();

  const yearsList = [...availableYears].map((year) => ({
    value: year,
    label: year,
  }));

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    applySearch(e.target.value);
  };

  const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    selectYear(Number(e.target.value));
  };

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (isSortOption(value)) {
      applySort(value);
    }
  };

  return (
    <div className={clsx("flex justify-end gap-3")}>
      <Select
        list={SORT_OPTIONS_LIST}
        value={sort}
        onChange={handleChangeSort}
      />
      <Input
        placeholder="Search by country"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Select
        list={[{ value: undefined, label: "Latest Year" }, ...yearsList]}
        onChange={handleChangeYear}
        value={selectedYear}
      />
    </div>
  );
}
