import useData from "./useData";

import type { Genre } from "./useGenres";

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

const useGames = (selectedGenre: Genre | null) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre,
  ]);
  return { games, error, isLoading };
};

export default useGames;
