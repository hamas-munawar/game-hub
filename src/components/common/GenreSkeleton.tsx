import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle size="10" />
      <SkeletonText noOfLines={1} width="80%" />
    </HStack>
  );
};

export default GenreSkeleton;
