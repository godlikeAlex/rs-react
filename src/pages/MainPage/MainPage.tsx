import { useState } from "react";
import { Alert, Loading, PeopleList, SearchControl } from "@/components";
import { SEARCH_TERM } from "@/constants/storageKeys";
import useFetch from "@/hooks/useFetch";
import useLocalStorage from "@/hooks/useLocalStorage";
import StarWarsService from "@/services/StarwarsService";

export default function MainPage() {
  const searchTermStorage = useLocalStorage<string>(SEARCH_TERM, "");
  const [searchTerm, setSearchTerm] = useState<string>(() =>
    searchTermStorage.get()
  );

  const searchQuery = useFetch({
    queryFn: () => StarWarsService.search(searchTerm),
    key: ["search", searchTerm],
  });

  const handleSearch = (newSearchTerm: string) => {
    searchTermStorage.set(newSearchTerm);
    setSearchTerm(newSearchTerm);
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
          <PeopleList peoples={searchQuery.data.results} />
        )}
      </div>
    </div>
  );
}
