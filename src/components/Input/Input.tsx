import { useId, type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
  label?: string;
  styleLabel?: {
    direction: "row" | "column";
    position: "before" | "after";
  };
  autoCompleteList?: string[];
}

export default function Input({
  label,
  error,
  styleLabel = { direction: "column", position: "before" },
  autoCompleteList,
  ...props
}: Props) {
  const inputID = useId();
  const listID = useId();

  return (
    <div>
      <div
        className={clsx("w-full flex", {
          ["flex-col"]: styleLabel.direction === "column",
          ["flex-row items-center gap-2.5"]: styleLabel.direction === "row",
          ["flex-row-reverse"]: styleLabel.position === "after",
        })}
      >
        {label && (
          <label htmlFor={inputID} className="mb-0. w-full">
            {label}
          </label>
        )}

        <input
          id={inputID}
          list={listID}
          className={clsx(
            "border-2 border-stone-300 rounded-lg",
            "px-3 py-2",
            "focus:border-purple-500 focus-within:border-purple-500 focus-within:outline-0"
          )}
          {...props}
        />

        {autoCompleteList && (
          <datalist id={listID}>
            {autoCompleteList.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </datalist>
        )}
      </div>

      <p className="text-red-600 pt-1 h-6 text-sm">{error && error}</p>
    </div>
  );
}
