import clsx from "clsx";

type ButtonVariant = "primary" | "ghost";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...defaultButtonProps
}: Props) {
  return (
    <button
      className={clsx(
        "px-3 py-2 rounded-md cursor-pointer transition",
        variant === "primary" && [
          ["bg-violet-500 text-white"],
          ["hover:bg-violet-700"],
        ],
        variant === "ghost" && [
          ["border-1 border-solid border-violet-700 text-violet-700"],
          ["hover:bg-violet-700 hover:text-white"],
        ],
        className
      )}
      {...defaultButtonProps}
    >
      {children}
    </button>
  );
}
