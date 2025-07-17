import { useParams } from "react-router-dom";

import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box spaceY={4}>
      <Heading fontSize="5xl">{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
