import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";

type ListItem = {
  label: string | number;
  value?: string | number;
};

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  list: ListItem[];
}

export default function Select({ list, className, ...props }: Props) {
  return (
    <select
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500",
        className
      )}
      {...props}
    >
      {list.map(({ value, label }) => (
        <option key={`${label}-${value}`} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
