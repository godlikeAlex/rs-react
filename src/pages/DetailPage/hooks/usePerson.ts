import { useQuery } from "@tanstack/react-query";
import StarWarsService from "@/services/StarwarsService";

export const PEOPLE_DETAILS_QUERY_KEY = "DETAILS_PEOPLE";

export default function usePerson(peopleID: string) {
  return useQuery({
    queryFn: () => StarWarsService.getPeople(peopleID),
    queryKey: [PEOPLE_DETAILS_QUERY_KEY, peopleID],
  });
}
