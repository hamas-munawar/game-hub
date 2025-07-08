import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./common/GameCard";
import GameCardContainer from "./common/GameCardContainer";
import GameCardSkeleton from "./common/GameCardSkeleton";

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

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
            <GameCardContainer>
              <GameCardSkeleton key={index} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
