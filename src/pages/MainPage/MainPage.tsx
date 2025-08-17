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
import usePeople from "./hooks/usePeople";

const ITEMS_PER_PAGE = 10;

export default function MainPage() {
  const searchTermStorage = useLocalStorage<string>(SEARCH_TERM, "");
  const [searchTerm] = useState<string>(() => searchTermStorage.get());

  const { page = "1" } = useParams<{ page: string }>();

  const searchQuery = usePeople({ page, search: searchTerm });

  return (
    <>
      <div className="px-4 py-8 border-1 border-zinc-200 rounded-lg shadow-md">
        <SearchControl />
      </div>
      <div className="px-4 py-4 mb-20 border-1 border-zinc-200 rounded-lg shadow-md">
        {searchQuery.isPending || searchQuery.isFetching ? (
          <Loading />
        ) : searchQuery.isError ? (
          <Alert variant="danger">Whoops... Something went wrong</Alert>
        ) : (
          <>
            <Button
              onClick={() => searchQuery.refetch()}
              variant="danger"
              className="mb-2"
            >
              Refetch current page
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
