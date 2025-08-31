import type { ChangeEvent } from "react";

import { Input, Select } from "@/components";
import clsx from "clsx";

import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function TableFilters() {
  const { searchTerm, applySearch, selectYear, availableYears } = useTable();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    applySearch(e.target.value);
  };

  const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
    selectYear(Number(e.target.value));
  };

  return (
    <div className={clsx("flex justify-end gap-3", "mt-10 mb-4")}>
      <Input
        placeholder="Search by country"
        onChange={handleSearch}
        value={searchTerm}
      />
      <Select
        list={["Latest year", ...availableYears]}
        onChange={handleChangeYear}
      />
    </div>
  );
}
