import { useQuery } from '@tanstack/react-query';

import genres from '../data/genres';
import APIClient from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("genres");

const useGenres = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: genres,
  });

  return { data, error, isLoading };
};

export default useGenres;
