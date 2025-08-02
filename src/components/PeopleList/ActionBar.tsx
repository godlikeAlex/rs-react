import usePeopleSelectStore from "@/stores/people-selection-store";
import classNames from "classnames";
import { Button } from "../Button";

export default function ActionBar() {
  const { selected, unselectAll } = usePeopleSelectStore();

  if (selected.length === 0) return;

  return (
    <div
      className={classNames(
        "fixed left-0 bottom-0 w-full p-4 rounded-t-xl flex items-center justify-between",
        "bg-gray-100 text-black dark:text-white dark:bg-gray-800"
      )}
    >
      <span>Selected: {selected.length} people</span>

      <div className="flex gap-5">
        <Button>Download CV</Button>
        <Button variant="danger" onClick={() => unselectAll()}>
          Unslect All
        </Button>
      </div>
    </div>
  );
}
