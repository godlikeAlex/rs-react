"use client";

import classNames from "classnames";
import usePeopleSelectStore from "@/stores/people-selection-store";
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
        <form action="/api/generate-csv" method="POST">
          {selected.map((people, index) => (
            <div key={people.id}>
              <input
                type="hidden"
                name={`peoples[${index}]`}
                value={people.name}
              />
              <input
                type="hidden"
                name={`peoples[${index}]`}
                value={people.height}
              />
              <input
                type="hidden"
                name={`peoples[${index}]`}
                value={people.birth_year}
              />
              <input
                type="hidden"
                name={`peoples[${index}]`}
                value={people.gender}
              />
              <input
                type="hidden"
                name={`peoples[${index}]`}
                value={people.mass}
              />
            </div>
          ))}

          <Button>Download CSV</Button>
        </form>
        <Button variant="danger" onClick={() => unselectAll()}>
          Unselect All
        </Button>
      </div>
    </div>
  );
}
