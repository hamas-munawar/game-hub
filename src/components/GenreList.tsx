import { Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreSkeleton from "./common/GenreSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
        {data?.results.map((g) => (
          <List.Item key={g.id}>
            <Link
              onClick={() => setSelectedGenreId(g.id)}
              _hover={{ cursor: "pointer" }}
            >
              <HStack>
                <Image
                  src={getCroppedImageUrl(g.image_background)}
                  boxSize="32px"
                  objectFit={"cover"}
                  borderRadius={5}
                />
                <Text
                  fontSize="lg"
                  textDecoration={
                    g.id == selectedGenreId ? "underline" : "none"
                  }
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
