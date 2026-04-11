import { BsGlobe } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import {
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaStar,
  FaWindows,
  FaXbox,
  FaHeart,
} from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { Box, Button, Card, HStack, Icon, Image, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../../services/image-url";
import Emoji from "./Emoji";
import { useWishlistStore } from "../../store";

import type Game from "../../interfaces/Game";
interface Props {
  game: Game;
}

const MotionCard = motion.create(Card.Root);

const platformIcons: Record<string, React.ReactElement> = {
  pc: <FaWindows />,
  linux: <FaLinux />,
  xbox: <FaXbox />,
  playstation: <FaPlaystation />,
  mac: <FaApple />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />,
};

const getMetacriticClass = (score: number) => {
  if (score >= 75) return "metacritic-high";
  if (score >= 50) return "metacritic-mid";
  return "metacritic-low";
};

const GameCard = ({ game }: Props) => {
  const { toggleWishlist, isInWishlist } = useWishlistStore();
  const isWishlisted = isInWishlist(game.id);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(game.id);
  };

  return (
    <Link to={`/games/${game.slug}`} style={{ textDecoration: "none" }}>
      <MotionCard
        className="game-card"
        overflow="hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ y: -8 }}
      >
        {/* Image Section */}
        <Box className="game-card-image-container">
          <Image
            className="game-card-image"
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            loading="lazy"
          />
          <Box className="game-card-overlay" />

          {/* Metacritic Badge */}
          {game.metacritic && (
            <Box className={`game-card-metacritic ${getMetacriticClass(game.metacritic)}`}>
              {game.metacritic}
            </Box>
          )}
        </Box>

        {/* Card Body */}
        <Card.Body className="game-card-body" gap={3}>
          {/* Platform Icons */}
          <HStack className="game-card-platforms">
            {game.parent_platforms?.map(
              ({ platform: { id, slug } }) =>
                platformIcons[slug] && (
                  <Icon key={id} className="platform-icon" fontSize="md">
                    {platformIcons[slug]}
                  </Icon>
                )
            )}
          </HStack>

          {/* Title */}
          <Card.Title className="game-card-title" display="flex" alignItems="baseline">
            {game.name} <Emoji rating={game.rating_top} />
          </Card.Title>

          {/* Footer */}
          <Box className="game-card-footer">
            {/* Rating */}
            <HStack className="game-card-rating" color="yellow.500" align="center" gap={1}>
              <FaStar size={14} style={{ position: 'relative', top: '-1px' }} />
              <HStack align="baseline" gap={1}>
                <Text fontSize="md" fontWeight={700}>
                  {game.rating?.toFixed(1) || "N/A"}
                </Text>
                {game.ratings_count > 0 && (
                  <Text fontSize="xs" opacity={0.6} fontWeight={500}>
                    ({game.ratings_count.toLocaleString()})
                  </Text>
                )}
              </HStack>
            </HStack>

            {/* Wishlist Button */}
            <Button
              className="game-card-added-btn"
              variant="subtle"
              size="xs"
              gap={1.5}
              onClick={handleWishlist}
              color={isWishlisted ? "pink.400" : undefined}
            >
              {isWishlisted ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
              <Text fontSize="xs" letterSpacing={0.5}>
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </Text>
            </Button>
          </Box>
        </Card.Body>
      </MotionCard>
    </Link>
  );
};

export default GameCard;
