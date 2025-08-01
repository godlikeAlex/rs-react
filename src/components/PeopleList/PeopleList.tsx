import type { People } from "@/types/People";
import PeopleListItem from "./PeopleListItem";

type Props = {
  peoples: People[];
};

export default function PeopleList({ peoples }: Props) {
  const peopleRows = peoples.map((people) => (
    <PeopleListItem key={people.name} people={people} />
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
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>{peopleRows}</tbody>
      </table>
    </div>
  );
}
