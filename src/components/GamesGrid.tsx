import { Button, SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import GameCard from './common/GameCard';
import GameCardSkeleton from './common/GameCardSkeleton';

import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1ft)",
        }}
        gap={6}
      >
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => <GameCard game={game} key={game.id} />)
        )}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} variant="subtle" size="lg">
          {isFetchingNextPage ? "Loading... " : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GamesGrid;
