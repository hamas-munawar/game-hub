import { Button, Card, HStack, Icon, Image } from "@chakra-ui/react";
import {
  FaPlus,
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaAndroid,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import type { Game } from "../../hooks/useGames";
import { BsGlobe } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

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
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body gap="2">
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
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <Button variant="subtle" width="fit">
          <FaPlus />
          987
        </Button>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
