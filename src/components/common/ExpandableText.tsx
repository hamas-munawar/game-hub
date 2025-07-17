import { useState } from "react";

import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const length = 300;

  if (!children) return null;

  if (children.length <= length) return <Text>{children}</Text>;

  return (
    <Text>
      {expanded ? children : children.slice(0, length) + "... "}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        variant="subtle"
        rounded={"2xl"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
