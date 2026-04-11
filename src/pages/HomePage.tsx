import { motion } from "framer-motion";

import { Box, Grid, GridItem } from "@chakra-ui/react";

import PlatformSelector from "../components/common/PlatformSelector";
import SortOrderSelector from "../components/common/SortOrderSelector";
import GamesGrid from "../components/GamesGrid";
import GamesPageHeading from "../components/GamesPageHeading";
import GenreList from "../components/GenreList";

const MotionBox = motion.create(Box);

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        sm: "1fr",
        lg: "220px 1fr",
      }}
      gap={4}
    >
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <MotionBox
          paddingInline={4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GamesPageHeading />
          <Box className="filter-bar">
            <PlatformSelector />
            <SortOrderSelector />
          </Box>
        </MotionBox>

        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
