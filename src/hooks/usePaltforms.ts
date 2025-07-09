import useData from './useData';

import type { Platform } from "./useGames";

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useData<Platform>("/platforms/lists/parents");
  return { platforms, error, isLoading };
};

export default usePlatforms;
