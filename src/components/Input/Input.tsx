import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <input
      className={clsx(
        "text-sm rounded-lg p-2.5",
        "bg-gray-50 border border-gray-300 text-gray-900",
        "focus:ring-blue-500 focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
}
