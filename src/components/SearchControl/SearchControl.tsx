import { Component, type FormEvent, type ReactNode } from "react";
import { Button } from "../Button";
import classNames from "classnames";

type Props = {
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
  onSearch: () => void;
  disabled?: boolean;
};

export default class SearchControl extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
    this.props.onSearch();
  }

  render(): ReactNode {
    const { value, onChange, disabled = true } = this.props;

    return (
      <form className="flex gap-3" onSubmit={this.handleSubmit}>
        <input
          placeholder={this.props.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={classNames(
            "block w-full p-1.5 px-4",
            "text-gray-900 text-sm",
            "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
            "bg-gray-50 border border-gray-200  rounded-lg",
            "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500",
          )}
        />

        <Button className="flex-1/3" disabled={disabled}>
          Search
        </Button>
      </form>
    );
  }
}
