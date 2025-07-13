import { Component, type ReactNode } from "react";

type Props = {
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
};

export default class SearchControl extends Component<Props> {
  render(): ReactNode {
    const { value, onChange } = this.props;

    return (
      <input
        placeholder={this.props.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    );
  }
}
