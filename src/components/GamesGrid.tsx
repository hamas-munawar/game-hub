import InfiniteScroll from "react-infinite-scroll-component";

import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./common/GameCard";
import GameCardSkeleton from "./common/GameCardSkeleton";

const GamesGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const totalFetchedGames =
    data?.pages.reduce((totalGames, page) => totalGames + page.count, 0) || 0;

  if (error) return <Text color="red.400" padding={8}>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={totalFetchedGames}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <Box className="infinite-loader">
          <Box className="infinite-loader-dots">
            <Box className="infinite-loader-dot" />
            <Box className="infinite-loader-dot" />
            <Box className="infinite-loader-dot" />
          </Box>
          <Text className="loading-text">Discovering more games...</Text>
        </Box>
      }
    >
      <SimpleGrid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
        gap={6}
        padding={4}
      >
        {isLoading &&
          Array.from({ length: 12 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => <GameCard game={game} key={game.id} />)
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GamesGrid;
