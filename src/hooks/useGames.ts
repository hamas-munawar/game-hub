import { useInfiniteQuery } from '@tanstack/react-query';

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
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          genres: gameQuery?.selectedGenreId,
          parent_platforms: gameQuery?.selectedPlatformId,
          ordering: gameQuery?.selectedOrder,
          search: gameQuery?.searchQuery,
          page: pageParam,
        },
      }),
    staleTime: 60 * 60 * 1000, // 1hr
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};

export default useGames;
