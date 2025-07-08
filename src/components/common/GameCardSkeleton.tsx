import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root gapY={2}>
      <Skeleton height="200px" />
      <HStack width="full" marginInline={4} marginTop={2}>
        <SkeletonCircle size="8" />
        <SkeletonCircle size="8" />
        <SkeletonCircle size="8" />
      </HStack>
      <SkeletonText
        noOfLines={2}
        width="80%"
        height={6}
        marginInline={4}
        padding={1}
      />
      <SkeletonText
        noOfLines={1}
        width="20%"
        marginInline={4}
        marginBottom={2}
        padding={3}
      />
    </Card.Root>
  );
};

export default GameCardSkeleton;
