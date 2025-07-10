import { CgChevronDown } from "react-icons/cg";

import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";

interface Props {
  selectedSortOrder: string | null;
  onSelectSortOrder: (order: string) => void;
  isLoading: boolean;
}

const SortOrderSelector = ({
  onSelectSortOrder,
  isLoading,
  selectedSortOrder,
}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  if (isLoading) return <Skeleton width="170px" paddingBlock={5}></Skeleton>;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle" size="sm">
          Sort By:{"  "}
          {selectedSortOrder
            ? sortOrders.find((order) => order.value === selectedSortOrder)
                ?.label
            : "Relevance"}
          <CgChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                value={order.value}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortOrderSelector;
