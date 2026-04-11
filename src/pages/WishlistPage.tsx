import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useWishlistStore } from "../store";
import useGamesMultiple from "../hooks/useGamesMultiple";
import GameCard from "../components/common/GameCard";
import GameCardSkeleton from "../components/common/GameCardSkeleton";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const WishlistPage = () => {
  const { wishlist } = useWishlistStore();
  const { queries } = useGamesMultiple(wishlist);

  // loading state calculation
  const isLoading = queries.some((q) => q.isLoading);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box paddingInline={{ base: 4, md: 8 }} paddingBlock={6} className="wishlist-page">
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text
          fontSize="4xl"
          fontWeight="bold"
          marginBottom={6}
          className="gradient-text gradient-text-primary"
        >
          Your Wishlist
        </Text>
      </MotionBox>

      {wishlist.length === 0 ? (
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          textAlign="center"
          padding={10}
        >
          <Text fontSize="xl" color="gray.400" marginBottom={4}>
            You haven't added any games to your wishlist yet!
          </Text>
          <Link to="/" style={{ color: "var(--accent-primary)", fontWeight: "bold" }}>
            Explore Games
          </Link>
        </MotionBox>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap={6}
          paddingY={4}
        >
          {isLoading
            ? skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
            : queries.map((query) => {
                if (query.data) {
                  return <GameCard key={query.data.id} game={query.data} />;
                }
                return null;
              })}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default WishlistPage;
