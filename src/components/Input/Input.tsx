import type { ChangeEvent, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface Props extends InputProps {
  onChange: (value: string) => void;
}

export default function Input({ className, onChange, ...props }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <input
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500",
        className
      )}
      onChange={handleChange}
      {...props}
    />
  );
}
