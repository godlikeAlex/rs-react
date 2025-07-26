import { useState, type FormEvent } from "react";
import classNames from "classnames";

import { Button } from "@/components";

type Props = {
  defaultValue?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
  disabled?: boolean;
};

export default function SearchControl({
  defaultValue,
  placeholder,
  disabled,
  onSearch,
}: Props) {
  const [value, setValue] = useState(() => defaultValue ?? "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classNames(
          "block w-full p-1.5 px-4",
          "text-gray-900 text-sm",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          "bg-gray-50 border border-gray-200  rounded-lg",
          "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        )}
      />

      <Button className="flex-1/3" disabled={disabled}>
        Search
      </Button>
    </form>
  );
}
