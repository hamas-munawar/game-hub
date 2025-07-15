import { useQuery } from '@tanstack/react-query';

import APIClient from '../services/api-client';

import type { GameQuery } from "../App";
import type { Platform } from "./usePaltforms";

export interface Game {
  added: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}

const apiClient = new APIClient<Game>("games");

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.get({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.order,
          search: gameQuery?.searchQuery,
        },
      }),
    staleTime: 5 * 60 * 1000,
  });
  return { data, error, isLoading };
};

export default useGames;
