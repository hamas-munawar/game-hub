import { Heading } from '@chakra-ui/react';

import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';

import type { GameQuery } from "./../App";
interface Props {
  gameQuery: GameQuery;
}

const GamesPageHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.selectedGenreId);
  const selectedPlatform = usePlatform(gameQuery.selectedPlatformId);

  return (
    <Heading
      as="h1"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
      marginBlock={".5em"}
    >
      {`${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`}
    </Heading>
  );
};

export default GamesPageHeading;
