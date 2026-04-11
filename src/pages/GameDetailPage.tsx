import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { Box, Button, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaGlobe, FaReddit } from "react-icons/fa";
import { useWishlistStore } from "../store";

import ExpandableText from "../components/common/ExpandableText";
import GameAttributes from "../components/common/GameAttributes";
import GameScreenshots from "../components/common/GameScreenshots";
import GameTrailer from "../components/common/GameTrailer";
import useGame from "../hooks/useGame";

const MotionBox = motion.create(Box);

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  const { toggleWishlist, isInWishlist } = useWishlistStore();

  if (isLoading)
    return (
      <Box className="loading-container">
        <Box className="loading-spinner" />
        <Box className="loading-text">Loading game details...</Box>
      </Box>
    );

  if (error || !game) throw error;

  return (
    <MotionBox
      className="game-detail-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      <SimpleGrid
        gridTemplateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={8}
      >
        <GridItem gap={6} display="flex" flexDirection="column">
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            as="h1"
            className="game-detail-title"
          >
            {game.name}
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="game-detail-description"
          >
            <ExpandableText>{game.description_raw}</ExpandableText>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <HStack gap={4} wrap="wrap">
              <Button
                onClick={() => toggleWishlist(game.id)}
                colorPalette={isInWishlist(game.id) ? "pink" : "gray"}
                variant={isInWishlist(game.id) ? "solid" : "subtle"}
                borderRadius="full"
                paddingInline={5}
                height="40px"
                gap={2}
              >
                {isInWishlist(game.id) ? <FaHeart /> : <FaRegHeart />}
                <span>{isInWishlist(game.id) ? "Wishlisted" : "Add to Wishlist"}</span>
              </Button>

              {game.website && (
                <a href={game.website} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
                  <Button
                    colorPalette="blue"
                    variant="subtle"
                    borderRadius="full"
                    paddingInline={5}
                    height="40px"
                    gap={2}
                  >
                    <FaGlobe /> <span>Website</span>
                  </Button>
                </a>
              )}

              {game.reddit_url && (
                <a href={game.reddit_url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block" }}>
                  <Button
                    colorPalette="orange"
                    variant="subtle"
                    borderRadius="full"
                    paddingInline={5}
                    height="40px"
                    gap={2}
                  >
                    <FaReddit /> <span>Reddit</span>
                  </Button>
                </a>
              )}
            </HStack>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GameAttributes>{game}</GameAttributes>
          </MotionBox>
          {game.tags && game.tags.length > 0 && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <HStack wrap="wrap" gap={2} marginTop={4}>
                {game.tags
                  .filter((t) => t.language === "eng")
                  .slice(0, 15) // Limit to top 15 tags to avoid layout clutter
                  .map((tag) => (
                    <Box
                      key={tag.id}
                      paddingInline={3}
                      paddingBlock={1}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      bg="whiteAlpha.200"
                      color="whiteAlpha.900"
                      transition="var(--transition-smooth)"
                      _hover={{ bg: "purple.500", color: "white", transform: "scale(1.05)" }}
                    >
                      #{tag.name}
                    </Box>
                  ))}
              </HStack>
            </MotionBox>
          )}
        </GridItem>
        <GridItem gap={6} display="flex" flexDirection="column">
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GameTrailer>{game.slug}</GameTrailer>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GameScreenshots>{game.slug}</GameScreenshots>
          </MotionBox>
        </GridItem>
      </SimpleGrid>
    </MotionBox>
  );
};

export default GameDetailPage;
