import clsx from "clsx";
import type { ChangeEvent, SelectHTMLAttributes } from "react";

type ListItem = {
  label: string | number;
  value?: string | number;
};

interface Props
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  list: ListItem[];
  onChange: (value: string) => void;
}

export default function Select({ list, className, onChange, ...props }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500",
        className
      )}
      onChange={handleChange}
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
