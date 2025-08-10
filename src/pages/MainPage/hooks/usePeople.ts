import StarWarsService from "@/services/StarwarsService";
import { useQuery } from "@tanstack/react-query";

export const PEOPLE_LIST_QUERY_KEY = "people-list";

type Params = {
  page?: string;
  search?: string;
};

export default function usePeople({ page, search }: Params) {
  return useQuery({
    queryFn: () => StarWarsService.search({ page, search }),
    queryKey: [PEOPLE_LIST_QUERY_KEY, page, search],
  });
}
