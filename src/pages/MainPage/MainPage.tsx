import { Alert, Loading, PeopleList, SearchControl } from "@/components";
import { SEARCH_TERM } from "@/constants/storageKeys";
import useLocalStorage from "@/hooks/useLocalStorage";
import StarWarsService from "@/services/StarwarsService";
import type { People } from "@/types/People";
import { useEffect, useState } from "react";

type State = {
  searchTerm: string;
  results: People[];
  status: "loading" | "error" | "idle";
};

export default function MainPage() {
  const searchTermStorage = useLocalStorage<string>(SEARCH_TERM, "");

  const [state, setState] = useState<State>(() => {
    return {
      searchTerm: searchTermStorage.get(),
      status: "loading",
      results: [],
    };
  });

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    setState((currentState) => ({ ...currentState, status: "loading" }));

    try {
      const response = await StarWarsService.search(state.searchTerm);

      setState((currentState) => ({
        ...currentState,
        results: response.results,
        status: "idle",
      }));
    } catch {
      setState((currentState) => ({
        ...currentState,
        results: [],
        status: "error",
      }));
    }
  };

  const handleSearch = () => {
    searchTermStorage.set(state.searchTerm);
    loadResults();
  };

  const handleInputSearch = (value: string) => {
    setState((currentState) => ({ ...currentState, searchTerm: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-2.5 my-4 flex flex-col gap-6">
      <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
        <SearchControl
          placeholder="Star Wars Person 🌚"
          value={state.searchTerm}
          onChange={handleInputSearch}
          onSearch={handleSearch}
          disabled={state.status === "loading"}
        />
      </div>
      <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md">
        {state.status === "loading" && <Loading />}{" "}
        {state.status === "error" && (
          <Alert variant="danger">Whoops... Something went wrong</Alert>
        )}
        {state.status === "idle" && <PeopleList peoples={state.results} />}
      </div>
    </div>
  );
}
