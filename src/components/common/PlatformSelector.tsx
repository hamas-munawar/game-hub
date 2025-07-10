import {
  createListCollection,
  Portal,
  Select,
  Skeleton,
} from "@chakra-ui/react";

import type { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platformId: number) => void;
  platformObj: { platforms: Platform[]; error: string; isLoading: boolean };
}

const PlatformSelector = ({ onSelectPlatform, platformObj }: Props) => {
  const { platforms, error, isLoading } = platformObj;
  if (error) return;

  if (isLoading)
    return (
      <Skeleton width="240px" paddingBlock={5} marginInlineStart={4}></Skeleton>
    );

  const platformsList = createListCollection({
    items: platforms.map((p) => {
      return { label: p.name, value: p.id };
    }),
  });

  return (
    <Select.Root
      collection={platformsList}
      // size="sm"
      width="240px"
      variant="subtle"
      paddingInlineStart={4}
      onSelect={(e) => onSelectPlatform(parseInt(e.value))}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select Platform" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {platformsList.items.map((platform) => (
              <Select.Item item={platform} key={platform.value}>
                {platform.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default PlatformSelector;
