import { CgChevronDown } from "react-icons/cg";

import { Button, Menu, Portal } from "@chakra-ui/react";

import useGameQueryStore from "../../store";

const SortOrderSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

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
                key={order.value}
                onClick={() => setSelectedSortOrder(order.value)}
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
