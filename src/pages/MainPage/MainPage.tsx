import { useState } from "react";
import {
  Alert,
  Button,
  Loading,
  Pagenation,
  PeopleList,
  SearchControl,
} from "@/components";
import { SEARCH_TERM } from "@/constants/storageKeys";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Outlet, useParams } from "react-router";
import ActionBar from "@/components/PeopleList/ActionBar";
import usePeople, { PEOPLE_LIST_QUERY_KEY } from "./hooks/usePeople";
import { useQueryClient } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 10;

export default function MainPage() {
  const queryClient = useQueryClient();
  const searchTermStorage = useLocalStorage<string>(SEARCH_TERM, "");
  const [searchTerm, setSearchTerm] = useState<string>(() =>
    searchTermStorage.get()
  );

  const { page = "1" } = useParams<{ page: string }>();

  const searchQuery = usePeople({ page, search: searchTerm });

  const handleSearch = (newSearchTerm: string) => {
    searchTermStorage.set(newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: [PEOPLE_LIST_QUERY_KEY] });
  };

  return (
    <>
      <div className="px-4 py-8 border-1 border-zinc-200 rounded-lg shadow-md">
        <SearchControl
          placeholder="Star Wars Person 🌚"
          defaultValue={searchTerm}
          onSearch={handleSearch}
          disabled={searchQuery.isPending}
        />
      </div>
      <div className="px-4 py-4 mb-20 border-1 border-zinc-200 rounded-lg shadow-md">
        {searchQuery.isPending || searchQuery.isFetching ? (
          <Loading />
        ) : searchQuery.isError ? (
          <Alert variant="danger">Whoops... Something went wrong</Alert>
        ) : (
          <>
            <Button onClick={handleRefetch} variant="danger" className="mb-2">
              Refetch Data
            </Button>
            <PeopleList peoples={searchQuery.data.results} />
            <Pagenation
              renderLink={(page) => `/home/${page}`}
              pages={Math.ceil(searchQuery.data.count / ITEMS_PER_PAGE)}
              currentPage={Number(page)}
            />
          </>
        )}
        <ActionBar />
      </div>

      <Outlet />
    </>
  );
}
