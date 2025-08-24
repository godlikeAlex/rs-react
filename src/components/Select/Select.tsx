import clsx from "clsx";
import { useId, type SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  list: string[];
  error?: string | null;
  label?: string;
}

export default function Select({ list, label, error, ...props }: Props) {
  const inputID = useId();

  return (
    <div>
      {label && (
        <label htmlFor={inputID} className="block mb-0.5 w-full">
          {label}
        </label>
      )}

      <select
        {...props}
        className={clsx(
          "bg-gray-50",
          "border-2 border-stone-300 rounded-lg bg-white w-full",
          "px-3 py-2",
          "focus:border-purple-500 focus-within:border-purple-500 focus-within:outline-0"
        )}
      >
        {list.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>

      <p className="text-red-600 pt-1 h-6 text-sm">{error && error}</p>
    </div>
  );
}
