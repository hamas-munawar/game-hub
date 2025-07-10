import { useState } from "react";

import { Box, Grid, GridItem } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GamesPageHeading from "./components/GamesPageHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformAndSorting from "./components/PlatformAndSorting";

import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/useGames";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string | null;
  searchQuery: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchQuery) =>
            setGameQuery({
              ...gameQuery,
              searchQuery,
            })
          }
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
      >
        <GenreList
          genre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingInline={4}>
          <GamesPageHeading gameQuery={gameQuery} />
          <PlatformAndSorting
            selectedPlatform={gameQuery.platform}
            selectedSortOrder={gameQuery.order}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            onSelectSortOrder={(order: string) =>
              setGameQuery({ ...gameQuery, order })
            }
          />
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
