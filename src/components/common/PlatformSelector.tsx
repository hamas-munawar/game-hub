import { CgChevronDown } from 'react-icons/cg';

import { Button, Menu, Portal, Skeleton } from '@chakra-ui/react';

import usePlatforms from '../../hooks/usePaltforms';

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  const selectedPlatform = data.results.find(
    (p) => p.id === selectedPlatformId
  );

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
                onClick={() => onSelectPlatform(platform.id)}
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
