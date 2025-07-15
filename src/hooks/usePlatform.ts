import usePlatforms from './usePaltforms';

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((p) => p.id === id);
};

export default usePlatform;
