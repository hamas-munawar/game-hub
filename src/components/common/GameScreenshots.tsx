import { GridItem, Image, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";

import useScreenshot from "../../hooks/useScreenshot";

interface Props {
  children: string;
}

const GameScreenshots = ({ children: slug }: Props) => {
  const { data, error, isLoading } = useScreenshot(slug);

  if (isLoading)
    return (
      <VStack>
        <Spinner borderWidth="4px" />
      </VStack>
    );

  if (error) throw error;

  return (
    <SimpleGrid
      gridTemplateColumns={{ md: "repeat(2,1fr)", sm: "repeat(1,1fr)" }}
      gap={4}
    >
      {data?.results.map((screenshot) => (
        <GridItem key={screenshot.id}>
          <Image src={screenshot.image} alt={`${slug} trailer`} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
