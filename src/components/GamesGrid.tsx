import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./common/GameCard";
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
          "2xl": "repeat(4, 1fr)",
        }}
        gap="6"
        padding="1rem"
      >
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
