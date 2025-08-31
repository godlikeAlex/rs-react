import clsx from "clsx";
import { Button, Input, Select } from "@/components";
import useTable from "@/widgets/Co2Table/hooks/useTable";
import { useCallback, useMemo } from "react";

export default function TableFilters() {
  const {
    searchTerm,
    applySearch,
    selectYear,
    availableYears,
    selectedYear,
    openSelectColumnsModal,
  } = useTable();

  const yearsList = useMemo(() => {
    const years = [...availableYears].map((year) => ({
      value: year,
      label: year,
    }));

    return [{ value: undefined, label: "Latest Year" }, ...years];
  }, [availableYears]);

  const handleSearch = (value: string) => {
    applySearch(value);
  };

  const handleChangeYear = useCallback(
    (value: string) => {
      selectYear(Number(value));
    },
    [selectYear]
  );

  return (
    <div>
      <div className={clsx("flex justify-end gap-3")}>
        <Input
          placeholder="Search by country"
          onChange={handleSearch}
          value={searchTerm}
        />
        <Select
          list={yearsList}
          onChange={handleChangeYear}
          value={selectedYear}
        />

        <Button onClick={openSelectColumnsModal}>Select Columns</Button>
      </div>

      <div className={clsx("flex justify-end  mt-2")}>
        <p className="text-sm text-amber-400">
          To apply sort, please click to any header column
        </p>
      </div>
    </div>
  );
}
