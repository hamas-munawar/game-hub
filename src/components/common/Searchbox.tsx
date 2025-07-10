import { LuSearch } from "react-icons/lu";

import { Input, InputGroup } from "@chakra-ui/react";

const Searchbox = () => {
  return (
    <InputGroup flex="1" startElement={<LuSearch />}>
      <Input placeholder="Search Games" variant={"subtle"} borderRadius="lg" />
    </InputGroup>
  );
};

export default Searchbox;
