import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface Game {
  added: number;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (
  selectedGenreId: number | null,
  selectedPlatformId: number | null
) => {
  console.log(selectedPlatformId);
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    { params: { genres: selectedGenreId, platforms: selectedPlatformId } },
    [selectedGenreId, selectedPlatformId]
  );
  return { games, error, isLoading };
};

export default useGames;
