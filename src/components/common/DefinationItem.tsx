import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinationItem = ({ term, children }: Props) => {
  return (
    <Box className="attribute-item">
      <Heading as="dt" className="attribute-label">
        {term}
      </Heading>
      <dd className="attribute-value">{children}</dd>
    </Box>
  );
};

export default DefinationItem;
