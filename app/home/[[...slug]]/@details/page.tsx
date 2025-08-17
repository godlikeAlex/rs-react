import classNames from "classnames";
import Link from "next/link";

import StarWarsService from "@/services/StarwarsService";

interface Props {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { slug = [] } = await params;
  const queryParams = await searchParams;
  const [page, peopleID] = slug;

  if (!peopleID) return null;

  const people = await StarWarsService.getPeople(peopleID);

  return (
    <div
      className={classNames(
        "flex justify-end",
        "fixed w-full h-full top-0 left-0"
      )}
    >
      <Link
        href={{ pathname: `/home/${page}`, query: queryParams }}
        className={classNames(
          "absolute w-full h-full",
          "bg-gray-700 opacity-50"
        )}
        role="button"
        tabIndex={0}
      />

      <div
        className={classNames("w-md h-full p-8", "relative z-40", "bg-white")}
      >
        <Link
          href={{ pathname: `/home/${page}`, query: queryParams }}
          className={classNames(
            "absolute right-5 top-0,",
            "text-5xl text-right cursor-pointer"
          )}
        >
          &#x2715;
        </Link>

        <div className="mt-15">
          <h1 className="text-blue-600 text-2xl font-bold">{people?.name}</h1>

          <h2 className="mt-4">
            Height: <span className="font-bold">{people?.height}</span>
          </h2>
          <h2 className="mt-2">
            Birth Year:
            <span className="font-bold">{people?.birth_year}</span>
          </h2>
          <h2 className="mt-2">
            Gender: <span className="font-bold">{people?.gender}</span>
          </h2>
          <h2 className="mt-2">
            Mass: <span className="font-bold">{people?.mass}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
