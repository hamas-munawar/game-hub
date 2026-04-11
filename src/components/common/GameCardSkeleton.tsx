import {
  Box,
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root className="skeleton-card" gapY={2}>
      <Box className="skeleton-shimmer">
        <Skeleton height="200px" borderTopRadius="16px" />
      </Box>
      <HStack width="full" marginInline={4} marginTop={3}>
        <SkeletonCircle size="6" />
        <SkeletonCircle size="6" />
        <SkeletonCircle size="6" />
      </HStack>
      <SkeletonText
        noOfLines={2}
        width="80%"
        height={5}
        marginInline={4}
        padding={1}
      />
      <HStack marginInline={4} marginBottom={3} justify="space-between">
        <SkeletonText noOfLines={1} width="30%" padding={2} />
        <SkeletonText noOfLines={1} width="20%" padding={2} />
      </HStack>
    </Card.Root>
  );
};

export default GameCardSkeleton;
