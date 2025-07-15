import { useState } from 'react';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import PlatformSelector from './components/common/PlatformSelector';
import SortOrderSelector from './components/common/SortOrderSelector';
import GamesGrid from './components/GamesGrid';
import GamesPageHeading from './components/GamesPageHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';

export interface GameQuery {
  selectedGenreId?: number;
  selectedPlatformId?: number;
  selectedOrder: string;
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
          selectedGenreId={gameQuery.selectedGenreId}
          onSelectGenre={(genreId) =>
            setGameQuery({ ...gameQuery, selectedGenreId: genreId })
          }
        />
      </GridItem>
      <GridItem area="main" paddingInline={4} paddingBlockEnd={5} spaceY={4}>
        <GamesPageHeading gameQuery={gameQuery} />

        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap={2}
        >
          <PlatformSelector
            selectedPlatformId={gameQuery.selectedPlatformId}
            onSelectPlatform={(platformId) =>
              setGameQuery({ ...gameQuery, selectedPlatformId: platformId })
            }
          />
          <SortOrderSelector
            selectedSortOrder={gameQuery.selectedOrder}
            onSelectSortOrder={(order: string) =>
              setGameQuery({ ...gameQuery, selectedOrder: order })
            }
          />
        </Box>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
