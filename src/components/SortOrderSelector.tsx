import { createListCollection, Portal, Select } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (order: string) => void;
}

const SortOrderSelector = ({ onSelectSortOrder }: Props) => {
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

  return (
    <Select.Root
      collection={sortOrders}
      width="240px"
      variant="subtle"
      paddingInlineStart={4}
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
