import { useParams } from "react-router-dom";

import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import ExpandableText from "../components/common/ExpandableText";
import GameAttributes from "../components/common/GameAttributes";
import GameScreenshots from "../components/common/GameScreenshots";
import GameTrailer from "../components/common/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid
      gridTemplateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      gap={4}
    >
      <GridItem spaceY={4}>
        <Heading fontSize="5xl" lineHeight={1}>
          {game.name}
        </Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes>{game}</GameAttributes>
      </GridItem>
      <GridItem spaceY={4}>
        <GameTrailer>{game.slug}</GameTrailer>
        <GameScreenshots>{game.slug}</GameScreenshots>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
