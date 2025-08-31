import clsx from "clsx";
import { Button, Input, Select } from "@/components";
import useTable from "@/widgets/Co2Table/hooks/useTable";

export default function TableFilters() {
  const {
    searchTerm,
    applySearch,
    selectYear,
    availableYears,
    selectedYear,
    openSelectColumnsModal,
  } = useTable();

  const yearsList = [...availableYears].map((year) => ({
    value: year,
    label: year,
  }));

  const handleSearch = (value: string) => {
    applySearch(value);
  };

  const handleChangeYear = (value: string) => {
    selectYear(Number(value));
  };

  return (
    <div>
      <div className={clsx("flex justify-end gap-3")}>
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
