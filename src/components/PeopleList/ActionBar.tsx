import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import usePeopleSelectStore from "@/stores/people-selection-store";
import { Button } from "../Button";

export default function ActionBar() {
  const { selected, unselectAll } = usePeopleSelectStore();
  const [exportUrl, setExportUrl] = useState("");
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (exportUrl) {
      downloadLinkRef.current?.click();
    }

    return () => {
      if (exportUrl) {
        URL.revokeObjectURL(exportUrl);
      }
    };
  }, [exportUrl]);

  const handleExport = () => {
    const dataCSV = [
      ["name", "height", "birth", "gender", "mass"],
      ...selected.map(({ name, height, birth_year, gender, mass }) => [
        name,
        height,
        birth_year,
        gender,
        mass,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([dataCSV], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    setExportUrl(url);
  };

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
        <Button onClick={handleExport}>Download CSV</Button>
        <a
          ref={downloadLinkRef}
          download={`${selected.length}_items.csv`}
          href={exportUrl}
          className="hidden"
        >
          Download file
        </a>
        <Button variant="danger" onClick={() => unselectAll()}>
          Unselect All
        </Button>
      </div>
    </div>
  );
}
