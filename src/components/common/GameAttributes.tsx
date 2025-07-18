import { SimpleGrid, Text } from "@chakra-ui/react";

import DefinationItem from "./DefinationItem";

import type Game from "../../interfaces/Game";

interface Props {
  children: Game;
}

const GameAttributes = ({ children: game }: Props) => {
  return (
    <SimpleGrid as={"dl"} gridTemplateColumns={"repeat(2, 1fr)"}>
      <DefinationItem term={"Platforms"}>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term="No of Added">
        <Text>{game.added}</Text>
      </DefinationItem>
      <DefinationItem term={"Genres"}>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term={"Publishers"}>
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
