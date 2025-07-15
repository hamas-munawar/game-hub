import { useQuery } from '@tanstack/react-query';

import platforms from '../data/platforms';
import apiClient from '../services/api-client';

import type { Platform } from "./useGames";
import type { FetchResults } from "./useData";
const usePlatforms = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResults<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: platforms,
  });
  return { data, error, isLoading };
};

export default usePlatforms;
