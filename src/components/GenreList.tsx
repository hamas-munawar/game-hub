import { HStack, List, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
  const { genres } = useGenres();

  return (
    <List.Root listStyle="none" gap={4}>
      {genres.map((genre) => (
        <List.Item key={genre.id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={5}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
