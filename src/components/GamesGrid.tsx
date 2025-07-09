import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./common/GameCard";
import GameCardContainer from "./common/GameCardContainer";
import GameCardSkeleton from "./common/GameCardSkeleton";

import type { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: number | null;
}

const GamesGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1ft)",
        }}
        gap="6"
        padding="1rem"
      >
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
