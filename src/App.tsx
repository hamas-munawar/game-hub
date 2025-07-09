import { useState } from "react";

import { Grid, GridItem } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";

import type { Genre } from "./hooks/useGenres";
const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);

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
          onSelectPlatform={(value: number) => setSelectedPlatform(value)}
        />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main">
        <GamesGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
