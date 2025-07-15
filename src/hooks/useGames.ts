import { useQuery } from '@tanstack/react-query';

import apiClient from '../services/api-client';

import type { GameQuery } from "../App";
import type { FetchResults } from "../services/api-client";
import type { Platform } from "./usePaltforms";

export interface Game {
  added: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResults<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.order,
            search: gameQuery.searchQuery,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
  return { data, error, isLoading };
};

export default useGames;
