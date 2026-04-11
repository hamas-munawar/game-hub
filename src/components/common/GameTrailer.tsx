import { Box } from "@chakra-ui/react";
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
    <Box className="game-trailer">
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </Box>
  ) : null;
};

export default GameTrailer;
