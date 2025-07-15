import { CgChevronDown } from 'react-icons/cg';

import { Button, Menu, Portal, Skeleton } from '@chakra-ui/react';

import type { Platform } from "../../hooks/useGames";
import type { FetchResults } from "../../hooks/useData";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
  platformHookResponse: {
    data: FetchResults<Platform> | undefined;
    error: Error | null;
    isLoading: boolean;
  };
}

const PlatformSelector = ({
  onSelectPlatform,
  platformHookResponse,
  selectedPlatform,
}: Props) => {
  const { data, error, isLoading } = platformHookResponse;
  if (error) return;

  if (isLoading) return <Skeleton width="150px" paddingBlock={5}></Skeleton>;

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
            {data?.results.map((platform) => (
              <Menu.Item
                key={platform.id}
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
