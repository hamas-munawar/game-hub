import type { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>(
    "/games",
    { params: { genres: gameQuery.genreId, platforms: gameQuery.platformId } },
    [gameQuery]
  );
  return { games, error, isLoading };
};

export default useGames;
