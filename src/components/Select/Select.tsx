import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  list: Array<string | number>;
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
      {list.map((listValue) => (
        <option key={listValue}>{listValue}</option>
      ))}
    </select>
  );
}
