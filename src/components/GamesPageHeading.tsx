import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GamesPageHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

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
