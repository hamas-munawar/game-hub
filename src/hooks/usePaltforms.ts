import { useQuery } from '@tanstack/react-query';

import platforms from '../data/platforms';
import APIClient from '../services/api-client';

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
    initialData: platforms,
  });
};

export default usePlatforms;
