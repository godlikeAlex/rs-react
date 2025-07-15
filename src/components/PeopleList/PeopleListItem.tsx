import { Component, type ReactNode } from "react";

import type { People } from "@/types/People";

type Props = {
  people: People;
};

export default class PeopleListItem extends Component<Props> {
  render(): ReactNode {
    const { people } = this.props;
    return (
      <tr
        key={people.name}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {people.name}
        </th>
        <td className="px-6 py-4">{people.height}</td>
        <td className="px-6 py-4">{people.birth_year}</td>
        <td className="px-6 py-4">{people.gender}</td>
        <td className="px-6 py-4">{people.mass}</td>
      </tr>
    );
  }
}
