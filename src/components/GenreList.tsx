import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./common/GenreSkeleton";

import type { Genre } from "../hooks/useGenres";
interface Props {
  genre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ genre, onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading as="h2" size="lg" marginBlock={4}>
        Genres
      </Heading>
      <List.Root listStyle="none" gap={4}>
        {isLoading &&
          Array.from({ length: 18 }).map((_, index) => (
            <GenreSkeleton key={index} />
          ))}
        {genres.map((g) => (
          <List.Item key={g.id} _hover={{ cursor: "pointer" }}>
            <Link onClick={() => onSelectGenre(g)}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(g.image_background)}
                  boxSize="32px"
                  objectFit={"cover"}
                  borderRadius={5}
                />
                <Text
                  fontSize="lg"
                  textDecoration={g.id == genre?.id ? "underline" : "none"}
                >
                  {g.name}
                </Text>
              </HStack>
            </Link>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
