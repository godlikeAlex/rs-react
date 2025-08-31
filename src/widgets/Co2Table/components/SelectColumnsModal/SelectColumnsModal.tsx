import { Checkbox, Modal } from "@/components";
import type { ComponentProps } from "react";
import useTable from "@/widgets/Co2Table/hooks/useTable";
import { transformColumnNameToHuman } from "@/uitls/utils";

type Props = ComponentProps<typeof Modal>;

export default function SelectColumnsModal(props: Props) {
  const { columns, visibleColumns, toggleVisibleColumn } = useTable();

  return (
    <Modal {...props}>
      <h2 className="text-xl font-bold">Select Columns</h2>

      <div className="flex flex-col max-h-96 overflow-y-auto gap-5">
        {columns.map((column) => (
          <Checkbox
            key={column}
            label={transformColumnNameToHuman(column)}
            onChange={() => toggleVisibleColumn(column)}
            checked={visibleColumns.includes(column)}
          />
        ))}
      </div>
    </Modal>
  );
}
