import { CgChevronDown } from "react-icons/cg";

import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";

import type { Platform } from "../../hooks/useGames";
interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
  platformObj: { platforms: Platform[]; error: string; isLoading: boolean };
}

const PlatformSelector = ({
  onSelectPlatform,
  platformObj,
  selectedPlatform,
}: Props) => {
  const { platforms, error, isLoading } = platformObj;
  if (error) return;

  if (isLoading) return <Skeleton width="240px" paddingBlock={5}></Skeleton>;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          {selectedPlatform ? selectedPlatform.name : " Select Platform"}{" "}
          <CgChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
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
