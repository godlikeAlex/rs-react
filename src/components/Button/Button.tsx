import classNames from "classnames";
import { type ButtonHTMLAttributes, type PropsWithChildren } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      className={classNames(
        " text-white rounded-lg px-2.5 py-2 font-medium  cursor-pointer ",
        {
          "bg-blue-700  hover:bg-blue-800": variant === "primary",
          "bg-red-700 hover:bg-red-800": variant === "danger",
          "bg-gray-400 hover:bg-gray-400": props.disabled,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
