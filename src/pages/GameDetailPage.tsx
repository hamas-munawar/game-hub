import { useParams } from "react-router-dom";

import { Box, Heading, Spinner } from "@chakra-ui/react";

import ExpandableText from "../components/common/ExpandableText";
import GameAttributes from "../components/common/GameAttributes";
import GameTrailer from "../components/common/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box spaceY={4}>
      <Heading fontSize="5xl">{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes>{game}</GameAttributes>
      <GameTrailer>{game.slug}</GameTrailer>
    </Box>
  );
};

export default GameDetailPage;
