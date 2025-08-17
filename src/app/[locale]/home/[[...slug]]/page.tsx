import StarWarsService from "@/services/StarwarsService";

import { PeopleList } from "@/components/PeopleList";
import { Pagenation } from "@/components/Pagenation";
import { SearchControl } from "@/components/SearchControl";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: [] }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const ITEMS_PER_PAGE = 10;

export default async function Page({ params, searchParams }: Props) {
  const { slug = [] } = await params;
  const searchTerm = (await searchParams).query;
  const [page = "1"] = slug;

  if (slug.length > 2) return notFound();

  const { results: peoples, count } = await StarWarsService.search({
    search: searchTerm || "",
    page,
  });

  return (
    <>
      <div className="px-4 py-8 border-1 border-zinc-200 rounded-lg shadow-md">
        <SearchControl />
      </div>

      <div className="px-4 py-4 mb-20 border-1 border-zinc-200 rounded-lg shadow-md">
        <PeopleList peoples={peoples} />
        <Pagenation
          renderLink={(page) => `/home/${page}`}
          pages={Math.ceil(count / ITEMS_PER_PAGE)}
          currentPage={Number(page)}
        />
      </div>
    </>
  );
}
