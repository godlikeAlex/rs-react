import { useState } from "react";
import {
  Alert,
  Loading,
  Pagenation,
  PeopleList,
  SearchControl,
} from "@/components";
import { SEARCH_TERM } from "@/constants/storageKeys";
import useFetch from "@/hooks/useFetch";
import useLocalStorage from "@/hooks/useLocalStorage";
import StarWarsService from "@/services/StarwarsService";
import { useSearchParams } from "react-router";

const ITEMS_PER_PAGE = 10;

export default function MainPage() {
  const searchTermStorage = useLocalStorage<string>(SEARCH_TERM, "");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(() =>
    searchTermStorage.get()
  );
  const page = searchParams.get("page") ?? "1";

  const searchQuery = useFetch({
    queryFn: () => StarWarsService.search({ search: searchTerm, page }),
    key: ["search", searchTerm, page],
  });

  const handleSearch = (newSearchTerm: string) => {
    searchTermStorage.set(newSearchTerm);
    setSearchTerm(newSearchTerm);
    setSearchParams({});
  };

  return (
    <div className="max-w-3xl mx-auto px-2.5 my-4 flex flex-col gap-6">
      <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
        <SearchControl
          placeholder="Star Wars Person 🌚"
          defaultValue={searchTerm}
          onSearch={handleSearch}
          disabled={searchQuery.status === "loading"}
        />
      </div>
      <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
        {searchQuery.status === "loading" ? (
          <Loading />
        ) : searchQuery.status === "error" ? (
          <Alert variant="danger">Whoops... Something went wrong</Alert>
        ) : (
          <>
            <PeopleList peoples={searchQuery.data.results} />
            <Pagenation
              pages={Math.ceil(searchQuery.data.count / ITEMS_PER_PAGE)}
              currentPage={Number(page)}
            />
          </>
        )}
      </div>
    </div>
  );
}
