import classNames from "classnames";
import { Component, type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "danger";
}

class Button extends Component<Props> {
  render(): ReactNode {
    const {
      children,
      className = "",
      variant = "primary",
      ...props
    } = this.props;

    return (
      <button
        className={classNames(
          " text-white rounded-lg px-2.5 py-2 font-medium  cursor-pointer ",
          {
            "bg-blue-700  hover:bg-blue-800": variant === "primary",
            "bg-red-700 hover:bg-red-800": variant === "danger",
            "bg-gray-400 hover:bg-gray-400": props.disabled,
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
