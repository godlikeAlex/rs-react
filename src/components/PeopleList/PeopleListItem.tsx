import type { People } from "@/types/People";
import classNames from "classnames";
import { Link, useNavigate } from "react-router";

type Props = {
  people: People;
};

export default function PeopleListItem({ people }: Props) {
  const navigate = useNavigate();

  return (
    <tr
      key={people.name}
      onClick={() => navigate(`${people.id}`)}
      className="bg-white border-b border-gray-200 hover:bg-gray-200 cursor-pointer"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
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
