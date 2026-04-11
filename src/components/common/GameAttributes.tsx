import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import DefinationItem from "./DefinationItem";
import type Game from "../../interfaces/Game";

interface Props {
  children: Game;
}

const GameAttributes = ({ children: game }: Props) => {
  return (
    <Box className="game-attributes">
      <SimpleGrid as="dl" gridTemplateColumns="repeat(2, 1fr)" gapY={4} gapX={6}>
        <DefinationItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id} color="purple.400">{platform.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Metascore">
          {game.metacritic ? (
            <Text
              className={`game-card-metacritic ${
                game.metacritic >= 75
                  ? "metacritic-high"
                  : game.metacritic >= 50
                  ? "metacritic-mid"
                  : "metacritic-low"
              }`}
              display="inline-block"
              position="static"
            >
              {game.metacritic}
            </Text>
          ) : (
            <Text>N/A</Text>
          )}
        </DefinationItem>
        <DefinationItem term="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Developers">
          {game.developers?.map((dev) => (
            <Text key={dev.id}>{dev.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Age Rating">
          <Text>{game.esrb_rating ? game.esrb_rating.name : "Not Rated"}</Text>
        </DefinationItem>
        <DefinationItem term="Where to Play">
          {game.stores?.map((storeInfo) => (
            <Text key={storeInfo.store.id}>{storeInfo.store.name}</Text>
          ))}
        </DefinationItem>
        <DefinationItem term="Release Date">
          <Text>{game.released ? new Date(game.released).toLocaleDateString() : "TBD"}</Text>
        </DefinationItem>
        <DefinationItem term="Playtime">
          <Text>{game.playtime ? `${game.playtime} hours` : "Unknown"}</Text>
        </DefinationItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameAttributes;
