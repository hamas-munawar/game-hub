import { HStack, Image, Link, List, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./common/GenreSkeleton";

import type { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <List.Root listStyle="none" gap={4}>
      {isLoading &&
        Array.from({ length: 18 }).map((_, index) => (
          <GenreSkeleton key={index} />
        ))}
      {genres.map((genre) => (
        <List.Item key={genre.id} _hover={{ cursor: "pointer" }}>
          <Link onClick={() => onSelectGenre(genre)}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={5}
              />
              <Text
                fontSize="lg"
                textDecoration={
                  genre.slug == selectedGenre?.slug ? "underline" : "none"
                }
              >
                {genre.name}
              </Text>
            </HStack>
          </Link>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
