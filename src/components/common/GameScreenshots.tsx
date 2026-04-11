import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useScreenshot from "../../hooks/useScreenshot";

interface Props {
  children: string;
}

const MotionBox = motion.create(Box);

const GameScreenshots = ({ children: slug }: Props) => {
  const { data, error, isLoading } = useScreenshot(slug);

  if (isLoading)
    return (
      <Box className="loading-container" minH="200px">
        <Box className="loading-spinner" />
      </Box>
    );

  if (error) throw error;

  return (
    <SimpleGrid
      gridTemplateColumns={{ md: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
      gap={4}
    >
      {data?.results.map((screenshot, index) => (
        <MotionBox
          key={screenshot.id}
          className="screenshot-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Image src={screenshot.image} alt={`${slug} screenshot`} />
        </MotionBox>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
