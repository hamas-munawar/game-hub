import { Box } from "@chakra-ui/react";

import usePlatforms from "../hooks/usePaltforms";
import PlatformSelector from "./common/PlatformSelector";
import SortOrderSelector from "./common/SortOrderSelector";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  onSelectSortOrder: (order: string) => void;
}

const PlatformAndSorting = ({ onSelectPlatform, onSelectSortOrder }: Props) => {
  const platformObj = usePlatforms();

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gap={2}
      paddingInline={4}
    >
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        platformObj={platformObj}
      />
      <SortOrderSelector
        onSelectSortOrder={onSelectSortOrder}
        isLoading={platformObj.isLoading}
      />
    </Box>
  );
};

export default PlatformAndSorting;
