import { Component, type ReactNode } from "react";
import type { People } from "../../types/People";

type Props = {
  peoples: People[];
};

export default class PeopleList extends Component<Props> {
  render(): ReactNode {
    const peopleRows = this.props.peoples.map((people) => (
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
    ));

    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Height
              </th>
              <th scope="col" className="px-6 py-3">
                Birth Year
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Mass
              </th>
            </tr>
          </thead>
          <tbody>{peopleRows}</tbody>
        </table>
      </div>
    );
  }
}
