import { HStack, Image, List, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./common/GenreSkeleton";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <List.Root listStyle="none" gap={4}>
      {isLoading && Array.from({ length: 18 }).map(() => <GenreSkeleton />)}
      {genres.map((genre) => (
        <List.Item key={genre.id} _hover={{ cursor: "pointer" }}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={5}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
