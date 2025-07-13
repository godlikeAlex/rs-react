import { Component, type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

class Button extends Component<Props> {
  render(): ReactNode {
    const { children, className = "", ...props } = this.props;

    return (
      <button
        className={`bg-blue-700 text-white rounded-lg px-2.5 py-2 font-medium hover:bg-blue-800 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
