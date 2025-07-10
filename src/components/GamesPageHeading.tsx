import { Heading } from "@chakra-ui/react";

import type { GameQuery } from "./../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesPageHeading = ({ gameQuery }: Props) => {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
      marginBlock={".5em"}
    >
      {`${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`}
    </Heading>
  );
};

export default GamesPageHeading;
