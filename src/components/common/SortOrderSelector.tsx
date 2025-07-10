import {
  createListCollection,
  Portal,
  Select,
  Skeleton,
} from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (order: string) => void;
  isLoading: boolean;
}

const SortOrderSelector = ({ onSelectSortOrder, isLoading }: Props) => {
  const sortOrders = createListCollection({
    items: [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date Added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release Date" },
      { value: "-metacritic", label: "Popularity" },
      { value: "-rating", label: "Average Rating" },
    ],
  });

  if (isLoading)
    return (
      <Skeleton width="240px" paddingBlock={5} marginInlineStart={4}></Skeleton>
    );

  return (
    <Select.Root
      collection={sortOrders}
      width={{ base: "100%", sm: "240px" }}
      variant="subtle"
      onSelect={(e) => onSelectSortOrder(e.value)}
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Relevance" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sortOrders.items.map((order) => (
              <Select.Item item={order} key={order.value}>
                {order.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SortOrderSelector;
