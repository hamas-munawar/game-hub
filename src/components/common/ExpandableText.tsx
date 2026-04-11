import { useState } from "react";
import { Button, Text, Box } from "@chakra-ui/react";


interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const length = 300;

  if (!children) return null;

  if (children.length <= length) return <Text>{children}</Text>;

  return (
    <Box>
      <Text>
        {expanded ? children : children.slice(0, length) + "... "}
      </Text>
      <Button
        className="game-detail-read-more"
        size="sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
};

export default ExpandableText;
