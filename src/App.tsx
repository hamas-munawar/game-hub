import { Grid, GridItem } from "@chakra-ui/react";

import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
        width="2xs"
        overflow="hidden"
      >
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
