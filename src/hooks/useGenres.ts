import { useQuery } from '@tanstack/react-query';

import genres from '../data/genres';
import apiClient from '../services/api-client';

import type { FetchResults } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResults<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: genres,
  });

  return { data, error, isLoading };
};

export default useGenres;
