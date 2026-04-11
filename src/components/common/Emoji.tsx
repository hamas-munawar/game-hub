import { Image } from "@chakra-ui/react";

import bullsEye from "../../assets/bulls-eye.webp";
import meh from "../../assets/meh.webp";
import thumbsUp from "../../assets/thumbs-up.webp";

import type { ImageProps } from "@chakra-ui/react";

const Emoji = ({ rating }: { rating: number }) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} display="inline-block" marginLeft={3} verticalAlign="baseline" position="relative" top="4px" />;
};

export default Emoji;
