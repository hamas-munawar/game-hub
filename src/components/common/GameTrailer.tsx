import { VStack } from "@chakra-ui/react";

import useTrailer from "../../hooks/useTrailer";

interface Props {
  children: string;
}

const GameTrailer = ({ children: slug }: Props) => {
  const { data, error, isLoading } = useTrailer(slug);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = data?.results[0];

  return firstTrailer ? (
    <VStack>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </VStack>
  ) : null;
};

export default GameTrailer;
