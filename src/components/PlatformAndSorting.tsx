import { HStack } from "@chakra-ui/react";

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
    <HStack>
      <PlatformSelector
        onSelectPlatform={onSelectPlatform}
        platformObj={platformObj}
      />
      <SortOrderSelector
        onSelectSortOrder={onSelectSortOrder}
        isLoading={platformObj.isLoading}
      />
    </HStack>
  );
};

export default PlatformAndSorting;
