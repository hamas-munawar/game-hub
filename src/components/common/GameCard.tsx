import { BsGlobe } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import {
  FaAndroid,
  FaLinux,
  FaPlaystation,
  FaPlus,
  FaWindows,
  FaXbox,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";

import { Button, Card, HStack, Icon, Image, Text } from "@chakra-ui/react";

import getCroppedImageUrl from "../../services/image-url";
import Emoji from "./Emoji";

import type { Game } from "../../interfaces/Game";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const platformIcons = {
    pc: <FaWindows />,
    linux: <FaLinux />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    mac: <FaApple />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <Link to={`/games/${game.slug}`}>
      <Card.Root
        overflow="hidden"
        _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
        transition={"transform .2s"}
      >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          borderTopRadius="sm"
        />
        <Card.Body gap={4}>
          <HStack gap={2.5}>
            {game.parent_platforms?.map(
              ({ platform: { id, slug } }) =>
                platformIcons[slug as keyof typeof platformIcons] && (
                  <Icon key={id} fontSize="xl" color="gray.500">
                    {platformIcons[slug as keyof typeof platformIcons]}
                  </Icon>
                )
            )}
          </HStack>
          <Card.Title fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />
          </Card.Title>
          <Button variant="subtle" width="fit">
            <FaPlus />
            <Text letterSpacing={1}>{game.added}</Text>
          </Button>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export default GameCard;
