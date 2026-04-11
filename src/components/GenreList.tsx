import { motion, AnimatePresence } from "framer-motion";

import { Box, Heading, HStack, Image, Link, List, Text } from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreSkeleton from "./common/GenreSkeleton";

const MotionListItem = motion.create(List.Item);

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <Box className="genre-sidebar">
      <Heading className="genre-heading" marginBlock={4}>
        Genres
      </Heading>
      <List.Root listStyle="none" gap={1}>
        {isLoading &&
          Array.from({ length: 18 }).map((_, index) => (
            <GenreSkeleton key={index} />
          ))}
        <AnimatePresence>
          {data?.results.map((g, index) => (
            <MotionListItem
              key={g.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Link
                onClick={() => setSelectedGenreId(g.id)}
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  className={`genre-item ${g.id === selectedGenreId ? "genre-item-active" : ""}`}
                  gap={3}
                >
                  <Image
                    className="genre-image"
                    src={getCroppedImageUrl(g.image_background)}
                    boxSize="32px"
                    objectFit="cover"
                    borderRadius={8}
                    loading="lazy"
                  />
                  <Text
                    className={`genre-name ${g.id === selectedGenreId ? "genre-name-active" : ""}`}
                  >
                    {g.name}
                  </Text>
                </HStack>
              </Link>
            </MotionListItem>
          ))}
        </AnimatePresence>
      </List.Root>
    </Box>
  );
};

export default GenreList;
