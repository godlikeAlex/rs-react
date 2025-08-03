import { Link, useNavigate } from "react-router";
import classNames from "classnames";
import usePeopleSelectStore from "@/stores/people-selection-store";
import type { People } from "@/types/People";

type Props = {
  people: People;
};

export default function PeopleListItem({ people }: Props) {
  const navigate = useNavigate();
  const { selected, togglePeople } = usePeopleSelectStore();

  const isSelected = selected.some((selected) => selected.id === people.id);

  const handleSelect = () => togglePeople(people);

  return (
    <tr
      key={people.name}
      onClick={() => navigate(`${people.id}`)}
      className="bg-white border-b border-gray-200 hover:bg-gray-200 cursor-pointer dark:bg-gray-700 dark:text-gray-400"
    >
      <th scope="row" className="px-6 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleSelect}
          onClick={(e) => e.stopPropagation()}
        />
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400"
      >
        {people.name}
      </th>
      <td className="px-6 py-4">{people.height}</td>
      <td className="px-6 py-4">{people.birth_year}</td>
      <td className="px-6 py-4">{people.gender}</td>
      <td className="px-6 py-4">{people.mass}</td>
      <td className="px-6 py-4">
        <Link
          to={`${people.id}`}
          className={classNames("text-blue-700", "hover:text-blue-400")}
        >
          Details
        </Link>
      </td>
    </tr>
  );
}
