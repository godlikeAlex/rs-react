import classNames from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  variant: "danger" | "success";
};

export default function Alert({ variant, children }: PropsWithChildren<Props>) {
  return (
    <div
      className={classNames(
        "p-4 text-sm  rounded-lg bg-red-50 dark:bg-gray-800 ",
        {
          "text-red-800 dark:text-red-400": variant === "danger",
          "text-green-600 dark:text-green-400": variant === "success",
        }
      )}
      role="alert"
    >
      {children}
    </div>
  );
}
