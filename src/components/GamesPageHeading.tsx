import { motion } from "framer-motion";

import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const MotionHeading = motion.create(Heading);

const GamesPageHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const headingText = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;

  return (
    <MotionHeading
      as="h1"
      className="page-heading"
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
      marginBlock=".5em"
      key={headingText}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {headingText}
    </MotionHeading>
  );
};

export default GamesPageHeading;
