import { CgChevronDown } from "react-icons/cg";

import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";

import usePlatforms from "../../hooks/usePaltforms";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return;

  if (isLoading) return <Skeleton width="150px" paddingBlock={5}></Skeleton>;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          {selectedPlatform ? selectedPlatform.name : " Select Platform"}
          <CgChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
                onClick={() => setSelectedPlatformId(platform.id)}
                value={platform.slug}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
