import { Box, Grid, GridItem } from "@chakra-ui/react";

import PlatformSelector from "../components/common/PlatformSelector";
import SortOrderSelector from "../components/common/SortOrderSelector";
import GamesGrid from "../components/GamesGrid";
import GamesPageHeading from "../components/GamesPageHeading";
import GenreList from "../components/GenreList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingInlineStart={6}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main" paddingInline={4} paddingBlockEnd={5} spaceY={4}>
        <GamesPageHeading />

        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={2}
        >
          <PlatformSelector />
          <SortOrderSelector />
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
