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

  const currentLabel =
    sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
    "Relevance";

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
          Sort: {currentLabel}
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
