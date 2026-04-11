import { CgChevronDown } from "react-icons/cg";

import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";

import usePlatforms from "../../hooks/usePlatforms";
import usePlatform from "../../hooks/usePlatform";
import useGameQueryStore from "../../store";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return;

  if (isLoading)
    return <Skeleton width="150px" height="36px" borderRadius="12px" />;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          borderRadius="xl"
          fontWeight="medium"
          fontSize="sm"
          paddingX={4}
          paddingY={2}
          borderColor="whiteAlpha.300"
          backdropFilter="blur(8px)"
          _hover={{
            borderColor: "purple.500",
            boxShadow: "0 0 20px rgba(108, 92, 231, 0.15)",
            transform: "none",
          }}
          _active={{ transform: "none" }}
          transition="all 0.3s ease"
        >
          {selectedPlatform ? selectedPlatform.name : "All Platforms"}
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
