import { Heading } from '@chakra-ui/react';

import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePaltforms';

import type { GameQuery } from "./../App";
interface Props {
  gameQuery: GameQuery;
}

const GamesPageHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const selectedGenre = genres.results.find(
    (g) => g.id === gameQuery.selectedGenreId
  );
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms.results.find(
    (p) => p.id === gameQuery.selectedPlatformId
  );

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
