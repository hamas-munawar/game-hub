import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import type Game from "../interfaces/Game";

const apiClient = new APIClient<Game>("/games");

const useGamesMultiple = (ids: number[]) => {
  const queries = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["games", id],
      queryFn: () => apiClient.get(id.toString()),
      staleTime: 24 * 60 * 60 * 1000, // 24h
    })),
  });

  return { queries };
};

export default useGamesMultiple;
