import { Box } from "@chakra-ui/react";

import usePlatforms from "../hooks/usePaltforms";
import PlatformSelector from "./common/PlatformSelector";
import SortOrderSelector from "./common/SortOrderSelector";

import type { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  selectedSortOrder: string | null;
  onSelectPlatform: (platform: Platform) => void;
  onSelectSortOrder: (order: string) => void;
}

const PlatformAndSorting = ({
  onSelectPlatform,
  onSelectSortOrder,
  selectedPlatform,
  selectedSortOrder,
}: Props) => {
  const platformHookResponse = usePlatforms();

  return (
    <Box display="flex" flexDirection={{ base: "column", sm: "row" }} gap={2}>
      <PlatformSelector
        selectedPlatform={selectedPlatform}
        onSelectPlatform={onSelectPlatform}
        platformHookResponse={platformHookResponse}
      />
      <SortOrderSelector
        selectedSortOrder={selectedSortOrder}
        onSelectSortOrder={onSelectSortOrder}
        isLoading={platformHookResponse.isLoading}
      />
    </Box>
  );
};

export default PlatformAndSorting;
