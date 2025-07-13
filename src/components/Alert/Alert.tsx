import classNames from "classnames";
import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "danger" | "success";
};

export default class Alert extends Component<Props> {
  render(): ReactNode {
    return (
      <div
        className={classNames(
          "p-4 text-sm  rounded-lg bg-red-50 dark:bg-gray-800 ",
          {
            "text-red-800 dark:text-red-400": this.props.variant === "danger",
            "text-green-600 dark:text-green-400":
              this.props.variant === "success",
          },
        )}
        role="alert"
      >
        {this.props.children}
      </div>
    );
  }
}
