import type { People } from "@/types/People";
import PeopleListItem from "./PeopleListItem";
import { useTranslations } from "next-intl";

type Props = {
  peoples: People[];
};

export default function PeopleList({ peoples }: Props) {
  const t = useTranslations("PeopleList");

  const peopleRows = peoples.map((people) => (
    <PeopleListItem key={people.name} people={people} />
  ));

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3">
              {t("name")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("height")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("birth")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("gender")}
            </th>
            <th scope="col" className="px-6 py-3">
              {t("mass")}
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>{peopleRows}</tbody>
      </table>
    </div>
  );
}
