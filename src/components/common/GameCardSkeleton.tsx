import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root gapY={2} width="380px">
      <Skeleton height="200px" />
      <HStack width="full" marginInline={2}>
        <SkeletonCircle size="7" />
        <SkeletonCircle size="7" />
        <SkeletonCircle size="7" />
      </HStack>
      <SkeletonText noOfLines={2} width="80%" marginInline={2} padding={1} />
      <SkeletonText noOfLines={1} width="30%" margin={2} padding={2} />
    </Card.Root>
  );
};

export default GameCardSkeleton;
