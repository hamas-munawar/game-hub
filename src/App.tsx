import { useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [selectedPlatformId, setSelectedPlatformId] = useState<number | null>(
    null
  );

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
          onSelectPlatform={(value: number) => setSelectedPlatformId(value)}
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
      >
        <GenreList
          selectedGenreId={selectedGenreId}
          onSelectGenre={(id: number) => setSelectedGenreId(id)}
        />
      </GridItem>
      <GridItem area="main">
        <GamesGrid
          selectedGenreId={selectedGenreId}
          selectedPlatformId={selectedPlatformId}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
