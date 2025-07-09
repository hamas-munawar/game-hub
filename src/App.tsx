import { useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "header" "main"`,
        lg: `"nav nav" "aside header" "aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="header">
        <PlatformSelector
          onSelectPlatform={(platformId: number) =>
            setGameQuery({ ...gameQuery, platformId })
          }
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
      >
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={(genreId: number) =>
            setGameQuery({ ...gameQuery, genreId })
          }
        />
      </GridItem>
      <GridItem area="main">
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
